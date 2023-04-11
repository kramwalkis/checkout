import { ButtonProps } from "../../interface/interfaces";

const PrimaryButton = ({ name, className, type }: ButtonProps) => {
  return (
    <button type={type} className={className}>
      {name}
    </button>
  );
};

export default PrimaryButton;
