<template    >
  <div>
    <div>
      <h2>基本信息</h2>
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            编号:
            <span style="color: green">
              {{ AllPersonChargeList.customerinfo.Number }}</span
            >
          </div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            客户名称:
            <span style="color: green">
              {{ AllPersonChargeList.customerinfo.CustomerName }}</span
            >
          </div></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            公司地址:
            <span style="color: green">
              {{ AllPersonChargeList.customerinfo.CompanyAddress }}</span
            >
          </div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            联系人:
            <span style="color: green">
              {{ AllPersonChargeList.customerinfo.Contacts }}</span
            >
          </div></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            电话号码:
            <span style="color: green">
              {{ AllPersonChargeList.customerinfo.Telephone }}</span
            >
          </div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            开户银行账号:
            <span style="color: green">
              {{ AllPersonChargeList.customerinfo.BankAccount }}</span
            >
          </div></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            开户银行名称:
            <span style="color: green">
              {{ AllPersonChargeList.customerinfo.BankName }}</span
            >
          </div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            企业代码:
            <span style="color: green">
              {{ AllPersonChargeList.customerinfo.EnterpriseCode }}</span
            >
          </div></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            客户类型:
            <span style="color: green">
              {{ AllPersonChargeList.customerinfo.CustomerType }}</span
            >
          </div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            所属行业:
            <span style="color: green">
              {{ AllPersonChargeList.customerinfo.Industry }}</span
            >
          </div></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            信用级别:
            <span style="color: green">
              {{ AllPersonChargeList.customerinfo.CreditRating }}</span
            >
          </div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            法定代表:
            <span style="color: green">
              {{ AllPersonChargeList.customerinfo.Representative }}</span
            >
          </div></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            纳税人识别号:
            <span style="color: green">
              {{ AllPersonChargeList.customerinfo.TaxpayerNum }}</span
            >
          </div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
      </el-row>

      <h2>甲方负责人信息</h2>
      <el-table
        :data="AllPersonChargeList.personcharge"
        height="250"
        border
        style="width: 100%"
      >
        <el-table-column prop="Cus_Id" label="客户信_Id" width="180">
        </el-table-column>
        <el-table-column prop="DustomerId" label="客户Id" width="180">
        </el-table-column>
        <el-table-column prop="Name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="Post" label="职务" width="180">
        </el-table-column>
        <el-table-column prop="Phone" label="电话" width="180">
        </el-table-column>
        <el-table-column prop="Dep" label="部门" width="180"> </el-table-column>
        <el-table-column prop="Email" label="邮箱" width="180">
        </el-table-column>
        <el-table-column prop="EntryTime" label="录入时间" width="180">
        </el-table-column>
      </el-table>
      <h2>附件表信息</h2>
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            文件名:
            <span style="color: green">
              {{ AllPersonChargeList.fileinfo.FileName }}</span
            >
          </div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            上传时间:
            <span style="color: green">
              {{ AllPersonChargeList.fileinfo.UploadTime }}</span
            >
          </div></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            文件大小:
            <span style="color: green">
              {{ AllPersonChargeList.fileinfo.FileSize }}</span
            >
          </div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            文件类型:
            <span style="color: green">
              {{ AllPersonChargeList.fileinfo.FileType }}</span
            >
          </div></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            录入人:
            <span style="color: green">
              {{ AllPersonChargeList.fileinfo.Enteredby }}</span
            >
          </div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            附件路径:
            <span style="color: green">
              {{ AllPersonChargeList.fileinfo.Url }}</span
            >
          </div></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            附件类别:
            <span style="color: green">
              {{ AllPersonChargeList.fileinfo.FIleCategroy }}</span
            >
          </div></el-col
        >
        <el-col :span="12"></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
//vuex
import store from "@/vuex/store";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      personcharge: [],
    };
  },

  computed: {
    ...mapState(["AllPersonChargeList"]),
    ...mapGetters([""]),
  },
  methods: {
    ...mapActions(["loadPerSonRecoilData"]),
    ...mapMutations(["SET_PerSonRecoillist_INFO"]),
    Recoil() {
      this.loadPerSonRecoilData(this.id);
    },
  },
  created() {
    console.log(this.id);
    this.Recoil();
    console.log(this.AllPersonChargeList);

    console.log(this.AllPersonChargeList.personcharge);
  },

  store,
};
</script>
<style    >
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