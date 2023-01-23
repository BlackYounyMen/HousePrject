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
            // console.log(res.data.dataList);    
            var list = [];
            let len = res.data.Data.length;
            let n = 6; //假设每行显示4个
            let lineNum = len % 6 === 0 ? len / 6 : Math.floor(len / 6 + 1);
            for (let i = 0; i < lineNum; i++) {
                // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
                let temp = res.data.Data.slice(i * n, i * n + n);
                list.push(temp);
            }
            commit('SET_Water_INFO', list);

        });
    });
};

