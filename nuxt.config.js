import parseArgs from "minimist";

const argv = parseArgs(process.argv.slice(2), {
    alias: {
        H: "hostname",
        p: "port"
    },
    string: ["H"],
    unknown: parameter => false
});

const port =
    argv.port ||
    process.env.PORT ||
    process.env.npm_package_config_nuxt_port ||
    "3000";
const host =
    argv.hostname ||
    process.env.HOST ||
    process.env.npm_package_config_nuxt_host ||
    "localhost";

export default {
    env: {
        baseUrl: process.env.BASE_URL || `http://${host}:${port}`
    },
    head: {
        title: "shop",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "Nuxt.js project"
            }
        ],
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#3B8070" },
    /*
     ** Build configuration
     */
    plugins: [
        "~/plugins/vuetify.js",
        { src: "~/plugins/vue-awesome-swiper.js", ssr: false }
    ],
    css: ["~/assets/style/app.styl"],
    //   css: ["~/assets/css/main.css"],
    build: {},
    modules: ["@nuxtjs/axios", "~/modules/typescript.js"],
    axios: {
        baseURL: "http://test1.dressyourkid.ru:8080", // process.env.API_URL overrides it
        browserBaseURL: "http://test1.dressyourkid.ru:8080" // process.env.API_URL_BROWSER overrides it
    }
};
