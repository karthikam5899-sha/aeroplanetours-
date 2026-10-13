# Sha Air — India Tours & Travels

A responsive travel landing page built with React, Vite and Tailwind CSS.

## Requirements
- Node.js 18+ (recommended)
- npm

## Setup and run
1. Extract `aeroplane-tours-travels.zip`.
2. Open the extracted `aeroplane-tours-travels` folder in VS Code.
3. Open Terminal → New Terminal.
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the local URL printed in your terminal (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```
The production-ready website is generated in the `dist/` folder.

## Project structure
```text
aeroplane-tours-travels/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BrandLogo.jsx
│   │   ├── Intro.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── FlightSearch.jsx
│   │   ├── Destinations.jsx
│   │   ├── Offers.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Notes
- Flight search and contact form are frontend demonstrations. They validate user input and show a confirmation message, but do not connect to a real airline, payment gateway, email service, or booking database.
- Destination photos are loaded from Unsplash and need an internet connection.
- To connect live flight inventory, use a flight-search API and a secure backend; never store API secrets in frontend code.
