<template>
  <div class="v-cart-item">
  <img class="img" :src= " require('../assets/images/' + cart_item_data.image)" alt="">
  <div class="v-cart-item_info">
    <section>
    <p> {{cart_item_data.name}}</p>
    <p> {{cart_item_data.price}}$</p>
    <p> {{cart_item_data.article}}</p>
    </section>
  </div>
    <div class="v-cart-item__quantity">
      <p>Количество:</p>
      <span class="quantity__tools">
        <span class="quantity__btn" style="cursor: pointer; font-size: 20px" @click="decrementItem">-</span>
        {{cart_item_data.quantity}}
        <span class="quantity__btn" style="cursor: pointer; font-size: 20px" @click="incrementItem">+</span>
      </span>
    </div>
    <button class="btn" @click="deleteFromCart">Удалить</button>
    <button class="btn" @click="deleteFromCart">Купить</button>
  </div>
</template>

<script>

export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
        type: Object,
        default() {
          return {}
        }
    }
  },
  methods: {
    decrementItem() {
      this.$emit('decrement')
    },
    incrementItem() {
      this.$emit('increment')
    },
    deleteFromCart() {
      this.$emit('deleteFromCart')
    }
  },
  mounted() {
    this.$set(this.cart_item_data,'quantity', 1)
  }
}
</script>
<style  lang="scss">
      .v-cart-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #bbbaba;
        padding: $padding*2;
        margin-bottom: $margin*2;
      }
      .img{
        max-width: 200px;
      }
</style>