import { FC } from "react";
import { Formik, Form } from "formik";
import TextInput from "./TextInput";
import TextInputWithIcon from "./TextInputWithIcon";
import DateOfBirth from "./DateOfBirth";
import RadioInput from "./RadioInput";
import PrimaryButton from "../buttons/PrimaryButton";
import ZipCodeInput from "./ZipCodeInput";
import CardLockIcon from "../../assets/icons/CardLockIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import {
  initialValues,
  FormValues,
  validationSchema,
} from "../../interface/interfaces";
import { useToggleModal } from "../../context/modalContext";

const CheckOutForm: FC = () => {
  const toggleModal = useToggleModal();
  return (
    <>
      <h2 className="font-helvetica-neue text-xl font-bold text-center mb-3.5 sm:mb-9">
        Get your Car Insurance for $9.99
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: FormValues, { resetForm, setFieldValue }) => {
          fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
              title: "foo",
              body: values,
              userId: 1,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then(() => {
              resetForm();
              setFieldValue("dateOfBirth", ["", "", ""]);
              toggleModal();
            });
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          errors,
          touched,
          handleBlur,
          setFieldValue,
        }) => {
          const addDefaultCardHolderName = () => {
            if (!values.cardHolderName) {
              setFieldValue("cardHolderName", values.fullName);
            }
          };
          return (
            <Form onSubmit={handleSubmit}>
              <TextInput
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.fullName && touched.fullName && errors.fullName}
                className="primary-input"
                label="Full Name"
                labelStyle="primary-label"
                wrapperStyle="flex flex-col mb-4 sm:mb-5 relative"
              />
              <TextInput
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email && errors.email}
                className="primary-input"
                label="Email"
                labelStyle="primary-label"
                wrapperStyle="flex flex-col mb-4 sm:mb-5 relative"
              />
              <ZipCodeInput
                name="zipcode"
                value={values.zipcode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.zipcode && touched.zipcode && errors.zipcode}
                numbersOnly={true}
                className="primary-input w-full pl-8 z-50"
                label="Zip Code"
                labelStyle="primary-label"
                wrapperStyle="flex flex-col mb-4 sm:mb-5 relative"
                icon={
                  <LocationIcon className="w-5 h-5 pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-1.5" />
                }
              />
              <DateOfBirth />

              <RadioInput
                value={values.gender}
                onChange={handleChange}
                name="gender"
                values={["female", "male"]}
              />
              <div className="rounded bg-neutral-50 border border-grayish p-2 sm:px-6 sm:pb-6 sm:pt-4 mt-4 sm:mt-5">
                <TextInput
                  name="cardHolderName"
                  value={values.cardHolderName}
                  onChange={handleChange}
                  onFocus={addDefaultCardHolderName}
                  onBlur={handleBlur}
                  error={
                    errors.cardHolderName &&
                    touched.cardHolderName &&
                    errors.cardHolderName
                  }
                  className="primary-input"
                  label="Card Holder Name"
                  labelStyle="primary-label text-sm sm:text-base"
                  wrapperStyle="flex flex-col mb-4 sm:mb-5 relative"
                />
                <TextInputWithIcon
                  name="cardNumber"
                  value={values.cardNumber}
                  numbersOnly={true}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.cardNumber && touched.cardNumber && errors.cardNumber
                  }
                  maxLength={19}
                  creditCard={true}
                  className="primary-input w-full"
                  label="Card Number"
                  labelStyle="primary-label text-sm sm:text-base"
                  wrapperStyle="flex flex-col mb-4 sm:mb-5 relative"
                  icon={
                    <CardLockIcon className="w-3 h-3 pointer-events-none absolute top-1/2 transform -translate-y-1/2 right-2" />
                  }
                />
                <div className="flex flex-row mb-4 sm:mb-5 gap-1 sm:gap-2.5">
                  <TextInput
                    name="expirationDate"
                    value={values.expirationDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      errors.expirationDate &&
                      touched.expirationDate &&
                      errors.expirationDate
                    }
                    expirationDateFormat={true}
                    placeholder="MM/YY"
                    className="primary-input w-full"
                    label="Expiration Date"
                    labelStyle="primary-label text-sm sm:text-base"
                    wrapperStyle="flex flex-col w-fit relative"
                    maxLength={5}
                  />
                  <TextInput
                    name="cvv"
                    value={values.cvv}
                    error={errors.cvv && touched.cvv && errors.cvv}
                    numbersOnly={true}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={3}
                    className="primary-input w-full"
                    label="CVV"
                    labelStyle="primary-label text-sm sm:text-base"
                    wrapperStyle="flex flex-col w-fit relative"
                  />
                </div>
              </div>
              <PrimaryButton
                type="submit"
                name="CONTINUE"
                className="text-center font-open-sans text-lg font-bold text-white cursor-pointer py-3 rounded w-full bg-green-500 border border-green-500 "
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default CheckOutForm;
