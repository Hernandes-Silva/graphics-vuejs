<template>
  <div class="main">
    <div>
      <BarGraphic :datat="data_bar" />
    </div>
    <div>
      <LineGraphic :datat="data_line" title="Pedidos do ano" />
    </div>
  </div>
</template>

<script>
import BarGraphic from "../components/BarGraphic.vue";
import BestProducts from "../service/best_selling";
import OrdersYear from "../service/orders_year";
import LineGraphic from "../components/LineGraphic.vue";
export default {
  name: "Home",
  components: {
    BarGraphic,
    LineGraphic,
  },
  data() {
    return {
      data_bar: [],
      data_line: [],
    };
  },
  mounted() {
    BestProducts.listar().then((response) => {
      this.data_bar = response.data;
    });
    OrdersYear.listar().then((response) => {
      this.data_line = response.data;
    });
  },
};
</script>
<style>
.main{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #fff;
}
</style>
