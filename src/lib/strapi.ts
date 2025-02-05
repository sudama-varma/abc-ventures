import { fetchApi } from "@lib/api";
import type { Blog, BlogData } from "../interfaces/blog";
import type { Site, SiteData } from "../interfaces/site";
import type { CategriesData } from "../interfaces/category";

const nativeBlogsData: BlogData[] = await fetchApi<BlogData[]>({
  endpoint: "posts",
  query: {
    // "filters[site][name]": "ABCVentures",
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

export const nativeBlogs: Blog[] = nativeBlogsData?.map((post) => {
  return {
    id: post.id,
    title: post.attributes.title,
    slug: post.attributes.slug,
    content: post.attributes.content,
    categories: post.attributes.categories?.data?.map(
      (category) => category?.attributes?.name || "",
    ),
    imageUrl: post.attributes.image?.data?.attributes?.url || null,
    imageWidth: post.attributes.image?.data?.attributes?.width || null,
    imageHeight: post.attributes.image?.data?.attributes?.height || null,
    imageSmallUrl:
      post.attributes.image?.data?.attributes?.formats?.small?.url || null,
    imageSmallWidth:
      post.attributes.image?.data?.attributes?.formats?.small?.width || null,
    imageSmallHeight:
      post.attributes.image?.data?.attributes?.formats?.small?.height || null,
    imageMediumUrl:
      post.attributes.image?.data?.attributes?.formats?.medium?.url || null,
    imageMediumWidth:
      post.attributes.image?.data?.attributes?.formats?.medium?.width || null,
    imageMediumHeight:
      post.attributes.image?.data?.attributes?.formats?.medium?.height || null,
    createdAt: post.attributes.createdAt,
    updatedAt: post.attributes.updatedAt,
    publishedAt: post.attributes.publishedAt,
  };
});

export const site: Site[] = siteData?.map((site) => {
  return {
    id: site.id,
    name: site.attributes.name,
    slug: site.attributes.slug,
    termsOfAgreement: site.attributes.termsOfAgreement,
    privacyPolicy: site.attributes.privacyPolicy,
    logoUrl: site.attributes.logo?.data.attributes.url,
    logoWidth: site.attributes.logo?.data.attributes.width,
    logoHeight: site.attributes.logo?.data.attributes.height,
    logoSmallUrl:
      site.attributes.logo?.data.attributes.formats?.small?.url || null,
    logoSmallWidth:
      site.attributes.logo?.data.attributes.formats?.small?.width || null,
    logoSmallHeight:
      site.attributes.logo?.data.attributes.formats?.small?.height || null,
    createdAt: site.attributes.createdAt,
    updatedAt: site.attributes.updatedAt,
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
    !!cat.attributes.sites?.data?.filter(
      (site) => site.attributes.name === "ABCVentures",
    ).length,
);

