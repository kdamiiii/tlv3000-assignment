export type TextProps = {
  children: string;
};

export const GrayText: React.FC<TextProps> = ({ children }) => {
  return <p className="text-gray-400 italic">{children}</p>;
};
