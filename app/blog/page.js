import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

const getPosts = async () => {
  try {
    const files = fs.readdirSync("public/posts");

    const posts = files.map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(`public/posts/${fileName}`, "utf-8");
      const { data: frontmatter } = matter(readFile);

      return {
        slug,
        frontmatter,
      };
    });
    return posts;
  } catch (error) {
    return [];
  }
};

export const metadata = {
  alternates: {
    canonical: "/blog",
  },
  title: `Article Terbaru`,
  openGraph: {
    title: `Article Terbaru | ${process.env.NEXT_PUBLIC_APP_TITLE}`,
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
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

export default async function Blog() {
  const posts = await getPosts();

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
        "@type": "CollectionPage",
        "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/#webpage`,
        url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/`,
        name: `Article Terbaru | ${process.env.NEXT_PUBLIC_APP_TITLE}`,
        about: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/#organization`,
        },
        isPartOf: {
          "@id": `${process.env.NEXT_PUBLIC_APP_URL}/blog/#website`,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <>
      <div className="p-2 mx-2 rounded-lg sm:mx-4 sm:p-4 dark:bg-white/5">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200">
          Blog
        </h1>
        <p className="mt-2 text-sm font-light text-gray-500">semua article</p>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 mt-16 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(({ slug, frontmatter }) => (
              <article className="group" key={slug}>
                <Link href={`/blog/${slug}`} className="block space-y-2">
                  <div className="overflow-hidden rounded-md aspect-w-16 aspect-h-9">
                    <Image
                      className="object-cover transition duration-700 group-hover:scale-125 group-hover:rotate-6 group-hover:blur-sm"
                      src={frontmatter.thumbnail}
                      width={640}
                      height={340}
                      alt={frontmatter.title}
                    ></Image>
                  </div>
                  <h2 className="text-xl font-medium text-gray-800 dark:text-gray-100 line-clamp-2">
                    {frontmatter.title}
                  </h2>
                  <p className="font-light text-gray-600 dark:text-gray-300 line-clamp-3">
                    {frontmatter.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>posts is empty</p>
        )}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
