export interface CategriesData {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  sites: {
    name: string;
  }[];
}

export interface Categry {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}
