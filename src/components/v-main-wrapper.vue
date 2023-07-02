<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view />
    </keep-alive>

  </div>
</template>

<script>

export default {
  name: 'v-main-wrapper',
  components: {},
  props: {},
  data() {
    return {
    }
  },
  computed: {},
  methods: {},
  watch: {},
}
</script>

<style scoped>
      .v-main-wrapper {
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
      }
</style>