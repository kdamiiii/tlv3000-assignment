import { ReactNode } from "react";

export type ButtonProps = {
  className?: string;
  children: ReactNode | string;
  handleOnClick: () => void;
};

export const RoundedButton: React.FC<ButtonProps> = ({
  handleOnClick,
  className,
  children,
}) => {
  return (
    <button
      className={`rounded-full bg-blue-900 ${className}`}
      onClick={() => handleOnClick()}
    >
      {children}
    </button>
  );
};
