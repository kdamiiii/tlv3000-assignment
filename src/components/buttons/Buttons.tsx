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
      className={`flex gap-2 text-white justify-center items-center hover:bg-blue-800 rounded-full w-full bg-blue-900 ${className}`}
      onClick={() => handleOnClick()}
    >
      {children}
    </button>
  );
};
