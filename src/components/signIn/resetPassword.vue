<template>
  <section class="reset_content">
    <GoBack></GoBack>

    <div class="reset_description">
      <H1>Reset Password</H1>
      <p>Please enter your email account to reset your password.</p>
    </div>

    <section class="sign-in">
      <form>
        <input
          type="email"
          v-model="emailInput"
          id="username"
          name="username"
          placeholder="Email"
        /><br />

        <div class="reset_button">
          <button class="reset" @click="checkInput" type="submit">Reset</button>
        </div>
      </form>
    </section>
  </section>
</template>

<script>
import GoBack from "@/components/GoBack";
import { Toast } from "vant";

export default {
  name: "resetPassword",
  components: {
    GoBack,
  },
  data() {
    return {
      emailInput: "",
    };
  },
  methods: {
    checkInput() {
      // let message = "Please fill in your ";
      if (!this.$data.genderSelect) {
        Toast("Please select your Gender");
      }
    },
  },
};
</script>

<style>
.sign-in {
  width: 100vw;
  height: 30vh;
  align-items: center;
  margin: auto;
  display: flex;
  justify-content: center;
}

.sign-in div {
  text-align: right;
}

.reset_button {
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.reset {
  border: none;
  border-radius: 15px;
  width: 85vw;
  padding: 1.2em;
  color: white;
  font-size: 1em;
  background-color: #396cf0;
  text-decoration: none;
  text-align: center;
}

.sign-in input {
  background-color: #f7f3f3;
  border: none;
  border-radius: 10px;
  margin-top: 1em;
  width: 80vw;
  height: 2em;
  padding: 10px;
}

.reset_description {
  margin-top: 10vh;
  margin-left: 2em;
  margin-right: 2em;
}

.reset_description p {
  color: #75818f;
}
</style>
