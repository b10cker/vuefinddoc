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
    ip: "http://47.243.42.169",
  },
  mutations: {},
  getters: {
    getSignUpInfo: (state) => {
      return {
        username: state.username,
        password: state.password,
        email: state.email,
        age: state.age,
        gender: state.gender,
        languagePreference: state.languagePreference,
      };
    },
  },
  actions: {},
  modules: {},
});
