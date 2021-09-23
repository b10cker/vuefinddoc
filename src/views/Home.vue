<template>
  <div class="home">
    <button @click="toSignIn">Sign In</button>
    <button @click="testPost">Post</button>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: "Home",
  components: {},
  methods: {
    toSignUp() {
      this.$router.push({ path: "/create" });
    },
    toSignIn() {
      this.$router.push({ path: "/signIn" });
    },
    testPost() {
      let submitForm = {
        age: "1",
        email: "1",
        gender: "male",
        languagePreference: "english",
        password: "1",
        username: "1",
      };
      axios
        .post(
          "http://47.243.42.169/servlet_project/registerServlet/",
          {},
          {
            headers: {
              // "Access-Control-Allow-Origin": "*",
              // "Accept-Encoding": "gzip, deflate, br",
              // Connection: "keep-alive",
              // Host: this.$store.state.ip,
              "Content-Type": "application/x-www-form-urlencoded",
              // "Content-Type": "application/json",
            },
            body: submitForm,
          }
        )
        .then((detail) => {
          console.log(detail);
        });
    },
  },
};
</script>
