import * as Yup from "yup";
import { validateDateOfBirth } from "../utils/validateDateOfBirth";
import { checkCardExpiration } from "../utils/checkCardExpiration";

export interface ButtonProps {
  name: string;
  className: string;
  type: "button" | "submit" | "reset" | undefined;
}

export interface CustomSelectProps {
  data: string[] | number[];
  initialPlaceholder: string | number;
  width: string;
  onChange: (value: string | number, index: number) => void;
  index: number;
}

export interface InputProps {
  type?: string;
  name: string;
  value: string;
  numbersOnly?: boolean;
  expirationDateFormat?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string | false | undefined;
  className?: string;
  wrapperStyle?: string;
  labelStyle?: string;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  creditCard?: boolean;
}

export interface InputWithIconProps extends InputProps {
  icon: React.ReactNode;
}

export interface FormValues {
  fullName: string;
  email: string;
  zipcode: string;
  dateOfBirth: string[];
  gender: string;
  cardHolderName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

export interface RadioInputProps {
  name: string;
  values: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const initialValues: FormValues = {
  fullName: "",
  email: "",
  zipcode: "",
  dateOfBirth: ["", "", ""],
  gender: "female",
  cardHolderName: "",
  cardNumber: "",
  expirationDate: "",
  cvv: "",
};

export const validationSchema = Yup.object({
  fullName: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z]{2,}(?: [a-zA-Z]{2,})+$/, "Invalid name"),
  email: Yup.string()
    .email("Invalid email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email"
    )
    .required("Email is required"),
  dateOfBirth: Yup.array().test(
    "Test if all fields are set",
    "You are too young",
    function (values) {
      return validateDateOfBirth(values);
    }
  ),
  cardHolderName: Yup.string().required("Please enter a card holder name"),
  cardNumber: Yup.string().required('Please enter card number').min(15, 'Please enter a valid card number'),
  expirationDate: Yup.string()
    .required("Enter card expiration date")
    .test("Test for current month", "Your card has expired", function (value) {
      return checkCardExpiration(value);
    }),
    cvv: Yup.string().required('Enter CVV'),
    zipcode: Yup.string().required('Enter Zip Code')
});

export interface ZipCodeResults {
  city: string | null;
  city_en: string | null;
  country_code: string | null;
  latitude: string | null;
  longitude: string | null;
  postal_code: string | null;
  province: string | null;
  province_code: string | null;
  state: string | null;
  state_code: string | null;
  state_en: string | null;
}
