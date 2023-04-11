import { useEffect, useState } from "react";
import { useFormikContext, FormikValues } from "formik";
import CustomSelect from "./CustomSelect";
import { MONTHS, DAYS, YEARS } from "../../constants/dates";


const DateOfBirth = () => {
  const { setFieldValue, values, errors } = useFormikContext<FormikValues>();
  const [formIsReset, setFormIsReset] = useState(false)

  useEffect(()=> {
    if (values.dateOfBirth.every((item: string | number)=> !item)) {
      setFormIsReset(true)
    } else {
      setFormIsReset(false)
    }
  }, [values])
  
  const handleChange = (value: string | number, index: number) => {    
    const { dateOfBirth } = values;
    dateOfBirth[index] = value;
    setFieldValue("dateOfBirth", [...dateOfBirth]);
  };
  return (
    <div className="flex flex-col mb-4 sm:mb-5 relative">
      <label
        className="ont-helvetica-neue text-base font-bold pb-1"
        htmlFor="birthDate"
      >
        Birth Date
      </label>
      <div className="flex gap-1 sm:gap-2.5 z-10">
        <CustomSelect
          onChange={handleChange}
          resetValue={formIsReset}
          index={0}
          data={MONTHS}
          initialPlaceholder="Month"
          width="flex-grow"
        />
        <CustomSelect
          onChange={handleChange}
          resetValue={formIsReset}
          index={1}
          data={DAYS}
          initialPlaceholder="Day"
          width="w-1/4"
        />
        <CustomSelect
          onChange={handleChange}
          resetValue={formIsReset}
          index={2}
          data={YEARS}
          initialPlaceholder="Year"
          width="w-1/4"
        />
      </div>
      {errors.dateOfBirth && (
        <div className="absolute -bottom-4 text-xs text-red-700 z-0">
          {JSON.stringify(errors.dateOfBirth).replace(/"/g, "")}
        </div>
      )}
    </div>
  );
};

export default DateOfBirth;
