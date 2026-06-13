import { CSSProperties, ReactNode } from "react";

interface ItalicsProps {
  style?: CSSProperties;
  children?: ReactNode;
}

export const Italics = ({ style, children }: ItalicsProps) => {
  return (
    <span
      style={{
        fontStyle: "italic",
        ...style,
      }}
    >
      {children}
    </span>
  );
};
