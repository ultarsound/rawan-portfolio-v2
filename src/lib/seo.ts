import { profile } from "./portfolio-data";

/** Set VITE_SITE_URL in production (e.g. https://rawan-portfolio.lovable.app) */
export const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ?? "";

export const seo = {
  // تم تعديل siteName ليكون اسمكِ فقط بدلاً من "Name — Portfolio" ليظهر اسم الموقع بوضوح في جوجل
  siteName: profile.name,
  defaultTitle: `${profile.name} — Flutter Developer Portfolio`,
  defaultDescription: `Portfolio of ${profile.name}, Flutter developer building cross-platform mobile apps with BLoC, GetX, Firebase and clean architecture.`,
  keywords: [
    profile.name,
    "Rawan Tharwat",
    "Rawan Tharwat Badran",
    "Rawan Tharwat portfolio",
    "Flutter developer",
    "Flutter developer Egypt",
    "mobile developer portfolio",
    "Dart developer",
  ].join(", "),
  ogImage: profile.photo,
  twitterHandle: "",
} as const;

export function absoluteUrl(path = "/"): string {
  if (!siteUrl) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    givenName: "Rawan",
    familyName: "Tharwat Badran",
    jobTitle: profile.role,
    description: seo.defaultDescription,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
      addressCountry: "EG",
    },
    url: siteUrl || undefined,
    image: siteUrl ? absoluteUrl(profile.photo) : profile.photo,
    sameAs: [profile.linkedin, profile.github].filter(Boolean),
    knowsAbout: [
      "Flutter",
      "Dart",
      "Mobile Development",
      "BLoC",
      "GetX",
      "Firebase",
      "Clean Architecture",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seo.siteName,
    url: siteUrl || "https://rawan-portfolio-v2.vercel.app",
    description: seo.defaultDescription,
    author: {
      "@type": "Person",
      name: profile.name,
    },
  };
}

export function buildSeoMeta(options?: {
  title?: string;
  description?: string;
  path?: string;
}) {
  const title = options?.title ?? seo.defaultTitle;
  const description = options?.description ?? seo.defaultDescription;
  const url = absoluteUrl(options?.path ?? "/");
  const image = absoluteUrl(seo.ogImage);

  const meta = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: seo.keywords },
    { name: "author", content: profile.name },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { name: "googlebot", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: seo.siteName },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  const links: Array<{ rel: string; href: string; type?: string }> = [];

  if (siteUrl) {
    meta.push(
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:image", content: image },
    );
    links.push({ rel: "canonical", href: url });
  }

  return { meta, links };
}

export function buildJsonLdScripts() {
  const payloads = [personJsonLd(), websiteJsonLd()].filter(Boolean);

  return payloads.map((payload) => ({
    type: "application/ld+json",
    children: JSON.stringify(payload),
  }));
}