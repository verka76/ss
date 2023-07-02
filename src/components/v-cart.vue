<template>
  <div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link_to_cart">Назад в каталог</div>
    </router-link>
    <h1 class="cart"> Корзина</h1>
    <p v-if="!cart_data.length" class="tovar"> Корзина пуста</p>
  <v-cart-item
     v-for="(item, index) in cart_data"
     :key="item.article"
     :cart_item_data="item"
     @deleteFromCart="deleteFromCart(index)"
     @increment="increment(index)"
     @decrement="decrement(index)"
  />
    <div class="v-cart__total">
      <p class="total__name">Общая цена :</p>
      <p>{{cartTotalCost}} $</p>
    </div>
  </div>
</template>

<script>
import VCartItem from "@/components/v-cart-item.vue";
import {mapActions} from "vuex";

export default  {
      name: "v-cart",
      props: {
        cart_data: {
          type: Array,
          default() {
            return []
          }
        }
      },
  computed: {
    cartTotalCost() {
          let result= [0]

              for(let item of this.cart_data){
                result.push(item.price * item.quantity)
              }
             result = result.reduce(function (sum, el) {
                return sum + el;
              })
              return result;
        }
  },
      components: {
        VCartItem
      },
      data() {
        return {}
      },
      methods: {
        ...mapActions([
          'DELETE_FROM_CART',
          'INCREMENT_CART_ITEM',
          'DECREMENT_CART_ITEM'
        ]),
        increment(index){
          this.INCREMENT_CART_ITEM(index)
        },
        decrement(index){
          this.DECREMENT_CART_ITEM(index)
        },
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        }
      }
    }

</script>
<style scoped lang="scss">
      .v-cart {
        margin-bottom: 100px;
        &__total {
          position: fixed;
          bottom: 0;
          right: 30em;
          left: 30em;
          display: flex;
          justify-content: center;
          background: #A7B9F7;
          color: #ffffff;
          font-size: 20px;

        }

        .total__name {
          margin-right: $margin*2;
        }
      }
      .v-catalog{
        &__link_to_cart {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: $padding*2;
          border: solid 1px #436255;
          color: #B26445;
        }
      }
      .cart {
      color: #289C89;
        font-style: italic;
    }
      .tovar {
        font-size: 20px;
        color: #289C89;
        font-weight: bold;
        text-decoration: underline;
      }
</style>