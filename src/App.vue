<template>
  <div>
    <LineGraphic :datat="data_bar" />
  </div>
  
</template>

<script>
import LineGraphic from './components/LineGraphic.vue'
import BestProducts from './service/best_selling'
export default {
  name: 'App',
  components: {
    LineGraphic
  },
  data() {
    return {
      data_bar: []
    }
  },
  mounted(){
    BestProducts.listar().then(response =>{
      console.log(response)
      this.data_bar = response.data
    })
  }

}
</script>