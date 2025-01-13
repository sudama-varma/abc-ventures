import { fetchApi } from "@lib/api";
import type { Blog, BlogData } from "../interfaces/blog";
import type { Site, SiteData } from "../interfaces/site";
import type { CategriesData } from "../interfaces/category";

const nativeBlogsData: BlogData[] = await fetchApi<BlogData[]>({
  endpoint: "posts",
  query: {
    "filters[site][name]": "ABCVentures",
    sort: "updatedAt:desc",
    populate: "*",
  },
  wrappedByKey: "data",
});

const siteData: SiteData[] = await fetchApi<SiteData[]>({
  endpoint: "sites",
  query: {
    "filters[name]": "ABCVentures",
    populate: "*",
  },
  wrappedByKey: "data",
});

export const nativeBlogs: Blog[] = nativeBlogsData.map((blog) => {
  return {
    id: blog.id,
    title: blog.title,
    slug: blog.slug,
    content: blog.content,
    categories: blog.categories.map(
      (category) => category?.name || "",
    ),
    imageUrl: blog.image?.url || null,
    imageWidth: blog.image?.width || null,
    imageHeight: blog.image?.height || null,
    imageSmallUrl:
      blog.image?.formats?.small?.url || null,
    imageSmallWidth:
      blog.image?.formats?.small?.width || null,
    imageSmallHeight:
      blog.image?.formats?.small?.height || null,
    imageMediumUrl:
      blog.image?.formats?.medium?.url || null,
    imageMediumWidth:
      blog.image?.formats?.medium?.width || null,
    imageMediumHeight:
      blog.image?.formats?.medium?.height || null,
    createdAt: blog.createdAt,
    updatedAt: blog.updatedAt,
    publishedAt: blog.publishedAt,
  };
});

export const site: Site[] = siteData.map((site) => {
  return {
    id: site.id,
    name: site.name,
    slug: site.slug,
    privacyPolicy: site.privacyPolicy,
    logoUrl: site.logo?.url,
    logoWidth: site.logo?.width,
    logoHeight: site.logo?.height,
    logoSmallUrl:
      site.logo?.formats?.small?.url || null,
    logoSmallWidth:
      site.logo?.formats?.small?.width || null,
    logoSmallHeight:
      site.logo?.formats?.small?.height || null,
    createdAt: site.createdAt,
    updatedAt: site.updatedAt,
  };
});

export const categories: CategriesData[] = (
  await fetchApi<CategriesData[]>({
    endpoint: "categories",
    query: {
      populate: "*",
    },
    wrappedByKey: "data",
  })
)
.filter(
  (cat) =>
    !!cat?.sites?.filter(
      (site) => site.name === "ABCVentures",
    ).length,
);

