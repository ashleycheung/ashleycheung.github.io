import { Box, BoxProps, Image } from "@chakra-ui/react";
import tiktokImg from "/public/assets/tiktok-presentation.jpg";
import { useEffect, useState } from "react";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { polaroidBorder, polaroidBoxShadow } from "@/pages/_app";

interface PolaroidProps extends BoxProps {}

export const Polaroid = ({ ...props }: PolaroidProps) => {
  const isDesktop = useIsDesktop();

  const [clientPos, setClientPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (!isDesktop) {
      return;
    }
    const onMouseMove = (e: MouseEvent) => {
      setClientPos({
        x: -0.5 + e.clientX / window.innerWidth,
        y: -0.5 + e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isDesktop]);

  return (
    <Box width={"100%"} height={"100%"} {...props}>
      <Box
        transform={`rotateX(${clientPos.y * 20}deg) rotateY(${
          clientPos.x * 20
        }deg)`}
        transition={`transform 0.3s ease`}
        style={{
          transformStyle: "preserve-3d",
          perspective: "600px",
        }}
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        background={"bgCard.500"}
        border={polaroidBorder}
        boxShadow={polaroidBoxShadow}
        borderRadius={4}
      >
        <Box
          padding={"5%"}
          paddingBottom={"20%"}
          width={"100%"}
          height={"100%"}
        >
          <Image
            src={tiktokImg.src}
            objectFit={"cover"}
            width={"100%"}
            height={"100%"}
            borderRadius={4}
          />
        </Box>
      </Box>
    </Box>
  );
};
