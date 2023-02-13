<template >
  <div>
    <el-table :data="asklist" border style="width: 100%">
      <el-table-column prop="Reason" label="请假事由"> </el-table-column>
      <el-table-column prop="StartTime" label="开始时间">
        <template slot-scope="scope">
          {{ scope.row.StartTime.substring(0, 10) }}
        </template>
      </el-table-column>
      <el-table-column prop="EndTime" label="结束时间">
        <template slot-scope="scope">
          {{ scope.row.EndTime.substring(0, 10) }}
        </template>
      </el-table-column>
      <el-table-column prop="Statistics" label="考勤统计"> </el-table-column>
      <el-table-column prop="Remarks" label="原因"> </el-table-column>
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
  </div>
</template>
<script>
import store from "@/vuex/store";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
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
    ...mapState(["asklist", "page"]),
    ...mapGetters([""]),
  },
  methods: {
    ...mapActions(["loadasklistData"]),
    ...mapMutations(["SET_asklist_Info"]),
    handleSelectionChange(val) {
      console.log(val);
    },
    getsearch() {
      var list = {
        name: this.name,
        pageindex: this.pages.pageindex,
        pagedata: this.pages.pagedata,
      };
      this.loadasklistData(list);
    },
    //分页显示数
    handleSizeChange(val) {
      this.pages.pagedata = val;
      this.loadasklistData(this.pages);
    },
    //当前页码
    handleCurrentChange(val) {
      this.pages.pageindex = val;

      this.loadasklistData(this.pages);
    },
  },
  mounted() {
    this.loadasklistData(this.pages);
  },

  created() {},
  store,
};
</script>
<style >
</style>