<template>
  <div class="page-container">
    <GoBack></GoBack>
    <div class="progress-container">
      <p>2/4</p>
      <div class="progress"><div class="current-progress half"></div></div>
    </div>
    <div class="gender-main">
      <div class="title-info">
        <h2>Your Gender?</h2>
        <p>To give you a customized experience.</p>
        <p>We need to know your gender and age</p>
      </div>

      <div class="gender-choose">
        <form class="radio-button-container">
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked="checked"
            v-model="genderSelect"
          />
          <label for="male">
            <span class="gender-icon male">
              <i class="fas fa-mars fa-2x"></i>
            </span>
            <span class="gender-p">Male</span>
          </label>

          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            v-model="genderSelect"
          />
          <label for="female">
            <span class="gender-icon female gender-div">
              <i class="fas fa-venus fa-2x"></i>
            </span>

            <span class="gender-p">Female</span>
          </label>
        </form>
      </div>
      <div class="title-info age-question">
        <h2>Your age?</h2>
        <div class="age-input">
          <input type="text" name="age" id="age" v-model="ageInput" />
        </div>
      </div>
    </div>

    <div class="gender-buttons">
      <button class="continue" @click="checkInput">Continue</button>
    </div>
  </div>
</template>

<script>
import GoBack from "@/components/GoBack";
import { Toast } from "vant";

export default {
  name: "gender",
  components: {
    GoBack,
  },
  data() {
    return {
      genderSelect: "",
      ageInput: "",
    };
  },
  methods: {
    checkInput() {
      let message = "Please fill in your ";
      if (!this.$data.genderSelect) {
        Toast("Please select your Gender");
      } else if (!this.$data.ageInput) {
        Toast(message + "age");
      } else {
        this.$router.push({ path: "language" });
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
/*Shared*/
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
/*Shared End*/
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

.half {
  width: 50%;
}

.gender-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.gender-main .title-info {
  padding-left: 1em;
  margin-bottom: 0;
}

.gender-main .title-info p {
  margin-top: 0.5em;
  color: #707070;
}

.gender-choose .radio-button-container {
  margin-top: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.gender-choose .radio-button-container label {
  width: 40vw;
  height: 24vh;
  border-radius: 1.5em;
  padding: 2em 1em 1em 1em;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.gender-choose .gender-icon {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

.gender-choose .male {
  background-color: #396cf0;
}

.gender-choose .female {
  background-color: pink;
}

.gender-choose .radio-button-container label {
  display: flex;
  flex-direction: column;
  padding: 30px 0;
}

.gender-choose .radio-button-container label span:first-of-type {
  margin: auto;
}

.gender-choose .radio-button-container label i {
  color: white;
}

.gender-choose .radio-button-container label .gender-p {
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: bold;
}
.gender-choose .radio-button-container input[type="radio"] {
  display: none;
}

.gender-choose .radio-button-container input[type="radio"] + label {
  border: 2px solid transparent;
  transition: all 0.1s ease;
}

.gender-choose .radio-button-container input[type="radio"]:checked + label {
  border: 2px solid#396CF0;
  transition: all 0.2s ease;
}

.age-question {
  margin-top: 2em;
}

.age-question::placeholder {
  color: #b5bbc3;
}

.age-question input[type="text"] {
  text-align: center;
  width: 40vw;
  font-size: 1.5em;
  padding: 0.4em;
  background-color: white;
  border: none;
  color: #707070;
  border-radius: 1em;
  margin-top: 1.5em;
  position: relative;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}

.age-input {
  display: flex;
  justify-content: center;
}

.gender-buttons {
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
