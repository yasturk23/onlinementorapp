<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutVue",
  props: {
    msg: String,
  },
});
</script>

<template>
  <div class="about">
    <h1>About</h1>
    <p>
      This application allows the user to ask a question and receive a response
      from a virtual mentor that will help them learn and gain a new insight on
      certain matters. With the help of our virtual mentor, you will be able to
      expand your knowledge in a comfortable and efficient way.
    </p>
    <p>
      Our virtual mentor is trained to assist users in a wide range of topics,
      from basic questions to more complex issues. No question is too big or too
      small for our virtual mentor to handle. Although we ask that you are
      reasonable in your requests.
    </p>
    <p>
      With our virtual mentor, you will be able to take control of your personal
      development and achieve your goals in a convenient and effective way. Give
      it a try and see for yourself how our virtual mentor can help you
      flourish.
    </p>
    <p>Disclaimer: We are using ChatGPT models</p>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  margin: auto;
}
</style>
