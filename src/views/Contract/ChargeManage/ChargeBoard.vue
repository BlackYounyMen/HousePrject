<template>
  <div>
    <!-- 查询条件 -->
    <el-form :inline="true" :model="searth" class="demo-form-inline">
      <el-form-item label="合同名称：">
        <el-input v-model="searth.name" placeholder="合同名称"></el-input>
      </el-form-item>
      <el-form-item label="合同额：">
        <el-row>
          <el-col :span="10"
            ><div class="grid-content bg-purple">
              <el-input v-model="searth.starting"></el-input></div
          ></el-col>
          <el-col class="line" :span="2">—</el-col>
          <el-col :span="10"
            ><div class="grid-content bg-purple-light">
              <el-input v-model="searth.termination"></el-input></div
          ></el-col>
          <el-col class="line" :span="2">万元</el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="ContractAdd">合同录入</el-button>
        <el-button type="primary" @click="GetContract()">查询</el-button>
        <div class="grid-content bg-purple-light" style="float: right">
          <a
            href="https://localhost:5001/api/ContractInfo/PersonNpoiExportExcel"
            style="
              width: 180px;
              height: 60px;
              background-color: #98c0e4;
              color: white;
              font-size: 20px;
            "
            >导出数据</a
          >
        </div>
      </el-form-item>
    </el-form>
    <!-- 数据列表 -->
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column prop="ContractId" label="合同编号" width="155">
      </el-table-column>
      <el-table-column prop="ContractNum" label="合同名称"> </el-table-column>
      <el-table-column prop="ConstructionUnit" label="建设单位">
      </el-table-column>
      <el-table-column prop="OriginalAmount" label="合同额(万元)" width="130">
      </el-table-column>
      <el-table-column prop="ActualAmount" label="实际合同额(万元)" width="130">
      </el-table-column>
      <el-table-column label="签约日期">
        <template slot-scope="scope">
          {{ scope.row.SigningDate.substr(0, 10) }}
        </template>
      </el-table-column>
      <el-table-column label="进度">
        <template slot-scope="scope">
          <el-progress
            :text-inside="true"
            :stroke-width="26"
            :percentage="90"
          ></el-progress>
          {{ scope.row }}
        </template>
      </el-table-column>
      <el-table-column prop="ProjectLeader" label="工程负责人">
      </el-table-column>
      <el-table-column label="操作" width="250">
        <template slot-scope="scope">
          <el-button type="warning">查看</el-button>
          <el-button type="danger" @click="del(scope.row.Id)">收费</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页开始-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="page.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.totalCount"
    >
    </el-pagination>
    <!--分页结束-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      //查询条件
      searth: {
        name: "",
        starting: "",
        termination: "",
      },
      //列表数据
      tableData: [],
      //分页数据
      page: {
        pageIndex: 1,
        pageSize: 5,
        totalCount: 0,
        totalPage: 0,
      },
    };
  },

  methods: {
    //跳转到添加
    ContractAdd() {
      this.$router.push("/ContractAdd");
    },

    //列表数据
    GetContract() {
      var ps = {
        params: {
          name: this.searth.name,
          starting: this.searth.starting,
          termination: this.searth.termination,
          pageIndex: this.page.pageIndex,
          pageSize: this.page.pageSize,
        },
      };

      this.axios
        .get("https://localhost:5001/api/ContractInfo/GetContract", ps)
        .then((res) => {
          this.tableData = res.data.Data;
          this.page.totalCount = res.data.PageCount;
          this.page.totalPage = res.data.PageSize;
        });
    },
    //分页
    handleSizeChange(val) {
      this.page.pageSize = val;
      this.GetContract();
    },
    handleCurrentChange(val) {
      this.page.pageIndex = val;
      this.GetContract();
    },

    //删除
    del(id) {
      console.log(id);
    },
  },

  mounted() {
    this.GetContract();
  },
};
</script>
<style>
</style>