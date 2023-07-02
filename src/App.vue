<template>
  <div id="app">
    <h1 class="naz" >Модный фасончик</h1>
    <HelloWorld/>
    <v-main-wrapper/>

  </div>
</template>

<script>
import vMainWrapper from '@/components/v-main-wrapper.vue'
import HelloWorld from "@/components/Hello.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    vMainWrapper,
  },
  methods: {
      addProduct(product) {
        this.products.push(product);
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
  .naz {
    color: #00786F;
    font-weight: bolder;
  }
</style>
