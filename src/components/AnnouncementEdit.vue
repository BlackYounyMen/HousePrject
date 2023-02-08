<template >
  <div>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="标题">
        <el-input v-model="sizeForm.Title" readonly="readonly"></el-input>
      </el-form-item>

      <el-form-item label="发布时间">
        <el-date-picker
          type="date"
          placeholder="发布时间"
          v-model="sizeForm.ReleaseTime"
          style="width: 100%"
          readonly="readonly"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="消息内容">
        <div style="border: 1px solid #ccc">
          <span v-html="Content"></span>
        </div>
      </el-form-item>
      <el-form-item label="接收人员">
        <span v-html="sizeForm.NameShow" readonly="readonly"></span>

        <!-- <el-checkbox-group v-model="checkList" @change="getCheck">
          <el-checkbox
            v-for="item in checkboxOption"
            :key="item.Id"
            :label="item.Name"
            >{{ item.Name }}</el-checkbox
          >
        </el-checkbox-group> -->
      </el-form-item>

      <el-form-item size="large"> </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  props: ["id"],

  data() {
    return {
      checkList: [], //添加人的数据在这里
      sizeForm: {
        Titel: "",
        ReleaseTime: "",
        PublishUser: "",
        Content: "",
        NameShow: "",
      },
      editor: null,
      Content: "<p></p>",
      toolbarConfig: {},
      editorConfig: { placeholder: "请输入内容..." },
      mode: "default", // or 'simple'
      checkboxOption: [],
    };
  },
  methods: {
    recoil() {
      this.axios
        .get(`https://localhost:5001/api/Notice/Recoil?id=${this.id}`)
        .then((a) => {
          this.sizeForm = {
            id: a.data.Item.Id,
            Title: a.data.Item.Title,
            ReleaseTime: a.data.Item.ReleaseTime,
            PublishUser: "",
            NameShow: a.data.Item.NameShow,
          };
          this.Content = a.data.Item.Content;
        });
      console.log(this.sizeForm);
    },
    getCheck() {
      console.log("checkList", this.checkList);
    },
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
    },
    getrole() {
      this.axios
        .get("https://localhost:5001/api/Notice/GetHumen")
        .then((res) => {
          this.checkboxOption = res.data;
          console.log(this.checkboxOption);
        });
    },
    onSubmit() {
      var list = JSON.parse(localStorage.getItem("UserInfo"));
      this.sizeForm.UserName = list.Account;
      this.sizeForm.Content = this.Content;

      var stringData = "";
      for (let a of this.checkList) {
        console.log(a);
        stringData += a + ",";
      }
      stringData = stringData.substring(0, stringData.length - 1);
      console.log(stringData);
      this.sizeForm.AcceptRole = stringData;
      this.axios
        .post("https://localhost:5001/api/Notice/CreateAdd", this.sizeForm)
        .then((res) => {
          if (res.data == true) {
            this.$message({
              showClose: true,
              message: "添加成功",
              type: "warning",
            });
          }
          this.$emit("Success");
        });
    },
  },
  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      this.html = "<p></p>";
    }, 1500);

    const data = [];
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: `备选项 ${i}`,
        disabled: i % 4 === 0,
      });
    }
    this.getrole();
    this.recoil();
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁编辑器
  },
});
</script>
<style >
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: left;
  line-height: 10px;
}
.el-transfer-panel {
  width: 500px;
  height: 500px;
}
.el-transfer-panel__list.is-filterable {
  height: 400px;
}
.el-transfer ::v-deep.el-transfer-panel {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  display: inline-block;
  vertical-align: middle;
  width: 500px;
  height: 500px;
  max-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
}
.el-transfer ::v-deep.el-checkbox .el-transfer-panel__item {
  border-bottom: 1px solid #ccc;
}
.el-transfer ::v-deep.el-transfer-panel__list.is-filterable {
  height: 300px;
  padding-top: 0;
}
.el-transfer ::v-deep.el-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  /* margin-right: 30px; */
}
.el-transfer ::v-deep.el-transfer-panel {
  width: calc(100% / 2 - 105px / 2);
}
.el-transfer ::v-deep.el-transfer-panel__filter .el-input__inner {
  height: 32px;
  font-size: 12px;
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-right: 10px;
  padding-left: 30px;
}
.el-transfer ::v-deep.el-transfer-panel__filter {
  text-align: center;
  margin: 5px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  width: 272px;
}
.el-transfer ::v-deep .el-transfer__buttons {
  width: 45px;
}
.el-transfer ::v-deep .el-button + .el-button {
  margin-left: 0;
}
.radio {
  position: absolute;
  top: 60px;
  left: 520px;
}
/* .el-transfer ::v-deep.el-transfer-panel__filter .el-input .el-input--small .el-input--prefix{
  display: none !important;
} */
.el-transfer ::v-deep .el-transfer-panel__filter .el-input__inner {
  height: 32px;
  width: 100%;
  font-size: 12px;
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-right: 10px;
  border-radius: 0px;
  padding-left: 30px;
}
</style>
<style src="@wangeditor/editor/dist/css/style.css"></style>