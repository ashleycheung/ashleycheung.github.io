import { Box, BoxProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Blog } from "../blog/blogdata";
import { PersonalAvatar } from "../utils/PersonalAvatar";

interface BlogCardProps extends BoxProps {
  blog: Blog;
}

export const BlogCard = ({ blog, ...props }: BlogCardProps) => {
  const router = useRouter();
  return (
    <Box
      className="boxShadow"
      maxWidth={"400px"}
      borderRadius={"md"}
      overflow={"hidden"}
      cursor={"pointer"}
      onClick={() => router.push(`/blog/${blog.id}`)}
      {...props}
    >
      <img
        src={blog.thumbnailSrc}
        style={{ width: "100%", objectFit: "cover", height: "300px" }}
        alt={"blog"}
        width={300}
        height={300}
      />
      <Box width={"100%"} padding={4}>
        <Box fontSize={"2xl"} fontWeight={"bold"} paddingBottom={2}>
          {blog.title}
        </Box>
        <Box display={"flex"}>
          <PersonalAvatar />
          <Box paddingLeft={4}>
            <Box fontWeight={"bold"}>Ashley Cheung</Box>
            <Box fontWeight="thin">Published on {blog.date}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
