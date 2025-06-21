export interface Street {
  id: string;
  name: string;
  description: string;
  specialties: string[];
  shops: number;
}

export interface Center {
  id: string;
  name: string;
  streets: Street[];
}

export interface Governorate {
  id: string;
  name: string;
  nameEn: string;
  centers: Center[];
}