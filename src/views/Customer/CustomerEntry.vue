<template>
  <div>
    <h1>客户信息</h1>

    <el-form ref="form" :model="form" label-width="180px" :rules="rules">
      <el-row :span="22">
        <el-col :span="11">
          <el-form-item label="编号" prop="Number">
            <el-input v-model="form.Number" readonly="readonly"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="客户名称" prop="CustomerName">
            <el-input v-model="form.CustomerName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :span="22">
        <el-col :span="11">
          <el-form-item label="公司地址" prop="CompanyAddress">
            <el-input v-model="form.CompanyAddress"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="联系人" prop="Contacts">
            <el-input v-model="form.Contacts"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :span="22">
        <el-col :span="11">
          <el-form-item label="公司电话" prop="Telephone">
            <el-input v-model="form.Telephone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11"> </el-col>
      </el-row>
      <br />
      <br />
      <!--这是客户信息的结束-->
      <!--这是甲方负责人的开始-->
      <div>
        <el-button
          type="primary"
          size="default"
          @click="DigOpen()"
          style="float: left"
          >添加甲方负责人</el-button
        >
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="cus_Id" label="序号" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="post" label="职务"> </el-table-column>
          <el-table-column prop="dep" label="部门"> </el-table-column>
          <el-table-column prop="phone" label="电话"> </el-table-column>
          <el-table-column prop="email" label="Email"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="Delete(scope.row)" type="text" size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>

      <br />
      <!--这是甲方负责人的结束-->

      <el-row :span="22">
        <el-col :span="11">
          <el-form-item label="开户银行名称" prop="BankName" width="80px">
            <el-input v-model="form.BankName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="企业代码" prop="EnterpriseCode">
            <el-input v-model="form.EnterpriseCode"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :span="22">
        <el-col :span="11">
          <el-form-item label="客户类型" prop="CustomerType">
            <el-select v-model="form.CustomerType" placeholder="请选择客户类型">
              <el-option
                v-for="items in FirstSelectItem"
                :key="items.Id"
                :label="items.ItemName"
                :value="items.ItemName"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="所属行业" prop="Industry">
            <el-select v-model="form.Industry" placeholder="请选择所属行业">
              <el-option
                v-for="items in SecondSelectItem"
                :key="items.Id"
                :label="items.ItemName"
                :value="items.ItemName"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :span="22">
        <el-col :span="11">
          <el-form-item label="信用级别" prop="CreditRating">
            <el-select v-model="form.CreditRating" placeholder="请选择信用级别">
              <el-option
                v-for="items in ThirtdSelectItem"
                :key="items.Id"
                :label="items.ItemName"
                :value="items.ItemName"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="法定代表" prop="Representative">
            <el-input v-model="form.Representative"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :span="22">
        <el-col :span="11">
          <el-form-item label="纳税人识别号" prop="TaxpayerNum">
            <el-input v-model="form.TaxpayerNum"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="开户银行账号" prop="BankAccount">
            <el-input v-model="form.BankAccount"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!--用户信息全部结束-->
      <!--文件上传开始-->
      <div>
        <el-upload
          style="float: left"
          class="upload-demo"
          action="https://localhost:5001/api/Customerinfo/FileLoad"
          :on-success="handlePreview"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>

        <el-table :data="FileData" style="width: 100%">
          <el-table-column prop="FileName" label="文件名称" width="180">
          </el-table-column>
          <el-table-column prop="UploadTime" label="上传时间" width="180">
          </el-table-column>
          <el-table-column prop="FileSize" label="文件大小"> </el-table-column>
          <el-table-column prop="UploadTime" label="文件类型">
          </el-table-column>
          <el-table-column prop="Url" label="文件预览">
            <template slot-scope="scope">
              <img :src="scope.row.Url" width="120px" height="60px" />
            </template>
          </el-table-column>

          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="DeleteFile(scope.row)" type="text" size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">添加</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <!--这是弹窗的开始-->
    <el-dialog
      title="添加甲方负责人"
      :visible.sync="addDid"
      v-if="addDid"
      width="50%"
    >
      <span>
        <Diglist @Success="DigColse"></Diglist>
      </span>
      <span slot="footer"> </span>
    </el-dialog>

    <!--这是弹窗的结束-->
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState, mapActions, mapGetters } from "vuex";

import Diglist from "../../components/Customer/CustomerAdd.vue";
export default {
  components: { Diglist },
  data() {
    return {
      addDid: false,
      form: {
        Number: "",
        CustomerName: "",
        CompanyAddress: "",
        Contacts: "",
        Telephone: "",
        BankAccount: "",
        BankName: "",
        EnterpriseCode: "",
        CustomerType: "",
        Industry: "",
        CreditRating: "",
        Representative: "",
        TaxpayerNum: "",
      },
      rules: {
        Number: [{ required: true, message: "请输入编号", trigger: "blur" }],
        CustomerName: [
          { required: true, message: "请输入客户名称", trigger: "blur" },
        ],
        CompanyAddress: [
          { required: true, message: "请输入公司地址", trigger: "blur" },
        ],
        Contacts: [
          { required: true, message: "请输入联系人", trigger: "blur" },
        ],
        Telephone: [
          { required: true, message: "请输入公司电话", trigger: "blur" },
        ],
        BankAccount: [
          { required: true, message: "请输入开户银行名称", trigger: "blur" },
        ],
        BankName: [
          { required: true, message: "请输入企业代码", trigger: "blur" },
        ],
        EnterpriseCode: [
          { required: true, message: "请输入客户类型", trigger: "blur" },
        ],
        CustomerType: [
          { required: true, message: "请输入所属行业", trigger: "blur" },
        ],
        Industry: [
          { required: true, message: "请输入信用级别", trigger: "blur" },
        ],
        CreditRating: [
          { required: true, message: "请输入法定代表", trigger: "blur" },
        ],
        Representative: [
          { required: true, message: "请输入纳税人识别号", trigger: "blur" },
        ],
        TaxpayerNum: [
          { required: true, message: "请输入开户银行账号", trigger: "blur" },
        ],
      },
      tableData: [],
      FileData: [],
    };
  },
  methods: {
    ...mapActions([
      "ConMitCustomerAdd",
      "ObtainSelect",
      "ObtainSecondSelect",
      "ObtainthirtdSelect",
    ]),
    handlePreview(val) {
      var item = [];
      item.push(val);
      if (localStorage.getItem("FileItem") == null) {
        var list = [];
        list.push(val);
        localStorage.setItem("FileItem", JSON.stringify(list));
      } else {
        var d = JSON.parse(localStorage.getItem("FileItem"));

        d.push(val);
        localStorage.setItem("FileItem", JSON.stringify(d));
      }
      this.FileData = JSON.parse(localStorage.getItem("FileItem"));
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.ConMitCustomerAdd(this.form);
        } else {
          return false;
        }
      });
    },
    DigOpen() {
      this.addDid = true;
    },
    //弹框关闭
    DigColse() {
      this.$message.success("添加成功");
      this.addDid = false;

      this.localStoragedata();
    },
    localStoragedata() {
      this.tableData = JSON.parse(localStorage.getItem("customeritem"));
    },
    localFiledata() {
      this.FileData = JSON.parse(localStorage.getItem("FileItem"));
    },
    Delete(val) {
      var newlist = [];
      for (let a of this.tableData) {
        if (a != val) {
          newlist.push(a);
        }
      }
      localStorage.setItem("customeritem", JSON.stringify(newlist));
      this.localStoragedata();
    },
    DeleteFile(val) {
      var newlist = [];
      for (let a of this.FileData) {
        if (a != val) {
          newlist.push(a);
        }
      }
      localStorage.setItem("FileItem", JSON.stringify(newlist));
      this.localFiledata();
    },
  },
  created() {
    var name = JSON.parse(localStorage.getItem("UserInfo")).Name;
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours(); //获取当前小时数(0-23)
    const minute = date.getMinutes(); //获取当前分钟数(0-59)
    const second = date.getSeconds(); //获取当前秒数(0-59)

    var d = `${name}${year}${month}${day}${hour}${minute}${second}`;
    this.form.Number = d;
    this.localStoragedata();
    this.localFiledata();
    this.ObtainSelect(
      `https://localhost:5001/api/Dictionariesentry/GetSelect?id=5`
    );
    this.ObtainSecondSelect(
      `https://localhost:5001/api/Dictionariesentry/GetSelect?id=6`
    );
    this.ObtainthirtdSelect(
      `https://localhost:5001/api/Dictionariesentry/GetSelect?id=7`
    );
  },
  computed: {
    ...mapState([
      "BackState",
      "FirstSelectItem",
      "SecondSelectItem",
      "ThirtdSelectItem",
    ]),
    ...mapGetters([""]),
  },
  store,
};
</script>