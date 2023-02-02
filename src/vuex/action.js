import axios from "axios";


// import state from './store';

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
// 获取水表数据
export const EditState = ({ commit }, data) => {
    return new Promise(() => {
        console.log(data);
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
        console.log(data);
        axios.get(data).then((res) => {
            commit('SET_SECOND_ITEM', res.data);
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

        console.log(data);
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
