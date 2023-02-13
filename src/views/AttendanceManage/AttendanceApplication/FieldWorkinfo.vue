<template >
  <div>
    <el-table :data="Fiekdworklist" border style="width: 100%">
      <el-table-column prop="ProjectName" label="项目名称/事由：">
      </el-table-column>
      <el-table-column prop="Place" label="地点"> </el-table-column>
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
      <el-table-column prop="Duration" label="加班时长"> </el-table-column>
      <el-table-column prop="Kilometers" label="公里数"> </el-table-column>
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
    ...mapState(["Fiekdworklist", "page"]),
    ...mapGetters([""]),
  },
  methods: {
    ...mapActions(["loadFiekdworklistData"]),
    ...mapMutations(["SET_Fiekdworklist_Info"]),
    handleSelectionChange(val) {
      console.log(val);
    },
    getsearch() {
      var list = {
        name: this.name,
        pageindex: this.pages.pageindex,
        pagedata: this.pages.pagedata,
      };
      this.loadFiekdworklistData(list);
    },
    //分页显示数
    handleSizeChange(val) {
      this.pages.pagedata = val;
      this.loadFiekdworklistData(this.pages);
    },
    //当前页码
    handleCurrentChange(val) {
      this.pages.pageindex = val;

      this.loadFiekdworklistData(this.pages);
    },
  },
  mounted() {
    this.loadFiekdworklistData(this.pages);
  },

  created() {},
  store,
};
</script>
<style >
</style>