import Link from "next/link";
import React from "react";

export const metadata = {
  alternates: {
    canonical: "/grabber",
  },
  title: `Contact`,
  openGraph: {
    title: `Contact | ${process.env.NEXT_PUBLIC_APP_TITLE}`,
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
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

export default function Contact() {
  return (
    <div className="p-2 mx-2 rounded-lg sm:mx-4 sm:p-4 dark:bg-white/5">
      <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200">
        Contact
      </h1>
      <p className="mt-2 text-sm font-light text-gray-500">
        Feel free to contact us for any question, trouble and etc
      </p>
      <article className="mt-8 font-light text-gray-500 dark:text-gray-200 article">
        <p>
          Welcome to {process.env.NEXT_PUBLIC_APP_TITLE}, your go-to free tool
          for seamlessly downloading Instagram videos! Our Instagram Photo
          Downloader feature empowers you to effortlessly save any captivating
          photo or collage from Instagram, enhancing your experience on the
          platform.
        </p>
        <p>
          At {process.env.NEXT_PUBLIC_APP_TITLE}, we understand the importance
          of simplicity and convenience in the digital age. That&apos;s why our
          user-friendly tool is designed to make the video download process
          smooth and hassle-free. Whether it&apos;s a memorable moment or an
          inspiring visual, you can trust us to provide you with the means to
          preserve and share it effortlessly.
        </p>
        <p>
          Have questions or inquiries? We&apos;re here to help! Reach out to us,
          and our dedicated team will respond promptly to assist you. Meanwhile,
          take a moment to explore our terms of service for a comprehensive
          understanding of our commitment to providing you with a reliable and
          enjoyable experience.
        </p>
        <p>
          Join the {process.env.NEXT_PUBLIC_APP_TITLE} community today and
          unlock the full potential of your Instagram content. Your satisfaction
          is our priority, and we look forward to enhancing your journey on
          Instagram with our powerful and user-centric features.
        </p>
        <p>
          Email:{" "}
          <Link
            className="text-blue-500 transition duration-300 hover:text-blue-600"
            href="malto:sukundev32@gmail.com"
            title="contact Email"
          >
            sukundev32@gmail.com
          </Link>
        </p>
      </article>
    </div>
  );
}
