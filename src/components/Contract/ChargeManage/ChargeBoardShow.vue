<template   >
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column prop="AmountRecorded" label="入账额（万元）" width="130">
      </el-table-column>
      <el-table-column prop="ConstructionUnit" label="比列" width="100">
        <template slot-scope="scope">
          <span>{{ (scope.row.AmountRecorded / Money) * 100 }}%</span>
        </template>
      </el-table-column>
      <el-table-column prop="Contractinfo" label="合同信息" width="100">
      </el-table-column>
      <el-table-column prop="RecordedTime" label="收费时间" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.RecordedTime.substring(0, 10) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="Remarks" label="备注"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ["id", "summoney"],
  data() {
    return {
      tableData: [],
      Money: this.summoney,
    };
  },
  methods: {
    GetTable() {
      this.axios
        .get(`https://localhost:5001/api/ContractCharges/GetAll?id=${this.id}`)
        .then((res) => {
          this.tableData = res.data.Data;
        });
    },
  },
  created() {
    this.GetTable();
  },
};
</script>
<style   >
</style>