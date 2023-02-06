export default {
    install(Vue) {
        Vue.prototype.$apiUrl = "http://localhost:53464/api/";

        Vue.prototype.$baseConfigInfo = {
            apiUrl: "http://localhost:53464/api/values",
            sex: true,
            state: false,
        };


    }
}
