<template  >
  <div>
    <el-form
      :model="form"
      ref="form"
      :rules="rules"
      label-width="100px"
      :inline="false"
      size="normal"
    >
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <el-form-item label="字典项名称" prop="itemName">
              <el-input v-model="form.itemName"></el-input>
            </el-form-item></div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <el-form-item label="字典项值" prop="itemCode">
              <el-input v-model="form.itemCode"></el-input>
            </el-form-item></div
        ></el-col>
      </el-row>

      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <el-form-item label="排序Id">
              <el-input v-model="form.orderId"></el-input>
            </el-form-item></div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <el-form-item label="状态">
              <el-switch
                v-model="form.state"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            </el-form-item></div
        ></el-col>
      </el-row>

      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <el-form-item>
              <div v-if="buttonstate" style="float: left">
                <el-button type="primary" @click="add('form')"
                  >添加字典项</el-button
                >
                <el-button @click="deleteitemdata()">取消</el-button>
              </div>

              <div v-if="updatestate" style="float: left">
                <el-button type="primary" @click="update('form')"
                  >修改字典项</el-button
                >
                <el-button @click="showtab()">取消</el-button>
              </div>
            </el-form-item>
          </div></el-col
        >
      </el-row>
    </el-form>

    <el-row>
      <el-col :span="18"
        ><div class="grid-content bg-purple">
          字典项名称
          <el-input
            v-model="name"
            placeholder="请输入要查询的字典项"
            size="normal"
            clearable
            style="width: 190px"
          ></el-input></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light">
          <el-button type="primary" size="default" @click="getall()"
            >查询</el-button
          >
        </div></el-col
      >
    </el-row>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column prop="Coding" label="字典编码" width="120">
      </el-table-column>
      <el-table-column prop="ItemName" label="字典项名称" width="120">
      </el-table-column>
      <el-table-column prop="ItemCode" label="字典项值" width="100">
      </el-table-column>
      <el-table-column prop="OrderId" label="排序Id" width="150">
      </el-table-column>
      <el-table-column prop="State" label="状态" width="100">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.State"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="EditState(scope.row.Id)"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
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
      :page-sizes="[1, 4, 5, 10]"
      :page-size="page.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
    >
    </el-pagination>
    <!--分页结束-->
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      name: "",
      form: {
        itemCode: "",
        itemName: "",
        orderId: 0,
        state: true,
        pid: 0,
      },
      buttonstate: true,
      updatestate: false,
      rules: {
        itemCode: [
          { required: true, message: "请输入字典项", trigger: "blur" },
        ],
        itemName: [
          { required: true, message: "请输入字典值", trigger: "blur" },
        ],
      },

      page: {
        pageindex: 1,
        pagesize: 3,
        total: 0,
        totalpage: 0,
      },
      tableData: [],
    };
  },
  methods: {
    EditState(val) {
      this.axios
        .get(`https://localhost:5001/api/Dictionariesentry/EditState?id=${val}`)
        .then((res) => {
          if (res.data == true) {
            this.$message({
              showClose: true,
              message: "修改成功",
              type: "warning",
            });
            this.getall();
          }
        });
    },
    Delete(val) {
      this.axios
        .get(`https://localhost:5001/api/Dictionariesentry/Delete?id=${val.Id}`)
        .then((res) => {
          if (res.data == true) {
            this.$message({
              showClose: true,
              message: "删除成功",
              type: "warning",
            });
            this.getall();
          }
        });
    },
    getall() {
      var data = {
        params: {
          id: this.id,
          itemname: this.name,
          pageindex: this.page.pageindex,
          pagesize: this.page.pagesize,
        },
      };
      this.axios
        .get("https://localhost:5001/api/Dictionariesentry/GetAll", data)
        .then((res) => {
          this.tableData = res.data.Data;
          this.page.total = res.data.PageSize;
          this.page.totalpage = res.data.PageCount;
        });
    },
    add(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios
            .post(
              "https://localhost:5001/api/Dictionariesentry/DIcAdd",
              this.form
            )
            .then((res) => {
              if (res.data == true) {
                this.$message({
                  showClose: true,
                  message: "添加成功",
                  type: "warning",
                });
                this.getall();
              }
            });
        } else {
          return false;
        }
      });
    },
    //添加变成编辑
    Edit(val) {
      this.buttonstate = false;
      this.updatestate = true;
      this.form = {
        id: val.Id,
        itemCode: val.ItemCode,
        itemName: val.ItemName,
        orderId: val.OrderId,
        state: val.Dtate,
        pid: val.Pid,
      };
    },
    //从编辑变成添加按钮
    showtab() {
      this.buttonstate = true;
      this.updatestate = false;
    },
    //分页显示数
    handleSizeChange(val) {
      this.page.pagesize = val;
      this.getall();
    },
    //当前页码
    handleCurrentChange(val) {
      this.page.pageindex = val;
      this.getall();
    },
    update(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios
            .post(
              "https://localhost:5001/api/Dictionariesentry/DIcUpdate",
              this.form
            )
            .then((res) => {
              if (res.data == true) {
                this.$message({
                  showClose: true,
                  message: "修改成功",
                  type: "warning",
                });
                this.getall();
              }
            });
        } else {
          return false;
        }
      });
    },
    deleteitemdata() {
      this.form = {
        itemCode: "",
        itemName: "",
        orderId: 0,
        state: true,
        pid: 0,
      };
    },
  },
  created() {
    this.form.pid = this.id;
    this.getall();
  },
};
</script>
<style  >
</style>