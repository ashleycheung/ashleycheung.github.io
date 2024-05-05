import { Box } from "@chakra-ui/react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

export const SocialsRow = () => {
  const icons = [
    {
      component: <BsGithub />,
      url: "https://github.com/ashleycheung",
    },
    {
      component: <BsLinkedin />,
      url: "https://www.linkedin.com/in/ashley-cheung-209698177",
    },
    {
      component: <BsInstagram />,
      url: "https://www.instagram.com/ashley_cheung24",
    },
  ];

  return (
    <Box display={"flex"} fontSize={"2rem"}>
      {icons.map((data) => (
        <Box
          cursor={"pointer"}
          margin={4}
          key={data.url}
          onClick={() => window.open(data.url, "_blank")?.focus()}
        >
          {data.component}
        </Box>
      ))}
    </Box>
  );
};
