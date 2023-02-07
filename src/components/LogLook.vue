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
          v-model="sizeForm.Senddate"
          style="width: 100%"
          readonly="readonly"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="消息内容">
        <span v-html="Content"></span>
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
      sizeForm: {
        Title: "",
        Senddate: "",
        UserName: "",
        Content: "",
      },

      editor: null,
      Content: "",
      toolbarConfig: {},
      editorConfig: { placeholder: "请输入内容..." },
      mode: "default", // or 'simple'
    };
  },
  methods: {
    recoil() {
      this.axios
        .get(`https://localhost:5001/api/Log/Recoil?id=${this.id}`)
        .then((a) => {
          this.sizeForm = {
            id: a.data.Item.Id,
            Title: a.data.Item.Title,
            Senddate: a.data.Item.Senddate,
            UserName: "",
          };
          this.Content = a.data.Item.Content;
        });
    },
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
    },
    onSubmit() {
      var list = JSON.parse(localStorage.getItem("UserInfo"));
      this.sizeForm.UserName = list.Account;
      this.sizeForm.Content = this.Content;
      console.log(this.sizeForm.UserName);
      this.axios
        .post("https://localhost:5001/api/Log/DIcUpdate", this.sizeForm)
        .then((res) => {
          if (res.data == true) {
            this.$message({
              showClose: true,
              message: "修改成功",
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
    this.recoil();
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁编辑器
  },
});
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>