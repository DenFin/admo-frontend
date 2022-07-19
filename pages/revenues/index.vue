<template>
  <AdmoPanel>
    <AdmoContainer>
      <AdmoHeadline headline-type="h1" text="Revenues" />
      <div ref="chart"></div>
    </AdmoContainer>
  </AdmoPanel>
</template>
<script>
import bb, { line, areaSpline } from "billboard.js";
import "billboard.js/dist/theme/insight.css";
import AdmoPanel from '@/components/layout/AdmoPanel'
import AdmoContainer from '@/components/layout/AdmoContainer'
import AdmoHeadline from '@/components/atoms/AdmoHeadline'
export default {
  components: { AdmoHeadline, AdmoContainer, AdmoPanel },
  async mounted() {
    console.log("Generating chart with typescript");
    await this.$nextTick();
    bb.generate({
      bindto: this.$refs.chart,
      data: {
        columns: [
          ["data1", 30, 200, 100, 170, 150, 250],
          ["data2", 130, 100, 140, 35, 110, 50],
        ],
        types: {
          data1: line(),
          data2: areaSpline(),
        },
        colors: {
          data1: "red",
          data2: "green",
        },
      },
    });
  },
}
</script>
