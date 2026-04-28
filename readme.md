# 🧠 CodeSage — AI-Powered Code Reviewer

CodeSage is a full-stack AI-powered code review tool built with the MERN stack and Gemini API. Paste your code, select your language, and get instant professional feedback from an AI with 7+ years of development experience!

---

## ✨ Features

- 🤖 **AI Code Review** — Powered by Google Gemini API
- 🌐 **Multi-language Support** — JavaScript, Python, Java, C++
- 🎨 **Syntax Highlighting** — Clean code editor with Prism.js
- ⏳ **Loading Spinner** — Smooth UX while AI is reviewing
- 📋 **Copy Code Button** — Copy reviewed code with one click
- 📝 **Markdown Response** — Beautifully formatted AI feedback
- 🔄 **Auto Model Fallback** — Switches models if one is busy

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Axios
- Prism.js
- React Markdown
- Rehype Highlight

### Backend
- Node.js
- Express.js
- Google Gemini API (`@google/genai`)
- Dotenv

---

## 📁 Project Structure

```
CodeSage/
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── ai.controller.js
│   │   ├── routes/
│   │   │   └── ai.routes.js
│   │   ├── services/
│   │   │   └── ai.service.js
│   │   └── app.js
│   ├── .env
│   └── server.js
│
└── Frontend/
    └── src/
        ├── App.jsx
        ├── App.css
        └── main.jsx
```

---

## 👩‍💻 Author

**Vaishnavi Singh**

🎓 B.Tech IT — PSIT, Kanpur (2026)

🔗 [GitHub](https://github.com/vaishnavisingh251)

💼 [LinkedIn](https://www.linkedin.com/in/vaishnavi-singh-805719276/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).