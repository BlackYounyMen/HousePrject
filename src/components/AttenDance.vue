<template  >
  <div>
    <div v-html="VhtmlShow"></div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      options: [],
      VhtmlShow: "",
    };
  },
  methods: {
    GetAll() {
      this.axios
        .get(`https://localhost:5001/api/Personnel/GetHoilday?id=${this.id}`)
        .then((res) => {
          console.log(res.data);
          this.options = res.data;
          this.VhtmlShow +=
            "<table style='border: 1px solid #000000;border-collapse: collapse;border-spacing: 0;width:1650px;height:180px;text-align='center';margin: 0 auto; border: 1px solid #000000;'> ";
          var i = 0;

          for (let item of res.data) {
            this.VhtmlShow += "<tr>";

            if (i == 0) {
              for (let value of Object.values(item)) {
                this.VhtmlShow += `<td style='border: 1px solid #000000;width:10px;'>${value}</td>`;
              }
            } else {
              var o = 0;
              for (let value of Object.values(item)) {
                if (o > 4) {
                  if (value != null) {
                    console.log(11111111);
                    this.VhtmlShow += `<td style='background-color: green;border: 1px solid #000000;width:10px;'></td>`;
                  } else {
                    this.VhtmlShow += `<td  style='border: 1px solid #000000;width:10px;'>  </td>`;
                  }
                } else {
                  if (value != null) {
                    console.log(11111111);
                    this.VhtmlShow += `<td  style='border: 1px solid #000000;width:10px;'>${value}</td>`;
                  } else {
                    this.VhtmlShow += `<td  style='border: 1px solid #000000;width:10px;'>  </td>`;
                  }
                }
                o = o + 1;
              }
              this.VhtmlShow += "</tr>";
            }
            i = i + 1;
          }

          this.VhtmlShow += "</tr>";
          this.VhtmlShow += "</table>";

          console.log(this.VhtmlShow);
        });
    },
  },
  mounted() {
    this.GetAll();
  },
};
</script>
<style scoped >
</style>