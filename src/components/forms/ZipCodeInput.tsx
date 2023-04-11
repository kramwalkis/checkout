import { useEffect, useState } from "react";
import { useFormikContext, FormikValues } from "formik";
import { InputWithIconProps } from "../../interface/interfaces";
import { useDebounce } from "../../hooks/useDebounce";
import { ZIP_API_URL, ZIP_CODE_API_KEY } from "../../constants/urls";
import { transformSearchResults } from "../../utils/transformSearchResults";
import CustomSelect from "./CustomSelect";

const ZipCodeInput = ({
  type = "text",
  name,
  value,
  onChange,
  className,
  wrapperStyle,
  labelStyle,
  label,
  error,
  onBlur,
  maxLength,
  icon,
  numbersOnly,
}: InputWithIconProps) => {
  const debouncedValue = useDebounce(value, 500);
  const [results, setResults] = useState<string[]>([]);
  const { setFieldValue } = useFormikContext<FormikValues>();
  useEffect(() => {
    if (debouncedValue) {
      fetch(`${ZIP_API_URL}${ZIP_CODE_API_KEY}&codes=${debouncedValue}`)
        .then((res) => res.json())
        .then((data) =>
          setResults(transformSearchResults(data.results[debouncedValue]))
        );
    }
  }, [debouncedValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (numbersOnly) {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
    onChange(e);
  };

  const handleAdressChange = (value: string | number) => {
    setFieldValue("zipcode", value);
    setResults([]);
  };
  return (
    <div className={wrapperStyle}>
      <label className={labelStyle} htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        {icon}
        <input
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          type={type}
          className={`${className} ${
            error ? "border-red-600 focus:border-red-600" : ""
          }`}
          maxLength={maxLength}
        />
        {error && <div className="absolute -bottom-4 text-xs text-red-700">{error}</div>}
      </div>
      {results.length > 0 ? (
        <CustomSelect
          data={results}
          initialPlaceholder="Choose location"
          width="w-full"
          index={50}
          onChange={handleAdressChange}
        />
      ) : null}
    </div>
  );
};

export default ZipCodeInput;
