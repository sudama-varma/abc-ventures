export interface BlogData {
  id: number;
  attributes: {
    title: string;
    content: string;
    categories: {
      data: {
        id: number;
        attributes: {
          name: string;
          slug: string;
          createdAt: string;
          updatedAt: string;
        };
      }[];
    };
    image: {
      data: {
        attributes?: {
          url?: string;
          width?: number;
          height?: number;
          formats?: {
            small?: { url?: string; width?: number; height?: number };
            medium?: { url?: string; width?: number; height?: number };
          };
        };
      } | null;
    };
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Blog {
  id: number;
  title: string;
  content: string;
  categories: string[] | null;
  imageUrl: string | null;
  imageWidth?: number | null;
  imageHeight?: number | null;
  imageSmallUrl?: string | null;
  imageSmallWidth?: number | null;
  imageSmallHeight?: number | null;
  imageMediumUrl?: string | null;
  imageMediumWidth?: number | null;
  imageMediumHeight?: number | null;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
