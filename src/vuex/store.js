import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './action';
import * as mutations from './mutations';
import * as getters from './getter';


Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        meunitem: [],
        DeviceList: [],//设备集合所用
        DeviveItem: [], //设备遍历所用
        page: {
            total: 0, //总行数
            totalpage: 0,//总页数
        },
        BackState: false, //后台返回前台的值
        FirstSelectItem: [],//获取第一个下拉框集合
        SecondSelectItem: [],//获取第二个下拉框集合
        ThirtdSelectItem: [],//获取第三个下拉框集合
        CustomerList: [],//获取客户所有数据
        CustomerStateList: [],//获取行标题是否显示的数据   列的配置化对象，存储配置信息
        PersonChargeList: [],//获取负责人数据
        AllPersonChargeList: [],//获取客户所有数据反填
        HumanResourcesList: [],//获取人力资源管理获取数据
        Loglist: [],//获取日志管理的数据反填
        AnnouncementList: [],//获取公告数据
        asklist: [],//获取请假数据
        Fiekdworklist: [],//获取外勤数据
        OnBusinesslist: [],//获取出差数据
        FireDoorlist: [],//获取消防门数据
        Fanlist: [],//获取消防风机
        ElectricMeterlist: [],//获取电数据
        Loginlist: [],//获取登录日志数据
    },
    getters,
    actions,
    mutations,
});