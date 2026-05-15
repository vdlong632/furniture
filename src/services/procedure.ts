export interface Procedure {
  id: number;
  clinicId: number;
  name: string;
  type: string;
  cost: number;
  price: string;
  imageUrl: string;
  discountPercentage: number;
  category: string;
  subCategory: string;
  promoteStatus: string;
  note: string;
  isActive: boolean;
  bundlePricing: boolean;
  ingredients: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
