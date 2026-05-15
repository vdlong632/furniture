import { isAxiosError } from 'axios';

const DUPLICATE_CODE = 'CLIENT_DUPLICATE_NAME_DOB';

function getConflictPayload(data: unknown): Record<string, unknown> | null {
  if (!data || typeof data !== 'object') return null;
  const d = data as Record<string, unknown>;
  if (d.code === DUPLICATE_CODE) return d;
  const msg = d.message;
  if (msg && typeof msg === 'object' && !Array.isArray(msg)) {
    const m = msg as Record<string, unknown>;
    if (m.code === DUPLICATE_CODE) return m;
  }
  return null;
}

export function getClientDuplicateConflictInfo(
  error: unknown
): { existingClientId: number | null } | null {
  if (!isAxiosError(error) || error.response?.status !== 409) return null;
  const payload = getConflictPayload(error.response.data);
  if (!payload) return null;
  const id = payload.existingClientId;
  let numId: number | null = null;
  if (typeof id === 'number' && Number.isFinite(id)) numId = id;
  else if (typeof id === 'string' && /^\d+$/.test(id)) numId = Number(id);
  return { existingClientId: numId };
}
