import { BlogComponent } from "@/components/blog/Blog";
import { Blog, BLOGS } from "@/components/blog/blogdata";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { redirect } from "next/navigation";

export const getServerSideProps: GetServerSideProps = async (context) => {
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BlogComponent blog={blog} />
      </main>
    </>
  );
}
