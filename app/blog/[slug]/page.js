import fs from "fs";
import path from "path";
import matter from "gray-matter";
import md from "markdown-it";
import Image from "next/image";
import { notFound } from "next/navigation";

const getPost = async ({ params: { slug } }) => {
  try {
    const configDirectory = path.resolve(process.cwd(), "public", "posts");
    const fileName = fs.readFileSync(
      path.join(configDirectory, `${slug}.md`),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(fileName);

    return { frontmatter, content };
  } catch (error) {
    notFound();
  }
};

export async function generateMetadata({ params }) {
  const { frontmatter, content } = await getPost({ params });
  return {
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: `${frontmatter.title} | ${process.env.NEXT_PUBLIC_APP_TITLE}`,
      description: frontmatter.description,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${params.slug}`,
      siteName: process.env.NEXT_PUBLIC_APP_TITLE,
      locale: "id_ID",
      type: "article",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_APP_URL}${frontmatter.thumbnail}`,
        },
      ],
    },
  };
}

export default async function SinglePost({ params }) {
  const { frontmatter, content } = await getPost({ params });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/#organization`,
        name: `${process.env.NEXT_PUBLIC_APP_TITLE}`,
        sameAs: [
          "http://www.facebook.com/ngopinsta",
          "https://twitter.com/ngopinsta",
          "https://www.instagram.com/ngopinsta",
        ],
        logo: {
          "@type": "ImageObject",
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/#logo`,
          url: `${process.env.NEXT_PUBLIC_APP_URL}/ngopInsta.png`,
          contentUrl: `${process.env.NEXT_PUBLIC_APP_URL}/ngopInsta.png`,
          inLanguage: "id-ID",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/#website`,
        url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
        publisher: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/#organization`,
        },
        inLanguage: "id-ID",
      },
      {
        "@type": "ImageObject",
        "@id": `${process.env.NEXT_PUBLIC_APP_URL}${frontmatter.thumbnail}`,
        url: `${process.env.NEXT_PUBLIC_APP_URL}${frontmatter.thumbnail}`,
        width: "200",
        height: "200",
        inLanguage: "id-ID",
      },
      {
        "@type": "WebPage",
        "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/${params.slug}/#webpage`,
        url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${params.slug}`,
        name: `${frontmatter.title} | ${process.env.NEXT_PUBLIC_APP_TITLE}`,
        datePublished: new Date(frontmatter.published_at).toISOString(),
        dateModified: new Date(frontmatter.updated_at).toISOString(),
        isPartOf: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/#website`,
        },
        primaryImageOfPage: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}${frontmatter.thumbnail}`,
        },
        inLanguage: "id-ID",
      },
      {
        "@type": "Person",
        "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/${params.slug}/#author`,
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
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/#organization`,
        },
      },
      {
        "@type": "BlogPosting",
        headline: `${frontmatter.title} | ${process.env.NEXT_PUBLIC_APP_TITLE}`,
        keywords: frontmatter.keywords,
        datePublished: new Date(frontmatter.published_at).toISOString(),
        dateModified: new Date(frontmatter.updated_at).toISOString(),
        author: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/${params.slug}/#author`,
          name: process.env.NEXT_PUBLIC_APP_AUTHOR,
        },
        publisher: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/#organization`,
        },
        description: frontmatter.description,
        name: `${frontmatter.title} | ${process.env.NEXT_PUBLIC_APP_TITLE}`,
        "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/${params.slug}/#richSnippet`,
        isPartOf: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/${params.slug}/#webpage`,
        },
        image: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}${frontmatter.thumbnail}`,
        },
        inLanguage: "id-ID",
        mainEntityOfPage: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/${params.slug}/#webpage`,
        },
      },
    ],
  };

  return (
    <>
      <div className="p-2 mx-2 mt-16 space-y-16 rounded-lg sm:mx-4 sm:p-4 dark:bg-white/5">
        <h2 className="text-2xl font-medium md:text-3xl">
          {frontmatter.title}
        </h2>
        <div className="overflow-hidden aspect-w-16 aspect-h-9">
          <Image
            className="object-cover w-full transition duration-700 hover:scale-110 hover:rotate-3 hover:blur-sm"
            width={640}
            height={360}
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
          />
        </div>
        <article
          className="mt-4 font-light text-gray-500 article dark:text-gray-200"
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
