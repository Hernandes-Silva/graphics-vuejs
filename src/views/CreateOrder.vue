<template>
  <div class="main">
    <div class="error" v-if="mensage_false">
      Ocorreu um erro na hora de confirmar o pedido !! Por favor tente
      novamente.
    </div>
    <div class="success" v-if="mensage_true">
       O pedido foi feito com sucesso !!
    </div>
    <h1 style="text-align: center">Fazer um pedido</h1>
    <div class="form">
      <select v-model="product_select" class="form-select">
        <option value="" disabled selected>Escolha um produto</option>
        <option
          v-for="product in products"
          :key="product.id"
          :value="product.id"
        >
          {{ product.name }}
        </option>
      </select>
      <div class="div-checkbox">
        <label for="paid">Pago: </label>
        <input type="checkbox" id="paid" v-model="paid" class="form-checkbox" />
      </div>

      <input
        type="button"
        value="Comfirmar"
        class="input-submit"
        v-on:click="createOrder"
      />
    </div>
  </div>
</template>

<script>
import Products from "../service/products";
import {http} from "../service/config";

export default {
  name: "CreateOrder",
  data() {
    return {
      products: [],
      product_select: "",
      paid: false,
      mensage_true: false,
      mensage_false: false
    };
  },
  methods: {
    async createOrder() {
      if (this.product_select == "") {
        alert("Selecione um produto");
        return;
      }
      var form = { paid: this.paid, product: this.product_select };
      
      const self = this
      http.post("order/", form)
        .then(function () {
          self.product_select = "";
          self.paid = false;
          self.mensage_true = true;
          self.mensage_false = false;
        })
        .catch(function () {
          self.mensage_true = false;
          self.mensage_false = true;
        });
    },
  },
  mounted() {
    Products.listar().then((response) => {
      this.products = response.data;
    });
  },
};
</script>
<style>
.main {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #fff;
  width: 80%;
  border-radius: 0.5rem;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.form-select {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 50%;
  height: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.div-checkbox {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-submit {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 25%;
  transition-duration: 150ms;
  transition-timing-function: linear;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  text-transform: uppercase;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)),
    var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 700;
  border-radius: 0.25rem;
  border: none;
  --tw-bg-opacity: 1;
  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));
}
.error {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.success {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
}
</style>