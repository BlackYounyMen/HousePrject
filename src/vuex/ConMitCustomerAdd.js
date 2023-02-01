import axios from "axios";

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
