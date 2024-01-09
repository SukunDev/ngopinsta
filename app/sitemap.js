import fs from "fs";
import matter from "gray-matter";

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

export default async function Sitemap() {
  const baseURL = process.env.NEXT_PUBLIC_APP_URL;
  const posts = await getPosts();

  const baseSitemap = [
    {
      url: `${baseURL}`,
      lastModified: new Date(
        process.env.NEXT_PUBLIC_APP_UPDATED_AT
      ).toISOString(),
      priority: 1,
    },
    {
      url: `${baseURL}/grabber`,
      lastModified: new Date(
        process.env.NEXT_PUBLIC_APP_UPDATED_AT
      ).toISOString(),
      priority: 0.8,
    },
  ];

  posts.map((item) => {
    baseSitemap.push({
      url: `${baseURL}/blog/${item.slug}`,
      lastModified: new Date(item.frontmatter.updated_at).toISOString(),
      priority: 0.64,
    });
  });

  return baseSitemap;
}
