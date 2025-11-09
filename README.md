# 🚀 ResumATEv2

**Project:** ResumATEv2  
**Technologies:** React, TailwindCSS, ShadCN UI, NodeJS, ExpressJS, FastAPI, OpenAI Agents SDK, PostgreSQL  

---

## 🌟 Overview

Job seekers typically maintain a master resume containing all their experiences. They then painstakingly extract and tailor relevant points for each job application, which can be time-consuming and labor-intensive when applying to multiple positions.

ResumATE addresses this challenge by leveraging AI to intelligently select and reorganize experiences. Users can instantly tweak and finalize their resumes, saving time, reducing stress, and making the job application process more efficient and effective.

This repository is adapted from [malcolmling97/ResumATE](https://github.com/malcolmling97/ResumATE), to continue developing it further.

---

## 🎯 Features

TBD

---

## 🛠 Tech Stack

- **Frontend:** React, Next.js, TailwindCSS, ShadCN UI 
- **Backend:** NodeJS ExpressJS, FastAPI  
- **Database:** PostgreSQL (Supabase)
- **APIs / Integrations:** SwaggerUI 
- **AI / ML:** OpenAI Agents SDK


---

## 🚀 Installation & Setup

### 1. Clone the repository  
```bash
git clone https://github.com/malcolmling97/ResumATE.git
cd ResumATE
```

### 2. Set up frontend
Install npm packages
```bash
cd frontend
npm install
```
Add the `.env` file in frontend folder with the following contents.
```
VITE_BACKEND_URL=http://localhost:3000
VITE_FASTAPI_URL=http://localhost:8000
```

### 3. Set up NodeJS backend
Install npm packages
```bash
cd backend
npm install
```
Add the `.env` file in backend folder with the following contents.
```
PORT=3000
JWT_SECRET=[your-secret]
SESSION_SECRET=[your-secret]
GOOGLE_CLIENT_ID=[your-secret]
GOOGLE_CLIENT_SECRET=[your-secret]
CLIENT_URL=http://localhost:5173
DB_URL=[your-secret]
FASTAPI_URL=http://localhost:8000
```

### 4. Install python packages for FastAPI backend using [uv](https://docs.astral.sh/uv/getting-started/installation/)
```bash
cd backend_python
```
Create virtual environment
```
uv venv .venv
```
Activate it
for Windows
```
.venv\Scripts\activate
```
for macOS/Linux
```
source .venv/bin/activate
```
Install dependencies
```
uv sync
```
Add the `.env` file in the backend_python folder with the following contents.
```
SUPABASE_URL=[your-secret]
SUPABASE_KEY=[your-secret]
HOST=127.0.0.1
PORT=8000
OPENAI_API_KEY=[your-secret]
```

## Running in development

### 1. Start the frontend
```bash
cd frontend
npm run dev
```

### 2. Start the NodeJS server
```bash
cd backend
npm run dev
```

### 3. Start FastAPI server
```bash
cd backend_python
uv run python main.py
```
