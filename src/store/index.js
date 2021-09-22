import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    password: "",
    email: "",
    age: "",
    gender: "",
    languagePreference: "",
  },
  mutations: {},
  actions: {},
  modules: {},
});
