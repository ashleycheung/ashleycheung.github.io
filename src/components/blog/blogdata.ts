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
}

/**
 * All the blogs
 */
export const BLOGS: Blog[] = [
  {
    id: "building-a-plugin-system-in-javascript",
    markdownSrc: "/markdown/plugin.md",
    title: "How I built a plugin system using Javascript",
    description: "My journey of building a plugin system using javascript",
    date: "May 4, 2024",
    thumbnailSrc: "/blog-assets/plugin.jpg",
  },
];
