import countriesQuery from "../graphql/queries/countries.gql";
import continentsQuery from "../graphql/queries/continents.gql";

export default defineNuxtPlugin(async () => {
    console.log('query')
  const { data: countriesData } = await useAsyncQuery<{
    countries: Array<{ code: string }>;
  }>(countriesQuery);
  if (countriesData) {
    useCountries().value = countriesData.value.countries;
  }

  const { data: continentsData } = await useAsyncQuery<{
    continents: Array<{ code: string }>;
  }>(continentsQuery);
  if (continentsData) {
    useContinents().value = continentsData.value.continents;
  }
});
