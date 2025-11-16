# Weather App ☀️🌦️

Simple, lightweight, static Weather App built with plain HTML, CSS and JavaScript. This project fetches current weather information for a city and displays it in a clean, responsive UI.

> Language composition: HTML (100%) 📝

## Table of contents 📚
- [Demo](#demo)
- [Features](#features)
- [Screenshots](#screenshots)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation (local)](#installation-local)
  - [Running locally](#running-locally)
- [Configuration (API key)](#configuration-api-key)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project structure](#project-structure)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)

## Demo 🚀
A live demo can be hosted via GitHub Pages, Netlify, Vercel, or any static host. (See [Deployment](#deployment) for one-click options.)

## Features ✨
- 🔎 Search weather by city name
- 🌡️ Displays current temperature, weather conditions, and location details
- 📊 Today's Highlights including UV Index, Wind Status, Sunrise/Sunset times, Humidity, Visibility, and Air Quality
- 📅 7-day weather forecast with daily temperatures and conditions
- 🎨 Modern UI with Bootstrap 5 and glassmorphism effects
- 📱 Fully responsive design that works on mobile and desktop
- 🚨 SweetAlert2 integration for elegant error messages
- ⚡ Lightweight and powered by WeatherAPI

## Getting started 🛠️

### Prerequisites ✅
- A modern web browser (Chrome, Firefox, Edge, Safari)
- (Optional) A static server if you want to serve files on localhost (see below)
- A WeatherAPI key (free tier available at https://www.weatherapi.com/) — see [Configuration](#configuration-api-key)

### Installation (local) 📦
1. Clone the repository:

```bash
   - git clone https://github.com/PasinduOG/weather-app.git
   - cd weather-app
```

2. Open `index.html` in your browser, or serve it using a local static server (recommended when making network requests).

### Running locally ▶️
Option A — Open directly
- Double-click `index.html` or open it from your browser (works for many setups, but some browsers block fetch() requests from file://).

Option B — Serve with a simple HTTP server (recommended)
- Python 3:
  - python -m http.server 8000
  - Open http://localhost:8000
- Node (http-server):
  - npm install -g http-server
  - http-server -p 8000
  - Open http://localhost:8000

## Configuration (API key) 🔐
This project requires a WeatherAPI key to fetch weather data. Follow these steps to configure it:

1. **Get your API key:**
   - Sign up for a free account at [WeatherAPI.com](https://www.weatherapi.com/)
   - Copy your API key from the dashboard

2. **Add your API key to the project:**
   - Open `assets/js/script.js`
   - Find line 3: `const API_KEY = "90e86490d94349479e973236251211";`
   - Replace the value with your own API key:
   ```js
   const API_KEY = "YOUR_WEATHERAPI_KEY_HERE";
   ```

3. **Security note:** 🔒
   - The current implementation includes the API key in client-side code for simplicity
   - For production deployments, consider using environment variables or serverless functions to keep your API key secure
   - Never commit your production API keys to public repositories

**Example API usage:**
```js
// Current weather with air quality
fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aqi=yes`)
  .then(res => res.json())
  .then(data => console.log(data));

// 7-day forecast
fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`)
  .then(res => res.json())
  .then(data => console.log(data));
```

## Usage 🧭
1. Enter a city name in the search box (e.g., "Colombo", "New York", "London")
2. Click the search button or press Enter
3. The app will display:
   - Current temperature and weather condition
   - Location details (city, province, country)
   - Today's Highlights:
     - UV Index
     - Wind Status (speed in km/h with status indicator)
     - Sunrise & Sunset times
     - Humidity percentage with status
     - Visibility in km with status
     - Air Quality Index (AQI) with EPA standards
   - 6-day weather forecast with daily temperatures and conditions
4. If the location is not found, a SweetAlert error message will appear

## Deployment 🚢
To publish the app as a static site:

- GitHub Pages
  - Push to the `main` (or `gh-pages`) branch and enable Pages in repository settings.
  - If your app uses client-side API keys, consider using serverless functions for security.

- Netlify / Vercel
  - Connect your GitHub repository and deploy as a static site.
  - Add environment variables (if you use a serverless proxy) via the platform settings.

## Project structure 📁
```
Final/
├─ index.html              # Main HTML file with Bootstrap 5 layout
├─ README.md               # Project documentation
└─ assets/
   ├─ css/
   │  └─ style.css         # Custom CSS (minimal, Bootstrap-first approach)
   ├─ js/
   │  └─ script.js         # Weather API integration and DOM manipulation
   └─ img/
      ├─ cloudy.png        # App icon/logo
      └─ 03.gif            # Background animation
```

## Contributing 🤝
Contributions are welcome! Suggestions:
- Open an issue to discuss a feature or bug.
- Fork the repo, create a branch (feature/xxx), commit changes, and open a PR.
- Follow a minimal PR template: describe the change, include screenshots if UI changed, and list steps to test.

Suggested contribution workflow:
1. Fork repository
2. Create a feature branch: git checkout -b feature/my-change
3. Commit and push: git commit -m "Add my change" && git push origin feature/my-change
4. Open a pull request to main

## Troubleshooting 🐞
- **"Location not found" error:**
  - Verify the city name spelling
  - Try using full city names (e.g., "New York" instead of "NYC")
  - Ensure your API key is valid and active
  
- **No weather data displayed:**
  - Check the browser console (F12) for errors
  - Verify your API key in `assets/js/script.js`
  - Ensure you haven't exceeded your API rate limits (free tier: 1 million calls/month)
  
- **CORS errors or fetch failed:**
  - Serve via http:// (use `python -m http.server 8000`) rather than opening file://
  - Check your internet connection
  
- **SweetAlert2 not working:**
  - Ensure SweetAlert2 CDN is loaded before `script.js` in `index.html`
  - Check browser console for script loading errors

## Roadmap 🛣️
- ✅ 7-day weather forecast
- ✅ Air Quality Index display
- ✅ Today's weather highlights
- ✅ Responsive Bootstrap design
- 🔄 Add unit toggle (Celsius / Fahrenheit)
- 📍 Add location detection (browser geolocation API)
- ♿ Improve accessibility (ARIA labels, keyboard navigation)
- 🌙 Add dark mode toggle
- 📊 Add hourly forecast graph
- 💾 Save favorite locations to localStorage

## License 📄
Specify a license for the project (e.g., MIT). Example:
This project is released under the MIT License. See LICENSE for details.

## Acknowledgements 🙏
- [WeatherAPI.com](https://www.weatherapi.com/) - Weather data provider
- [Bootstrap 5](https://getbootstrap.com/) - UI framework
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Icon library
- [SweetAlert2](https://sweetalert2.github.io/) - Beautiful alert/modal library

## Contact 📬
Maintainer: PasinduOG  
GitHub: https://github.com/PasinduOG

If you'd like, I can:
- add an example screenshot to the repo 📸,
- generate a LICENSE file 🧾,
- or update the README to reference the exact JS file where your API key needs to go (I can search the repo and insert precise instructions). 🔎
```
