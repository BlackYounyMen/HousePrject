<template >
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-form-item label="设备名称">
          <el-input v-model="name" placeholder="设备名称"></el-input>
        </el-form-item>
        <el-button type="primary" @click="getsearch()">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="Loginlist" border style="width: 100%">
      <el-table-column prop="User" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="LoginTime" label="登录时间" width="180">
        <template slot-scope="scope">
          {{ scope.row.LoginTime.substring(0, 10) }}
        </template>
      </el-table-column>
      <el-table-column prop="PCIP" label="IP地址" width="180">
      </el-table-column>
      <el-table-column prop="PCName" label="设备名称" width="180">
      </el-table-column>
      <el-table-column prop="OS" label="操作系统" width="180">
      </el-table-column>
      <el-table-column prop="Browser" label="操作浏览器"> </el-table-column>
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
      PlanDid: false,
      Fid: 0,
    };
  },
  computed: {
    ...mapState(["Loginlist", "page"]),
    ...mapGetters([""]),
  },
  methods: {
    ...mapActions(["loadLoginlistData"]),
    ...mapMutations(["SET_Loginlist_Info"]),

    getsearch() {
      var list = {
        name: this.name,
        pageindex: this.pages.pageindex,
        pagedata: this.pages.pagedata,
      };
      this.loadLoginlistData(list);
    },
    //分页显示数
    handleSizeChange(val) {
      this.pages.pagedata = val;
      this.loadLoginlistData(this.pages);
    },
    //当前页码
    handleCurrentChange(val) {
      this.pages.pageindex = val;

      this.loadLoginlistData(this.pages);
    },
  },
  mounted() {
    this.loadLoginlistData(this.pages);
  },
  store,
};
</script>
<style >
</style>