<template>
  <div id="app">
    <ButtonComponent></ButtonComponent>
    <PaginationComponent></PaginationComponent>
  </div>
</template>

<script>
import ButtonComponent from "./components/ButtonComponent.vue";
import PaginationComponent from "./components/PaginationComponent.vue";

export default {
  name: "App",
  components: {
    ButtonComponent,
    PaginationComponent,
  },
  created() {},
};
</script>

<style lang="scss" scoped>
</style>
