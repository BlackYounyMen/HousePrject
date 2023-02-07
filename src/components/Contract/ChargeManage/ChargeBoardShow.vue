<template   >
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column prop="ContractId" label="序号" width="155">
      </el-table-column>
      <el-table-column prop="AmountRecorded" label="入账额（万元）">
      </el-table-column>
      <el-table-column prop="ConstructionUnit" label="比列"> </el-table-column>
      <el-table-column prop="Contractinfo" label="合同信息"> </el-table-column>
      <el-table-column prop="RecordedTime" label="收费时间" width="130">
      </el-table-column>
      <el-table-column prop="Remarks" label="备注" width="130">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    GetTable() {},
  },
  created() {
    this.GetTable();
  },
};
</script>
<style   >
</style>