import "./style.css";
import { weatherSearch } from "./APIHandler";
import { BuildPage } from "./BuildPage";
import { EventHandler } from "./EventHandler";
import { DOMManip } from "./DOMManip";

export const weatherFunctions = (() => {
    const _markInvalid = elem => {
        elem.classList.add("invalid");
        EventHandler.activateSearchErrorRemove();
    };
    const _removeInvalid = elem => {
        elem.classList.remove("invalid");
    };
    const removeError = () => {
        const searchInput = DOMManip.getElement("#search-input");
        searchInput.setCustomValidity("");
        _removeInvalid(searchInput);
    };
    const _checkValidity = () => {
        let searchInput = DOMManip.getElement("#search-input");
        searchInput.setCustomValidity("");
        if (searchInput.value == "") {
            searchInput.setCustomValidity("Please enter a US City or Zip Code");
            searchInput.reportValidity();
            _markInvalid(searchInput);
            return false;
        }
        _removeInvalid(searchInput);
        return true;
    };
    const _cantFind = () => {
        let searchInput = DOMManip.getElement("#search-input");
        searchInput.setCustomValidity("We can't find that location");
        searchInput.reportValidity();
        _markInvalid(searchInput);
    };

    async function search(e) {
        e.preventDefault();
        if (_checkValidity()) {
            try {
                const searchTerm = DOMManip.getElement("#search-input").value;
                BuildPage.makeLoading();
                const searchResults = await weatherSearch(searchTerm);
                await BuildPage.removeLoading();
                if (searchResults) {
                    BuildPage.displayWeather(searchResults);
                } else {
                    _cantFind();
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
    const _convertToCelsius = fTemp => Math.round((fTemp - 32) * (5 / 9) * 100) / 100;
    const _convertToFarenheit = cTemp => Math.round((cTemp * (9 / 5) + 32) * 100) / 100;
    const convertTemp = () => {
        const currentTemp = DOMManip.getElement("#current-temp").dataset.temp;
        const feelsLike = DOMManip.getElement("#feels-like").dataset.temp;
        if (DOMManip.getElement("#temp-scale-toggle").classList.contains("farenheit")) {
            BuildPage.toggleTemp({
                currentTemp: _convertToCelsius(currentTemp),
                feelsLike: _convertToCelsius(feelsLike),
            });
        } else {
            BuildPage.toggleTemp({
                currentTemp: _convertToFarenheit(currentTemp),
                feelsLike: _convertToFarenheit(feelsLike),
            });
        }
    };

    return { search, convertTemp, removeError };
})();

const initPage = (() => {
    BuildPage.buildStartingPage();
    EventHandler.activateSearch();
})();
