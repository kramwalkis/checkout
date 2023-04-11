export const validateDateOfBirth = (values: any) => {
    if (values[0] === "" || values[1] === "" || values[2] === "") {
      return false;
    }
    const monthIndex = [
      "January",
      "February",
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
    ].indexOf(values[0]);
  
    const dob = new Date(values[2], monthIndex, values[1]);
    const today = new Date();
    const eighteenYearsAgo = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );
  
    if (dob > eighteenYearsAgo) {
      return false;
    }
  
    return true;
  };