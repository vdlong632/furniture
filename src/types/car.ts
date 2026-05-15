export type CarPhoto = {
  id: number;
  storage: {
    name: string;
  };
  url: string;
};

export type CarBrand = {
  id: number;
  name: string;
  logo: string;
  logoUrl: string;
  storageId: number;
};

export type CarType = {
  id: number;
  name: string;
  model: string;
  seats: string;
  vehicleType: string;
  description: string;
  brandId: number;
  year: number;
  hp: number;
  mileage: number;
  engine: string;
  fuel: string;
  transmission: string;
  photos: CarPhoto[];
  brand: CarBrand;
  createdAt: string;
  updatedAt: string;
};
