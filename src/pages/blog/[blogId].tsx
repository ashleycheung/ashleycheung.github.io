import { BlogComponent } from "@/components/blog/Blog";
import { Blog, BLOGS } from "@/components/blog/blogdata";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { redirect } from "next/navigation";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: BLOGS.map((blog) => ({
      params: {
        blogId: blog.id,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blog = BLOGS.find((blog) => blog.id === context.params?.blogId);
  return {
    props: {
      blog,
    },
  };
};

export default function BlogPage({ blog }: { blog: Blog | undefined }) {
  if (!blog) {
    redirect("/");
  }

  return (
    <>
      <Head>
        <title>{blog?.title ?? "Blog"}</title>
        <meta name="description" content={blog.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={blog.thumbnailSrc} />
        <meta property="og:type" content="blog" />
        <meta
          property="og:url"
          content={`https://www.ashleycheung.com/blog/${blog.id}`}
        />
        <meta property="og:title" content={blog.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ashleycheung.com" />
        <meta
          property="twitter:url"
          content={`https://www.ashleycheung.com/blog/${blog.id}`}
        />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={blog.thumbnailSrc} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <BlogComponent blog={blog} />
      </main>
    </>
  );
}
