# Pokémon Search Application

## 🧭 Interview Context

Welcome! This repository serves as the **baseline project** for your upcoming **technical interview**.  
Please **clone this repo before the interview** and set it up locally.

You are **free to fork and refactor** the application to your liking before the session — however, the codebase **must remain in TypeScript**.  
The interview will focus on **expanding the functionality** of this Pokémon Search Application.

During the interview:

- You’ll receive a **list of features to implement**. It’s **not expected** that you complete them all.
  - The first feature will be to implement an actual search; the current app doesn't really "search" it just tries a request that may or may not work.
- We value **code quality and maintainability** just as much as implementation speed.  
- If you identify opportunities for cleanup or optimization, feel free to make improvements either **before** or **during** the session.  
- The interview will be divided into two parts:  
  - **First 45 minutes:** No AI assistance  
  - **Final 45 minutes:** AI assistance permitted  

We’re interested in both your **core engineering skills** and your ability to **strategically leverage AI tools** in a real-world workflow.

### 💻 Environment Expectations

During the session, you’ll be asked to **share your IDE and run the app locally**.  
Please ensure your development environment is ready with Node and Yarn installed, and that the app runs correctly before the interview begins.

### 🧩 Preparation Guidance

Familiarity with **React**, **TypeScript**, and **API-driven applications** will be helpful.  
This project uses the **`pokemode-ts`** library — a TypeScript wrapper for the [PokéAPI](https://pokeapi.co/) that provides typed access and built-in caching.


---

## 🧱 Tech Stack

- **React 18**  
- **TypeScript**  
- **Vite**  
- **pokemode-ts** (typed PokéAPI wrapper with caching)  
- **ESLint** for linting  
- **Yarn** for package management  

---

## 🛠️ Setup & Installation

1. **Clone the repository**

   git clone https://github.com/williamsyang-work/PokemonSearchApplication.git  
   cd PokemonSearchApplication

2. **Install dependencies**

   yarn install

3. **Run the development server**

   yarn dev  
   (The app will run at http://localhost:5173)

4. **Build for production**

   yarn build

5. **Preview the production build**

   yarn preview

---

## 🧪 Linting

To check for lint issues:  
yarn lint  

---

## 🌎 API

This app uses [PokéAPI](https://pokeapi.co/) through the **pokemode-ts** TypeScript wrapper, which provides  
typed responses, internal caching, and a clean API interface.  
No authentication or API key is required.

---

## 🧑‍💻 Author

**Williams Yang**  
GitHub: [@williamsyang-work](https://github.com/williamsyang-work)
