function fetchWeatherDetails() {

    const API_KEY = "90e86490d94349479e973236251211";
    let city = document.getElementById("txtCity").value;
    let card = document.getElementById("weatherCard");

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aqi=yes`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            try {
                document.getElementById("city").innerText = data.location.name;
                document.getElementById("province").innerText = data.location.region + " Province";
                document.getElementById("temp").innerText = data.current.temp_c;
                document.getElementById("condition").innerText = data.current.condition.text;
                document.getElementById("location").innerText = data.location.region + " Province" + ", " + data.location.country;

                //Weather icon
                document.getElementById("weatherIcon").innerHTML = `<img src="${data.current.condition.icon}" class="mt-4" width="150px">`;

                //Today's Highlights
                document.getElementById("uvIndex").innerText = data.current.uv;

                // Wind
                let windSpeed = data.current.wind_kph;
                document.getElementById("wind").innerText = windSpeed + " km/h";
                let windStatus = windSpeed>=0 && windSpeed <=20 ? '<span class="text-success fw-bold">Good</span>' :
                    windSpeed>20 && windSpeed <=40 ? '<span class="text-warning fw-bold">Normal</span>' :
                        windSpeed>40 && windSpeed <=60 ? '<span class="fw-bold" style="color: orange;">Caution</span>' :
                            windSpeed>60 && windSpeed <=80 ? '<span class="text-danger fw-bold"">Bad</span>' :
                                windSpeed>80 ? '<span class="fw-bold" style="color: violet;">Severe</span>' : null;
                document.getElementById("windStatus").innerHTML = windStatus;
                card.classList.remove("d-none");
                

                document.getElementById("sunRise").innerText = data.forecast.forecastday[0].astro.sunrise;
                document.getElementById("sunSet").innerText = data.forecast.forecastday[0].astro.sunset;

                // Humidity
                let humidityLevel = data.current.humidity
                document.getElementById("humidity").innerText = humidityLevel;
                let humidityStatus = 30 <= humidityLevel && 50 >= humidityLevel ? '<span class="text-success fw-bold">Good</span>' :
                    50 <= humidityLevel && 60 >= humidityLevel ? '<span class="text-warning fw-bold">Normal</span>' :
                        30 > humidityLevel || 60 < humidityLevel ? '<span class="text-danger fw-bold">Bad</span>' : null;
                document.getElementById("humidStatus").innerHTML = humidityStatus;

                // Visibility
                let visibilityLevel = data.current.vis_km
                document.getElementById("visibility").innerText = visibilityLevel;
                let visibilityStatus = 10 <= visibilityLevel ? '<span class="text-success fw-bold">Good</span>' :
                    5 <= visibilityLevel && 10 >= visibilityLevel ? '<span class="text-warning fw-bold">Normal</span>' :
                        5 > visibilityLevel ? '<span class="text-danger fw-bold">Bad</span>' : null;
                document.getElementById("visibleStatus").innerHTML = visibilityStatus;

                //AQI
                let airQuality = data.current.air_quality["us-epa-index"];
                document.getElementById("airQuality").innerText = airQuality;
                let airQualityStatus = 1 == airQuality ? '<span class="text-success fw-bold">Good</span>' :
                    2 == airQuality ? '<span class="text-warning fw-bold">Moderate</span>' :
                        3 == airQuality ? '<span class="fw-bold" style="color: orange;">Unhealthy for Sensitive Groups</span>' :
                            4 == airQuality ? '<span class="text-danger fw-bold"">Unhealthy</span>' :
                                5 == airQuality ? '<span class="fw-bold" style="color: violet;">Very Unhealthy</span>' :
                                    6 < airQuality ? '<span class="fw-bold" style="color: brown;">Hazardous</span>' : null;
                document.getElementById("airStatus").innerHTML = airQualityStatus;
                card.classList.remove("d-none");
            } catch {
                Swal.fire({
                    title: "Oops...",
                    text: "Location not found",
                    icon: "error"
                }).then((result) => {
                    if (result.isConfirmed) {
                        card.classList.add("d-none");
                        return;
                    }
                });
            }
        });

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`)
        .then(res => res.json())
        .then(data => {
            
            let container = document.getElementById("cardContainer");
            let forecastArr = data.forecast.forecastday;

            // Clear container if user search another city
            container.innerHTML = null;

            for (let i = 0; i < forecastArr.length-1; i++) {
                let date = forecastArr[i+1];
                container.innerHTML += `
                    <div class="col-md-6 col-lg-4 col-xl-2" id="day1">
                        <div class="bg-white border rounded-3 p-3 shadow-sm text-center">
                            <p class="text-muted small mb-2">${date.date}</p>
                            <img src="${date.day.condition.icon}" alt="weather" width="50">
                            <h5 class="fs-6 fw-bold mt-2 mb-1"><span>${date.day.avgtemp_c}</span>°C</h5>
                            <p class="text-muted small mb-0">${date.day.condition.text}</p>
                            <p class="text-muted small mb-0">UV index ${date.day.uv}</p>
                        </div>
                    </div>
                `
            }

        });

};