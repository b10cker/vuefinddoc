<template>
  <div>
    <div class="successed">
      <i class="fas fa-check-circle" id="tick"></i>
    </div>
    <div class="check_email">
      <p>Almost finish,</p>
      <p>check you e-mail to active your account!</p>
    </div>
    <div class="verified">
      <button>I have verified</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "createSuccess",
};
</script>

<style scoped>
/*jones css*/
.successed {
  width: 100vw;
  padding-top: 20px;
  height: 60vh;
  align-items: center;
  margin: auto;
  display: flex;
  justify-content: center;
}

.check_email {
  text-align: center;
  font-size: 30px;
  color: #75818f;
}

.verified {
  font-size: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.verified button {
  width: 75vw;
  height: 8vh;
  border-radius: 40px;
  font-size: 3em;
  background-color: #6a6a6a;
}

.verified a {
  color: white;
  text-decoration: none;
}

#tick {
  font-size: 80vw;
  color: #396cf0;
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
  font-size: 20px;
  color: black;
}

.welcome_back {
  margin-top: 2em;
  margin-left: 2em;
  margin-right: 2em;
  padding-bottom: 3em;
}
</style>
