import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Blog } from "../blog/blogdata";
import { PersonalAvatar } from "../utils/PersonalAvatar";

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  const navigate = useNavigate();
  return (
    <Box
      className="boxShadow"
      maxWidth={"400px"}
      borderRadius={"md"}
      overflow={"hidden"}
      cursor={"pointer"}
      onClick={() => navigate(`/blog/${blog.id}`)}
    >
      <img
        src={blog.thumbnailSrc}
        style={{ width: "100%", objectFit: "contain" }}
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
