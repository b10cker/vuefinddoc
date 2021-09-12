<template>
  <div class="page-container">
    <GoBack></GoBack>
    <div class="progress-container">
      <p>3/4</p>
      <div class="progress"><div class="current-progress quarters"></div></div>
    </div>
    <div class="language-main">
      <div class="title-info">
        <h2>Language Preference?</h2>
        <p>
          We can match ip a suitable doctor based on your language preference
        </p>
      </div>

      <div class="language-choose">
        <form class="radio-button-container">
          <input
            type="radio"
            name="language"
            id="english"
            value="english"
            checked="checked"
            v-model="languageSelected"
          />
          <label for="english">
            <span>English</span>
          </label>

          <input
            type="radio"
            name="language"
            id="polski"
            value="polski"
            v-model="languageSelected"
          />
          <label for="polski">
            <span>Polski</span>
          </label>

          <input
            type="radio"
            name="language"
            id="french"
            value="french"
            v-model="languageSelected"
          />
          <label for="french">
            <span>français</span>
          </label>

          <input
            type="radio"
            name="language"
            id="chinese"
            value="chinese"
            v-model="languageSelected"
          />
          <label for="chinese">
            <span>中文</span>
          </label>

          <input
            type="radio"
            name="language"
            id="Portuguese"
            value="portuguese"
            v-model="languageSelected"
          />
          <label for="Portuguese">
            <span>Português</span>
          </label>

          <input
            type="radio"
            name="language"
            id="More"
            value="more"
            v-model="languageSelected"
          />
          <label for="More">
            <span>More</span>
          </label>
        </form>
      </div>
    </div>

    <div class="language-buttons">
      <router-link to="/createSuccess">
        <button class="continue">Last step</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import GoBack from "@/components/GoBack";
import { Toast } from "vant";

export default {
  name: "language",
  components: {
    GoBack,
  },
  data() {
    return {
      languageSelected: "",
    };
  },
  methods: {
    checkInput() {
      if (!this.$data.languageSelected) {
        Toast("Please select your Language");
      } else {
        this.$router.push({ path: "createSuccess" });
      }
    },
  },
};
</script>

<style scoped>
/*Language*/
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
.quarter {
  width: 25%;
}

.half {
  width: 50%;
}

.quarters {
  width: 75%;
}

.language-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.language-main .title-info {
  padding-left: 1.5em;
  margin-bottom: 0;
}

.language-main .title-info p {
  margin-top: 0.5em;
  color: #707070;
}

.language-choose .radio-button-container {
  margin-top: 3em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  grid-row-gap: 18px;
}

.language-choose .radio-button-container label {
  width: 40vw;
  height: 90px;
  padding: 2em 0 2em 3em;
  border-radius: 1.5em;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.language-choose .radio-button-container label span {
  margin: auto;
  text-align: right;
  font-size: 1em;
}
.language-choose .radio-button-container input[type="radio"] {
  display: none;
}

.language-choose .radio-button-container input[type="radio"] + label {
  border: 2px solid transparent;
  transition: all 0.1s ease;
}

.language-choose .radio-button-container input[type="radio"]:checked + label {
  border: 2px solid#396CF0;
  transition: all 0.2s ease;
}

.language-buttons {
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
