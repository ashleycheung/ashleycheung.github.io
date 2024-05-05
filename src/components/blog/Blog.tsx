import { Box } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { Header } from "../utils/Header";
import { Blog } from "./blogdata";
import { MarkdownRender } from "./MarkdownRender";
import { BlogHeader } from "./BlogHeader";
import { BlogFooter } from "./BlogFooter";

interface BlogComponentProps {
  blog: Blog;
}

export const BlogComponent = ({ blog }: BlogComponentProps) => {
  const isDesktop = useIsDesktop();

  const [markdown, setMarkdown] = useState<null | string>(null);

  // Load blog
  useEffect(() => {
    (async () => {
      const resp = await fetch(blog.markdownSrc);
      const text = await resp.text();
      setMarkdown(text);
    })();
  }, [blog]);

  const wordCount = useMemo(
    () => markdown?.split(" ").filter((i) => i.trim().length !== 0).length,
    [markdown]
  );

  const readingTime = useMemo(
    () => (wordCount ? Math.ceil(wordCount / 238) : null),
    [wordCount]
  );

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
        {readingTime ? (
          <>
            <BlogHeader blog={blog} readingTime={readingTime} />
            {markdown ? <MarkdownRender markdown={markdown} /> : null}
            <BlogFooter />
          </>
        ) : null}
      </Box>
    </Box>
  );
};
