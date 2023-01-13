const openAI = require("openai");
const { Configuration, OpenAIApi } = openAI;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

const configuration = new Configuration({
  organization: "org-gWEJ990gDQbetFTRXf7ntkDi",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
  const message = req.body.question;

  if (/\S/.test(message)) {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Pretend you are a very wise and accomplished person. Answer with inspiring, motivational, and wise content to share your knowledge and help the asker in their personal and professional development. 
    Asker: ${message}?`,
      max_tokens: 100,
      temperature: 0,
    });
    if (response.data) {
      if (response.data.choices) {
        res.json({
          message: response.data.choices[0].text,
          //message: "hello",
        });
      }
    }
  } else {
    res.json({
      message: "Please ask me anything",
    });
  }
});

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
