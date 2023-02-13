<template>
  <div>
    <div>
      <el-select v-model="year" placeholder="请选择年份" @change="changeHandle">
        <el-option
          v-for="item in options"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-select v-model="month" placeholder="请选择月" @change="changeHandle">
        <el-option v-for="item in 12" :key="item" :label="item" :value="item" />
      </el-select>
    </div>
    <el-calendar v-model="value">
      <template slot="dateCell" slot-scope="{ date }">
        <p>{{ date | timeshow }}</p>
        <!-- new Date(date).getDate()-->
        <!-- 这里加载出的每个日期最外层是一个盒子  这里设置的什么标签  盒子里面就是什么标签 -->
        <span v-if="getDay(date)" style="background: red; color: #fff">休</span>
        <span v-else-if="getDay1(date)" style="color: red">休息</span>
        <span v-else style="color: blue" @click="GetValue(date)">申请</span>
        <p v-if="checkDay(date)" style="color: skyblue">清明</p>
      </template>
    </el-calendar>

    <!--这是弹窗的开始-->
    <el-dialog :visible.sync="addDid" v-if="addDid" width="80%">
      <span>
        <ApplyEvent :datetime="datetime" @Success="DigColse"></ApplyEvent>
      </span>
      <span slot="footer"> </span>
    </el-dialog>

    <!--这是弹窗的结束-->
  </div>
</template>
<script>
import ApplyEvent from "@/views/AttendanceManage/AttendanceApplication/ApplyEvent.vue";
import { ReturnDate } from "@/Utils/Date";
let that;
export default {
  components: { ApplyEvent },
  // name: "Calendar",
  data() {
    return {
      value: new Date(),
      options: [2021, 2022, 2023],
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      addDid: false,
      datetime: "",
      datelist: [],
    };
  },

  mounted() {
    this.DataShow();
  },
  beforeCreate: function () {
    that = this;
  },
  computed: {},
  created() {
    /* 如何将伪数组转换成真数组  */
    // console.log([...Array(11)]);
    // console.log(Array.from(Array(11)));
    var arr = Array.from(Array(11));
    arr.forEach((item, index) => {
      // console.log(item + index, 99);
      // console.log(index - 5 + 2022, 99);
      item = index - 5 + 2022;
      arr[index] = index - 5 + this.year;
    });
    this.options = arr;
  },
  updated() {
    // 这里获取了更新后的新日期
    // console.log(this.value, 777777777777777)
    // console.log(new Date(this.value), 666666666)
    // console.log(new Date(this.value).getFullYear(), 77777777)
    // console.log(new Date(this.value).getMonth() + 1, 88888888)
    // 上下时间绑定
    // 调用 getFullYear方法 需要前面的时间的格式符合标准
    this.year = new Date(this.value).getFullYear();
    this.month = new Date(this.value).getMonth() + 1;
  },
  methods: {
    DataShow() {
      //获取他的数据
      this.axios
        .get(`https://localhost:5001/api/Holiday/GetData`)
        .then((res) => {
          this.datetime = res.data.Data;
        });
    },
    changeHandle() {
      // 这里实现了下拉框 控制 日历内容功能
      this.value = `${this.year}-${this.month}`;
    },
    getDay(t) {
      //  在 scoped-slot 可以获取到 date（当前单元格的日期）
      // console.log(t, 888888)
      const day = t.getDay();
      if (day === 6 || day === 0) {
        return true;
      } else {
        return false;
      }
      // console.log(day, 7777777)
    },
    getDay1(t) {
      //  在 scoped-slot 可以获取到 date（当前单元格的日期）
      // console.log(t, 888888)
      var d = ReturnDate(t);
      for (let a of that.datetime) {
        if (d == a.HolidayTime.substring(0, 10)) {
          return true;
        }
      }
      return false;
    },
    checkDay(t) {
      const y = t.getFullYear();
      const m = t.getMonth() + 1;
      const d = t.getDate();
      if (y === 2022 && m === 4 && d === 5) {
        return true;
      }
      return false;
    },
    GetValue(t) {
      this.addDid = true;
      var d = ReturnDate(t);
      this.datetime = d;
    },
    DigColse() {
      this.addDid = false;
    },
  },
  filters: {
    timeshow: function (t) {
      var d = ReturnDate(t);
      return d;
    },
  },
};
</script>

<style lang="scss" scoped>
/* 穿透
scss  ::v-deep
less  /deep/

*/
.el-calendar {
  ::v-deep .el-calendar__header {
    display: none;
  }
}
.el-dialog {
  display: flex;
  flex-direction: column;
  margin: 0 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*height:600px;*/
  max-height: calc(100% - 200px);
  max-width: calc(100% - 30px);
}
.el-dialog .el-dialog__body {
  flex: 1;
  overflow: auto;
}
</style>
