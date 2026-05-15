import { getClientAnalysisById } from './client-analysis';

export type {
  AnalysisRecommendedProcedureRow,
  AnalysisRecommendedProductRow,
  RecommendedProcedureSummary,
  RecommendedProductSummary
} from 'types/analysis-recommended';

export type PaginateParams = {
  page: number;
  limit: number;
};

/**
 * Client-side slice (BE hiện chỉ trả full list trong GET /client-analysis/:id).
 * Khi có API phân trang riêng, thay bằng gọi axios theo page/limit.
 */
export function paginateList<T>(
  items: T[],
  page: number,
  limit: number
): { list: T[]; total: number } {
  const total = items.length;
  const start = Math.max(0, (page - 1) * limit);
  return { list: items.slice(start, start + limit), total };
}

export async function loadRecommendedProductsForAnalysis(analysisId: number) {
  const analysis = await getClientAnalysisById(analysisId);
  return analysis.result?.recommendedProducts ?? [];
}

export async function loadRecommendedProceduresForAnalysis(analysisId: number) {
  const analysis = await getClientAnalysisById(analysisId);
  return analysis.result?.recommendedProcedures ?? [];
}
