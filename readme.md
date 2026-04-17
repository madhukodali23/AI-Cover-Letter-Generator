# AI Cover Letter Generator

An AI-powered web app that generates professional cover letters based on user input using OpenRouter API.

## Features

* Generate cover letters instantly
* Simple and clean UI
* Uses AI for dynamic content generation
* Loading indicator for better UX
* Copy to clipboard feature
* Secure API key handling using `.env`

## 🛠️ Tech Stack

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js, Express
* API: OpenRouter (AI)

## 📁 Project Structure

```
project/
  server/
    server.js
    .env
  client/
    index.html
    style.css
    script.js
```

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-link>
cd project/server
```

### 2. Install dependencies

```
npm install
```

### 3. Add API Key

Create a `.env` file in the server folder:

```
OPENROUTER_API_KEY=your_api_key_here
```

### 4. Run backend

```
node server.js
```

### 5. Run frontend

Open `client/index.html` in browser (or use Live Server)

## 🔐 Important

* Do NOT expose your API key in frontend
* Always use `.env` for security
* Add `.env` to `.gitignore`

## 🎯 How It Works

1. User enters details (name, company, role, skills)
2. Frontend sends request to backend
3. Backend calls OpenRouter API
4. AI generates a cover letter
5. Result is displayed to the user

## 📌 Future Improvements

* Download as PDF
* Resume upload (Level 3)
* Better UI/UX animations
* Dark mode

## 👨‍💻 Author

Your Name
