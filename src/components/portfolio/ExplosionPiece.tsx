import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ExplosionPieceProps {
  imgSrc: string;
  x: number;
  y: number;
  rotate: number;
  size: string;
  explode: boolean;
}

export const ExplosionPiece = ({
  imgSrc,
  x,
  y,
  rotate,
  size,
  explode,
}: ExplosionPieceProps) => {
  return (
    <motion.div
      animate={explode ? { x, y, rotate } : { x: 0, y: 0, rotate: 0 }}
      transition={{ type: "spring" }}
    >
      <Box width={size} opacity={explode ? 1 : 0}>
        <img src={imgSrc} width={"100%"} alt="explosion piece" />
      </Box>
    </motion.div>
  );
};
