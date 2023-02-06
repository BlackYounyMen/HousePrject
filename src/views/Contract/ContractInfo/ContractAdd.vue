<template>
  <div style="width: 90%">
    <!-- 客户信息 -->
    <div>
      <h4 style="text-align: left">客户信息</h4>
      <el-form ref="form" :model="customer" label-width="80px">
        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <el-form-item label="客户名称">
                <el-select
                  v-model="customer.CustomerName"
                  placeholder="请选择客户"
                  @change="bindCustomer"
                  style="width: 100%"
                >
                  <el-option
                    v-for="item in customerList"
                    :key="item.Id"
                    :label="item.CustomerName"
                    :value="item.Number"
                  ></el-option>
                </el-select>
              </el-form-item></div
          ></el-col>
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-form-item label="客户编号">
                <el-input v-model="customer.Number" disabled></el-input>
              </el-form-item></div
          ></el-col>
        </el-row>

        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <el-form-item label="公司地址">
                <el-input v-model="customer.CompanyAddress" disabled></el-input>
              </el-form-item></div
          ></el-col>
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-form-item label="公司电话">
                <el-input v-model="customer.Telephone" disabled></el-input>
              </el-form-item></div
          ></el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 合同信息 -->
    <div>
      <h4 style="text-align: left">合同信息</h4>
      <el-form
        :model="contractInfo"
        :rules="rules"
        ref="contractInfo"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <el-form-item
                label="合同编号："
                label-width="150px"
                prop="contractId"
              >
                <el-input
                  v-model="contractInfo.contractId"
                  placeholder="请输入合同编号"
                  readonly="readonly"
                ></el-input>
              </el-form-item></div
          ></el-col>
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-form-item
                label="合同名称："
                label-width="150px"
                prop="contractNum"
              >
                <el-input
                  v-model="contractInfo.contractNum"
                  placeholder="请输入合同名称"
                ></el-input>
              </el-form-item></div
          ></el-col>
        </el-row>

        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <el-form-item
                label="建设单位："
                label-width="150px"
                prop="constructionUnit"
              >
                <el-input
                  v-model="contractInfo.constructionUnit"
                  placeholder="请输入建设单位"
                ></el-input>
              </el-form-item></div
          ></el-col>
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-form-item
                label="工程负责人："
                label-width="150px"
                prop="projectLeader"
              >
                <el-input
                  v-model="contractInfo.projectLeader"
                  placeholder="请输入工程负责人"
                ></el-input>
              </el-form-item></div
          ></el-col>
        </el-row>

        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <el-form-item
                label="工程负责人电话："
                label-width="150px"
                prop="phone"
              >
                <el-input
                  v-model="contractInfo.phone"
                  placeholder="请输入工程负责人电话"
                ></el-input>
              </el-form-item></div
          ></el-col>
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-form-item
                label="甲方负责人："
                label-width="150px"
                prop="firstParty"
              >
                <el-input
                  v-model="contractInfo.firstParty"
                  placeholder="请输入甲方负责人"
                ></el-input>
              </el-form-item></div
          ></el-col>
        </el-row>

        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <el-form-item
                label="甲方负责人电话："
                label-width="150px"
                prop="firstPhone"
              >
                <el-input
                  v-model="contractInfo.firstPhone"
                  placeholder="请输入甲方负责人电话"
                ></el-input>
              </el-form-item></div
          ></el-col>
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-form-item
                label="工程地点："
                label-width="150px"
                prop="projectlLocation"
              >
                <el-input
                  v-model="contractInfo.projectlLocation"
                  placeholder="请输入工程地点"
                ></el-input>
              </el-form-item></div
          ></el-col>
        </el-row>

        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <el-form-item
                label="原始合同额："
                label-width="150px"
                prop="originalAmount"
              >
                <el-input
                  v-model="contractInfo.originalAmount"
                  placeholder="请输入原始合同额"
                ></el-input>
              </el-form-item></div
          ></el-col>
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-form-item
                label="实际合同额："
                label-width="150px"
                prop="actualAmount"
              >
                <el-input
                  v-model="contractInfo.actualAmount"
                  placeholder="请输入实际合同额"
                ></el-input>
              </el-form-item></div
          ></el-col>
        </el-row>

        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <el-form-item
                label="合同签约日期："
                label-width="150px"
                prop="signingDate"
              >
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="contractInfo.signingDate"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item></div
          ></el-col>
          <el-col :span="12"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 合同签约信息 -->
    <div>
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <h4 style="text-align: left">合同签约信息</h4>
          </div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <el-button type="success" round @click="addSubscript"
              >添加</el-button
            >
          </div></el-col
        >
      </el-row>
      <el-table :data="SubscriptList" style="width: 100%">
        <el-table-column prop="id" label="序号" width="55"> </el-table-column>
        <el-table-column prop="agreementName" label="协议名称">
        </el-table-column>
        <el-table-column prop="builtupArea" label="建筑面积"> </el-table-column>
        <el-table-column prop="actualAmount" label="实际合同额">
        </el-table-column>
        <el-table-column prop="chargingStatus" label="收费状态">
        </el-table-column>
        <el-table-column prop="remarks" label="备注"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="Delete(scope.row)" type="text" size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-button type="primary" size="default" @click="AddCustomer()"
      >添加</el-button
    >

    <!-- 添加合同签约弹框 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      v-if="dialogVisible"
      width="45%"
    >
      <span>
        <el-form
          :model="Subscript"
          :rules="rulesSub"
          ref="Subscript"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-row>
            <el-col :span="12"
              ><div class="grid-content bg-purple">
                <el-form-item label="协议名称" prop="agreementName">
                  <el-input v-model="Subscript.agreementName"></el-input>
                </el-form-item></div
            ></el-col>
            <el-col :span="12"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="收费状态">
                  <el-radio-group v-model="Subscript.chargingStatus">
                    <el-radio label="false">已结清</el-radio>
                    <el-radio label="true">未结清</el-radio>
                  </el-radio-group>
                </el-form-item>
              </div></el-col
            >
          </el-row>
          <el-row>
            <el-col :span="12"
              ><div class="grid-content bg-purple">
                <el-form-item
                  label="实际合同额(万元)"
                  label-width="150px"
                  prop="actualAmount"
                >
                  <el-input v-model="Subscript.actualAmount"></el-input>
                </el-form-item></div
            ></el-col>
            <el-col :span="12"
              ><div class="grid-content bg-purple-light">
                <el-form-item
                  label="建筑面积(㎡)"
                  label-width="120px"
                  prop="builtupArea"
                >
                  <el-input v-model="Subscript.builtupArea"></el-input>
                </el-form-item></div
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="24"
              ><div class="grid-content bg-purple">
                <el-form-item label="备注" prop="remarks">
                  <el-input
                    type="textarea"
                    v-model="Subscript.remarks"
                  ></el-input>
                </el-form-item></div
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="24"
              ><div class="grid-content bg-purple">
                <el-form-item>
                  <el-button type="primary" @click="addSub">添加</el-button>
                  <el-button @click="resetForm('Subscript')">重置</el-button>
                </el-form-item>
              </div></el-col
            >
          </el-row>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 弹框结束 -->
  </div>
</template>
<script>
import store from "@/vuex/store";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["BackState"]),
    ...mapGetters([""]),
  },
  data() {
    return {
      //客户信息
      customer: {
        CustomerName: "",
        Number: "",
        CompanyAddress: "",
        Telephone: "",
      },
      //接收客户列表
      customerList: [],
      //合同信息
      contractInfo: {
        contractId: "",
        contractNum: "",
        contractName: "",
        constructionUnit: "",
        projectLeader: "",
        phone: "",
        firstParty: "",
        firstPhone: "",
        projectlLocation: "",
        originalAmount: "",
        actualAmount: "",
        signingDate: "",
        customerId: "",
      },
      //验证
      rules: {
        contractId: [
          { required: true, message: "请输入合同编号", trigger: "blur" },
        ],
        contractNum: [
          { required: true, message: "请输入合同名称", trigger: "blur" },
        ],
        contractName: [
          { required: true, message: "请输入建设单位", trigger: "blur" },
        ],
        constructionUnit: [
          { required: true, message: "请输入工程负责人", trigger: "blur" },
        ],
        projectLeader: [
          { required: true, message: "请输入工程负责人电话", trigger: "blur" },
        ],
        phone: [
          {
            required: true,
            message: "请输入工程负责人电话",
            trigger: "blur",
          },
          {
            validator: function (rule, value, callback) {
              if (/^1[34578]\d{9}$/.test(value) == false) {
                callback(new Error("手机号格式错误"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
        firstParty: [
          { required: true, message: "请输入甲方负责人", trigger: "blur" },
        ],
        firstPhone: [
          { required: true, message: "请输入甲方负责人电话", trigger: "blur" },
        ],
        projectlLocation: [
          { required: true, message: "请输入工程地点", trigger: "blur" },
        ],
        originalAmount: [
          { required: true, message: "请输入原始合同额", trigger: "blur" },
        ],
        actualAmount: [
          { required: true, message: "请输入实际合同额", trigger: "blur" },
        ],
        signingDate: [
          { required: true, message: "请选择合同签约日期", trigger: "blur" },
        ],
      },
      //合同签约信息
      Subscript: {
        contractId: "",
        agreementName: "",
        builtupArea: "",
        actualAmount: "",
        chargingStatus: "",
        remarks: "",
      },

      //验证
      rulesSub: {
        agreementName: [
          { required: true, message: "请输入协议名称", trigger: "blur" },
        ],
        builtupArea: [
          { required: true, message: "请输入建筑面积", trigger: "blur" },
        ],
        actualAmount: [
          { required: true, message: "请输入实际合同额", trigger: "blur" },
        ],
        remarks: [{ required: true, message: "请输入备注", trigger: "blur" }],
      },
      dialogVisible: false,
      //合同签约信息集合 列表数据
      SubscriptList: [],
    };
  },

  methods: {
    ...mapActions(["CustomerAdd"]),
    //获取客户信息，绑定客户下拉框
    getCustomer() {
      this.axios
        .get("https://localhost:5001/api/Customerinfo/Customers")
        .then((res) => {
          this.customerList = res.data.Data;
        });
    },
    //根据选中客户获取详情
    bindCustomer(val) {
      this.axios
        .get(
          "https://localhost:5001/api/Customerinfo/GetByNumber?number=" + val
        )
        .then((res) => {
          this.customer = res.data.Item;
        });
    },
    //添加合同签约弹框
    addSubscript() {
      this.dialogVisible = true;
    },

    //添加合同签约
    addSub() {
      this.$refs.Subscript.validate((valid) => {
        if (valid) {
          if (localStorage.getItem("Contract") == null) {
            console.log(this.Subscript);
            var list = [];
            list.push(this.Subscript);
            localStorage.setItem("Contract", JSON.stringify(list));
          } else {
            var d = JSON.parse(localStorage.getItem("Contract"));
            console.log(this.Subscript);
            d.push(this.Subscript);
            localStorage.setItem("Contract", JSON.stringify(d));
          }
          this.dialogVisible = false;
          this.SubscriptList = JSON.parse(localStorage.getItem("Contract"));
        } else {
          return false;
        }
      });
    },
    //重置
    resetForm(Subscript) {
      this.$refs[Subscript].resetFields();
    },
    //删除本地缓存
    Delete(val) {
      var newlist = [];
      for (let a of this.SubscriptList) {
        if (a != val) {
          newlist.push(a);
        }
      }
      localStorage.setItem("Contract", JSON.stringify(newlist));
      this.SubscriptList = JSON.parse(localStorage.getItem("Contract"));
    },
    //保存数据
    AddCustomer() {
      this.CustomerAdd(this.contractInfo);

      console.log(this.BackState);
      if (this.BackState == true) {
        this.$message({
          showClose: true,
          message: "数据添加成功",
        });
        localStorage.removeItem("Contract");
        this.SubscriptList = JSON.parse(localStorage.getItem("Contract"));
      }
    },
  },
  mounted() {
    var name = JSON.parse(localStorage.getItem("UserInfo")).Name;
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours(); //获取当前小时数(0-23)
    const minute = date.getMinutes(); //获取当前分钟数(0-59)
    const second = date.getSeconds(); //获取当前秒数(0-59)

    var d = `${name}${year}${month}${day}${hour}${minute}${second}`;
    this.contractInfo.contractId = d;
    this.getCustomer();
    this.SubscriptList = JSON.parse(localStorage.getItem("Contract"));
  },
  store,
};
</script>
<style>
</style>