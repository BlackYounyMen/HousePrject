<template >
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-button type="primary" @click="getsearch()">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      ref="multipleTable"
      :data="HumanResourcesList"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column prop="Account" label="登录名" width="120">
      </el-table-column>
      <el-table-column prop="Name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="DateofBirth" label="出生日期" width="120">
        <template slot-scope="scope">
          {{ scope.row.DateofBirth.substring(0, 10) }}
        </template>
      </el-table-column>
      <el-table-column prop="Sex" label="性别" width="120"> </el-table-column>
      <el-table-column prop="DeptId" label="部门名称" width="120">
      </el-table-column>
      <el-table-column prop="Major" label="专业" width="120"> </el-table-column>
      <el-table-column
        prop="Phone"
        label="联系电话"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="ManagePost"
        label="管理职位"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="Position"
        label="技术职位"
        width="120"
      ></el-table-column>
      <el-table-column prop="State" label="状态" width="120">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.State"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="DeptId" label="任职部门" width="120">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="page.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
    >
    </el-pagination>
    <el-dialog title="添加" :visible.sync="addDid" v-if="addDid" width="50%">
      <span>
        <RoleAdd @Success="DigColse"></RoleAdd>
      </span>
      <span slot="footer"> </span>
    </el-dialog>
    <el-dialog title="修改" :visible.sync="EditDid" v-if="EditDid" width="30%">
      <span>
        <RoleEdit :id="Fid" @Success="EditDigColse"></RoleEdit>
      </span>
      <span slot="footer"> </span>
    </el-dialog>
  </div>
</template>
<script>
import RoleAdd from "@/components/System/HumanAdd.vue";
import RoleEdit from "@/components/System/DeptEdit.vue";
import store from "@/vuex/store";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: { RoleAdd, RoleEdit },
  data() {
    return {
      name: "",
      pages: {
        pageindex: 1,
        pagedata: 10,
      },
      addDid: false,
      EditDid: false,
      Fid: 0,
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
    DigOpen() {
      this.addDid = true;
    },
    Edit(val) {
      this.Fid = val.Id;
      this.EditDid = true;
    },
    //弹框关闭
    DigColse() {
      this.$message.success("添加成功");
      this.addDid = false;
      this.GetAll();
    },
    //修改弹框关闭
    EditDigColse() {
      this.$message.success("修改成功");
      this.EditDid = false;
      this.GetAll();
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