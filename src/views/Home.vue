<template>
  <div class="home">
    <button @click="toSignIn">Sign In</button>
    <button @click="testPost">Post</button>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
import qs from "qs";

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
        age: 12,
        email: "1123@test.com",
        gender: "male",
        languagePreference: "english",
        password: "testTest",
        username: "user1test",
      };

      axios({
        method: "post",
        url: "http://deco.logfox.xyz/servlet_project/registerServlet",
        data: qs.stringify(submitForm),
      }).then((detail) => {
        console.log(detail);
      });

    },
  },
};
</script>
