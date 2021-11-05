import Vue from "vue";
import App from "./App.vue";
import store from "./store"

Vue.config.productionTip = false;

const ComponentA = {

}

new Vue({
  render: (h) => h(App),
  components: {
    'component-a': ComponentA
  },
  store
}).$mount("#app")



