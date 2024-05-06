import { Box } from "@chakra-ui/react";
import { useMemo } from "react";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { Header } from "../utils/Header";
import { Blog } from "./blogdata";
import { MarkdownRender } from "./MarkdownRender";
import { BlogHeader } from "./BlogHeader";
import { BlogFooter } from "./BlogFooter";

interface BlogComponentProps {
  blog: Blog;
  markdown: string;
}

export const BlogComponent = ({ blog, markdown }: BlogComponentProps) => {
  const isDesktop = useIsDesktop();

  const wordCount = useMemo(
    () => markdown.split(" ").filter((i) => i.trim().length !== 0).length,
    [markdown]
  );

  const readingTime = useMemo(() => Math.ceil(wordCount / 238), [wordCount]);

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
        <BlogHeader blog={blog} readingTime={readingTime} />
        {markdown ? <MarkdownRender markdown={markdown} /> : null}
        <BlogFooter />
      </Box>
    </Box>
  );
};
