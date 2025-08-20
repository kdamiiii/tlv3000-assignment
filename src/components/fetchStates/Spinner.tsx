import { ImSpinner8 } from "react-icons/im";

export const CenterSpinner: React.FC<{ size?: number }> = ({ size = 55 }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <ImSpinner8
        color="black dark:white"
        className="animate-spin text-brand brand dark:text-brand"
        size={size}
      />
    </div>
  );
};
