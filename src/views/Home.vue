<template>
  <div class="home">
    <MedicineTitle titleText="Medicine"></MedicineTitle>
    <button @click="toSignUp">Sign Up</button>
  </div>
</template>

<script>
// @ is an alias to /src
import MedicineTitle from "../components/MedicineTitle";

export default {
  name: "Home",
  components: {
    MedicineTitle,
  },
  methods: {
    toSignUp() {
      this.$router.push({ path: "/create" });
    },
  },
};
</script>
