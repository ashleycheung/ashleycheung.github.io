import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface TypewriterProps {
  content: string;
  duration: number;
  delay?: number;
  color?: string;
  fontWeight?: string;
  fontSize?: string;
}

export const Typewriter = ({
  color,
  content,
  duration,
  delay,
  fontWeight,
  fontSize,
}: TypewriterProps) => {
  const [displayedNum, setDisplayedNum] = useState(0);
  const [delayTimeLeft, setDelayTimeLeft] = useState(delay ?? 0);
  const [timeoutId, setTimeoutId] = useState<any | null>(null);

  useEffect(() => {
    if (delay !== 0) {
      const timeId = setTimeout(() => {
        setDelayTimeLeft(0);
      }, delay);
      return () => {
        clearTimeout(timeId);
      };
    }
  }, [delay]);

  useEffect(() => {
    if (
      displayedNum !== content.length &&
      timeoutId === null &&
      delayTimeLeft === 0
    ) {
      setTimeoutId(
        setTimeout(() => {
          setDisplayedNum(displayedNum + 1);
          setTimeoutId(null);
        }, duration / Math.max(1, content.length))
      );
    }
  }, [content.length, delayTimeLeft, displayedNum, duration, timeoutId]);

  return (
    <Box
      color={color}
      fontSize={fontSize}
      textAlign="center"
      fontWeight={fontWeight}
    >
      {content.slice(0, displayedNum)}
    </Box>
  );
};
