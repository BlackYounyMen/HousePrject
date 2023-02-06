import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './action';
import * as mutations from './mutations';
import * as getters from './getter';


Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        DeviceList: [],//设备集合所用
        DeviveItem: [], //设备遍历所用
        page: {
            total: 0, //总行数
            totalpage: 0,//总页数
        },
        BackState: false, //后台返回前台的值
        FirstSelectItem: [],//获取第一个下拉框集合
        SecondSelectItem: [],//获取第二个下拉框集合
        CustomerList: [],//获取客户所有数据
        CustomerStateList: [],//获取行标题是否显示的数据   列的配置化对象，存储配置信息
        PersonChargeList: [],//获取负责人数据
        AllPersonChargeList: [],//获取客户所有数据反填
        HumanResourcesList: []//获取人力资源管理获取数据

    },
    getters,
    actions,
    mutations,
});