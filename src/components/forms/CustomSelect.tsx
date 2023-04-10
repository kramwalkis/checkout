import { useState } from "react";
import SelectArrows from "../../assets/icons/SelectArrows";

const CustomSelect = ({
  data,
  initialPlaceholder,
  width,
}: {
  data: string[] | number[];
  initialPlaceholder: string;
  width: string;
}) => {
  const [selectedValue, setSelectedValue] = useState(initialPlaceholder);
  const [optionsIsOpen, setOptionsIsOpen] = useState(false);
  const setOption = (option: string | number) => {
    setSelectedValue(option);
    setOptionsIsOpen((prev) => !prev);
  };
  return (
    <div className={`relative ${width}`}>
      <button
        onClick={() => setOptionsIsOpen((prev) => !prev)}
        type="button"
        className={`flex w-full justify-between items-center gap-1 sm:gap-2.5 box-border border rounded border-zinc-300 h-9 sm:h-10 p-2`}
      >
        <span>{selectedValue}</span>
        <SelectArrows className="h-[20px] w-[20px] text-gray-400"/>
      </button>
      {optionsIsOpen && (
        <ul className="absolute overflow-y-auto h-40 w-full bg-white">
          {data.map((item) => (
            <li
              onClick={setOption.bind(this, item)}
              className="hover:bg-slate-100 p-1 cursor-pointer"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
