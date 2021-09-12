<template>
  <div class="home">
    <GoBack></GoBack>
    <button @click="toSignUp">Sign Up</button>
  </div>
</template>

<script>
// @ is an alias to /src
import GoBack from "@/components/GoBack.vue";

export default {
  name: "Home",
  components: {
    GoBack,
  },
  methods: {
    toSignUp() {
      this.$router.push({ path: "/create" });
    },
  },
};
</script>
