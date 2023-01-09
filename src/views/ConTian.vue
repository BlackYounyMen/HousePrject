<template >
  <div>
    <el-container>
      <el-header>欢迎来到房地产项目</el-header>
      <el-container>
        <el-aside width="200px">
          <!--左侧菜单栏显示-->
          <el-menu
            default-active="1"
            background-color="#545c64"
            text-color="#fff"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      // list: [
      //   {
      //     path: "/1",
      //     name: "导航一",
      //     icon: "el-icon-menu",
      //     children: [
      //       {
      //         path: "/1/1",
      //         name: "导航1-1",
      //         icon: "el-icon-menu",
      //         children: [
      //           {
      //             path: "/1/1/1",
      //             name: "导航1-1-1",
      //             icon: "el-icon-menu",
      //           },
      //           {
      //             path: "/1/1/2",
      //             name: "导航1-1-2",
      //             icon: "el-icon-menu",
      //           },
      //           {
      //             path: "/1/1/3",
      //             name: "导航1-1-3",
      //             icon: "el-icon-menu",
      //           },
      //         ],
      //       },
      //       {
      //         path: "/1/2",
      //         name: "导航1-2",
      //         icon: "el-icon-menu",
      //         children: [
      //           {
      //             path: "/1/1/1",
      //             name: "导航1-1-1",
      //             icon: "el-icon-menu",
      //           },
      //           {
      //             path: "/1/1/2",
      //             name: "导航1-1-2",
      //             icon: "el-icon-menu",
      //           },
      //           {
      //             path: "/1/1/3",
      //             name: "导航1-1-3",
      //             icon: "el-icon-menu",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     path: "/2",
      //     name: "导航二",
      //     icon: "el-icon-menu",
      //   },
      // ],
    };
  },
  methods: {
    GetMenu() {
      this.axios
        .get("https://localhost:44360/api/Login/GetMenu")
        .then((res) => {
          this.list = res.data;
        });
    },
  },
  created() {
    this.GetMenu();
  },
};
</script>
<style >
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
  text-align: center;
  line-height: 200px;
  height: 800px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
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
</style>