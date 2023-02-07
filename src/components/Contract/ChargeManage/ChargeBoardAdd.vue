<template   >
  <div>
    <el-form
      :model="form"
      ref="form"
      :rules="rules"
      label-width="80px"
      :inline="false"
      size="normal"
    >
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <el-form-item label="金额" prop="amountRecorded">
              <el-input v-model="form.amountRecorded"></el-input>
            </el-form-item></div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <el-form-item label="时间" prop="recordedTime">
              <el-date-picker
                v-model="form.recordedTime"
                type="date"
                size="normal"
                placeholder="选择日期时间"
              >
              </el-date-picker>
            </el-form-item></div
        ></el-col>
      </el-row>

      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <el-form-item label="备注" prop="remarks">
              <el-input v-model="form.remarks"></el-input>
            </el-form-item></div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <el-form-item label="合同信息">
              <el-input
                v-model="form.contractinfo"
                readonly="readonly"
              ></el-input>
            </el-form-item></div
        ></el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">添加</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <ChargeBoardShow
      :id="form.contractId"
      :summoney="itemmoney"

    ></ChargeBoardShow>
  </div>
</template>
<script>
import ChargeBoardShow from "@/components/Contract/ChargeManage/ChargeBoardShow.vue";
export default {
  components: { ChargeBoardShow },
  props: ["id", "name", "summoney"],
  data() {
    return {
      form: {
        contractId: 0,
        amountRecorded: 0,
        contractinfo: "",
        recordedTime: "",
        remarks: "",
      },
      isreload: false,
      itemmoney: this.summoney,
      rules: {
        amountRecorded: [
          { required: true, message: "请输入金额", trigger: "blur" },

          {
            validator: function (rule, value, callback) {
              if (
                /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(
                  value
                ) == false
              ) {
                callback(new Error("金钱格式有误"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],

        recordedTime: [
          { required: true, message: "请输入时间", trigger: "blur" },
        ],
        remarks: [{ required: true, message: "请输入备注", trigger: "blur" }],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios
            .post(
              `https://localhost:5001/api/ContractCharges/ChargesAdd`,
              this.form
            )
            .then((res) => {
              location.reload();
              this.$emit("Success", res.data);
            });
        } else {
          return false;
        }
      });
    },
  },
  created() {
    this.form.contractId = this.id;
    this.form.contractinfo = this.name;
  },
};
</script>
<style   >
</style>