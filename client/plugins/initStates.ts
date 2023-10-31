import meQuery from '../graphql/queries/me.gql'

export default defineNuxtPlugin(async () => {
    const { data: meData, error } = await useAsyncQuery<{ id: string }>(meQuery);
    if (meData) {
        console.log(meData.value, error)
        useMe().value = meData.value;
    }
    // const { data: countriesData } = await useAsyncQuery<{
    //     countries: Array<{ code: string }>;
    // }>(countriesQuery);
    // if (countriesData) {
    //     useCountries().value = countriesData.value.countries;
    // }

    // const { data: continentsData } = await useAsyncQuery<{
    //     continents: Array<{ code: string }>;
    // }>(continentsQuery);
    // if (continentsData) {
    //     useContinents().value = continentsData.value.continents;
    // }
});
