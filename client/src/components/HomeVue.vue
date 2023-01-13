<template>
  <h1>Online Mentor App</h1>
  <div class="question-form">
    <form @submit.prevent="getAnswer">
      <label for="question"
        >Hi, my name is OMA. I am trained to assist users in a wide range of
        topics, from basic questions to more complex issues. Ask me a question
        below.</label
      >
      <textarea
        v-model="question"
        id="question"
        rows="3"
        placeholder="Ask OMA what's on your mind..."
        required
      ></textarea>
      <div class="buttons">
        <button type="submit" class="btn submit">Get Answer</button>
        <button type="submit" class="btn reset" @click="resetQuestion">
          Reset
        </button>
      </div>
    </form>

    <div v-if="answer" class="answer">
      <h2 class="answer-title">Answer:</h2>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      answer: "",
    };
  },
  methods: {
    async getAnswer() {
      try {
        const response = await fetch("http://localhost:3000", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: this.question }),
        });
        const data = await response.json();
        this.answer = data.message;
      } catch (err) {
        console.error(err);
      }
    },
    resetQuestion() {
      this.question = "";
      this.answer = "";
    },
  },
};
</script>

<style scoped>
.question-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

form {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  font-size: 1.2em;
  margin-bottom: 10px;
}

textarea {
  width: 100%;
  font-size: 1.2em;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.buttons {
  display: flex;
  flex-direction: rows;
  flex-wrap: nowrap;
  gap: 10px;
}

.btn {
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
  margin-top: 20px;
}

.submit {
  background-color: #4caf50;
}

.submit:hover {
  background-color: #3e8e41;
}

.reset {
  background-color: #ff1f1f;
}

.reset:hover {
  background-color: #aa201e;
}
.answer {
  margin-top: 20px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  width: 80%;
}

.answer-title {
  margin-bottom: 10px;
}
</style>
