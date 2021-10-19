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
          <div class="reset" @click="checkInput">Reset</div>
        </div>
      </form>
    </section>
  </section>
</template>

<script>
import GoBack from "@/components/GoBack";
import { Toast } from "vant";
import axios from "axios";
import qs from "qs";

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
      if (!this.$data.emailInput) {
        Toast("Please fill you email address");
      } else {
        this.$store.state.resetPassword = this.$data.emailInput;

        let resetInfo = this.$store.getters.getResetInfo;

        axios({
        method: "post",
        url: "http://deco.logfox.xyz/servlet_project/resetPasswordServlet",
        // Use qs module to convert dictionary into a query string. {a:1,b:2} => "a=1&b=2"
        data: qs.stringify(resetInfo),
        }).then((e) => {
          if (e.data.error === 0) {
          Toast(e.data.msg);
          } else {
          Toast(e.data.msg);
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.sign-in {
  width: 100vw;
  height: 30vh;
  align-items: center;
  margin: auto;
  display: flex;
  justify-content: center;
}


.reset_button {
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.reset {
  border: none;
  border-radius: 15px;
  width: 75vw;
  padding: 1.2em;
  color: white;
  font-size: 1em;
  background-color: #396cf0;
  text-decoration: none;
  text-align: center;
}

.sign-in input {
  border: none;
  border-bottom: 1px solid #707070;
  margin-top: 1em;
  width: 80vw;
  height: 2em;
  padding: 10px;
}

.signin input:focus{
  border-bottom: 1px solid #396CF0;
  outline: none;
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
