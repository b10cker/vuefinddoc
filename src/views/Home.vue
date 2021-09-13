<template>
  <div class="home">
    <button @click="toSignIn">Sign In</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
  methods: {
    toSignUp() {
      this.$router.push({ path: "/create" });
    },
    toSignIn() {
      this.$router.push({ path: "/signIn" });
    },
  },
};
</script>
