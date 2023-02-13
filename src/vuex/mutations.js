// 设置水电数据
export const SET_MEUN_COMMIT = (state, seckills) => {
    console.log(seckills);
    state.meunitem = seckills;
};

// 设置水电数据
export const SET_Water_INFO = (state, seckills) => {
    state.page.totalpage = seckills.PageCount;
    console.log(state.page.totalpage)
    state.DeviveItem = seckills.Data;
    var list = [];
    let len = seckills.Data.length;
    let n = 6; //假设每行显示4个
    let lineNum = len % 6 === 0 ? len / 6 : Math.floor(len / 6 + 1);
    for (let i = 0; i < lineNum; i++) {
        // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
        let temp = seckills.Data.slice(i * n, i * n + n);
        list.push(temp);
    }
    state.DeviceList = list;
};
// 设置返回的状态值
export const SET_STATE_UPDATE = (state, seckills) => {
    state.BackState = seckills;
};

//获取第一个下拉框的数据
export const SET_FIRST_ITEM = (state, seckills) => {
    state.FirstSelectItem = seckills;
};

//获取第二个下拉框的数据
export const SET_SECOND_ITEM = (state, seckills) => {
    state.SecondSelectItem = seckills;
};


//获取第二个下拉框的数据
export const SET_THIRTD_ITEM = (state, seckills) => {
    state.ThirtdSelectItem = seckills;
};
//获取客户信息的数据
export const SET_Customer_INFO = (state, seckills) => {
    state.CustomerList = [];
    state.page.totalpage = seckills.PageSize;
    state.page.total = seckills.PageCount;

    state.CustomerList = seckills.Data;
};
//获取行标题是否显示的数据
export const SET_CustomerState_INFO = (state, seckills) => {
    state.CustomerStateList = seckills;
};
//获取客户信息的数据
export const SET_PersonCharge_INFO = (state, seckills) => {
    state.PersonChargeList = [];
    state.page.totalpage = seckills.PageSize;
    state.page.total = seckills.PageCount;

    state.PersonChargeList = seckills.Data;
};

//获取客户全部信息的数据
export const SET_PerSonRecoillist_INFO = (state, seckills) => {

    console.log(seckills)
    state.AllPersonChargeList = seckills;
};

//获取人力资源管理的数据反填
export const SET_HumanResource_Info = (state, seckills) => {
    state.HumanResourcesList = [];
    state.page.totalpage = seckills.PageSize;
    state.page.total = seckills.PageCount;
    state.HumanResourcesList = seckills.Data;


};

//获取日志管理的数据反填
export const SET_LogList_Info = (state, seckills) => {
    state.Loglist = [];
    state.page.totalpage = seckills.PageSize;
    state.page.total = seckills.PageCount;
    state.Loglist = seckills.Data;
};

//获取公告管理的数据反填
export const SET_AnnouncementList_Info = (state, seckills) => {
    state.AnnouncementList = [];
    state.page.totalpage = seckills.PageSize;
    state.page.total = seckills.PageCount;
    state.AnnouncementList = seckills.Data;
}

//获取请假管理的数据
export const SET_asklist_Info = (state, seckills) => {
    state.asklist = [];
    state.page.totalpage = seckills.PageSize;
    state.page.total = seckills.PageCount;
    state.asklist = seckills.Data;
}

//获取外勤管理的数据
export const SET_Fiekdworklist_Info = (state, seckills) => {
    state.Fiekdworklist = [];
    state.page.totalpage = seckills.PageSize;
    state.page.total = seckills.PageCount;
    state.Fiekdworklist = seckills.Data;
}

//获取出差的数据
export const SET_OnBusinesslist_Info = (state, seckills) => {
    state.OnBusinesslist = [];
    state.page.totalpage = seckills.PageSize;
    state.page.total = seckills.PageCount;
    state.OnBusinesslist = seckills.Data;
}

//获取消防门的数据

export const SET_FireDoor_INFO = (state, seckills) => {

    state.FireDoorlist = [];



    var list = [];
    let len = seckills.Data.length;
    let n = 6; //假设每行显示4个
    let lineNum = len % 6 === 0 ? len / 6 : Math.floor(len / 6 + 1);
    for (let i = 0; i < lineNum; i++) {
        // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
        let temp = seckills.Data.slice(i * n, i * n + n);
        list.push(temp);
    }


    state.page.totalpage = seckills.PageSize;
    state.page.total = seckills.PageCount;
    state.FireDoorlist = list;
}

export const SET_Fan_INFO = (state, seckills) => {

    state.Fanlist = [];



    var list = [];
    let len = seckills.Data.length;
    let n = 6; //假设每行显示4个
    let lineNum = len % 6 === 0 ? len / 6 : Math.floor(len / 6 + 1);
    for (let i = 0; i < lineNum; i++) {
        // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
        let temp = seckills.Data.slice(i * n, i * n + n);
        list.push(temp);
    }


    state.page.totalpage = seckills.PageSize;
    state.page.total = seckills.PageCount;
    state.Fanlist = list;
}

export const SET_ElectricMeter_INFO = (state, seckills) => {

    state.ElectricMeterlist = [];
    state.DeviveItem = seckills.Data;
    var list = [];
    let len = seckills.Data.length;
    let n = 6; //假设每行显示4个
    let lineNum = len % 6 === 0 ? len / 6 : Math.floor(len / 6 + 1);
    for (let i = 0; i < lineNum; i++) {
        // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
        let temp = seckills.Data.slice(i * n, i * n + n);
        list.push(temp);
    }


    state.page.totalpage = seckills.PageCount;
    state.page.total = seckills.PageSize;
    state.ElectricMeterlist = list;

}

