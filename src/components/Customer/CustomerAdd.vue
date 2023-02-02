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
            <el-form-item label="序号" prop="cus_Id">
              <el-input v-model="form.cus_Id" readonly="readonly"></el-input>
            </el-form-item></div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item></div
        ></el-col>
      </el-row>

      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <el-form-item label="职务" prop="post">
              <el-input v-model="form.post"></el-input>
            </el-form-item></div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <el-form-item label="部门" prop="dep">
              <el-input v-model="form.dep"></el-input>
            </el-form-item></div
        ></el-col>
      </el-row>

      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <el-form-item label="电话" prop="phone">
              <el-input v-model="form.phone"></el-input>
            </el-form-item></div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <el-form-item label="Email" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item></div
        ></el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">添加</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        cus_Id: "",
        name: "",
        post: "",
        phone: "",
        dep: "",
        email: "",
      },
      rules: {
        cus_Id: [{ required: true, message: "请输入序号", trigger: "blur" }],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        post: [{ required: true, message: "请输入职务", trigger: "blur" }],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            validator: function (rule, value, callback) {
              if (/^1[34578]\d{9}$/.test(value) == false) {
                callback(new Error("手机号格式错误"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
        dep: [{ required: true, message: "请输入部门", trigger: "blur" }],

        email: [
          { required: true, message: "请输入Email", trigger: "blur" },
          {
            validator: function (rule, value, callback) {
              const regEmail =
                /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
              if (regEmail.test(value) == false) {
                callback(new Error("邮箱格式错误"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (localStorage.getItem("customeritem") == null) {
            var list = [];
            list.push(this.form);
            localStorage.setItem("customeritem", JSON.stringify(list));
          } else {
            var d = JSON.parse(localStorage.getItem("customeritem"));
            d.push(this.form);
            localStorage.setItem("customeritem", JSON.stringify(d));
          }

          this.$emit("Success", true);
        } else {
          return false;
        }
      });
    },
  },
  created() {
    var name = JSON.parse(localStorage.getItem("UserInfo")).HumanId;
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours(); //获取当前小时数(0-23)
    const minute = date.getMinutes(); //获取当前分钟数(0-59)
    const second = date.getSeconds(); //获取当前秒数(0-59)

    var d = `${name}${year}${month}${day}${hour}${minute}${second}`;
    this.form.cus_Id = d;
  },
};
</script>
<style   >
</style>