<template >
  <div>
    <el-form
      :model="form"
      ref="form"
      label-width="80px"
      :inline="false"
      size="normal"
    >
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <el-form-item label="时间">
              <el-date-picker
                v-model="form.holidayTime"
                type="date"
                placeholder="选择日期时间"
              >
              </el-date-picker>
            </el-form-item></div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <el-form-item label="假期类型">
              <el-select
                v-model="form.holidayType"
                value-key=""
                placeholder=""
                clearable
                filterable
              >
                <el-option
                  v-for="item in option"
                  :key="item.Id"
                  :label="item.ItemName"
                  :value="item.ItemName"
                >
                </el-option>
              </el-select>
            </el-form-item></div
        ></el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" @click="onSubmit()">添加</el-button>
      </el-form-item>
    </el-form>
    <!--这是工作日-->
    <div>
      <h3>工作日</h3>
      <span v-for="item in tabledata" :key="item.Id">
        <span v-if="item.HolidayType == '工作日'"
          >{{ item.HolidayTime.substring(0, 10) }}
          <a @click="DeleteData(item.Id)" href="#"><span>✔ </span></a></span
        >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
      >
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />

    <!--这是特殊工作日-->
    <div>
      <h3>特殊工作日</h3>
      <span v-for="item in tabledata" :key="item.Id">
        <span v-if="item.HolidayType == '特殊工作日'"
          >{{ item.HolidayTime.substring(0, 10) }}
          <a @click="DeleteData(item.Id)" href="#"><span>✔ </span></a></span
        >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        holidayTime: "",
        holidayType: "",
      },
      option: [],
      tabledata: [],
    };
  },
  mounted() {
    this.GetSelect();
    this.DataShow();
  },
  methods: {
    onSubmit() {
      this.form.holidayTime = this.myGetTime(this.form.holidayTime);

      this.axios
        .post(`https://localhost:5001/api/Holiday/CreateAdd`, this.form)
        .then((res) => {
          if (res.data == true) {
            this.$message({
              showClose: true,
              message: "添加成功",
            });
            this.DataShow();
          }
        });
    },
    GetSelect() {
      this.axios
        .get(`https://localhost:5001/api/Dictionariesentry/GetSelect?id=9`)
        .then((res) => {
          this.option = res.data;
        });
    },
    DataShow() {
      this.axios
        .get(`https://localhost:5001/api/Holiday/GetData`)
        .then((res) => {
          this.tabledata = res.data.Data;
        });
    },
    myGetTime(time) {
      let yy = time.getFullYear();
      let mm = time.getMonth() + 1;
      let dd = time.getDate();

      return yy + "-" + mm + "-" + dd;
    },
    DeleteData(val) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.axios
            .get(`https://localhost:5001/api/Holiday/CreateAdd?id=${val}`)
            .then((res) => {
              var state = res.data;
              if (state == true) {
                this.$message({
                  showClose: true,
                  message: "删除成功",
                });
                this.DataShow();
              } else {
                this.$message({
                  showClose: true,
                  message: "删除失败",
                  type: "warning",
                });
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>
<style lang="">
</style>