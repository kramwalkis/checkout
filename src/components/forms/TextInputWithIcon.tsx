import { InputWithIconProps } from "../../interface/interfaces";
import Cleave from "cleave.js/react";

const TextInputWithIcon = ({
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  className,
  wrapperStyle,
  labelStyle,
  label,
  maxLength,
  creditCard,
  icon,
  error,
  numbersOnly,
}: InputWithIconProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (numbersOnly) {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
    onChange(e);
  };

  return (
    <div className={wrapperStyle}>
      <label className={labelStyle} htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        {icon}
        {creditCard ? (
          <Cleave
            name={name}
            value={value}
            onChange={handleChange}
            type={type}
            options={{ creditCard: true }}
            className={`${className} ${
              error ? "border-red-600 focus:border-red-600" : ""
            }`}
            maxLength={maxLength}
            onBlur={onBlur}
          />
        ) : (
          <input
            name={name}
            value={value}
            onChange={handleChange}
            type={type}
            className={`${className} ${
              error ? "border-red-600 focus:border-red-600" : ""
            }`}
            maxLength={maxLength}
            onBlur={onBlur}
          />
        )}
      </div>
      {error && (
        <div className="absolute -bottom-4 text-xs text-red-700">{error}</div>
      )}
    </div>
  );
};

export default TextInputWithIcon;
