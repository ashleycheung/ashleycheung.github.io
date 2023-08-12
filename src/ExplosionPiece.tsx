import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ExplosionPieceProps {
  imgSrc: string;
  x: number;
  y: number;
  rotate: number;
  size: string;
}

export const ExplosionPiece = ({
  imgSrc,
  x,
  y,
  rotate,
  size,
}: ExplosionPieceProps) => {
  return (
    <motion.div animate={{ x, y, rotate }} transition={{ type: "spring" }}>
      <Box width={size}>
        <img src={imgSrc} width={"100%"} alt="explosion piece" />
      </Box>
    </motion.div>
  );
};
