<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="v-catalog__link_to_cart"> Корзина: {{CART.length}}</div>
    </router-link>
    <div class="v-catalog__list">
    <v-catalog-item
    v-for="product in PRODUCTS"
    :key="product.article"
    :product_-data="product"
    @addToCart="addToCart"
    />
    </div>
  </div>
</template>

<script>
import vCatalogItem from '@/components/v-catalog-item.vue'
import {mapActions, mapGetters} from "vuex"

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem,
  },
  props: {},
  data() {
    return {
    }
  },
  computed: {
   ...mapGetters([
      `PRODUCTS`,
       'CART'
  ]),
  },
  methods: {
    NewProduct() {
    },
    closePopup() {
    },
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) => {
        if ((response.data)) {
          console.log('Data arrived!')
        }
    })
  }
}
</script>

<style scoped lang="scss">
      .v-catalog{
        &__list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }
        &__link_to_cart {
           position: absolute;
           top: 10px;
           right: 10px;
           padding: $padding*2;
           border: solid 1px #436255;
            color: #B26445;
         }
      }
</style>