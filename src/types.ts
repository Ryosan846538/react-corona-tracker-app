export type CountryDataType = {
  date: string;
  newConfirmed: number;
  totalConfirmed: number;
  newRecovered: number;
  totalRecovered: number;
};

type countriesJsonType = {
  Country: string;
  Slug: string;
};

export type TopPageType = {
  countriesJson: countriesJsonType;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countryData: CountryDataType;
  loading: boolean;
};

export type SelectorType = {
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countriesJson: countriesJsonType;
};

export type ResultsType = {
  countryData: CountryDataType;
  loading: boolean;
};

//interface
interface SingleCountriesDataType {
  Country: string;
  NewConfirmed: number;
  TotalConfirmed: number;
}

export interface AllCountriesDataType extends Array<SingleCountriesDataType> {}
