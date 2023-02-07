<template >
  <div>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="标题">
        <el-input v-model="sizeForm.Title"></el-input>
      </el-form-item>

      <el-form-item label="发布时间">
        <el-date-picker
          type="date"
          placeholder="发布时间"
          v-model="sizeForm.Senddate"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="消息内容">
        <div style="border: 1px solid #ccc">
          <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editor"
            :defaultConfig="toolbarConfig"
            :mode="mode"
          />
          <Editor
            style="height: 200px; overflow-y: hidden"
            v-model="Content"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="onCreated"
          />
        </div>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Vue from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

export default Vue.extend({
  components: { Editor, Toolbar },
  data() {
    return {
      sizeForm: {
        Titel: "",
        Senddate: "",
        UserName: "",
        Content: "",
      },

      editor: null,
      Content: "<p></p>",
      toolbarConfig: {},
      editorConfig: { placeholder: "请输入内容..." },
      mode: "default", // or 'simple'
    };
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
    },
    onSubmit() {
      var list = JSON.parse(localStorage.getItem("UserInfo"));
      this.sizeForm.UserName = list.Account;
      this.sizeForm.Content = this.Content;
      console.log(this.sizeForm.UserName);
      this.axios
        .post("https://localhost:5001/api/Log/CreateAdd", this.sizeForm)
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
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁编辑器
  },
});
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>