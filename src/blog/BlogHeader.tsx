import { Box, Heading } from "@chakra-ui/react";
import { FaCalendar, FaClock } from "react-icons/fa";
import { PersonalAvatar } from "../utils/PersonalAvatar";
import { Blog } from "./blogdata";

interface BlogHeaderProps {
  blog: Blog;
  readingTime: number;
}

export const BlogHeader = ({ blog, readingTime }: BlogHeaderProps) => {
  return (
    <Box paddingBottom={4}>
      <Heading as={"h1"} marginBottom={4}>
        {blog.title}
      </Heading>
      <Box display={"flex"} marginBottom={4}>
        <PersonalAvatar size={"md"} />
        <Box display={"flex"} flexDir={"column"} paddingLeft={4}>
          <Box fontWeight={"bold"} fontSize={"medium"}>
            Ashley Cheung
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexWrap={"wrap"}
            fontWeight="thin"
            color={"gray.500"}
          >
            <Box display={"flex"} alignItems={"center"} paddingRight={2}>
              <FaCalendar size={"1rem"} />
              <Box marginLeft={1}>Published on {blog.date}</Box>
            </Box>
            <Box display={"flex"} alignItems={"center"} paddingRight={2}>
              <FaClock size={"1rem"} />
              <Box marginLeft={1}>{readingTime} minute read</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <img
        alt={"blog-thumbnail"}
        src={blog.thumbnailSrc}
        width={"100%"}
        height={"100%"}
      />
    </Box>
  );
};
