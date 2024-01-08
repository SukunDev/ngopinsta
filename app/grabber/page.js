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
  return (
    <>
      <Article />
    </>
  );
}
