<template>
  <div class="home">
    <GoBack></GoBack>
    <img alt="Vue logo" src="../assets/logo.png" />
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
};
</script>
