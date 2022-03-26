import { DOMManip } from "./DOMManip";
import logo from "./assets/logo.png";
import cityData from "./city.json";
import { EventHandler } from "./EventHandler";

export const BuildPage = (() => {
    const buildStartingPage = () => {
        const header = DOMManip.makeNewElement("div", "header", "", "Weather");
        const content = DOMManip.makeNewElement("div", "content");
        const homeContainer = DOMManip.makeNewElement("div", "home-container", "starting");

        const webLogo = new Image();
        webLogo.src = logo;
        webLogo.setAttribute("id", "website-logo");

        const searchForm = DOMManip.makeNewElement("form", "search-form");
        const searchInput = DOMManip.makeNewElement(
            "input",
            "search-input",
            "",
            "",
            { type: "text" },
            { placeholder: "Enter a US city or zip code" }
        );
        searchInput.setAttribute("required", "");
        const searchButton = DOMManip.makeNewElement("button", "search-button", "", "Search");
        DOMManip.appendChildren(searchForm, searchInput, searchButton);

        DOMManip.appendChildren(homeContainer, webLogo, searchForm);
        content.appendChild(homeContainer);

        DOMManip.appendChildren(document.body, header, content);
    };

    const makeLoading = () => {
        const loadingContainer = DOMManip.makeNewElement("div", "loading-container");
        const loadingIcon = DOMManip.makeNewElement("i", "loading-icon", "fa-solid fa-sun");
        loadingContainer.appendChild(loadingIcon);
        document.body.appendChild(loadingContainer);
    };
    const removeLoading = () => {
        DOMManip.getElement("#loading-container").remove();
    };
    const _clearSearchBar = () => {
        DOMManip.getElement("#search-input").value = "";
    };
    const _minimizeSearch = () => {
        DOMManip.getElement("#home-container").classList.add("minimized");
        _clearSearchBar();
    };

    const _clearContent = () => {
        const content = DOMManip.getElement("#content");
        if (content.childNodes.length > 1) {
            content.lastElementChild.remove();
        }
    };
    const _buildWeatherPage = () => {
        const content = DOMManip.getElement("#content");
        _clearContent();
        const weatherContainer = DOMManip.makeNewElement("div", "weather-container");
        const cityName = DOMManip.makeNewElement("div", "city-name");
        const weatherDisplay = DOMManip.makeNewElement("div", "weather-display");
        const weatherDescriptionContainer = DOMManip.makeNewElement("div", "weather-description-container");
        const weatherIconContainer = DOMManip.makeNewElement("div", "weather-icon-container");
        const weatherIcon = DOMManip.makeNewElement("img", "weather-icon");
        const weatherDescription = DOMManip.makeNewElement("div", "weather-description");
        const currentTempLabel = DOMManip.makeNewElement(
            "div",
            "current-temp-label",
            "weather-info",
            "Current Temp: "
        );
        const currentTempDisplay = DOMManip.makeNewElement("span", "current-temp", "weather-info");
        const feelsLikeLabel = DOMManip.makeNewElement(
            "div",
            "feels-like-label",
            "weather-info",
            "Feels Like: "
        );
        const feelsLikeDisplay = DOMManip.makeNewElement("span", "feels-like", "weather-info");
        const cloudCover = DOMManip.makeNewElement("div", "cloud-cover", "weather-info");
        const humidity = DOMManip.makeNewElement("div", "humidity", "weather-info");
        const tempScaleContainer = DOMManip.makeNewElement("div", "temp-scale-container");
        const tempScaleToggle = DOMManip.makeNewElement("button", "temp-scale-toggle", "farenheit");
        weatherIconContainer.appendChild(weatherIcon);
        currentTempLabel.appendChild(currentTempDisplay);
        feelsLikeLabel.appendChild(feelsLikeDisplay);
        tempScaleContainer.appendChild(tempScaleToggle);
        DOMManip.appendChildren(weatherDescriptionContainer, weatherIconContainer, weatherDescription);
        DOMManip.appendChildren(
            weatherDisplay,
            weatherDescriptionContainer,
            currentTempLabel,
            feelsLikeLabel,
            cloudCover,
            humidity,
            tempScaleContainer
        );
        DOMManip.appendChildren(weatherContainer, cityName, weatherDisplay);
        content.appendChild(weatherContainer);
    };
    const _getCity = weatherInfo => {
        const cityID = weatherInfo.id;
        for (let i = 0; i < cityData.length; i++) {
            let city = cityData[i];
            if (city.id == cityID) {
                return { name: city.name, state: city.state };
            }
        }
    };
    const _isNightTime = timeInfo => {
        const currentTime = Math.floor(new Date().getTime() / 1000);
        if (currentTime < timeInfo.susrise || currentTime > timeInfo.sunset) {
            return true;
        }
        return false;
    };
    const _formatIconContainer = weatherInfo => {
        const iconContainer = DOMManip.getElement("#weather-icon-container");
        let backgroundColor;
        _isNightTime({ sunrise: weatherInfo.sys.sunrise, sunset: weatherInfo.sys.sunset })
            ? (backgroundColor = "#00101E")
            : (backgroundColor = "#007EFF");
        const cloudCover = weatherInfo.clouds.all;
        iconContainer.style.backgroundColor = backgroundColor;
        iconContainer.firstElementChild.style.backdropFilter = `grayscale(${cloudCover}%)`;
    };
    const _fillInWeatherData = weatherInfo => {
        DOMManip.getElement(
            "#weather-icon"
        ).src = `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`;
        _formatIconContainer(weatherInfo);
        DOMManip.getElement("#weather-description").textContent =
            weatherInfo.weather[0].description.toUpperCase();
        DOMManip.getElement("#current-temp").innerHTML = `${weatherInfo.main.temp}&deg;`;
        DOMManip.getElement("#current-temp").setAttribute("data-temp", weatherInfo.main.temp);
        DOMManip.getElement("#feels-like").innerHTML = `${weatherInfo.main.feels_like}&deg;`;
        DOMManip.getElement("#feels-like").setAttribute("data-temp", weatherInfo.main.feels_like);
        DOMManip.getElement("#cloud-cover").textContent = `Cloud Cover: ${weatherInfo.clouds.all}%`;
        DOMManip.getElement("#humidity").textContent = `Humidity: ${weatherInfo.main.humidity}%`;
        const cityInfo = _getCity(weatherInfo);
        DOMManip.getElement("#city-name").textContent = `${cityInfo.name}, ${cityInfo.state}`;
    };
    const _toggleWeatherContainer = () => {
        setTimeout(() => {
            const weatherContainer = DOMManip.getElement("#weather-container");
            weatherContainer.classList.toggle("displayed");
        }, 100);
    };
    const displayWeather = weatherInfo => {
        _minimizeSearch();
        _buildWeatherPage();
        _fillInWeatherData(weatherInfo);
        EventHandler.activateTempToggle();
        _toggleWeatherContainer();
    };
    const _toggleTempButton = () => {
        const tempScaleToggle = DOMManip.getElement("#temp-scale-toggle");
        tempScaleToggle.classList.toggle("farenheit");
        tempScaleToggle.classList.toggle("celsius");
    };
    const toggleTemp = newTempInfo => {
        const currentTemp = DOMManip.getElement("#current-temp");
        currentTemp.innerHTML = `${newTempInfo.currentTemp}&deg;`;
        currentTemp.setAttribute("data-temp", newTempInfo.currentTemp);
        const feelsLike = DOMManip.getElement("#feels-like");
        feelsLike.innerHTML = `${newTempInfo.feelsLike}&deg;`;
        feelsLike.setAttribute("data-temp", newTempInfo.feelsLike);
        _toggleTempButton();
    };

    return { buildStartingPage, makeLoading, removeLoading, displayWeather, toggleTemp };
})();
