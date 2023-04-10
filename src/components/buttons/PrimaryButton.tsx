interface ButtonProps {
  name: string;
  className: string;
  type: "button" | "submit" | "reset" | undefined;
}

const PrimaryButton = ({ name, className, type }: ButtonProps) => {
  return (
    <button type={type} className={className}>
      {name}
    </button>
  );
};

export default PrimaryButton;
