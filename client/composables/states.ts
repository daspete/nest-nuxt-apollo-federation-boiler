// export const useCountries = () =>
//     useState<Array<{ code: string }>>("countries", () => []);

// export const useContinents = () =>
//     useState<Array<{ code: string }>>("continents", () => []);

interface MeProps {
    id?: string;
}

export const useMe = () => useState<MeProps>("me", () => { return {} });
