import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './action';
import * as mutations from './mutations';
import * as getters from './getter';


Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        DeviceList: [],//设备集合所用

    },
    getters,
    actions,
    mutations,
});