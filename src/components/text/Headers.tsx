export type HeaderProps = {
  children: string;
  className?: string;
};

export const H4: React.FC<HeaderProps> = ({ children, className }) => {
  return <h4 className={`text-lg font-bold ${className}`}>{children}</h4>;
};
