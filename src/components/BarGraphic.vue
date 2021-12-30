<template>
  <svg width="600" height="500"></svg>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "BarGraphic",
  props: {
    datat: {
      type: Array,
    },
  },
  methods: {
    renderChart() {
      var datat = this.datat;
      console.log(datat);
      var svg = d3.select("svg"),
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin;

      svg
        .append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 50)
        .attr("y", 50)
        .attr("font-size", "24px")
        .text("Produtos mais vendidos");

      var xScale = d3.scaleBand().range([0, width]).padding(0.4),
        yScale = d3.scaleLinear().range([height, 0]);

      var g = svg
        .append("g")
        .attr("transform", "translate(" + 100 + "," + 100 + ")");

      xScale.domain(
        datat.map(function (d) {
          return d.product__name;
        })
      );
      yScale.domain([
        0,
        d3.max(datat, function (d) {
          return d.value;
        }),
      ]);

      g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale))
        .append("text")
        .attr("y", height - 250)
        .attr("x", width - 100)
        .attr("text-anchor", "end")
        .attr("stroke", "black")
        .text("Nome");

      g.append("g")
        .call(
          d3.axisLeft(yScale).tickFormat(function (d) {
              return  d;
            }).ticks(datat.length)
        )
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "-5.1em")
        .attr("text-anchor", "end")
        .attr("stroke", "black")
        .text("Quantidade");

      g.selectAll(".bar")
        .data(datat)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
          return xScale(d.product__name);
        })
        .attr("y", function (d) {
          return yScale(d.value);
        })
        .attr("width", xScale.bandwidth())
        .attr("height", function (d) {
          return height - yScale(d.value);
        });
    },
  },
  mounted() {
    this.renderChart();
  },
   updated() {
    this.renderChart()
  },
};
</script>
<style>
.bar {
  fill: steelblue;
}
</style>