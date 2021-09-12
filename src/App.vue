<template>
  <div id="app">
    <div id="nav">
      <!--      <router-link to="/">Home</router-link> |-->
      <!--      <router-link to="/about">About</router-link> |-->
    </div>
    <!--    <router-link to="/create">-->
    <!--    </router-link>-->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  methods: {
    toSignUp() {
      this.$router.push({ path: "/create" });
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
