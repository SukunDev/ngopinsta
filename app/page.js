import Article from "./article";

export const metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Instagram Video Downloader | ${process.env.NEXT_PUBLIC_APP_TITLE}`,
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    url: `${process.env.NEXT_PUBLIC_APP_URL}`,
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

export default function Home() {
  return (
    <>
      <Article />
    </>
  );
}
