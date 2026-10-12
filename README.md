# Twitter/X Clone (Full‑Stack MERN)

A full‑stack Twitter/X clone built with a **React (Vite)** frontend and a **Node.js/Express** backend.
Uses **MongoDB (Mongoose)**, **JWT auth (cookies)**, and **Cloudinary** for image uploads.

## Live Demo
https://twitter-x-rxpp.onrender.com/signup  
Note: Render free tier may sleep — first load can take a few seconds.

---

## Tech Stack

**Frontend (`/frontend`)**
- React (Vite)
- Tailwind CSS + DaisyUI
- TanStack Query
- TanStack Router (and react-router-dom is installed as well)

**Backend (`/backend`)**
- Node.js + Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- cookie-parser
- Cloudinary
- cors

---

## Project Structure

    twitter/
      backend/
        server.js
        ...
      frontend/
        ...
      package.json

- Backend entry: `backend/server.js`
- Root scripts manage the backend and building the frontend.

---

## Prerequisites
- Node.js (LTS recommended)
- MongoDB (local or MongoDB Atlas)
- Cloudinary account (for uploads)

---

## Environment Variables (Backend)

Create a `.env` file in the **project root** (same level as root `package.json`).

Recommended: add a `.env.example` file to the repo (template below).

### .env.example (template)

    NODE_ENV=development
    PORT=5000

    MONGO_URI=mongodb://127.0.0.1:27017/twitter_clone
    JWT_SECRET=change_me_to_a_long_random_string

    # Vite default dev server is usually 5173
    CLIENT_URL=http://localhost:5173

    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret

Important:
- Do NOT commit your real `.env`.
- Make sure `.env` is listed in `.gitignore`.

---

## Install

1) Install backend deps (root):

    npm install

2) Install frontend deps:

    npm install --prefix frontend

---

## Run Locally (Development)

### 1) Start backend (Express) with nodemon

From the project root:

    npm run dev

This runs:

    nodemon backend/server.js

### 2) Start frontend (Vite)

Open a second terminal:

    cd frontend
    npm run dev

Vite will show the local URL (usually `http://localhost:5173`).

If you run into CORS issues, confirm `CLIENT_URL` in `.env` matches the exact frontend dev URL.

---

## Production

### Start backend (production)

From the project root:

    npm start

### Build frontend

From the project root:

    npm run build

This executes the root build script:

    npm install
    npm install --prefix frontend
    npm run build --prefix frontend

To preview the production frontend build locally (optional):

    cd frontend
    npm run preview

---

## Notes / Troubleshooting

- Render free tier may sleep; first request can be slow.
- If MongoDB Atlas is used, set `MONGO_URI` accordingly.
- Cloudinary uploads require all Cloudinary env vars.
- Frontend uses Vite; default port is often `5173` (update `CLIENT_URL` if yours differs).

---

## Disclaimer
Educational project — not affiliated with Twitter/X.
