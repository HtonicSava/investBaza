import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "vue-search-select/dist/VueSearchSelect.css";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

// // create a directive to transform the model value
// Vue.directive('triads', {
//   twoWay: true, // this transformation applies back to the vm
//   bind: function () {
//     this.handler = function () {
//       this.set(this.el.value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1'))
//     }.bind(this);
//     this.el.addEventListener('input', this.handler);
//   },
//   unbind: function () {
//     this.el.removeEventListener('input', this.handler);
//   }
// });
