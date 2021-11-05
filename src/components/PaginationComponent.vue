<template>
  <div class="container">
    <div class="pagination-area">
      <button type="button" class="pagination-button-more" @click="increment">
        Load more
      </button>
      <button type="button" class="pagination-button" @click="prevPage">
        back
      </button>
      <button type="button" class="pagination-button" @click="nextPage">
        forward
      </button>
    </div>
    <p>itemQuant: {{ this.$store.state.itemsQuantity }}</p>
    <p>pageItem: {{ this.$store.state.pageItem }}</p>
    <p>ItemsPerRow: {{ this.$store.state.itemsPerRow }}</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["increment", "nextPage", "prevPage"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1000px;
  margin: 10px auto;
}

.pagination-area {
  text-align: center;
}

.pagination-button {
  margin: 10px;
  padding: 10px 15px;
  width: 10%;
}
.pagination-button-more {
  display: block;
  margin: 0 auto;
  justify-content: center;
  padding: 10px;
  width: 22%;
}
</style>
