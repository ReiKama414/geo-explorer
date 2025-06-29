export interface IPData {
  ip: string;
}

export interface GeoData {
  ip: string;
  country_code: string;
  country_code3: string;
  country: string;
  region: string;
  city: string;
  latitude: string;
  longitude: string;
  timezone: string;
}

export interface CountryData {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  languages: { [key: string]: string };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  flags: {
    svg: string;
    png: string;
  };
  timezones: string[];
  cca2: string;
}