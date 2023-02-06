<template lang="">
  <div>
     <router-view />
  </div>
</template>
<script>
import { getChildrenPath } from "@/router/indexUtil";
export default {
  methods: {
    IsLogin() {
      if (localStorage.getItem("UserInfo") != null) {
        var userid = localStorage.getItem("UserInfo");
        userid = JSON.parse(userid).Id;
        getChildrenPath(userid);
      }
    },

    created() {
      this.IsLogin();
    },
  },
};
</script>
<style lang="">
</style>