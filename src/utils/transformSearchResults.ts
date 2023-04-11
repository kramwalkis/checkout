import { ZipCodeResults } from "../interface/interfaces";

export const transformSearchResults = (array: ZipCodeResults[]) => {
    return array.map(
      (item) => `${item.postal_code}, ${item.city}, ${item.country_code}`
    );
  };