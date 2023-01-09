<template>
  <div>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="权限名称">
        <el-input v-model="sizeForm.Name"></el-input>
      </el-form-item>
      <el-form-item label="是否启用">
        <el-radio-group v-model="sizeForm.State" size="medium">
          <el-radio border label="是"></el-radio>
          <el-radio border label="否"></el-radio>
        </el-radio-group>
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
        Name: "",
        State: "",
      },
    };
  },
  methods: {
    onSubmit() {
      //   this.sizeForm.Name,
      //   this.sizeForm.State,
      //   this.axios.post("").then((res) => {
      //     var i = res.data;
      //   });
      console.log("submit!");
      this.$emit("Success", "数据传输");
    },
  },
};
</script>