<template>
  <div id="app">
    <h1 class="naz" >Модный фасончик</h1>
    <v-main-wrapper/>
  </div>
</template>

<script>
import vMainWrapper from '@/components/v-main-wrapper.vue'

export default {
  name: 'App',
  components: {
    vMainWrapper
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
    color: #619F73;]
  font-weight: bolder;
  }

</style>
