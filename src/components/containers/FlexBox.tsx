import { ReactNode } from "react";

export type FlexBoxProps = {
  children: ReactNode;
  className?: string;
};

export const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  className = "",
}) => {
  return <div className={`flex p-5 flex-stretch ${className}`}>{children}</div>;
};
