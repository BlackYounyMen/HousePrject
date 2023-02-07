<template >
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-form-item label="部门名称">
          <el-input v-model="Name" placeholder="部门名称"></el-input>
        </el-form-item>
        <el-button type="primary" @click="GetAll()">查询</el-button>
        <el-button type="primary" @click="DigOpen()">添加</el-button>
      </el-form-item>
    </el-form>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column prop="Name" label="部门名称" width="140">
      </el-table-column>
      <el-table-column prop="SuperiorId" label="上级id" width="120">
      </el-table-column>
      <el-table-column prop="DescContent" label="部门描述" width="200">
      </el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button @click="Edit(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button @click="Delete(scope.row)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!--分页开始-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="page.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
    >
    </el-pagination>
    <el-dialog title="添加" :visible.sync="addDid" v-if="addDid" width="50%">
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
  </div>
</template>
<script>
import RoleAdd from "@/components/System/DeptAdd.vue";
import RoleEdit from "@/components/System/DeptEdit.vue";
export default {
  components: { RoleAdd, RoleEdit },
  data() {
    return {
      Name: "",
      page: {
        pageindex: 1,
        pagedata: 10,
        total: 0,
        totalpage: 0,
      },
      addDid: false,
      EditDid: false,
      PlanDid: false,
      tableData: [],
      Fid: 0,
    };
  },
  methods: {
    //#region  表格数据方法

    //数据显示
    GetAll() {
      var token = {
        params: {
          name: this.Name,
          pageindex: this.page.pageindex,
          pagesize: this.page.pagedata,
        },
      };
      this.axios
        .get("https://localhost:5001/api/Department/GetAll", token)
        .then((res) => {
          var data = res.data;
          if (data.Code == 200) {
            this.tableData = [];
            this.tableData = data.Data;

            this.page.total = data.PageCount;
            this.page.totalpage = data.PageSize;
          }
        });
    },

    //分页显示数
    handleSizeChange(val) {
      this.page.pagedata = val;
      this.GetAll();
    },
    //当前页码
    handleCurrentChange(val) {
      this.page.pageindex = val;
      this.GetAll();
    },
    //删除方法
    Delete(val) {
      const list = [];
      list.push(val.Id);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.axios
            .get(`https://localhost:5001/api/Department/Delete?id=${val.Id}`)
            .then((res) => {
              var state = res.data;

              if (state == true) {
                this.$message({
                  showClose: true,
                  message: "删除成功",
                });
                this.GetAll();
              } else {
                this.$message({
                  showClose: true,
                  message: "删除失败",
                  type: "warning",
                });
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    Edit(val) {
      this.Fid = val.Id;
      this.EditDid = true;
    },
    //批量删除
    // DeleteItem() {
    //   const list = [];
    //   for (let a of this.List) {
    //     list.push(a.Id);
    //   }
    //   this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning",
    //   })
    //     .then(() => {
    //       this.axios
    //         .post("https://localhost:5001/api/Personnel/Delete", list)
    //         .then((res) => {
    //           var state = res.data;
    //           if (state == true) {
    //             this.$message({
    //               showClose: true,
    //               message: "删除成功",
    //             });
    //             this.GetAll();
    //           } else {
    //             this.$message({
    //               showClose: true,
    //               message: "删除失败",
    //               type: "warning",
    //             });
    //           }
    //         });
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "已取消删除",
    //       });
    //     });
    // },
    //#endregion

    //#region  对话框部分
    //弹框开启
    DigOpen() {
      this.addDid = true;
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
    //#endregion
  },
  created() {
    this.GetAll();
  },
};
</script>
<style >
</style>