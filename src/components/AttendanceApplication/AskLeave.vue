<template >
  <div>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="请假事由">
        <el-input v-model="sizeForm.Reason"></el-input>
      </el-form-item>

      <el-form-item label="请假时间时间">
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
      <el-form-item label="考勤统计">
        <el-input v-model="sizeForm.Statistics"></el-input>
      </el-form-item>

      <el-form-item label="备注">
        <el-input v-model="sizeForm.Remarks"></el-input>
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
        Reason: "",
        Applicant: "",
        StartTime: "",
        EndTime: "",
        Remarks: "",
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
          "https://localhost:5001/api/AttendanceCommit/leaveCreateAdd",
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