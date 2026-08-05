
<!-- Trigger deployment -->
# Indravex Technologies

> **Enterprise Digital Infrastructure, Artificial Intelligence Engineering, & High-Performance Product Consultancy**

[![React](https://img.shields.io/badge/React-19-blue.svg?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel-black.svg?logo=vercel)](https://vercel.com/)

Official web application for **Indravex Technologies**, delivering cutting-edge AI integration, enterprise web platform solutions, and specialized domain systems across Healthcare, Hospitality, and Enterprise Consultancy.

---

## 🚀 Key Features

- **Domain Solutions**: Tailored web and AI architectural showcases for Healthcare, Hospitality, and Enterprise sectors.
- **Interactive UI & Motion**: Modern smooth-scroll powered by Lenis, vector magnet lines animations, and Framer Motion transitions.
- **Contact & Lead System**: Built-in functional contact workflow integrated with Web3Forms API.
- **Comprehensive Technical SEO**: Structured JSON-LD schemas, dynamic meta tags, optimized sitemap, and robots configuration.
- **Fully Responsive & Dark Aesthetic**: Modern glassmorphism UI styled with Tailwind CSS v4.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Motion](https://motion.dev/) + [Lenis Smooth Scroll](https://lenis.darkroom.engineering/) |
| **AI Integration** | [Google Gen AI SDK (`@google/genai`)](https://www.npmjs.com/package/@google/genai) |
| **Form Handling** | [Web3Forms](https://web3forms.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 📂 Project Structure

```
├── public/                # Static assets, logos, sitemap, robots.txt, sw.js
├── src/
│   ├── components/        # UI sections (Hero, Navbar, Footer, Projects, Interactive Console, etc.)
│   │   └── solutions/     # Industry-specific landing modules (Healthcare, Hospitality, About, Contact, FAQ)
│   ├── data/              # Centralized content datasets & SEO configs
│   ├── lib/               # Utility integrations (Web3Forms API client)
│   ├── App.tsx            # Main application root with routing state & SEO head
│   ├── main.tsx           # React DOM entrypoint
│   └── index.css          # Core CSS & Tailwind setup
├── metadata.json          # Project metadata definitions
├── vercel.json            # Vercel deployment & header rules
├── vite.config.ts         # Vite bundler configuration
└── tsconfig.json          # TypeScript configuration
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Indravex/Website.git
   cd Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory based on `.env.example`:
   ```bash
   cp .env.example .env.local
   ```

   Update the keys in `.env.local`:
   ```env

   # Web3Forms API Key for contact submissions
   VITE_WEB3FORMS_ACCESS_KEY="your_web3forms_access_key_here"

   # Application URL
   APP_URL="http://localhost:3000"
   ```

4. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## 📜 Available Scripts

- **`npm run dev`**: Starts local development server on port 3000.
- **`npm run build`**: Compiles TypeScript and builds production artifacts into `dist/`.
- **`npm run preview`**: Serves the production build locally.
- **`npm run lint`**: Checks TypeScript type definitions without emitting files.
- **`npm run clean`**: Cleans up previous build outputs.

---

## 🌐 Deployment

The application is optimized for zero-config deployment on [Vercel](https://vercel.com/):

1. Connect `Indravex/Website` repository to Vercel.
2. Ensure environment variables (`VITE_WEB3FORMS_ACCESS_KEY`) are set in the Vercel project settings.
3. Deploy! Vercel will automatically build using `vite build` and output directory `dist`.

---


## 📄 License

**Copyright © 2026 Quabrik Technologies. All Rights Reserved.**

This repository contains proprietary software developed by **Quabrik Technologies** exclusively for **Indravex Technologies**.

### White-Label Authorization

Quabrik Technologies grants **Indravex Technologies** an exclusive white-label licence for this software. Under this agreement:

- The software may be branded, marketed, deployed, and publicly presented solely under the **Indravex Technologies** name.
- Public-facing websites, applications, documentation, and marketing materials may identify **Indravex Technologies** as the developer, provider, or owner of the software.
- **Quabrik Technologies** is not required to be publicly credited or referenced unless mutually agreed in writing.
- This white-label licence is granted exclusively to **Indravex Technologies** and may not be transferred, sublicensed, or assigned to any third party without prior written permission from **Quabrik Technologies**.

### Authorized Use

This source code is licensed solely for the development, deployment, maintenance, and operation of **Indravex Technologies'** systems.

### Restrictions

Without prior written permission from **Quabrik Technologies**, you may NOT:

- Copy, reproduce, distribute, or disclose any part of this source code.
- Modify, adapt, or create derivative works except as authorised for **Indravex Technologies**.
- Sell, sublicense, lease, rent, or commercially exploit this software.
- Use this software or any portion of its source code for any individual, organisation, or client other than **Indravex Technologies**.
- Remove, modify, or obscure any copyright, ownership, or attribution notices.
- Reverse engineer, decompile, or attempt to extract proprietary logic where prohibited by law.
- Publish this repository or make its contents publicly available.
- Use this source code, in whole or in part, for training AI models or automated code-generation systems without prior written permission from **Quabrik Technologies**.

### Ownership

- **Software Developer:** Quabrik Technologies
- **Copyright Holder:** Quabrik Technologies
- **Exclusive White-Label Licensee:** Indravex Technologies

Unless otherwise agreed in writing, all intellectual property rights remain the exclusive property of **Quabrik Technologies**.

Any unauthorised copying, modification, distribution, disclosure, or commercial use of this software outside the scope of this licence is strictly prohibited and may result in legal action.

> **Notice:** This licence notice exists solely within the source code repository and is not intended to appear on the public website or application.
