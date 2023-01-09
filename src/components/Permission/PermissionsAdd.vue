<template>
  <div>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="权限名称">
        <el-input v-model="sizeForm.Name"></el-input>
      </el-form-item>
      <el-form-item label="上级id">
        <el-select v-model="sizeForm.SuperiorId" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="路径">
        <el-input v-model="sizeForm.Url"></el-input>
      </el-form-item>
      <el-form-item label="排序Id">
        <el-input v-model="sizeForm.OrderId"></el-input>
      </el-form-item>

      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit()">立即创建</el-button>
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
        SuperiorId: "",
        Url: "",
        OrderId: "",
      },
    };
  },
  methods: {
    onSubmit() {
      //this.sizeForm.Name,
      //this.sizeForm.SuperiorId,
      //this.sizeForm.Url,
      //this.sizeForm.OrderId,
      //   this.axios.post("").then((res) => {
      //     var i = res.data;
      //   });
      console.log("submit!");

      this.$emit("Success", "数据传输");
    },
  },
};
</script>