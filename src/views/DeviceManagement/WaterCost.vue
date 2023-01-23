<template >
  <div>
    <div v-for="(item, index) in DeviceList" :key="index">
      <div
        v-for="item1 in item"
        :key="item1.Id"
        style="width: 15%; height: 400px; float: left"
      >
        <div id="container" style="height: 100%"></div>
        {{ item1.Building }}号楼 -{{ item1.UnitNum }}单元号 -
        {{ item1.FloorNum }} 层
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";

import store from "@/vuex/store";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      Searth: {
        building: "",
        unitnum: "",
        state: "",
        pageindex: 1,
        pagesize: 12,
      },
    };
  },
  methods: {
    ...mapActions(["loadWaterData"]),
    ...mapMutations(["SET_Water_INFO"]),
    GaugeBasic() {
      var dom = document.getElementById("container");
      var myChart = echarts.init(dom, null, {
        renderer: "canvas",
        useDirtyRect: false,
      });

      var option;

      option = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "Pressure",
            type: "gauge",
            detail: {
              formatter: "{value}",
            },
            data: [
              {
                value: 50,
                name: "SCORE",
              },
            ],
          },
        ],
      };

      if (option && typeof option === "object") {
        myChart.setOption(option);
      }

      window.addEventListener("resize", myChart.resize);
    },
  },
  mounted() {
    this.GaugeBasic();
  },
  created() {
    this.loadWaterData(this.Searth);
  },
  computed: {
    ...mapState(["DeviceList"]),
    ...mapGetters([""]),
  },
  store,
};
</script>
<style >
</style>