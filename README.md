# 🤖 SigmaGPT

A full-stack AI Chat application (ChatGPT clone) built with React, Node.js, Express, MongoDB, and LLM APIs (OpenAI / Groq).

---

## ✨ Features

- 💬 **Interactive Chat Interface:** Real-time conversational interface with typing animation.
- 🧵 **Multi-Thread Chat History:** Create new chats, switch between conversations, and delete previous threads stored in MongoDB.
- ⚡ **AI Multi-Model Support:** Seamless integration with OpenAI and high-speed Groq LLMs.
- 🎨 **Markdown & Code Highlighting:** Rich text formatting and syntax-highlighted code blocks using `react-markdown` and `rehype-highlight`.
- 🌓 **Modern Dark Mode UI:** Clean, responsive ChatGPT-inspired design.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, React Markdown, FontAwesome
- **Backend:** Node.js, Express.js, Mongoose (MongoDB ODM), dotenv, cors
- **Database:** MongoDB
- **AI Engine:** OpenAI API / Groq API

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/lokeshrathore1509/SIGMA-GPT.git
cd SIGMA-GPT
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` directory:
```env
PORT=8080
MONGODB_URI=mongodb://127.0.0.1:27017/sigmagpt
OPENAI_API_KEY=your_api_key_here
```
> **Note:** You can use either an OpenAI API key (`sk-proj-...`) or a free Groq API key (`gsk_...`).

Start the backend server:
```bash
npm start
# or for development mode:
npm run dev
```

### 3. Frontend Setup
In a new terminal:
```bash
cd Frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 License
This project is open-source.
