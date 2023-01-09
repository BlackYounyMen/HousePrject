<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formInline.Name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="DigOpen()">添加</el-button>
      </el-form-item>
    </el-form>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="date" label="Id" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column
        prop="address"
        label="是否启用"
        width="180"
      ></el-table-column>
    </el-table>
    <!--这是弹窗的开始-->
    <el-dialog title="角色" :visible.sync="addDid" v-if="addDid" width="30%">
      <span>
        <RoleAdd @Success="DigColse"></RoleAdd>
      </span>
      <span slot="footer">
        <el-button @click="addDid = false">Cancel</el-button>
      </span>
    </el-dialog>

    <!--这是弹窗的结束-->
  </div>
</template>
<script>
import RoleAdd from "../../components/Role/RoleAdd.vue";
export default {
  components: { RoleAdd },
  data() {
    return {
      formInline: {
        Name: "",
      },
      addDid: false,
      tableData: [],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    DigOpen() {
      this.addDid = true;
    },
    DigColse(d) {
      console.log(d);
      this.$message.success("添加成功");
      this.addDid = false;
    },
  },
};
</script>