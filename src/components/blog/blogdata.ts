export interface Blog {
  id: string;
  /**
   * The markdown src
   */
  markdownSrc: string;
  /**
   * The title to show on the page.
   * This should not be changed for SEO purposes
   */
  title: string;
  /**
   * The description of the blog
   */
  description: string;
  /**
   * Date of publication
   */
  date: string;
  /**
   * The image to show at the top of the blog
   */
  thumbnailSrc: string;
  /**
   * All the tags to apply on the blog
   */
  tags: Tag[];
}

export enum Tag {
  Frontend = "frontend",
  React = "react",
  ThreeJS = "threeJS",
  Typescript = "typescript",
  NextJS = "nextJS",
  Networking = "networking",
  SEO = "seo",
}

/**
 * All the blogs
 */
export const BLOGS: Blog[] = [
  {
    id: "request-to-browser",
    markdownSrc: "/markdown/request-to-browser.md",
    title: "From request to browser - an explanation of DNS Resolution",
    description:
      "The journey of a network request to displaying a website in your browser",
    date: "May 23, 2024",
    thumbnailSrc: "/blog-assets/internet.jpg",
    tags: [Tag.Frontend, Tag.SEO, Tag.Networking],
  },
  {
    id: "migrating-from-cra-to-next",
    markdownSrc: "/markdown/cra-to-next.md",
    title: "Why SEO made me migrate to NextJS",
    description: "My journey of moving my personal website from CRA to Next.js",
    date: "May 6, 2024",
    thumbnailSrc: "/blog-assets/nextjs.png",
    tags: [Tag.Frontend, Tag.React, Tag.NextJS, Tag.SEO],
  },
  {
    id: "building-a-plugin-system-in-javascript",
    markdownSrc: "/markdown/plugin.md",
    title: "How I built a plugin system using Javascript",
    description: "My journey of building a plugin system using javascript",
    date: "May 4, 2024",
    thumbnailSrc: "/blog-assets/plugin.jpg",
    tags: [Tag.Frontend, Tag.React, Tag.ThreeJS, Tag.Typescript],
  },
];
