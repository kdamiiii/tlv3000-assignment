export type InputFormProps = {
  className?: string;
  value: string | null;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
};

export const InputForm: React.FC<InputFormProps> = ({
  className = "",
  value,
  onChange,
  type = "text",
  placeholder = "Type to search",
}) => {
  return (
    <input
      className={`bg-white border-gray-400 border-1 rounded-full text-black p-2 ${className}`}
      type={type}
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};
