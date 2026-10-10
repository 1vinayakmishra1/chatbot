const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "mistral",
        prompt: message,
        stream: false
      }
    );

    res.json({ reply: response.data.response });
  } catch (err) {
    console.error("Ollama error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));
