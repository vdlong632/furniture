import { PROMOTED_STATUS, STATUS } from 'services/clinic-products';

export enum Category {
  CLEANSERS = 'Cleansers',
  TREATMENTS = 'Treatments',
  MOISTURIZERS = 'Moisturizers',
  SUN_CARE = 'Sun Care'
}

export enum Subcategory {
  // Cleansers
  FACIAL_CLEANSER = 'Facial Cleanser',
  TONER = 'Toner',
  SCRUB_EXFOLIATOR = 'Scrub & Exfoliator',
  MAKEUP_REMOVER = 'Makeup Remover',
  FACIAL_WIPE = 'Facial Wipe',
  MASKS = 'Masks',

  // Treatments
  FACE_SERUM = 'Face Serum',
  BLEMISH_ACNE_TREATMENT = 'Blemish & Acne Treatment',
  FACIAL_PEEL = 'Facial Peel',

  // Moisturizers
  FACE_MOISTURIZER = 'Face Moisturizer',
  EYE_CREAM = 'Eye Cream',
  NIGHT_CREAM = 'Night Cream',
  FACE_OIL = 'Face Oil',
  MIST = 'Mist',
  LIP_BALM = 'Lip Balm',

  // Sun Care
  SUNSCREEN = 'Sunscreen',
  AFTER_SUN_CARE = 'After Sun Care'
}

export const CATEGORY_SUB_MAPPING: Record<Category, Subcategory[]> = {
  [Category.CLEANSERS]: [
    Subcategory.FACIAL_CLEANSER,
    Subcategory.TONER,
    Subcategory.SCRUB_EXFOLIATOR,
    Subcategory.MAKEUP_REMOVER,
    Subcategory.FACIAL_WIPE,
    Subcategory.MASKS
  ],
  [Category.TREATMENTS]: [
    Subcategory.FACE_SERUM,
    Subcategory.BLEMISH_ACNE_TREATMENT,
    Subcategory.FACIAL_PEEL
  ],
  [Category.MOISTURIZERS]: [
    Subcategory.FACE_MOISTURIZER,
    Subcategory.EYE_CREAM,
    Subcategory.NIGHT_CREAM,
    Subcategory.FACE_OIL,
    Subcategory.MIST,
    Subcategory.LIP_BALM
  ],
  [Category.SUN_CARE]: [Subcategory.SUNSCREEN, Subcategory.AFTER_SUN_CARE]
};

export enum INGREDIENTS {
  LOREM1 = 'Lorem1',
  LOREM2 = 'Lorem2',
  LOREM3 = 'Lorem3',
  LOREM4 = 'Lorem4'
}
export const OPTIONS_INGREDIENTS = [
  { label: 'Lorem Ipsum 1', value: INGREDIENTS.LOREM1 },
  { label: 'Lorem Ipsum 2', value: INGREDIENTS.LOREM2 },
  { label: 'Lorem Ipsum 3', value: INGREDIENTS.LOREM3 },
  { label: 'Lorem Ipsum 4', value: INGREDIENTS.LOREM4 }
];

export const PROMOTE_OPTIONS = [
  { label: 'None', value: PROMOTED_STATUS.NONE },
  { label: 'Clinic \n Promoted', value: PROMOTED_STATUS.CLINIC_PROMOTED },
  { label: 'Brand \n Promoted', value: PROMOTED_STATUS.BRAND_PROMOTED }
];
