<template >
  <div>
    <el-container>
      <el-header>
        <!--表头开始-->
        <div style="float: left" @click="Back()">
          <img
            src="../Pic/6453ac62-c495-4a0a-ae42-1ee74a2f42ca.png"
            width="45px"
            style="padding-top: 10px; float: left"
          />
          <div style="width: 180px; height: 60px; float: left">
            欢迎来到房地产项目
          </div>
        </div>
        <span style="color: red; width: 250px; float: right">
          <el-avatar
            shape="circle"
            :size="50"
            fit="cover"
            :src="HeadIcon"
          ></el-avatar>
          <el-button type="primary" @click="ExitLogin()" style="float: right"
            >退出账号</el-button
          ></span
        >
        <!--表头结束-->
      </el-header>
      <el-container>
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <div class="toggle-button" @click="toggleCollapse">|||</div>
          <!--左侧菜单栏显示-->
          <el-menu
            default-active="1"
            background-color="#545c64"
            text-color="#fff"
            :collapse="isCollapse"
            :collapse-transition="false"
            active-text-color="#ffd04b"
            :router="true"
          >
            <!-- 一级菜单 -->
            <template v-for="item in list">
              <el-submenu
                v-if="item.children && item.children.length"
                :index="item.path"
                :key="item.path"
              >
                <template slot="title"
                  ><i :class="item.icon"></i
                  ><span>{{ item.name }}</span></template
                >

                <!-- 二级菜单 -->
                <template v-for="itemChild in item.children">
                  <el-submenu
                    v-if="itemChild.children && itemChild.children.length"
                    :index="itemChild.path"
                    :key="itemChild.path"
                  >
                    <template slot="title"
                      ><i :class="itemChild.icon"></i
                      ><span>{{ itemChild.name }}</span></template
                    >

                    <!-- 三级菜单 -->
                    <el-menu-item
                      v-for="itemChild_Child in itemChild.children"
                      :index="itemChild_Child.path"
                      :key="itemChild_Child.path"
                    >
                      <i :class="itemChild_Child.icon"></i
                      ><span slot="title">{{
                        itemChild_Child.name
                      }}</span></el-menu-item
                    >
                  </el-submenu>

                  <el-menu-item
                    v-else
                    :index="itemChild.path"
                    :key="itemChild.path"
                    ><i :class="itemChild.icon"></i
                    ><span slot="title">{{
                      itemChild.name
                    }}</span></el-menu-item
                  >
                </template>
              </el-submenu>

              <el-menu-item v-else :index="item.path" :key="item.path"
                ><i :class="item.icon"></i
                ><span slot="title">{{ item.name }}</span></el-menu-item
              >
            </template>
            <!--这里开始进行数据测试的操作-->
            <!-- <el-menu-item index="/PermissionsView">权限测试</el-menu-item>
            <el-menu-item index="/RoleShow">角色测试</el-menu-item>
            <el-menu-item index="/UserShow">人员测试</el-menu-item> -->
            <!--这里开始进行数据测试的操作结束-->
          </el-menu>
          <!--左侧菜单栏显示结束-->
        </el-aside>
        <el-main>
          <!--页面数据显示-->
          <router-view></router-view>
          <!--页面数据显示结束-->
        </el-main>
      </el-container>
    </el-container>

    <!-- <footer> -->
    <!--分页开始-->

    <div class="d2">
      <el-button
        class="btn1"
        type="primary"
        icon="el-icon-share"
        size="default"
        style="float: right; margin-right: 3%"
        @click="toggleCollapse1"
        round
        >前往新版</el-button
      >
    </div>

    <!--分页结束-->
    <!-- </footer> -->
  </div>
</template>
<script>
import { getChildrenPath } from "@/router/indexUtil";

export default {
  data() {
    return {
      list: [],
      HeadIcon: "",
      isCollapse: false,
    };
  },
  methods: {
    IsLogin() {
      if (localStorage.getItem("UserInfo") != null) {
        var userid = localStorage.getItem("UserInfo");
        userid = JSON.parse(userid).Id;
        getChildrenPath(userid);
      }
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    toggleCollapse1() {
      if (this.isCollapse == false) {
        this.$router.push("/ConTian");
        this.$message({
          message: "成功前往新版本",
          type: "success",
        });
        this.isCollapse = true;
      } else {
        this.$router.push("/ConTian");
        this.$message({
          message: "成功返回旧版本",
          type: "success",
        });
        this.isCollapse = false;
      }
    },
    GetMenu() {
      var userid = localStorage.getItem("UserInfo");
      userid = JSON.parse(userid).Id;
      this.axios
        .get(`https://localhost:5001/api/Login/GetPermissions?id=${userid}`)
        .then((res) => {
          this.list = res.data;
        });
    },
    ExitLogin() {
      localStorage.removeItem("UserInfo");
      this.$router.push("/");
    },
    Back() {
      this.$router.push("/ConTian");
    },
  },
  mounted() {
    var userid = localStorage.getItem("UserInfo");
    this.HeadIcon = JSON.parse(userid).HandIcon;
    this.GetMenu();
    this.IsLogin();
  },
};
</script>
<style >
.d2 {
  min-width: 100%;
  height: 40px;
  position: relative;
  display: flex;
  justify-content: flex-end;
}
.btn1 {
  position: relative;
  right: 10px;
  top: 10px;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
  line-height: 200px;

  height: 900px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 10px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
footer {
  height: 60px;
  line-height: 60px;
  position: fixed;
  margin: auto;
  left: 0;

  bottom: 0;
  top: 800px;
  right: 5px;
}

.toggle-button {
  background-color: rgb(84, 92, 100);
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>