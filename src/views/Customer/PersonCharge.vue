<template >
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-form-item label="联系人姓名">
          <el-input v-model="name" placeholder="联系人姓名"></el-input>
        </el-form-item>
        <el-button type="primary" @click="getsearch()">查询</el-button>

        <a
          href="https://localhost:5001/api/Customerinfo/PersonNpoiExportExcel"
          style="
            width: 180px;
            height: 60px;
            background-color: #98c0e4;
            color: white;
            font-size: 20px;
          "
          >导出数据</a
        >
      </el-form-item>
    </el-form>
    <el-table :data="PersonChargeList" border style="width: 100%">
      <el-table-column prop="Name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="Post" label="职务" width="120"> </el-table-column>
      <el-table-column prop="Phone" label="电话" width="120"> </el-table-column>
      <el-table-column prop="Dep" label="部门" width="300"> </el-table-column>
      <el-table-column prop="Email" label="邮箱"> </el-table-column>
      <el-table-column prop="EntryTime" label="录入时间">
        <template slot-scope="scope">
          {{ scope.row.EntryTime.substring(0, 10) }}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="250">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button @click="SeeLocklist(scope.row.Id)" type="text" size="small"
            >查看客户信息</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="pages.pagedata"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
    >
    </el-pagination>

    <!--弹窗开始-->
    <el-dialog
      title="甲方负责人信息查看"
      :visible.sync="digshow"
      v-if="digshow"
      width="50%"
      height="50%"
    >
      <span>
        <tempitem></tempitem>
      </span>
      <span slot="footer">
        <el-button @click="digshow = false">关闭</el-button>
        <el-button type="primary" @click="digshow">ok</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="客户信息展示"
      :visible.sync="CustItem"
      width="90%"
      v-if="CustItem"
    >
      <span><custlistsee :id="pid"></custlistsee></span>
      <span slot="footer">
        <el-button @click="CustItem = false">关闭</el-button>
        <el-button type="primary" @click="CustItem">OK</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import store from "@/vuex/store";
import custlistsee from "@/components/Customer/CustSeePerson.vue";
import tempitem from "@/components/Customer/PersonChargesee.vue";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: { tempitem, custlistsee },
  data() {
    return {
      digshow: false,
      CustItem: false,
      pid: 0,
      name: "",
      pages: {
        pageindex: 1,
        pagedata: 1,
      },
    };
  },
  computed: {
    ...mapState(["PersonChargeList", "page"]),
    ...mapGetters([""]),
  },
  methods: {
    ...mapActions(["loadPersonChargeData"]),
    ...mapMutations(["SET_PersonCharge_INFO"]),
    handleSelectionChange(val) {
      console.log(val);
    },

    getsearch() {
      var list = {
        name: this.name,
        pageindex: this.pages.pageindex,
        pagedata: this.pages.pagedata,
      };
      this.loadPersonChargeData(list);
    },
    //分页显示数
    handleSizeChange(val) {
      this.pages.pagedata = val;
      this.loadPersonChargeData(this.pages);
    },
    //当前页码
    handleCurrentChange(val) {
      this.pages.pageindex = val;

      this.loadPersonChargeData(this.pages);
    },
    handleClick(val) {
      if (localStorage.getItem("tempitem") == null) {
        localStorage.setItem("tempitem", JSON.stringify(val));
      } else {
        localStorage.removeItem("tempitem");
        localStorage.setItem("tempitem", JSON.stringify(val));
      }
      this.digshow = true;
    },
    SeeLocklist(val) {
      this.pid = val;
      this.CustItem = true;
    },
  },
  mounted() {
    this.loadPersonChargeData(this.pages);
  },
  created() {},
  store,
};
</script>
<style>
</style>