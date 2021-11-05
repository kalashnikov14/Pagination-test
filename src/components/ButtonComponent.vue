<template>
  <div class="container">
    <div v-for="item in this.$store.getters.getItems" :key="item.n">
      <div class="card">
        <h2 class="card-header">{{ item.name }}</h2>
        <p class="card-info">{{ item.text }}</p>
        <button class="card-button">click</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },

  computed: {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap");

.container {
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
  display: flex;
}

.card {
  overflow: hidden;
  box-sizing: border-box;
  font-family: "Inconsolata", monospace;
  max-width: 250px;
  margin: 30px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0 20px 20px 20px;
}

.card-header {
  font-size: 18px;
}

.card-button {
  float: right;
  cursor: pointer;
  padding: 5px 10px;
  text-decoration: none;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;

  &:hover {
    background: darken($color: white, $amount: 10%);
  }

  &:active {
    background: darken($color: white, $amount: 25%);
  }
}
</style>
