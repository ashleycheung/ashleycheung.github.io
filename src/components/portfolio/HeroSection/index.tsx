import { Header } from "@/components/utils/Header";
import { Box, Button, Image } from "@chakra-ui/react";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { Polaroid } from "./Polaroid";
import { useEffect, useState } from "react";
import { ExplosionPiece } from "../ExplosionPiece";
import screwImg from "/public/assets/screw.svg";
import cogImg from "/public/assets/cog.svg";
import sawImg from "/public/assets/saw.svg";
import shovelImg from "/public/assets/shovel.svg";
import spannerImg from "/public/assets/spanner.svg";
import fishImg from "/public/assets/fish.svg";
import { Typewriter } from "../Typewriter";
import brushstrokeImg from "/public/assets/brushstroke.png";
import { scroller } from "react-scroll";
import { TiSpanner } from "react-icons/ti";
import { AiFillFlag } from "react-icons/ai";
import { SocialsRow } from "../SocialsRow";

const SHOW_FIRST_TEXT = 0;
const EXPLOSION_TIME_MS = SHOW_FIRST_TEXT + 500;
const SHOW_JOB_TITLE_TIME_MS = EXPLOSION_TIME_MS + 1000;
const JOB_TITLE_TYPE_TIME = 800;
const SHOW_BRUSH_TIME_MS = SHOW_JOB_TITLE_TIME_MS + JOB_TITLE_TYPE_TIME + 100;
const SHOW_BUTTONS_TIME_MS = SHOW_BRUSH_TIME_MS + 500;

export const HeroSection = () => {
  const isDesktop = useIsDesktop();

  const [showFirstText, setShowFirstText] = useState(false);
  const [showBrush, setShowBrush] = useState(false);
  const [showJobTitle, setShowJobTitle] = useState(false);
  const [hasExploded, setHasExploded] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFirstText(true);
    }, SHOW_FIRST_TEXT);
    setTimeout(() => {
      setHasExploded(true);
    }, EXPLOSION_TIME_MS);
    setTimeout(() => {
      setShowJobTitle(true);
    }, SHOW_JOB_TITLE_TIME_MS);
    setTimeout(() => {
      setShowBrush(true);
    }, SHOW_BRUSH_TIME_MS);
    setTimeout(() => {
      setShowButtons(true);
    }, SHOW_BUTTONS_TIME_MS);
  }, []);

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDir={"column"}
      position={"relative"}
      alignItems={"center"}
      overflow={"hidden"}
    >
      <Box position={"absolute"} top={0} left={0} right={0} zIndex={99}>
        <Header show={true} />
      </Box>
      <Box
        position={"relative"}
        width={"100%"}
        maxWidth={"1000px"}
        height={"100%"}
      >
        <Box
          position={"absolute"}
          pointerEvents={"none"}
          {...(isDesktop
            ? {
                top: "50%",
                left: "0%",
                transform: "translate(0%, -50%) rotate(-5deg)",
                width: "50%",
                height: "60%",
                maxW: "400px",
                maxH: "500px",
              }
            : {
                top: "50%",
                left: "50%",
                transform: "translateY(-160%) rotate(-5deg)",
                width: "150px",
                height: "150px",
              })}
        >
          <Polaroid
            opacity={hasExploded ? 1 : 0}
            animation={
              hasExploded ? "scale-in-center 0.5s forwards ease-out" : undefined
            }
          />
        </Box>
        <Box
          top={"50%"}
          {...(isDesktop
            ? {
                right: "0%",
                transform: "translateY(-50%)",
              }
            : {
                left: "50%",
                transform: "translate(-50%, -50%)",
              })}
          maxWidth={"500px"}
          height={"60%"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          position={"absolute"}
          animation={"fade-in 0.5s forwards linear"}
        >
          <Box
            fontSize={"2rem"}
            fontFamily={"platypi"}
            letterSpacing={2}
            opacity={"0"}
            marginBottom={10}
            animation={
              showFirstText ? "drop-in-fade 0.5s forwards ease-out" : undefined
            }
          >
            Hi! I'm
          </Box>
          <Box position={"relative"} width={"100%"}>
            <Box
              whiteSpace={"nowrap"}
              transform={
                hasExploded
                  ? `rotate(3deg) scale(1)`
                  : `rotate(-4deg) scale(0.5)`
              }
              opacity={hasExploded ? "1" : "0"}
              transition={`all 0.3s ease-out`}
              fontFamily={"SuperPencil, sans-serif"}
              fontSize={isDesktop ? "8rem" : "5rem"}
              lineHeight={"90%"}
              textAlign={"center"}
            >
              Ashley
            </Box>
            <Box
              bottom={0}
              left={"50%"}
              transform={"translate(-50%, 100%)"}
              position={"absolute"}
              marginTop={8}
              zIndex={5}
              opacity={showJobTitle ? "1" : "0"}
              transition={`all 0.3s ease-out`}
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              minWidth={"100%"}
            >
              <Typewriter
                delay={SHOW_JOB_TITLE_TIME_MS}
                duration={JOB_TITLE_TYPE_TIME}
                content={`a full stack software engineer!`}
                fontSize={isDesktop ? "1.5rem" : "1.2rem"}
                fontWeight={"bold"}
                fontFamily={"Sketchy, sans-serif"}
                whiteSpace={"nowrap"}
              />
              <Image
                src={brushstrokeImg.src}
                opacity={"0.9"}
                width={isDesktop ? "130%" : "100%"}
                height={"20px"}
                position={"absolute"}
                top={"100%"}
                left={"50%"}
                transform={`translateX(-50%) scaleX(${showBrush ? "1" : "0"})`}
                transition={"all 0.2s"}
                transformOrigin={"left"}
              />
            </Box>
            {isDesktop ? (
              <>
                <Box position={"absolute"} right={8} top={"0%"}>
                  <ExplosionPiece
                    imgSrc={screwImg.src}
                    size={"50px"}
                    x={40}
                    y={-50}
                    rotate={360}
                    explode={hasExploded}
                  />
                </Box>
                <Box position={"absolute"} right={"-10%"} bottom={"70%"}>
                  <ExplosionPiece
                    imgSrc={fishImg.src}
                    size={"50px"}
                    x={10}
                    y={60}
                    rotate={-360}
                    explode={hasExploded}
                  />
                </Box>
                <Box position={"absolute"} left={"0%"} top={"70%"}>
                  <ExplosionPiece
                    imgSrc={cogImg.src}
                    size={"50px"}
                    x={-35}
                    y={-130}
                    rotate={-270}
                    explode={hasExploded}
                  />
                </Box>
                <Box position={"absolute"} left={"-5%"} bottom={"105%"}>
                  <ExplosionPiece
                    imgSrc={sawImg.src}
                    size={"50px"}
                    x={-50}
                    y={70}
                    rotate={-360}
                    explode={hasExploded}
                  />
                </Box>
                <Box position={"absolute"} left={"35%"} top={"-25%"}>
                  <ExplosionPiece
                    imgSrc={spannerImg.src}
                    size={"50px"}
                    x={-40}
                    y={-35}
                    rotate={-270}
                    explode={hasExploded}
                  />
                </Box>
                <Box position={"absolute"} left={"60%"} top={"-15%"}>
                  <ExplosionPiece
                    imgSrc={shovelImg.src}
                    size={"50px"}
                    x={-40}
                    y={-50}
                    rotate={-360}
                    explode={hasExploded}
                  />
                </Box>
              </>
            ) : null}
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            width={"100%"}
            flexDir={isDesktop ? "row" : "column"}
            marginTop={"100px"}
            opacity={showButtons ? "1" : "0"}
            animation={
              showButtons ? "drop-in-fade 0.5s forwards ease-out" : undefined
            }
          >
            <Button
              margin={isDesktop ? 2 : 1}
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
              <TiSpanner size={"1.5rem"} />
            </Button>
            <Button
              color={"gray.700"}
              variant={"outline"}
              margin={isDesktop ? 2 : 1}
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
        </Box>
      </Box>
    </Box>
  );
};
