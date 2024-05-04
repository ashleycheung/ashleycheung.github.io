import { Box } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useIsDesktop } from "../hooks/useIsDesktop";
import { useTitle } from "../hooks/useTitle";
import { Header } from "../utils/Header";
import { BLOGS } from "./blogdata";
import { MarkdownRender } from "./MarkdownRender";
import { BlogHeader } from "./BlogHeader";
import { BlogFooter } from "./BlogFooter";

export const Blog = () => {
  const isDesktop = useIsDesktop();
  const [markdown, setMarkdown] = useState<null | string>(null);
  const { blogId } = useParams();
  const blog = useMemo(
    () => BLOGS.find((blog) => blog.id === blogId),
    [blogId]
  );
  const navigate = useNavigate();

  const wordCount = useMemo(
    () => markdown?.split(" ").filter((i) => i.trim().length !== 0).length,
    [markdown]
  );

  const readingTime = useMemo(
    () => (wordCount ? Math.ceil(wordCount / 238) : null),
    [wordCount]
  );

  // Invalid blog so navigate away
  useEffect(() => {
    if (!blog) {
      navigate("/");
    }
  }, [blog, navigate]);

  // Load title
  useTitle(blog?.title);

  // Load blog
  useEffect(() => {
    if (blog) {
      (async () => {
        const resp = await fetch(blog.markdownSrc);
        const text = await resp.text();
        setMarkdown(text);
      })();
    }
  }, [blog]);

  return (
    <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
      <Header show={true} showLogo={true} />
      <Box
        height={"100%"}
        maxWidth={"768px"}
        width={"100%"}
        padding={isDesktop ? 0 : 4}
        paddingBottom={"100px"}
      >
        {blog && readingTime && markdown ? (
          <>
            <BlogHeader blog={blog} readingTime={readingTime} />
            <MarkdownRender markdown={markdown} />
            <BlogFooter />
          </>
        ) : null}
      </Box>
    </Box>
  );
};
