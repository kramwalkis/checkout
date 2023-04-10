import { FC } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import TextInputWithIcon from "./TextInputWithIcon";
import DateOfBirth from "./DateOfBirth";
import RadioInput from "./RadioInput";
import LocationIcon from "../../assets/icons/LocationIcon";
import CardLockIcon from "../../assets/icons/CardLockIcon";
import PrimaryButton from "../buttons/PrimaryButton";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  // name: Yup.string().required("Name is required"),
  // email: Yup.string().email("Invalid email").required("Email is required"),
  // message: Yup.string().required("Message is required"),
});

const CheckOutForm: FC = () => {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
    // handle form submission here
  };
  return (
    <>
      <h2 className="font-helvetica-neue text-xl font-bold text-center mb-3.5 sm:mb-9">
        Get your Car Insurance for $9.99
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSbumit={handleSubmit}
      >
        {() => (
          <form>
            <TextInput
              name="fullName"
              className="primary-input"
              label="Full Name"
              labelStyle="primary-label"
              wrapperStyle="flex flex-col mb-4 sm:mb-5"
            />
            <TextInput
              name="email"
              className="box-border border rounded border-zinc-300 h-9 sm:h-10 p-2"
              label="Email"
              labelStyle="primary-label"
              wrapperStyle="flex flex-col mb-4 sm:mb-5"
            />
            <TextInputWithIcon
              name="zipcode"
              className="primary-input w-full pl-8"
              label="Zip Code"
              labelStyle="primary-label"
              wrapperStyle="flex flex-col mb-4 sm:mb-5"
              icon={
                <LocationIcon className="w-5 h-5 pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-1.5" />
              }
            />
            <DateOfBirth />
            <RadioInput name="Gender" values={["Female", "Male"]} />
            <div className="rounded bg-neutral-50 border border-grayish p-2 sm:px-6 sm:pb-6 sm:pt-4 mt-4 sm:mt-5">
              <TextInput
                name="cardHolderName"
                className="primary-input"
                label="Card Holder Name"
                labelStyle="primary-label text-sm sm:text-base"
                wrapperStyle="flex flex-col mb-4 sm:mb-5"
              />
              <TextInputWithIcon
                name="cardNumber"
                maxLength={16}
                className="primary-input w-full"
                label="Card Number"
                labelStyle="primary-label text-sm sm:text-base"
                wrapperStyle="flex flex-col mb-4 sm:mb-5"
                icon={
                  <CardLockIcon className="w-3 h-3 pointer-events-none absolute top-1/2 transform -translate-y-1/2 right-2" />
                }
              />
              <div className="flex flex-row mb-4 sm:mb-5 gap-1 sm:gap-2.5">
                <TextInput
                  name="expirationDate"
                  placeholder="MM/YY"
                  className="primary-input w-full"
                  label="Expiration Date"
                  labelStyle="primary-label text-sm sm:text-base"
                  wrapperStyle="flex flex-col w-fit"
                />
                <TextInput
                  name="cvv"
                  maxLength={3}
                  className="primary-input w-full"
                  label="CVV"
                  labelStyle="primary-label text-sm sm:text-base"
                  wrapperStyle="flex flex-col w-fit"
                />
              </div>
              <PrimaryButton
                type="button"
                name="CONTINUE"
                className="text-center font-open-sans text-lg font-bold text-white cursor-pointer py-3 rounded w-full bg-green-500 border border-green-500 "
              />
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default CheckOutForm;
