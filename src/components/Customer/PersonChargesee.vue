<template >
  <div>
    <el-row>
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          客户信_Id: <span style="color: green"> {{ list.Cus_Id }}</span>
        </div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          客户Id: <span style="color: green"> {{ list.DustomerId }}</span>
        </div></el-col
      >
    </el-row>

    <el-row>
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          姓名: <span style="color: green"> {{ list.Name }}</span>
        </div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          职务: <span style="color: green"> {{ list.Post }}</span>
        </div></el-col
      >
    </el-row>

    <el-row>
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          电话: <span style="color: green"> {{ list.Phone }}</span>
        </div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          部门: <span style="color: green"> {{ list.Dep }}</span>
        </div></el-col
      >
    </el-row>

    <el-row>
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          录入时间: <span style="color: green"> {{ list.EntryTime }}</span>
        </div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          邮箱: <span style="color: green"> {{ list.Email }}</span>
        </div></el-col
      >
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.list = JSON.parse(localStorage.getItem("tempitem"));
    console.log(this.list);
  },
};
</script>
<style >
.el-row {
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  /* background: #99a9bf; */
}
.bg-purple {
  /* background: #d3dce6; */
}
.bg-purple-light {
  /* background: #e5e9f2; */
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>