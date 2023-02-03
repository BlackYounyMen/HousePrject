<template >
  <div>
    <el-form
      :model="form"
      ref="form"
      :rules="rules"
      label-width="80px"
      :inline="false"
      size="normal"
    >
      <el-form-item label="部门名称" prop="Name">
        <el-input v-model="form.Name"></el-input>
      </el-form-item>
      <el-form-item label="上级id" prop="SuperiorId">
        <el-input v-model="form.SuperiorId"></el-input>
      </el-form-item>
      <el-form-item label="部门描述" prop="DescContent">
        <el-input v-model="form.DescContent"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add('form')">修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      form: {
        Name: "",
        SuperiorId: "",
        DescContent: "",
      },
      rules: {
        Name: [{ required: true, message: "请输入部门名称", trigger: "blur" }],
        SuperiorId: [
          { required: true, message: "请输入上级id", trigger: "blur" },
        ],
        DescContent: [
          { required: true, message: "请输入部门描述", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    recoil() {
      this.axios

        .get(`https://localhost:5001/api/Department/Recoil?id=${this.id}`)
        .then((a) => {
          this.form = {
            id: a.data.Item.Id,
            Name: a.data.Item.Name,
            SuperiorId: a.data.Item.SuperiorId,
            DescContent: a.data.Item.DescContent,
          };
        });
    },
    add(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios
            .post("https://localhost:5001/api/Department/DIcUpdate", this.form)
            .then((res) => {
              if (res.data == true) {
                this.$message({
                  showClose: true,
                  message: "修改成功",
                  type: "warning",
                });
              }
              this.$emit("Success");
            });
        } else {
          return false;
        }
      });
    },
  },
  created() {
    this.recoil();
  },
};
</script>
<style >
</style>