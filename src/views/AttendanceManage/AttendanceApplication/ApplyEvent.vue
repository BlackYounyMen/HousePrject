<template  >
  <div>
    <div style="width: 100%">
      <table>
        <tr>
          <td>申请类型</td>
          <td>
            <el-radio-group v-model="radioSex" @change="changeHandler">
              <el-radio class="radio" label="请假">请假</el-radio>
              <el-radio class="radio" label="外勤">外勤</el-radio>
              <el-radio class="radio" label="出差">出差</el-radio>
            </el-radio-group>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <AskLeave
              v-if="show[0]"
              @change="costPlannedAmountChange($event)"
            ></AskLeave>
            <FieldWork
              v-if="show[1]"
              @change="costPlannedAmountChange1($event)"
            ></FieldWork>
            <OnBusiness
              v-if="show[2]"
              @change="costPlannedAmountChange2($event)"
            ></OnBusiness>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import AskLeave from "@/components/AttendanceApplication/AskLeave.vue"; //请假
import FieldWork from "@/components/AttendanceApplication/FieldWork.vue"; //外勤
import OnBusiness from "@/components/AttendanceApplication/OnBusiness.vue"; //出差

export default {
  components: { AskLeave, FieldWork, OnBusiness },
  props: ["datetime"],
  data() {
    return {
      radioSex: "请假",
      show: [true, false, false],
    };
  },
  created() {
    console.log(this.datetime);
  },
  methods: {
    changeHandler(value) {
      this.show = [];
      if (value == "请假") {
        this.show = [true, false, false];
      }
      if (value == "外勤") {
        this.show = [false, true, false];
      }
      if (value == "出差") {
        this.show = [false, false, true];
      }
    },
    costPlannedAmountChange(value) {
      this.show = [value, false, false];
      this.$emit("change", value);
    },
    costPlannedAmountChange1(value) {
      this.show = [false, value, false];
      this.$emit("change", value);
    },
    costPlannedAmountChange2(value) {
      this.show = [false, false, value];
      this.$emit("change", value);
    },
  },
};
</script>
<style  >
</style>