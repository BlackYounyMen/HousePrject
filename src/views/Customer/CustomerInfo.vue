<template>
  <div id="app">
    <el-row>
      <el-col :span="6"
        ><div class="grid-content bg-purple" style="float: left">
          生产部门:<el-input
            v-model="searth.name"
            style="width: 300px"
          ></el-input></div
      ></el-col>
      <el-col :span="10"
        ><div class="grid-content bg-purple-light">
          录入时间
          <el-date-picker
            v-model="searth.sdate"
            type="date"
            placeholder="选择日期"
            style="width: 300px"
          >
          </el-date-picker>

          至:
          <el-date-picker
            v-model="searth.odate"
            type="date"
            placeholder="选择日期"
            style="width: 300px"
          >
          </el-date-picker></div
      ></el-col>
      <el-col :span="2"
        ><div class="grid-content bg-purple"></div>
        <el-button type="primary" size="default" @click="Load()"
          >查询</el-button
        >
      </el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light">
          <a
            href="https://localhost:5001/api/Customerinfo/NpoiExportExcel"
            style="
              width: 180px;
              height: 60px;
              background-color: #98c0e4;
              color: white;
              font-size: 20px;
            "
            >导出数据</a
          >
        </div></el-col
      >
    </el-row>
    <el-table
      :data="CustomerList"
      border
      style="width: 100%"
      ref="table"
      @selection-change="handleSelectionChange"
    >
      <!--配置菜单开始-->
      <el-table-column fixed type="index" align="center" :index="1">
        <template #header>
          <el-popover placement="bottom" :width="600" :visible="visible">
            <!-- 配置列面板 -->
            <transition name="fade">
              <div>
                <div>选择显示字段</div>
                <div>
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <el-checkbox
                          v-model="CustomerStateList[0]"
                          checked="checked"
                          >复选框</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple-light"></div
                    ></el-col>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <el-checkbox
                          v-model="CustomerStateList[1]"
                          checked="checked"
                          >编号</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple-light">
                        <el-checkbox
                          v-model="CustomerStateList[2]"
                          checked="checked"
                          >客户名称</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <el-checkbox
                          v-model="CustomerStateList[3]"
                          checked="checked"
                          >公司地址</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple-light">
                        <el-checkbox
                          v-model="CustomerStateList[4]"
                          checked="checked"
                          >联系人</el-checkbox
                        >
                      </div></el-col
                    >
                  </el-row>

                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <el-checkbox v-model="CustomerStateList[5]"
                          >电话号码</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple-light">
                        <el-checkbox v-model="CustomerStateList[6]"
                          >开户银行账号</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <el-checkbox v-model="CustomerStateList[7]"
                          >开户银行名称</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple-light">
                        <el-checkbox v-model="CustomerStateList[8]"
                          >企业代码</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <el-checkbox v-model="CustomerStateList[9]"
                          >客户类型</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple-light">
                        <el-checkbox v-model="CustomerStateList[10]"
                          >所属行业</el-checkbox
                        >
                      </div></el-col
                    >
                  </el-row>

                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <el-checkbox v-model="CustomerStateList[11]"
                          >信用级别</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple-light">
                        <el-checkbox v-model="CustomerStateList[12]"
                          >法定代表</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <el-checkbox v-model="CustomerStateList[13]"
                          >纳税人识别号</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple-light">
                        <el-checkbox v-model="CustomerStateList[14]"
                          >客户信_Id</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <el-checkbox v-model="CustomerStateList[15]"
                          >客户Id</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple-light">
                        <el-checkbox v-model="CustomerStateList[16]"
                          >姓名</el-checkbox
                        >
                      </div></el-col
                    >
                  </el-row>

                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <el-checkbox v-model="CustomerStateList[17]"
                          >职务</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple-light">
                        <el-checkbox v-model="CustomerStateList[18]"
                          >电话</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <el-checkbox v-model="CustomerStateList[19]"
                          >部门</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple-light">
                        <el-checkbox v-model="CustomerStateList[20]"
                          >邮箱</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <el-checkbox v-model="CustomerStateList[21]"
                          >录入时间</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple-light">
                        <el-checkbox v-model="CustomerStateList[22]"
                          >文件名</el-checkbox
                        >
                      </div></el-col
                    >
                  </el-row>

                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <el-checkbox v-model="CustomerStateList[23]"
                          >上传时间</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple-light">
                        <el-checkbox v-model="CustomerStateList[24]"
                          >文件大小</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <el-checkbox v-model="CustomerStateList[25]"
                          >文件类型</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple-light">
                        <el-checkbox v-model="CustomerStateList[26]"
                          >录入人</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <el-checkbox v-model="CustomerStateList[27]"
                          >附件路径</el-checkbox
                        >
                      </div></el-col
                    >
                    <el-col :span="4"
                      ><div class="grid-content bg-purple-light">
                        <el-checkbox v-model="CustomerStateList[28]"
                          >附件类别</el-checkbox
                        >
                      </div></el-col
                    >
                  </el-row>
                  <!--在这里配置他的数列-->
                </div>
              </div>
            </transition>
            <template #reference>
              <i
                class="el-icon-setting"
                style="font-size: 22px; cursor: pointer"
                @click="visible = true"
              ></i>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <!--配置菜单结束-->
      <!--数据表格的展示，运用v-if使其实现效果-->
      <el-table-column type="selection" width="55" v-if="true">
      </el-table-column>
      <el-table-column prop="Number" label="编号" width="200" v-if="true">
      </el-table-column>
      <el-table-column
        prop="CustomerName"
        label="客户名称"
        width="100"
        v-if="true"
      >
      </el-table-column>
      <el-table-column
        prop="CompanyAddress"
        label="公司地址"
        width="200"
        v-if="true"
      >
      </el-table-column>
      <el-table-column prop="Contacts" label="联系人" width="100" v-if="true">
      </el-table-column>
      <el-table-column
        prop="Telephone"
        label="电话号码"
        width="100"
        v-if="CustomerStateList[5]"
      >
      </el-table-column>
      <el-table-column
        prop="BankAccount"
        label="开户银行账号"
        width="200"
        v-if="CustomerStateList[6]"
      >
      </el-table-column>
      <el-table-column
        prop="BankName"
        label="开户银行名称"
        width="120"
        v-if="CustomerStateList[7]"
      >
      </el-table-column>
      <el-table-column
        prop="EnterpriseCode"
        label="企业代码"
        width="150"
        v-if="CustomerStateList[8]"
      >
      </el-table-column>
      <el-table-column
        prop="CustomerType"
        label="客户类型"
        width="120"
        v-if="CustomerStateList[9]"
      >
      </el-table-column>
      <el-table-column
        prop="Industry"
        label="所属行业"
        width="120"
        v-if="CustomerStateList[10]"
      >
      </el-table-column>
      <el-table-column
        prop="CreditRating"
        label="信用级别"
        width="120"
        v-if="CustomerStateList[11]"
      >
      </el-table-column>
      <el-table-column
        prop="Representative"
        label="法定代表"
        width="120"
        v-if="CustomerStateList[12]"
      >
      </el-table-column>
      <el-table-column
        prop="TaxpayerNum"
        label="纳税人识别号"
        width="120"
        v-if="CustomerStateList[13]"
      >
      </el-table-column>
      <el-table-column
        prop="Cus_Id"
        label="客户信_Id"
        width="200"
        v-if="CustomerStateList[14]"
      >
      </el-table-column>
      <el-table-column
        prop="DustomerId"
        label="客户Id"
        width="120"
        v-if="CustomerStateList[15]"
      >
      </el-table-column>
      <el-table-column
        prop="Name"
        label="姓名"
        width="120"
        v-if="CustomerStateList[16]"
      >
      </el-table-column>
      <el-table-column
        prop="Post"
        label="职务"
        width="120"
        v-if="CustomerStateList[17]"
      >
      </el-table-column>
      <el-table-column
        prop="Phone"
        label="电话"
        width="120"
        v-if="CustomerStateList[18]"
      >
      </el-table-column>
      <el-table-column
        prop="Dep"
        label="部门"
        width="120"
        v-if="CustomerStateList[19]"
      >
      </el-table-column>
      <el-table-column
        prop="Email"
        label="邮箱"
        width="200"
        v-if="CustomerStateList[20]"
      >
      </el-table-column>
      <el-table-column
        prop="EntryTime"
        label="录入时间"
        width="120"
        v-if="CustomerStateList[21]"
      >
        <template slot-scope="scope">
          {{ scope.row.EntryTime.substring(0, 10) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="FileName"
        label="文件名"
        width="150"
        v-if="CustomerStateList[22]"
      >
      </el-table-column>
      <el-table-column
        prop="UploadTime"
        label="上传时间"
        width="120"
        v-if="CustomerStateList[23]"
      >
        <template slot-scope="scope">
          {{ scope.row.UploadTime.substring(0, 10) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="FileSize"
        label="文件大小"
        width="120"
        v-if="CustomerStateList[24]"
      >
      </el-table-column>
      <el-table-column
        prop="FileType"
        label="文件类型"
        width="120"
        v-if="CustomerStateList[25]"
      >
      </el-table-column>
      <el-table-column
        prop="Enteredby"
        label="录入人"
        width="120"
        v-if="CustomerStateList[26]"
      >
      </el-table-column>
      <el-table-column
        prop="Url"
        label="附件路径"
        width="200"
        v-if="CustomerStateList[27]"
      >
        <template slot-scope="scope">
          <img :src="scope.row.Url" style="width: 180px; height: 120px" />
        </template>
      </el-table-column>
      <el-table-column
        prop="FIleCategroy"
        label="附件类别"
        width="150"
        v-if="CustomerStateList[28]"
      >
      </el-table-column>

      <el-table-column label="操作" width="100" align="center">
        <template #default="scope">
          <el-button @click="handleClick(scope.row.Id)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--数据表格的展示，运用v-if使其实现效果（结束）-->
    <!--分页开始-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="pages.pagedata"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
    >
    </el-pagination>
    <!--分页结束-->

    <!--组件弹窗-->
    <el-dialog
      title="客户信息展示"
      :visible.sync="CustItem"
      width="90%"
      v-if="CustItem"
    >
      <span><CustSeePerson :id="pid"></CustSeePerson></span>
      <span slot="footer">
        <el-button @click="CustItem = false">关闭</el-button>
        <el-button type="primary" @click="CustItem">OK</el-button>
      </span>
    </el-dialog>
    <!--组件弹窗结束-->
  </div>
</template>

<script>
import CustSeePerson from "@/components/Customer/CustSeePerson.vue";
import store from "@/vuex/store";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: { CustSeePerson },
  data() {
    return {
      searth: {
        name: "",
        sdate: "",
        odate: "",
      },
      pages: {
        pageindex: 1,
        pagedata: 1,
      },
      pid: 0,
      CustItem: false,
      visible: false,
    };
  },

  computed: {
    ...mapState(["CustomerList", "CustomerStateList", "page"]),
    ...mapGetters([""]),
  },
  methods: {
    ...mapActions(["loadCustomerData", "loadCustomerStateData"]),
    ...mapMutations(["SET_Customer_INFO", "SET_CustomerState_INFO"]),
    handleSelectionChange(val) {
      console.log(val);
    },

    RandomNum(Min, Max) {
      var Range = Max - Min;
      var Rand = Math.random();
      var num = Min + Math.floor(Rand * Range); //舍去
      return num;
    },
    handleClick(row) {
      this.pid = row;
      this.CustItem = true;
    },
    saveColumn() {
      localStorage.setItem("columnSet", JSON.stringify(this.showColumn));
      this.visible = false;
    },

    //分页显示数
    handleSizeChange(val) {
      this.pages.pagedata = val;
      this.loadCustomerData(this.pages);
    },
    //当前页码
    handleCurrentChange(val) {
      this.pages.pageindex = val;
      this.loadCustomerData(this.pages);
    },
  },
  mounted() {
    this.loadCustomerStateData();
    this.loadCustomerData(this.pages);
  },
  created() {},
  store,
};
</script>

<style lang="postcss" scoped>
/* 控制淡入淡出效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>