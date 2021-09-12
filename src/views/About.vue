<template>
  <div class="about">
    <GoBack></GoBack>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import GoBack from "@/components/GoBack.vue";
export default {
  name: "About",
  components: {
    GoBack,
  },
};
</script>
