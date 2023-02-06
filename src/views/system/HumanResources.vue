<template >
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="Name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-button type="primary" @click="GetAll()">查询</el-button>
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
      <el-table-column prop="Id" label="编号" width="120"> </el-table-column>
      <el-table-column prop="Account" label="登录名" width="120">
      </el-table-column>
      <el-table-column prop="Name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="DateofBirth" label="出生日期" width="120">
      </el-table-column>
      <el-table-column prop="Sex" label="性别" width="120"> </el-table-column>
      <el-table-column prop="DeptId" label="部门名称" width="120">
      </el-table-column>
      <el-table-column prop="Major" label="专业" width="120"> </el-table-column>

      <el-table-column prop="Phone" label="联系电话" width="120">
      </el-table-column>

      <el-table-column prop="ManagePost" label="管理职位" width="120">
      </el-table-column>
      <el-table-column prop="Position" label="技术职位" width="120">
      </el-table-column>
      <el-table-column prop="State" label="状态" width="120"> </el-table-column>

      <el-table-column prop="address" label="任职部门" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Name: "",
      pages: {
        pageindex: 1,
        pagedata: 1,
      },
    };
  },
  computed: {
    ...mapState(["HumanResourcesList", "page"]),
    ...mapGetters([""]),
  },
  methods: {
    ...mapActions(["loadHumanResourcesData"]),
    ...mapMutations(["SET_HumanResource_Info"]),
    handleSelectionChange(val) {
      console.log(val);
    },

    getsearch() {
      var list = {
        name: this.name,
        pageindex: this.pages.pageindex,
        pagedata: this.pages.pagedata,
      };
      this.loadHumanResourcesData(list);
    },
    //分页显示数
    handleSizeChange(val) {
      this.pages.pagedata = val;
      this.loadHumanResourcesData(this.pages);
    },
    //当前页码
    handleCurrentChange(val) {
      this.pages.pageindex = val;

      this.loadHumanResourcesData(this.pages);
    },
    handleClick() {},
  },
  mounted() {
    this.loadHumanResourcesData(this.pages);
  },
  created() {},
  store,
};
</script>
<style >
</style>