import React from "react";
import Article from "./article";

export const metadata = {
  alternates: {
    canonical: "/grabber",
  },
  title: `Instagram Reels Grabber`,
  openGraph: {
    title: `Instagram Reels Downloader | ${process.env.NEXT_PUBLIC_APP_TITLE}`,
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    url: `${process.env.NEXT_PUBLIC_APP_URL}/grabber`,
    siteName: process.env.NEXT_PUBLIC_APP_TITLE,
    locale: "id_ID",
    type: "article",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/thumbnail.png`,
      },
    ],
  },
};

export default function Grabber() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${process.env.NEXT_PUBLIC_APP_URL}/#organization`,
        name: `${process.env.NEXT_PUBLIC_APP_TITLE}`,
        sameAs: [
          "http://www.facebook.com/ngopinsta",
          "https://twitter.com/ngopinsta",
          "https://www.instagram.com/ngopinsta",
        ],
        logo: {
          "@type": "ImageObject",
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/#logo`,
          url: `${process.env.NEXT_PUBLIC_APP_URL}/ngopInsta.png`,
          contentUrl: `${process.env.NEXT_PUBLIC_APP_URL}/ngopInsta.png`,
          inLanguage: "id-ID",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${process.env.NEXT_PUBLIC_APP_URL}/#website`,
        url: `${process.env.NEXT_PUBLIC_APP_URL}`,
        publisher: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/#organization`,
        },
        inLanguage: "id-ID",
      },
      {
        "@type": "ImageObject",
        "@id": `${process.env.NEXT_PUBLIC_APP_URL}/thumbnail.png`,
        url: `${process.env.NEXT_PUBLIC_APP_URL}/thumbnail.png`,
        width: "200",
        height: "200",
        inLanguage: "id-ID",
      },
      {
        "@type": "WebPage",
        "@id": `${process.env.NEXT_PUBLIC_APP_URL}/#webpage`,
        url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
        name: `Instagram Reels Downloader | ${process.env.NEXT_PUBLIC_APP_TITLE}`,
        datePublished: new Date(process.env.NEXT_PUBLIC_APP_PUBLISHED_AT),
        dateModified: new Date(process.env.NEXT_PUBLIC_APP_UPDATED_AT),
        isPartOf: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/#website`,
        },
        primaryImageOfPage: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/thumbnail.png`,
        },
        inLanguage: "id-ID",
      },
      {
        "@type": "Person",
        "@id": `${process.env.NEXT_PUBLIC_APP_URL}/#author`,
        name: process.env.NEXT_PUBLIC_APP_AUTHOR,
        image: {
          "@type": "ImageObject",
          "@id": "https://avatars.githubusercontent.com/u/83165558?v=4",
          url: "https://avatars.githubusercontent.com/u/83165558?v=4",
          caption: process.env.NEXT_PUBLIC_APP_AUTHOR,
          inLanguage: "id-ID",
        },
        sameAs: ["https://github.com/SukunDev"],
        worksFor: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/#organization`,
        },
      },
      {
        "@type": "Article",
        headline: `Instagram Reels Downloader | ${process.env.NEXT_PUBLIC_APP_TITLE}`,
        keywords: `${process.env.NEXT_PUBLIC_APP_SINGLE_KEYWORDS}`,
        datePublished: new Date(process.env.NEXT_PUBLIC_APP_PUBLISHED_AT),
        dateModified: new Date(process.env.NEXT_PUBLIC_APP_UPDATED_AT),
        author: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/#author`,
          name: process.env.NEXT_PUBLIC_APP_AUTHOR,
        },
        publisher: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/#organization`,
        },
        description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
        name: `Instagram Reels Downloader | ${process.env.NEXT_PUBLIC_APP_TITLE}`,
        "@id": `${process.env.NEXT_PUBLIC_APP_URL}/#richSnippet`,
        isPartOf: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/#webpage`,
        },
        image: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/thumbnail.png`,
        },
        inLanguage: "id-ID",
        mainEntityOfPage: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/#webpage`,
        },
      },
    ],
  };
  return (
    <>
      <Article />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
