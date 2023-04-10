import { InputProps } from "../../interface/interfaces";
const TextInput = ({
  type = "text",
  name,
  className,
  wrapperStyle,
  labelStyle,
  label,
  placeholder,
  maxLength
}: InputProps) => {
  
  return (
    <div className={wrapperStyle}>
    {label && (
      <label className={labelStyle} htmlFor={name}>
        {label}
      </label>
    )}
    <input className={className} name={name} type={type}  placeholder={placeholder} maxLength={maxLength}/>
  </div>
  );
};

export default TextInput;
