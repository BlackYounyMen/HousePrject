<template>
  <div>
    <h1>客户信息</h1>

    <el-form ref="form" :model="form" label-width="80px">
      <el-row :span="22">
        <el-col :span="11">
          <el-form-item label="编号">
            <el-input v-model="form.Number"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="客户名称">
            <el-input v-model="form.CustomerName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :span="22">
        <el-col :span="11">
          <el-form-item label="公司地址">
            <el-input v-model="form.CompanyAddress"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="联系人">
            <el-input v-model="form.Contacts"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :span="22">
        <el-col :span="11">
          <el-form-item label="公司电话">
            <el-input v-model="form.Telephone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11"> </el-col>
      </el-row>
      <br />
      <br />

      <el-row :span="22">
        <el-col :span="11">
          <el-form-item label="开户银行名称">
            <el-input v-model="form.BankName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="企业代码">
            <el-input v-model="form.EnterpriseCode"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :span="22">
        <el-col :span="11">
          <el-form-item label="客户类型">
            <el-select v-model="form.CustomerType" placeholder="请选择客户类型">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="所属行业">
            <el-select v-model="form.Industry" placeholder="请选择所属行业">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :span="22">
        <el-col :span="11">
          <el-form-item label="信用级别">
            <el-select v-model="form.CreditRating" placeholder="请选择信用级别">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="法定代表">
            <el-input v-model="form.Representative"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :span="22">
        <el-col :span="11">
          <el-form-item label="纳税人识别号">
            <el-input v-model="form.TaxpayerNum"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="开户银行账号">
            <el-input v-model="form.BankAccount"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
import Diglist from "../../components/Customer/CustomerAdd.vue";
export default {
  components: { Diglist },
  data() {
    return {
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
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>