import { CSSProperties, ReactNode } from "react";

interface BoldProps {
  style?: CSSProperties;
  children?: ReactNode;
}

export const Bold = ({ style, children }: BoldProps) => {
  return (
    <span
      style={{
        fontWeight: "600",
        ...style,
      }}
    >
      {children}
    </span>
  );
};
