/** Mirrors clinic product select on analysis result (see BE client-analysis findOne). */
export type RecommendedProductSummary = {
  id: number;
  imageUrl: string;
  name: string;
  brandName: string;
  category: string;
  subCategory: string;
  price: number;
  discountPercentage?: number | null;
  ingredients?: string | null;
  note?: string | null;
};

export type AnalysisRecommendedProductRow = {
  id: number | string;
  resultId: number | string;
  productId: number | string;
  step: string | null;
  timeOfDay: string | null;
  why: string | null;
  createdAt: string;
  updatedAt: string;
  product: RecommendedProductSummary;
};

/** Mirrors clinic procedure select on analysis result. */
export type RecommendedProcedureSummary = {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  price: number;
  discountPercentage?: number | null;
  downtime?: string | null;
  target?: string | null;
  aftercare?: string | null;
  results?: string | null;
  risks?: string | null;
  contraindications?: string | null;
};

export type AnalysisRecommendedProcedureRow = {
  id: number | string;
  resultId: number | string;
  procedureId: number | string;
  months: string | null;
  why: string | null;
  createdAt: string;
  updatedAt: string;
  procedure: RecommendedProcedureSummary;
};

/** Mirrors BE client-analysis `findOne` `expertPickProduct` select. */
export type ExpertPickProductSummary = {
  id: number;
  name: string;
  brandName: string;
  category: string;
  subCategory: string;
  imageUrl: string | null;
  price: number;
  discountPercentage?: number | null;
};

/** Mirrors BE client-analysis `findOne` `expertPickProcedure` select. */
export type ExpertPickProcedureSummary = {
  id: number;
  name: string;
  type: string;
  imageUrl: string | null;
  price: number;
  discountPercentage?: number | null;
  downtime?: string | null;
  target?: string | null;
  aftercare?: string | null;
  results?: string | null;
  risks?: string | null;
  contraindications?: string | null;
};
