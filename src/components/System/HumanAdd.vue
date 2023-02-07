<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="姓名" prop="Name">
        <el-input v-model="ruleForm.Name"></el-input>
      </el-form-item>
      <el-form-item label="登录名" prop="Account">
        <el-input v-model="ruleForm.Account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="Pwd">
        <el-input v-model="ruleForm.Pwd"></el-input>
      </el-form-item>
      <el-form-item label="出生日期" prop="DateofBirth">
        <el-date-picker
          type="date"
          placeholder="出生日期"
          v-model="ruleForm.DateofBirth"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="性别" prop="Sex">
        <el-select v-model="ruleForm.Sex">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专业" prop="Major">
        <el-select v-model="ruleForm.Major">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="部门" prop="DeptId">
        <el-select v-model="ruleForm.DeptId">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="联系方式" prop="Phone">
        <el-input v-model="ruleForm.Phone"></el-input>
      </el-form-item>

      <el-form-item label="管理职位" prop="ManagePost">
        <el-select v-model="ruleForm.ManagePost">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="技术职位" prop="Position">
        <el-select v-model="ruleForm.Position">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职位隶属部门" prop="DeptId">
        <el-checkbox-group v-model="ruleForm.DeptId">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="在职状态" prop="State">
        <el-select v-model="ruleForm.State">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>