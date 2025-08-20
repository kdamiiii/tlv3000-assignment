import { FlexBox } from "../containers/FlexBox";

export type CardProps = {
  className: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <FlexBox
      className={`flex-col bg-white rounded-md shadow-[_0px_0px_1px_1px_rgba(0,0,0,0.05)] ${className}`}
    >
      {children}
    </FlexBox>
  );
};
