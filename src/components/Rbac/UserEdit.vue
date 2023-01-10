<template>
  <div>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="人力资源id">
        <el-select v-model="sizeForm.HumanId" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="sizeForm.Name"></el-input>
      </el-form-item>
      <el-form-item label="账号">
        <el-input v-model="sizeForm.Account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="sizeForm.Pwd"></el-input>
      </el-form-item>

      <el-form-item label="部门id">
        <el-select v-model="sizeForm.ClassId" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="角色id">
        <el-select v-model="sizeForm.RoleId" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="在职状态">
        <el-radio-group v-model="sizeForm.State" size="medium">
          <el-radio border label="在职"></el-radio>
          <el-radio border label="离职"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
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
        HumanId: "",
        Account: "",
        Pwd: "",
        ClassId: "",
        State: "",
      },
    };
  },
  methods: {
    onSubmit() {
      // this.sizeForm.Name
      // this.sizeForm.HumanId
      // this.sizeForm.Account
      // this.sizeForm.Pwd
      // this.sizeForm.ClassId
      // this.sizeForm.State
      //   this.axios.post("").then((res) => {
      //     var i = res.data;
      //   });
      console.log("submit!");
      this.$emit("Success", "数据传输");
    },
  },
};
</script>