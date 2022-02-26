export interface Continents {
  id: string;
  name: string;
  title: string;
  description: string;
  countries_number: number;
  cities: any[];
  plusCities: number;
  imgs?: string[];
}

export interface ITravelTypes {
  title: string;
  icon_path: string;
}
