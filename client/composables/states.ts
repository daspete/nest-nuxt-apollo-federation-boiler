export const useCountries = () =>
  useState<Array<{ code: string }>>("countries", () => []);

export const useContinents = () =>
  useState<Array<{ code: string }>>("continents", () => []);
