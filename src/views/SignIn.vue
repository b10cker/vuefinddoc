<template>
  <div>
    <section class="login_content">
      <GoBack></GoBack>

      <div class="welcome_back">
        <h1>Welcome!</h1>
      </div>

      <section class="sign-in">
        <form action="">
          <div class="signUp">
            <p>Do not have an account? <a @click="signUp">Sign up</a></p>
          </div>
          <input
            type="text"
            v-model="loginUsername"
            id="username"
            name="username"
            placeholder="Email or Username"
          /><br />
          <input
            type="password"
            v-model="loginPassword"
            id="password"
            name="password"
            placeholder="Password"
          /><br /><br />

          <div class="forgot_password">
            <a @click="forgot_password">Forgot passward?</a><br />
          </div>

          <div class="sign_in_button">
            <div class="signIn" @click="checkInput">
              Sign In
            </div>
          </div>
        </form>
      </section>
    </section>
    <section class="others_login">
      <div class="horizontal_line">
        <p><span>or</span></p>
      </div>
      <div class="others_login_icons">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-google"></i>
        <i class="fab fa-twitter"></i>
      </div>
    </section>
  </div>
</template>

<script>
import GoBack from "@/components/GoBack";
import { Toast } from "vant";
import axios from "axios";
import qs from "qs";

export default {
  name: "SignIn",
  components: {
    GoBack,
  },
  data() {
    return {
      loginUsername: "",
      loginPassword: "",
    };
  },
  methods: {
    checkInput() {
      let message = "Please fill in your ";
      if (!this.$data.loginUsername) {
        Toast(message + "Username");
      } else if (!this.$data.loginPassword) {
        Toast(message + "Password");
      } else {
        this.$store.state.loginUsername = this.$data.loginUsername;
        this.$store.state.loginPassword = this.$data.loginPassword;
        this.signIn();
      }
    },

    signUp() {
      this.$router.push({ path: "create" });
    },

    forgot_password() {
      this.$router.push({ path: "resetPassword" });
    },

    signIn() {
      let loginInfo = this.$store.getters.getLoginInfo;

      axios({
        method: "post",
        url: "http://deco.logfox.xyz/servlet_project/loginServlet",
        // Use qs module to convert dictionary into a query string. {a:1,b:2} => "a=1&b=2"
        data: qs.stringify(loginInfo),
      }).then((e) => {
        if (e.data.error === 1) {
          // error === 1 means incorrect username or password show the error message.
          Toast(e.data.msg);
          console.log("incorrect u&p");
        }
         else if (e.data.error === 2) {
          // error === 2 means user did not verify the email and show the error message.
          Toast(e.data.msg);
          console.log("verify");
        } else {
          // login success show message
          Toast(e.data.msg);
          console.log("success");
        }
      });
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.login_content,
.reset_content {
  width: 100vw;
  height: 60vh;
  margin-bottom: auto;
}

.welcome_back_arrow,
.reset_arrow {
  margin-top: 3em;
  margin-left: 2em;
}

#welcome_back_arrow,
#reset_arrow {
  font-size: 2em;
  color: black;
}

.welcome_back {
  /* margin-top: 2em; */
  margin-left: 2em;
  margin-right: 2em;
  padding-bottom: 3em;
}

.sign-in {
  width: 100vw;
  height: 30vh;
  align-items: center;
  margin: auto;
  display: flex;
  justify-content: center;
}

.signUp, .forgot_password {
  text-align: right;
}

.sign_in_button {
  margin-top: 5em;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

.signIn {
  border: none;
  border-radius: 15px;
  width: 85vw;
  padding: 1.2em;
  color: white;
  font-size: 1em;
  background-color: #396cf0;
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

.sign-in i {
  position: absolute;
}

.forgot_password a {
  text-decoration: none;
}

.

.others_login {
  width: 100vw;
  height: 40vh;
  text-align: center;
  margin-top: auto;
}

.horizontal_line {
  padding: 2em;
}

.horizontal_line p {
  padding-top: 1em;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #707070;
  line-height: 0.1em;
  color: #707070;
}

.horizontal_line span {
  background: #fff;
  padding: 0 10px;
}

.others_login_icons i {
  font-size: 2.5em;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
