import { Box, Text } from "@chakra-ui/react";
import { BLOGS } from "../blog/blogdata";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { BlogCard } from "./BlogCard";
import sawSvg from "/public/assets/saw.svg";

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
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
          {BLOGS.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
          {isDesktop ? (
            <Box
              marginLeft={4}
              className="boxShadow"
              border={"1px solid gray"}
              borderRadius={"md"}
              width={"400px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={"3xl"}
              padding={4}
              textAlign={"center"}
              fontWeight={"bold"}
              flexDir={"column"}
            >
              <img src={sawSvg.src} alt="saw" width={150} height={150} />
              <Box paddingTop={4}>And more coming...</Box>
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};
