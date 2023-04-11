import { useState, useEffect, useRef } from "react";
import SelectArrows from "../../assets/icons/SelectArrows";
import { CustomSelectProps } from "../../interface/interfaces";

const CustomSelect = ({
  data,
  initialPlaceholder,
  width,
  onChange,
  index,
}: CustomSelectProps) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [optionsIsOpen, setOptionsIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOptionsIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const setOption = (option: string | number, index: number) => {
    setSelectedValue(String(option));
    setOptionsIsOpen((prev) => !prev);
    onChange(option, index);
  };

  return (
    <div className={`relative ${width} z-${index}`} ref={ref}>
      <button
        onClick={() => setOptionsIsOpen((prev) => !prev)}
        type="button"
        className="flex w-full justify-between items-center gap-1 sm:gap-2.5 box-border border rounded border-zinc-300 h-9 sm:h-10 p-2"
      >
        <span>{selectedValue || initialPlaceholder}</span>
        <SelectArrows className="h-[20px] w-[20px] text-gray-400" />
      </button>
      {optionsIsOpen && (
        <ul className="absolute overflow-y-auto h-40 w-full bg-white">
          {data.map((item) => (
            <li
              onClick={setOption.bind(this, item, index)}
              className="hover:bg-slate-100 bg-white p-1 cursor-pointer"
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
