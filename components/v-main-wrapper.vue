<template>
  <div class="v-main-wrapper">
    <v-catalog/>
    <v-cart />
  </div>
</template>

<script>
import vCatalog from '@/components/v-catalog.vue'
import vCart from '@/components/v-cart.vue'
import  {mapGetters} from "vuex";

export default {
  name: 'v-main-wrapper',
  components: {
    vCatalog, vCart
  },
  props: {},
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([

    ])
  },
  methods: {},
  watch: {},
  mounted() {
  }
}
</script>

<style scoped>
.v-main-wrapper {
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>