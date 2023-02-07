<template >
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-form-item label="标题">
          <el-input v-model="name" placeholder="标题"></el-input>
        </el-form-item>
        <el-button type="primary" @click="getsearch()">查询</el-button>
        <el-button type="primary" @click="DigOpen()">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="Loglist" border style="width: 100%">
      <el-table-column prop="Title" label="标题" width="200"> </el-table-column>
      <el-table-column prop="Senddate" label="发布时间" width="300">
        <template slot-scope="scope">
          {{ scope.row.Senddate.substring(0, 10) }}
        </template>
      </el-table-column>
      <el-table-column prop="UserName" label="用户" width="120">
      </el-table-column>
      <el-table-column prop="UserName" label="内容">
        <template slot-scope="scope">
          <span v-html="scope.row.Content"></span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="Plan(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small" @click="Edit(scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="page.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
    >
    </el-pagination>
    <el-dialog title="添加" :visible.sync="addDid" v-if="addDid" width="70%">
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
    <el-dialog title="查看" :visible.sync="PlanDid" v-if="PlanDid" width="80%">
      <span>
        <PowerPlan :id="Fid" @Success="DigPlan"></PowerPlan>
      </span>
      <span slot="footer"> </span>
    </el-dialog>
  </div>
</template>
<script>
import store from "@/vuex/store";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import RoleAdd from "@/components/LogAdd.vue";
import RoleEdit from "@/components/LogEdit.vue";
import PowerPlan from "@/components/LogLook.vue";
export default {
  components: { RoleAdd, RoleEdit, PowerPlan },
  data() {
    return {
      name: "",
      pages: {
        pageindex: 1,
        pagedata: 1,
      },
      addDid: false,
      EditDid: false,
      PlanDid: false,
      Fid: 0,
    };
  },
  computed: {
    ...mapState(["Loglist", "page"]),
    ...mapGetters([""]),
  },
  methods: {
    ...mapActions(["loadLoglistData"]),
    ...mapMutations(["SET_LogList_Info"]),

    getsearch() {
      var list = {
        name: this.name,
        pageindex: this.pages.pageindex,
        pagedata: this.pages.pagedata,
      };
      this.loadLoglistData(list);
    },
    //分页显示数
    handleSizeChange(val) {
      this.pages.pagedata = val;
      this.loadLoglistData(this.pages);
    },
    //当前页码
    handleCurrentChange(val) {
      this.pages.pageindex = val;

      this.loadLoglistData(this.pages);
    },
    DigOpen() {
      this.addDid = true;
    },
    Edit(val) {
      this.Fid = val.Id;
      this.EditDid = true;
    },
    Plan(val) {
      this.Fid = val.Id;
      this.PlanDid = true;
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
    DigPlan() {
      this.PlanDid = false;
      this.GetAll();
    },
  },
  mounted() {
    this.loadLoglistData(this.pages);
  },
  store,
};
</script>
<style >
</style>