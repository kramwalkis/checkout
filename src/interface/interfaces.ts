export interface InputProps {
  type?: string;
  name: string;
  className?: string;
  wrapperStyle?: string;
  labelStyle?: string;
  label?: string;
  placeholder?: string;
  maxLength?: number;
}

export interface InputWithIconProps extends InputProps {
    icon: React.ReactNode;
  }