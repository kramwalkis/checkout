import { InputWithIconProps } from "../../interface/interfaces";

const TextInputWithIcon = ({
  type = "text",
  name,
  className,
  wrapperStyle,
  labelStyle,
  label,
  maxLength,
  icon,
}: InputWithIconProps) => {
  return (
    <div className={wrapperStyle}>
      <label className={labelStyle} htmlFor={name}>{label}</label>
      <div  className="relative">
        {icon}
        <input type={type} className={className} maxLength={maxLength}/>
      </div>
    </div>
  );
};

export default TextInputWithIcon;
