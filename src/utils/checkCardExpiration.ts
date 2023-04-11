export const checkCardExpiration = (date: string) => {
    const [month, year] = date.split("/");
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear() % 100;
  
    if (+year < currentYear) {
      return false;
    } else if (+year > currentYear) {
      return true;
    } else {
      if (+month - 1 >= currentMonth) {
        return true;
      } else {
        return false;
      }
    }
  };