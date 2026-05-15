import axios, { AxiosError } from 'axios';
import { ClinicClient } from './clinic-clients';
import type {
  AnalysisRecommendedProcedureRow,
  AnalysisRecommendedProductRow,
  ExpertPickProcedureSummary,
  ExpertPickProductSummary
} from 'types/analysis-recommended';

export interface ClientAnalysisPhoto {
  id: number;
  analysisId: number;
  url: string;
  /** S3 key for this photo (used when reusing photos on a new analysis) */
  storageKey?: string;
  type: string;
  createdAt: string;
  deletedAt?: string;
}
type ConfidenceLevel = 'low' | 'medium' | 'high';

type Contraindication =
  | 'pregnancy'
  | 'breastfeeding'
  | 'history of keloid scars'
  | 'allergic to local anesthetics'
  | 'history of bee sting allergy'
  | 'allergic to skincare products / ingredients';

type Score = {
  acne: number;
  wrinkles: number;
  pores: number;
  dark_spots: number;
  redness: number;
  oiliness: number;
  dryness: number;
};

type Concern = {
  name: string;
  severity: 'Mild' | 'Moderate' | 'Severe';
  description: string;
};

type SkinType = 'oily' | 'dry' | 'combination' | 'sensitive' | 'normal';

export type ResultAnalysis = {
  id: number;
  analysisId: number;
  confidence: ConfidenceLevel;
  contraindications: Contraindication[];
  lowConfidence: boolean;
  scores: Score;
  skinType: SkinType;
  topConcerns: string;
  uniquelyOutcomes: string[] | string;
  uniquelySummary: string;
  whatMattersMost: string;
  createdAt: string;
  updatedAt: string;
  recommendedProducts?: AnalysisRecommendedProductRow[];
  recommendedProcedures?: AnalysisRecommendedProcedureRow[];
  expertPickProductId?: number | string | null;
  expertPickProductWhy?: string | null;
  expertPickProcedureId?: number | string | null;
  expertPickProcedureWhy?: string | null;
  expertPickProduct?: ExpertPickProductSummary | null;
  expertPickProcedure?: ExpertPickProcedureSummary | null;
};
export interface ClientAnalysis {
  id: number;
  clientId: number;
  providerId: number;
  skinColor?: string;
  skinConcerns?: string;
  topConcern?: string;
  mainReason?: string;
  mainReasonOther?: string;
  currentConditions?: string;
  allergicAnesthetics?: boolean;
  allergicBeeStings?: boolean;
  allergicIngredients?: boolean;
  allergens?: string;
  allergensOther?: string;
  pregnant?: boolean;
  breastfeeding?: boolean;
  useIsotretinoin?: boolean;
  keloidScars?: boolean;
  plan?: string;
  downtime?: string;
  note?: string;
  photos: ClientAnalysisPhoto[];
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  client?: ClinicClient;
  provider?: {
    id: number;
    firstName?: string;
    lastName?: string;
    email?: string;
  };
  result?: ResultAnalysis | null;
}

export interface CreateClientAnalysisPayload {
  clientId: number;
  providerId?: number;
  skinColor?: string;
  skinConcerns?: string;
  topConcern?: string;
  mainReason?: string;
  mainReasonOther?: string;
  currentConditions?: string;
  allergicAnesthetics?: boolean;
  allergicBeeStings?: boolean;
  allergicIngredients?: boolean;
  allergens?: string;
  allergensOther?: string;
  pregnant?: boolean;
  breastfeeding?: boolean;
  useIsotretinoin?: boolean;
  keloidScars?: boolean;
  plan?: string;
  downtime?: string;
  note?: string;
}

export type CreateClientAnalysisSkinPhotos = {
  left?: File;
  leftThreeQuarter?: File;
  front?: File;
  rightThreeQuarter?: File;
  right?: File;
};

export type CreateClientAnalysisSkinPhotoReuseKeys = {
  left?: string;
  leftThreeQuarter?: string;
  front?: string;
  rightThreeQuarter?: string;
  right?: string;
};

const CREATE_PHOTO_FORM_FIELDS: Record<keyof CreateClientAnalysisSkinPhotos, string> = {
  left: 'left',
  leftThreeQuarter: 'left34',
  front: 'front',
  rightThreeQuarter: 'right34',
  right: 'right'
};

const CREATE_PHOTO_REUSE_KEY_FIELDS: Record<keyof CreateClientAnalysisSkinPhotoReuseKeys, string> =
  {
    left: 'leftKey',
    leftThreeQuarter: 'left34Key',
    front: 'frontKey',
    rightThreeQuarter: 'right34Key',
    right: 'rightKey'
  };

/** Strip empty slots from the analysis wizard; only `File` is sent as multipart. */
export function pickSkinPhotoFiles(skinPhotos: {
  [K in keyof CreateClientAnalysisSkinPhotos]: File | '';
}): CreateClientAnalysisSkinPhotos {
  const out: CreateClientAnalysisSkinPhotos = {};
  (Object.keys(CREATE_PHOTO_FORM_FIELDS) as (keyof CreateClientAnalysisSkinPhotos)[]).forEach(
    (key) => {
      const v = skinPhotos[key];
      if (v instanceof File) out[key] = v;
    }
  );
  return out;
}

function appendFormField(fd: FormData, key: string, value: string | number | boolean | undefined) {
  if (value === undefined) return;
  if (typeof value === 'boolean') {
    fd.append(key, value ? 'true' : 'false');
    return;
  }
  fd.append(key, String(value));
}

export interface ListClientAnalysisParams {
  clientId?: number;
  page?: number;
  limit?: number;
  keyword?: string;
}

// --- Services ---

/** Non-empty reuse keys only (S3 keys already on file for this client). */
export function pickSkinPhotoReuseKeys(
  reuse: CreateClientAnalysisSkinPhotoReuseKeys | undefined
): CreateClientAnalysisSkinPhotoReuseKeys | undefined {
  if (!reuse) return undefined;
  const out: CreateClientAnalysisSkinPhotoReuseKeys = {};
  (
    Object.keys(CREATE_PHOTO_REUSE_KEY_FIELDS) as (keyof CreateClientAnalysisSkinPhotoReuseKeys)[]
  ).forEach((key) => {
    const v = (reuse[key] ?? '').trim();
    if (v) out[key] = v;
  });
  return Object.keys(out).length ? out : undefined;
}

// Create a new client analysis (multipart: fields + optional angle photos per BE FileFieldsInterceptor)
export const createClientAnalysis = async (
  payload: CreateClientAnalysisPayload,
  skinPhotos?: CreateClientAnalysisSkinPhotos,
  skinPhotoReuseKeys?: CreateClientAnalysisSkinPhotoReuseKeys
) => {
  const formData = new FormData();
  appendFormField(formData, 'clientId', payload.clientId);
  appendFormField(formData, 'providerId', payload.providerId);
  appendFormField(formData, 'skinColor', payload.skinColor);
  appendFormField(formData, 'skinConcerns', payload.skinConcerns);
  appendFormField(formData, 'topConcern', payload.topConcern);
  appendFormField(formData, 'mainReason', payload.mainReason);
  appendFormField(formData, 'mainReasonOther', payload.mainReasonOther);
  appendFormField(formData, 'currentConditions', payload.currentConditions);
  appendFormField(formData, 'allergicAnesthetics', payload.allergicAnesthetics);
  appendFormField(formData, 'allergicBeeStings', payload.allergicBeeStings);
  appendFormField(formData, 'allergicIngredients', payload.allergicIngredients);
  appendFormField(formData, 'allergens', payload.allergens);
  appendFormField(formData, 'allergensOther', payload.allergensOther);
  appendFormField(formData, 'pregnant', payload.pregnant);
  appendFormField(formData, 'breastfeeding', payload.breastfeeding);
  appendFormField(formData, 'useIsotretinoin', payload.useIsotretinoin);
  appendFormField(formData, 'keloidScars', payload.keloidScars);
  appendFormField(formData, 'plan', payload.plan);
  appendFormField(formData, 'downtime', payload.downtime);
  appendFormField(formData, 'note', payload.note);

  const reuse = pickSkinPhotoReuseKeys(skinPhotoReuseKeys);
  if (reuse) {
    (
      Object.keys(CREATE_PHOTO_REUSE_KEY_FIELDS) as (keyof CreateClientAnalysisSkinPhotoReuseKeys)[]
    ).forEach((stateKey) => {
      const key = reuse[stateKey];
      if (key) {
        formData.append(CREATE_PHOTO_REUSE_KEY_FIELDS[stateKey], key);
      }
    });
  }

  if (skinPhotos) {
    (Object.keys(CREATE_PHOTO_FORM_FIELDS) as (keyof CreateClientAnalysisSkinPhotos)[]).forEach(
      (stateKey) => {
        const file = skinPhotos[stateKey];
        const fieldName = CREATE_PHOTO_FORM_FIELDS[stateKey];
        if (file instanceof File) {
          formData.append(fieldName, file);
        }
      }
    );
  }

  const { data } = await axios.post<ClientAnalysis>('/client-analysis', formData);
  return data;
};

// Get list of client analyses
export const getClientAnalyses = async (params?: ListClientAnalysisParams) => {
  const { data } = await axios.get<{ list: ClientAnalysis[]; total: number }>('/client-analysis', {
    params
  });
  return data;
};

// Get a single client analysis by ID
export const getClientAnalysisById = async (id: number) => {
  const { data } = await axios.get<ClientAnalysis>(`/client-analysis/${id}`);
  return data;
};

export async function fetchSkinAnalysisReportPdf(analysisId: number): Promise<Blob> {
  try {
    const { data } = await axios.get<Blob>(`/client-analysis/${analysisId}/report-pdf`, {
      responseType: 'blob'
    });
    return data;
  } catch (err) {
    const e = err as AxiosError<Blob>;
    if (e.response?.data instanceof Blob) {
      const text = await e.response.data.text();
      let msg = `Could not download report (${e.response.status})`;
      try {
        const body = JSON.parse(text) as { message?: string };
        if (body.message) msg = body.message;
      } catch {
        const t = text?.trim();
        if (t) msg = t.slice(0, 300);
      }
      throw new Error(msg);
    }
    throw err instanceof Error ? err : new Error(String(err));
  }
}

export type PatchClientAnalysisPayload = Partial<CreateClientAnalysisPayload>;

// Update a client analysis
export const updateClientAnalysis = async (id: number, payload: PatchClientAnalysisPayload) => {
  const { data } = await axios.patch<ClientAnalysis>(`/client-analysis/${id}`, payload);
  return data;
};

// Delete a client analysis (soft delete)
export const deleteClientAnalysis = async (id: number) => {
  const { data } = await axios.delete(`/client-analysis/${id}`);
  return data;
};

// Delete a photo from a client analysis
export const deleteAnalysisPhoto = async (analysisId: number, photoId: number) => {
  const { data } = await axios.delete(`/client-analysis/${analysisId}/photos/${photoId}`);
  return data;
};

/** Server generates the PDF and emails it to the client profile address. */
export const sendSkinReportEmail = async (analysisId: number) => {
  const { data } = await axios.post<{ success: boolean }>(
    `/client-analysis/${analysisId}/send-report`,
    {}
  );
  return data;
};
