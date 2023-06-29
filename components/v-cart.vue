<template>
  <div class="v-cart">
    <h1> Корзина</h1>
  <v-cart-item />
  </div>
</template>

<script>
import VCartItem from "@/components/v-cart-item.vue";
    export default  {
      name: "v-cart",
      props: {},
      components: {
        VCartItem
      },
      data() {
        return {}
      }
    }

</script>
<style scoped>

</style>