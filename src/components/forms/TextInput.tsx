import { InputProps } from "../../interface/interfaces";
import Cleave from "cleave.js/react";

const TextInput = ({
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  className,
  wrapperStyle,
  labelStyle,
  label,
  placeholder,
  maxLength,
  numbersOnly,
  expirationDateFormat,
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (numbersOnly) {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
    if (expirationDateFormat) {      
      e.target.value = e.target.value
        .replace(/[^\d]/g, "")
        .slice(0, 4)
        .replace(/(\d{2})(\d{0,2})/, "$1/$2");
    }
    onChange(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.trim();
    if (onBlur) {
      onBlur(e);
    }
    onChange(e);
  };

  return (
    <div className={wrapperStyle}>
      {label && (
        <label className={labelStyle} htmlFor={name}>
          {label}
        </label>
      )}
      {expirationDateFormat ? (
        <Cleave
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={onFocus}
          className={`${className} ${
            error ? "border-red-600 focus:border-red-600" : ""
          }`}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          options={{ date: true, datePattern: ["m", "y"] }}
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={onFocus}
          className={`${className} ${
            error ? "border-red-600 focus:border-red-600" : ""
          }`}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      )}

      {error && (
        <div className="absolute -bottom-4 text-xs text-red-700">{error}</div>
      )}
    </div>
  );
};

export default TextInput;
