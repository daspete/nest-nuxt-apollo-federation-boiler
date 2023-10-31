// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo"],
    apollo: {
        clients: {
            default: {
                httpEndpoint: "http://graph.towerdefense.test/graphql",
                httpLinkOptions: {
                    credentials: "include",
                },
            },
        },
    },
});
