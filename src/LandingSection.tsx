import { Box, Button } from "@chakra-ui/react";
import { useIsDesktop } from "./hooks/useIsDesktop";
import { Typewriter } from "./Typewriter";
import profile from "./assets/profile.png";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { TiSpanner } from "react-icons/ti";
import { AiFillFlag } from "react-icons/ai";
import downArrowImg from "./assets/down_arrow.svg";
import screwImg from "./assets/screw.svg";
import cogImg from "./assets/cog.svg";
import sawImg from "./assets/saw.svg";
import shovelImg from "./assets/shovel.svg";
import spannerImg from "./assets/spanner.svg";
import fishImg from "./assets/fish.svg";
import { ExplosionPiece } from "./ExplosionPiece";
import { SocialsRow } from "./SocialsRow";

export const LandingSection = () => {
  const isDesktop = useIsDesktop();
  const [isGrayed, setIsGrayed] = useState(true);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsGrayed(false);
    }, 3500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowButtons(true);
    }, 3500);
  }, []);

  return (
    <Box
      height={"100vh"}
      alignItems={"center"}
      display={"flex"}
      justifyContent="center"
      padding={!isDesktop ? 4 : 8}
      position={"relative"}
    >
      <Box
        opacity={showButtons ? 1 : 0}
        transition="opacity 0.5s"
        position={"absolute"}
        right={4}
        top={4}
      >
        <SocialsRow />
      </Box>
      <Box
        display={"flex"}
        flexDir={isDesktop ? "row" : "column"}
        width={"100%"}
        alignItems="center"
        justifyContent="center"
        maxWidth={"1280px"}
      >
        <Box
          display={"flex"}
          alignItems="center"
          width={isDesktop ? "50%" : "70%"}
        >
          <img
            style={{
              width: "100%",
              filter: isGrayed
                ? "blur(6px) grayscale(1)"
                : "blur(0) grayscale(0)",
              transition: "filter 0.5s",
            }}
            src={profile}
            alt="profile"
          />
        </Box>
        <Box
          width={"100%"}
          display="flex"
          alignItems="center"
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Typewriter
            duration={1000}
            content={`Hi, I'm Ashley...`}
            fontSize={isDesktop ? "4rem" : "3rem"}
          />
          <Box position={"relative"} width={"100%"} marginTop={4}>
            <Typewriter
              delay={2000}
              duration={1000}
              color="primary.500"
              content={`a software tinkerer!`}
              fontWeight={"bold"}
              fontSize={isDesktop ? "5rem" : "4rem"}
            />
            {!isGrayed ? (
              <>
                <Box position={"absolute"} right={8} top={"20%"}>
                  <ExplosionPiece
                    imgSrc={screwImg}
                    size={"50px"}
                    x={50}
                    y={-50}
                    rotate={360}
                  />
                </Box>
                <Box position={"absolute"} left={"35%"} top={2}>
                  <ExplosionPiece
                    imgSrc={spannerImg}
                    size={"50px"}
                    x={-40}
                    y={-35}
                    rotate={-270}
                  />
                </Box>
                <Box position={"absolute"} left={"5%"} top={"50%"}>
                  <ExplosionPiece
                    imgSrc={cogImg}
                    size={"50px"}
                    x={-40}
                    y={-70}
                    rotate={-270}
                  />
                </Box>
                <Box position={"absolute"} left={"15%"} bottom={"15%"}>
                  <ExplosionPiece
                    imgSrc={sawImg}
                    size={"50px"}
                    x={-40}
                    y={50}
                    rotate={-360}
                  />
                </Box>
                {isDesktop ? (
                  <>
                    <Box position={"absolute"} left={"60%"} top={"15%"}>
                      <ExplosionPiece
                        imgSrc={shovelImg}
                        size={"50px"}
                        x={-40}
                        y={-50}
                        rotate={-360}
                      />
                    </Box>

                    <Box position={"absolute"} right={"5%"} bottom={"15%"}>
                      <ExplosionPiece
                        imgSrc={fishImg}
                        size={"50px"}
                        x={-40}
                        y={50}
                        rotate={-360}
                      />
                    </Box>
                  </>
                ) : null}
              </>
            ) : null}
          </Box>
          {showButtons ? (
            <Box display={"flex"} flexWrap="wrap" justifyContent={"center"}>
              <Button
                margin={2}
                size={"lg"}
                colorScheme="teal"
                variant={"outline"}
                onClick={() =>
                  scroller.scrollTo("projects-anchor", {
                    duration: 500,
                    smooth: true,
                  })
                }
              >
                <Box marginRight={2} color={"primary.500"}>
                  Check out my work!
                </Box>
                <TiSpanner size={"1.5rem"} color="red" />
              </Button>
              <Button
                color={"gray.700"}
                margin={2}
                size={"lg"}
                onClick={() =>
                  scroller.scrollTo("journey-anchor", {
                    duration: 500,
                    smooth: true,
                  })
                }
              >
                <Box marginRight={2}>Whats my journey?</Box>
                <AiFillFlag size={"1.5rem"} />
              </Button>
            </Box>
          ) : null}
        </Box>
      </Box>
      <Box
        cursor={showButtons ? "pointer" : "auto"}
        opacity={showButtons ? 1 : 0}
        transition="opacity 1s"
        className="pulsate-fwd"
        display={"flex"}
        width={isDesktop ? "100px" : "75px"}
        position="absolute"
        bottom={isDesktop ? 8 : 4}
        onClick={() => {
          if (showButtons) {
            scroller.scrollTo("journey-anchor", {
              duration: 500,
              smooth: true,
            });
          }
        }}
      >
        <img width={"100%"} src={downArrowImg} alt="down" />
      </Box>
    </Box>
  );
};
