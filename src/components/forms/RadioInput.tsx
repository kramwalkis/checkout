import { useState } from "react";

const RadioInput = ({ name, values }: { name: string; values: string[] }) => {
  const [value, setValue] = useState(values[0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setValue(e.target.value);
    }
  };
  return (
    <>
      <label
        className="font-helvetica-neue text-base font-bold pb-1"
        htmlFor={name}
      >
        {name}
      </label>
      <div className="flex justify-between gap-3">
        {values.map((item) => (
          <div
            key={item}
            className={`w-full flex justify-center items-center rounded gap-2 px-3 py-2 border ${
              item === value ? "bg-blue-600" : null
            } ${item === value ? "border-blue-600" : null}`}
          >
            <input
              className="w-4 h-4 cursor-pointer appearance-none rounded-full border shadow-sm checked:border-4"
              type="radio"
              checked={item === value ? true : false}
              name={name}
              value={item}
              onChange={handleChange}
            />
            <label
              className={`font-helvetica-neue text-lg ${
                item === value ? "text-white" : null
              }`}
              htmlFor={item}
            >
              {item}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default RadioInput;
