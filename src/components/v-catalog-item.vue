<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src= " require('../assets/images/' + product_Data.image)" alt="img">
    <p class="v-catalog-item__name"> {{product_Data.name}}</p>
    <p class="v-catalog-item__price"> Цена: {{product_Data.price}}$</p>
    <button
        class="v-catalog-item__add_to_cart_btn btn"
        @click="addToCart"> Купить
    </button>
  </div>
</template>


<script>
export default {
  name: "v-catalog-item",
  components: {},
  props: {
    product_Data: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    addToCart(){
      this.$emit('addToCart',this.product_Data)
    }
  },
  mounted() {}

}


</script>
<style scoped lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #bbbaba;
  padding: $padding*2;
  margin-bottom: $margin*2;
  width: 30%;
  height: 80%;
  &__image {
    width: 200px;
  }

}
</style>