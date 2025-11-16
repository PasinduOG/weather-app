# Weather App (Frontend-only)

A clean, responsive weather app UI that fetches current weather and basic forecast data from WeatherAPI and displays it using a Bootstrap-only design. This project is frontend-only (no backend). It demonstrates a modern layout with current conditions and highlight cards (UV, wind, humidity, visibility, sunrise/sunset, air quality).

Preview
-------
The UI is built to match a modern weather dashboard design (two-column layout: large visual + current details on the left, highlights and cards on the right). Use the app by opening `index.html` in a browser (see "Running locally" below).

Features
--------
- Fetches data from WeatherAPI's `forecast.json` endpoint (with `days=1` and `aqi=yes`) so sunrise/sunset and air quality are available.
- Modern, responsive layout built entirely with Bootstrap utilities (no custom CSS required).
- Highlights cards for: UV index, Wind status, Sunrise & Sunset, Humidity, Visibility, and Air Quality.
- Search input that queries WeatherAPI and updates the page.

Files
-----
- `index.html` — Main UI and JavaScript / Bootstrap markup.
- `assets/css/style.css` — (kept for future overrides). Current design uses Bootstrap utilities; this file is intentionally minimal.

Weather API
-----------
This project uses WeatherAPI (https://www.weatherapi.com/). The app currently contains an API call such as:

```
https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=LOCATION&days=1&aqi=yes
```

Important: the sample code currently uses a client-side API key for simplicity. Exposing API keys in frontend code is not secure for production apps. To secure your API key consider one of the following:

- Move API requests to a small server or serverless function and keep the API key on the server side.
- Use environment-protected endpoints for production.

How to update the API key
-------------------------
Open `index.html` and locate the `apiKey` constant near the top of the inline script. Replace the value with your key.

Running locally
---------------
Open `index.html` directly in the browser (works for many browsers). If you encounter CORS or resource loading issues, run a simple local static server.

Using Python 3 (recommended):

```powershell
# from project root
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Using Node (http-server):

```powershell
npm install -g http-server
http-server -c-1
# then open http://localhost:8080 (port may vary)
```

Notes
-----
- The app is intentionally frontend-only. If you need a private key or want to add user accounts, a backend or serverless function is recommended.
- The weekly forecast in the current UI is a static placeholder. If you want the app to render the full multi-day forecast from the `forecast` response, I can implement that next.

Next steps (suggested)
----------------------
- Replace client-side API key with a small backend/proxy to keep the key secret.
- Add icons (SVGs) or animated condition visuals.
- Populate and style the multi-day forecast from `data.forecast.forecastday`.
- Add unit tests or a small test harness for UI rendering.

License
-------
This repository has no explicit license. Add a LICENSE file if you want to set one.

---
If you want, I can implement any of the next steps now (server proxy, weekly forecast, SVG icons, or deploy instructions).