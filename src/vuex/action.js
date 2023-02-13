import axios from "axios";

// 获取菜单数据
export const loadMeun = ({ commit }, data) => {
    return new Promise(() => {
        axios.get(`https://localhost:5001/api/Login/GetPermissions?id=${data}`).then((res) => {
            commit('SET_MEUN_COMMIT', res.data);
        });
    });
};


// 获取水表数据
export const loadWaterData = ({ commit }, data) => {
    return new Promise(() => {
        var Searth = {
            params: {
                building: data.building,
                unitnum: data.unitnum,
                state: data.state,
                pageindex: data.pageindex,
                pagesize: data.pagesize,
            },
        };
        axios.get("https://localhost:5001/api/Device/WaterGetData", Searth).then((res) => {
            commit('SET_Water_INFO', res.data);
        });
    });
};

// 获取消防门数据
export const loadFireDoorData = ({ commit }, data) => {
    return new Promise(() => {
        var Searth = {
            params: {
                building: data.building,
                unitnum: data.unitnum,
                state: data.state,
                pageindex: data.pageindex,
                pagesize: data.pagesize,
            },
        };
        axios.get("https://localhost:5001/api/Device/FireGetData", Searth).then((res) => {

            commit('SET_FireDoor_INFO', res.data);
        });
    });
};

// 获取消防风机数据
export const loadFanData = ({ commit }, data) => {
    return new Promise(() => {
        var Searth = {
            params: {
                building: data.building,
                unitnum: data.unitnum,
                state: data.state,
                pageindex: data.pageindex,
                pagesize: data.pagesize,
            },
        };
        axios.get("https://localhost:5001/api/Device/FanGetData", Searth).then((res) => {

            commit('SET_Fan_INFO', res.data);
        });
    });
};

// 获取电数据
export const loadElectricMeterData = ({ commit }, data) => {
    return new Promise(() => {
        var Searth = {
            params: {
                building: data.building,
                unitnum: data.unitnum,
                state: data.state,
                pageindex: data.pageindex,
                pagesize: data.pagesize,
            },
        };
        axios.get("https://localhost:5001/api/Device/ElectricGetData", Searth).then((res) => {

            commit('SET_ElectricMeter_INFO', res.data);
        });
    });
};

// 获取水表数据
export const EditState = ({ commit }, data) => {
    return new Promise(() => {
        axios.post(`https://localhost:5001/api/Device/EditState?id=${data}`).then((res) => {
            commit('SET_STATE_UPDATE', res.data);
        });
    });
};
//获取下拉的数据
export const ObtainSelect = ({ commit }, data) => {
    return new Promise(() => {
        axios.get(data).then((res) => {
            commit('SET_FIRST_ITEM', res.data);
        });
    });
};

//获取第二个下拉的数据
export const ObtainSecondSelect = ({ commit }, data) => {
    return new Promise(() => {
        axios.get(data).then((res) => {
            commit('SET_SECOND_ITEM', res.data);
        });
    });
};


//获取第三个下拉的数据
export const ObtainthirtdSelect = ({ commit }, data) => {
    return new Promise(() => {
        axios.get(data).then((res) => {
            commit('SET_THIRTD_ITEM', res.data);
        });
    });
};





//数据提交
export const ConMitCustomerAdd = ({ commit }, data) => {
    return new Promise(() => {
        var d = JSON.parse(localStorage.getItem("FileItem"));
        console.log(data);
        var Dto = {
            customerinfo: {
                number: data.Number,
                customerName: data.CustomerName,
                companyAddress: data.CompanyAddress,
                contacts: data.Contacts,
                telephone: data.Telephone,
                bankAccount: data.BankAccount,
                bankName: data.BankName,
                enterpriseCode: data.EnterpriseCode,
                customerType: data.CustomerType,
                industry: data.Industry,
                creditRating: data.creditRating,
                representative: data.Representative,
                taxpayerNum: data.TaxpayerNum
            },
            personcharge: JSON.parse(localStorage.getItem("customeritem")),
            fileinfo: {
                fileName: d[0].FileName,
                uploadTime: d[0].UploadTime,
                fileSize: d[0].FileSize,
                fileType: d[0].FileType,
                url: d[0].Url,
            }
        };
        axios.post("https://localhost:5001/api/Customerinfo/CreateAdd", Dto).then((res) => {
            localStorage.removeItem("FileItem");
            localStorage.removeItem("customeritem");
            commit('SET_STATE_UPDATE', res.data);
        });
    });
};


// 获取客户信息数据
export const loadCustomerData = ({ commit }, data) => {
    return new Promise(() => {

        var Searth = {
            params: {
                pageindex: data.pageindex,
                pagesize: data.pagedata,
            },
        };

        axios.get("https://localhost:5001/api/Customerinfo/GetData", Searth).then((res) => {
            commit('SET_Customer_INFO', res.data);
        });
    });
};
//获取行标题是否显示的数据
export const loadCustomerStateData = ({ commit }) => {
    return new Promise(() => {
        axios.get("https://localhost:5001/api/Customerinfo/GetState").then((res) => {
            commit('SET_CustomerState_INFO', res.data);
        });
    });
};
// 获取联系人信息数据
export const loadPersonChargeData = ({ commit }, data) => {
    return new Promise(() => {
        console.log(data);
        var Searth = {
            params: {
                name: data.name,
                pageindex: data.pageindex,
                pagesize: data.pagedata,
            },
        };

        console.log(data);
        axios.get("https://localhost:5001/api/Customerinfo/GetPerson", Searth).then((res) => {
            commit('SET_PersonCharge_INFO', res.data);
        });
    });
};

// 获取客户所有数据信息的反填数据
export const loadPerSonRecoilData = ({ commit }, data) => {
    return new Promise(() => {
        console.log(data);
        axios.get(`https://localhost:5001/api/Customerinfo/CustomerRecoil?id=${data}`).then((res) => {
            console.log(res.data);
            console.log(res.data.customerinfo);
            console.log(res.data.personcharge);
            console.log(res.data.fileinfo);
            commit('SET_PerSonRecoillist_INFO', res.data);
        });
    });
};

//添加他的合同信息
export const CustomerAdd = ({ commit }, data) => {
    return new Promise(() => {
        console.log(data);
        var Dto = {
            contractinfo: data,
            subscriptioninfo: JSON.parse(localStorage.getItem("Contract")),

        };
        axios.post("https://localhost:5001/api/Customerinfo/CustomeAdd", Dto).then((res) => {
            console.log(res.data)
            commit('SET_STATE_UPDATE', res.data);
        });
    });
};

// 获取人力资源信息数据
export const loadHumanResourcesData = ({ commit }, data) => {
    return new Promise(() => {
        console.log(data);
        var Searth = {
            params: {
                name: data.name,
                pageindex: data.pageindex,
                pagesize: data.pagedata,
            },
        };


        axios.get("https://localhost:5001/api/HumanResources/GetAll", Searth).then((res) => {
            console.log(res.data);
            commit('SET_HumanResource_Info', res.data);
        });
    });
};

// 获取人力资源信息数据
export const loadLoglistData = ({ commit }, data) => {
    return new Promise(() => {
        console.log(data);
        var Searth = {
            params: {
                name: data.name,
                pageindex: data.pageindex,
                pagesize: data.pagedata,
            },
        };


        axios.get("https://localhost:5001/api/Log/GetAll", Searth).then((res) => {
            console.log(res.data);
            commit('SET_LogList_Info', res.data);
        });
    });
};


// 获取公告信息数据
export const loadAnnouncementListData = ({ commit }, data) => {
    return new Promise(() => {
        console.log(data);
        var Searth = {
            params: {
                name: data.name,
                pageindex: data.pageindex,
                pagesize: data.pagedata,
            },
        };
        axios.get("https://localhost:5001/api/Notice/GetAll", Searth).then((res) => {
            console.log(res.data);
            commit('SET_AnnouncementList_Info', res.data);
        });
    });
};

// 获取请假信息数据
export const loadasklistData = ({ commit }, data) => {
    return new Promise(() => {
        console.log(data);
        var Searth = {
            params: {
                name: data.name,
                pageindex: data.pageindex,
                pagesize: data.pagedata,
            },
        };
        axios.get("https://localhost:5001/api/AttendanceCommit/leaveGetAll", Searth).then((res) => {
            console.log(res.data);
            commit('SET_asklist_Info', res.data);
        });
    });
};

// 获取外勤信息数据
export const loadFiekdworklistData = ({ commit }, data) => {
    return new Promise(() => {
        console.log(data);
        var Searth = {
            params: {
                name: data.name,
                pageindex: data.pageindex,
                pagesize: data.pagedata,
            },
        };
        axios.get("https://localhost:5001/api/AttendanceCommit/OutWorkGetAll", Searth).then((res) => {
            console.log(res.data);
            commit('SET_Fiekdworklist_Info', res.data);
        });
    });
};

// 获取出差信息数据
export const loadOnBusinesslistData = ({ commit }, data) => {
    return new Promise(() => {
        console.log(data);
        var Searth = {
            params: {
                name: data.name,
                pageindex: data.pageindex,
                pagesize: data.pagedata,
            },
        };
        axios.get("https://localhost:5001/api/AttendanceCommit/GetAll", Searth).then((res) => {
            console.log(res.data);
            commit('SET_OnBusinesslist_Info', res.data);
        });
    });
};
