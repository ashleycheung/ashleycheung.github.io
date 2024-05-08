import { Box, Text } from "@chakra-ui/react";
import { BLOGS } from "../blog/blogdata";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { BlogCard } from "./BlogCard";

export const BlogsSection = () => {
  const isDesktop = useIsDesktop();
  return (
    <Box display={"flex"} justifyContent="center" paddingTop={32}>
      <Box maxW="1280px" padding={!isDesktop ? 4 : 8} width={"100%"}>
        <Text
          fontSize={isDesktop ? "5xl" : "4xl"}
          fontWeight={"bold"}
          marginBottom={4}
          width={"100%"}
        >
          My Blogs
        </Text>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          flexDir={isDesktop ? "row" : "column"}
          alignItems={"center"}
        >
          {BLOGS.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              marginRight={isDesktop ? 4 : 0}
              marginBottom={isDesktop ? 0 : 4}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
