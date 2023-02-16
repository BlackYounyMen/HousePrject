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
    <el-table :data="AnnouncementList" border style="width: 100%">
      <el-table-column prop="Title" label="公告标题" width="200">
      </el-table-column>
      <el-table-column prop="ReleaseTime" label="发布时间" width="300">
        <template slot-scope="scope">
          {{ scope.row.ReleaseTime.substring(0, 10) }}
        </template>
      </el-table-column>
      <el-table-column prop="PublishUser" label="发布用户" width="120">
      </el-table-column>
      <el-table-column prop="Content" label="内容">
        <template slot-scope="scope">
          <span v-html="scope.row.Content"></span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="Edit(scope.row)" type="text" size="small"
            >查看</el-button
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
    <el-dialog title="查看" :visible.sync="EditDid" v-if="EditDid" width="30%">
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
import RoleAdd from "@/components/AnnouncementAdd.vue";
import RoleEdit from "@/components/AnnouncementEdit.vue";
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
    ...mapState(["AnnouncementList", "page"]),
    ...mapGetters([""]),
  },
  methods: {
    ...mapActions(["loadAnnouncementListData"]),
    ...mapMutations(["SET_AnnouncementList_Info"]),

    getsearch() {
      var list = {
        name: this.name,
        pageindex: this.pages.pageindex,
        pagedata: this.pages.pagedata,
      };
      this.loadAnnouncementListData(list);
    },
    //分页显示数
    handleSizeChange(val) {
      this.pages.pagedata = val;
      this.loadAnnouncementListData(this.pages);
    },
    //当前页码
    handleCurrentChange(val) {
      this.pages.pageindex = val;

      this.loadAnnouncementListData(this.pages);
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
      this.EditDid = false;
      this.GetAll();
    },
    DigPlan() {
      this.PlanDid = false;
      this.GetAll();
    },
  },
  mounted() {
    this.loadAnnouncementListData(this.pages);
    this.getsearch();
  },
  store,
};
</script>
<style >
</style>