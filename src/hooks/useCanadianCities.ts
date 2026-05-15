import { useMemo } from 'react';
import { City } from 'country-state-city';

export const useCanadianCities = () => {
  const cities = useMemo(() => {
    const allCities = City.getCitiesOfCountry('CA');
    return allCities?.map((city) => ({
      value: `${city.name}, ${city.stateCode}`,
      label: `${city.name}, ${city.stateCode}`
    }));
  }, []);

  return cities;
};
