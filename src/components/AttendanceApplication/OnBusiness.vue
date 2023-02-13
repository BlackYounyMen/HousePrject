<template >
  <div>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="项目名称">
        <el-input v-model="sizeForm.ProjectName"></el-input>
      </el-form-item>
      <el-form-item label="出差地点">
        <el-input v-model="sizeForm.TravelPlace"></el-input>
      </el-form-item>
      <el-form-item label="出差时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="sizeForm.StartTime"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="sizeForm.EndTime"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="加班时长">
        <el-input v-model="sizeForm.Duration"></el-input>
      </el-form-item>

      <el-form-item label="备注">
        <el-input v-model="sizeForm.Remarks"></el-input>
      </el-form-item>
      <el-form-item label="公里数">
        <el-input v-model="sizeForm.Kilometers"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sizeForm: {
        ProjectName: "",
        Place: "",
        Applicant: "",
        StartTime: "",
        EndTime: "",
        Remarks: "",
        Duration: "",
        Kilometers: "",
      },
      show: false,
    };
  },
  methods: {
    onSubmit() {
      var list = JSON.parse(localStorage.getItem("UserInfo"));
      this.sizeForm.Applicant = list.Applicant;
      console.log(this.sizeForm.Applicant);
      this.axios
        .post(
          "https://localhost:5001/api/AttendanceCommit/CreateAdd",
          this.sizeForm
        )
        .then((res) => {
          if (res.data == true) {
            this.$message({
              showClose: true,
              message: "添加成功",
              type: "warning",
            });
            this.$emit("change", this.show);
          }
          this.$emit("Success");
        });
    },
  },
};
</script>
<style>
</style>