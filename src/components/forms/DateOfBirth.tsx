import CustomSelect from "./CustomSelect";
const MONTHS = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS = [1,2,3,4,5,6,7,8,9,10,11]
const YEAR = [1900,1901,1902,1903,1904,1905,1906,1907]

const DateOfBirth = () => {
  return (
    <div className="flex flex-col mb-4 sm:mb-5">
      <label
        className="ont-helvetica-neue text-base font-bold pb-1"
        htmlFor="birthDate"
      >
        Birth Date
      </label>
      <div className="flex gap-1 sm:gap-2.5">
        <CustomSelect data={MONTHS} initialPlaceholder='Month' width='flex-grow'/>
        <CustomSelect data={DAYS} initialPlaceholder='Day' width='w-1/4'/>
        <CustomSelect data={YEAR} initialPlaceholder='Year' width='w-1/4'/>
      </div>
    </div>
  );
};

export default DateOfBirth;
