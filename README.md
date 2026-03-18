# EventSpot — Featured Events Page

A single-page, responsive website that displays a list of upcoming local events in a clean, mobile-friendly layout.

🔗 **Live Preview:** [View Site](https://web-dev-case-study-lmm2rwq30-hamza-abbasis-projects-3e960d0a.vercel.app/)

## Features

- **Navigation Bar** — Site logo with links to Home, Events, and Contact sections
- **Hero Section** — Heading: "Discover Events Near You" with a call-to-action button
- **Featured Events** — 5 sample event cards, each displaying:
  - Event name
  - Date and time
  - Location
  - Short description
  - A "Register" button (UI only, no backend)
- **Search Filter** — Search bar that filters events by name in real-time
- **Responsive Design** — Fully responsive grid layout:
  - Desktop: 3 columns
  - Tablet (≤ 1024px): 2 columns
  - Mobile (≤ 768px): 1 column with hamburger menu
- **Dynamic Rendering** — Event cards are loaded dynamically from a dummy JSON array using vanilla JavaScript

## Tech Stack

- **HTML5** — Semantic page structure
- **CSS3** — Custom styling with media queries for responsiveness
- **JavaScript (Vanilla)** — DOM manipulation, event filtering, and mobile nav toggle

## Project Structure

```
├── index.html    # Main HTML page
├── style.css     # All styles and responsive breakpoints
├── app.js        # Event data, rendering, search filter, mobile nav
└── README.md
```

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/hamzaabbasi54/web-dev-case-study.git
   ```
2. Open the project folder in **VS Code**.
3. Right-click `index.html` → **Open with Live Server**.

> If you don't have the Live Server extension, install it from the VS Code Extensions marketplace.

## Author

Hamza Abbasi