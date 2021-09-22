<template>
  <div class="page-container">
    <GoBack></GoBack>
    <div class="header-distance"></div>
    <div class="progress-container">
      <p id="progress-status">1/4</p>
      <div class="progress">
        <div class="current-progress quarter" id="progress-bar-length"></div>
      </div>
    </div>
    <div id="create-body">
      <div class="create">
        <h2>Create Account</h2>
        <form action="" class="account-input">
          <div class="input-icon">
            <i class="fas fa-at fa-lg"></i>
            <input
              type="text"
              v-model="emailInput"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>

          <div class="input-icon">
            <i class="far fa-user fa-lg"></i>
            <input
              type="text"
              v-model="usernameInput"
              name="username"
              id="username"
              placeholder="Username"
            />
          </div>

          <div class="input-icon">
            <i class="fas fa-lock fa-lg"></i>
            <input
              type="text"
              v-model="passwordInput"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>

          <div class="input-icon">
            <i class="fas fa-lock fa-lg"></i>
            <input
              type="text"
              v-model="confirmInput"
              name="confirm"
              id="confirm"
              placeholder="Confirm Password"
            />
          </div>
        </form>

        <div class="already">
          <p>Already have account?<a href="">Log in</a></p>
        </div>
      </div>
    </div>

    <div class="create-buttons">
      <button class="continue" @click="checkInput">Continue</button>
    </div>
  </div>
</template>

<script>
// import GoBack from "@/components/GoBack";
import { Toast } from "vant";
import GoBack from "../components/GoBack";

export default {
  name: "Create",
  components: {
    GoBack,
  },
  data() {
    return {
      emailInput: "",
      usernameInput: "",
      passwordInput: "",
      confirmInput: "",
    };
  },
  methods: {
    checkInput() {
      let message = "Please fill in your ";
      if (!this.$data.emailInput) {
        Toast(message + "Email");
      } else if (!this.$data.usernameInput) {
        Toast(message + "Username");
      } else if (!this.$data.passwordInput) {
        Toast(message + "Password");
      } else if (!this.$data.confirmInput) {
        Toast(message + "Confirm Password");
      } else if (this.$data.passwordInput !== this.$data.confirmInput) {
        Toast("Password Inputs are not the same!");
      } else {
        // Store all the values globally
        this.$store.state.email = this.$data.emailInput;
        this.$store.state.username = this.$data.usernameInput;
        this.$store.state.password = this.$data.passwordInput;

        // Go to the next page
        this.$router.push({ path: "gender" });
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.progress-container {
  margin: 1em 1.2em 1em 1.2em;
}

.progress-container p {
  font-size: 0.2em;
  color: #396cf0;
  margin-bottom: 2em;
  /* padding: 0 1em; */
  text-align: end;
}

.header-distance {
  margin-top: 48px;
}

.progress {
  border-radius: 100px;
  height: 4px;
  background-color: #b5bbc3;
}

.current-progress {
  border-radius: 100px;
  height: 4px;
  background-color: #396cf0;
}

.quarter {
  width: 25%;
}

.half {
  width: 50%;
}

.quarters {
  width: 75%;
}

.goback {
  margin-left: 1em;
  margin-top: 30px;
  border: none;
  background-color: transparent;
}

.create {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.create h2 {
  padding-left: 1em;
  margin-bottom: 0;
}

.account-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/*create page input*/
.create input[type="text"] {
  width: 83vw;
  font-size: large;
  background-color: #f6f7f8;
  border: none;
  border-radius: 8px;
  color: #707070;
}

.create ::placeholder {
  color: #b5bbc3;
}

.create .input-icon input[type="text"] {
  margin-top: 1.5em;
  position: relative;
  padding: 0.8em 45px 0.8em 45px;
}

.create .input-icon {
  position: relative;
}

.create .input-icon i {
  width: 2em;
  position: absolute;
  left: 0;
  bottom: 1px;
  z-index: 5;
  padding: 16px 12px;
}

.already {
  margin-top: 1em;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 2em;
}

.already a {
  margin-left: 10px;
  color: #396cf0;
}

.create-buttons {
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.continue {
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

.separator {
  display: flex;
  flex-direction: row;
}
</style>
