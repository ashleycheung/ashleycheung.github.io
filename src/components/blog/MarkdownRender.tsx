import { Box } from "@chakra-ui/react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";

interface MarkdownRenderProps {
  markdown: string;
}

export const MarkdownRender = ({ markdown }: MarkdownRenderProps) => {
  return (
    <Box className="markdown" display={"flex"} flexDir={"column"}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          img(props) {
            const { node, ...rest } = props;
            return (
              <span className="image-wrapper">
                <img alt={"alt"} {...rest} />
              </span>
            );
          },
          a(props) {
            const { children, node, ...rest } = props;
            return (
              <a {...rest} target="_blank">
                {children}
              </a>
            );
          },
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...(rest as any)}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </Markdown>
    </Box>
  );
};
