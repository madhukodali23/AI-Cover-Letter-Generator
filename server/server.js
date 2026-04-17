const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const axios = require("axios")

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.post("/generate", async (req, res) => {
  const { name, company, role, skills } = req.body

  const prompt = `
Write a professional cover letter.

Name: ${name}
Company: ${company}
Role: ${role}
Skills: ${skills}

Make it simple, clear, and in proper paragraphs.
`

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: [
          { role: "user", content: prompt }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    )

    const result = response.data.choices[0].message.content

    res.json({ result })

  } catch (error) {
    res.status(500).json({ error: "something went wrong" })
  }
})

app.listen(5000, () => {
  console.log("server running on port 5000")
})