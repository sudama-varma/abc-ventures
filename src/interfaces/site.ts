export interface SiteData {
  id: number;
  name: string;
  slug: string;
  privacyPolicy: string;
  logo: {
    url: string;
    width: number;
    height: number;
    formats?: {
      small?: { url?: string; width?: number; height?: number };
    };
  };
  createdAt: string;
  updatedAt: string;
}

export interface Site {
  id: number;
  name: string;
  slug: string;
  privacyPolicy: string;
  logoUrl: string;
  logoWidth: number;
  logoHeight: number;
  logoSmallUrl?: string | null;
  logoSmallWidth?: number | null;
  logoSmallHeight?: number | null;
  createdAt: string;
  updatedAt: string;
}
