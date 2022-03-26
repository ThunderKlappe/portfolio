import { weatherFunctions } from ".";
import { DOMManip } from "./DOMManip";

export const EventHandler = (() => {
    const activateSearch = () => {
        DOMManip.getElement("#search-button").addEventListener("click", weatherFunctions.search);
    };
    const activateTempToggle = () => {
        DOMManip.getElement("#temp-scale-toggle").addEventListener("click", weatherFunctions.convertTemp);
    };
    const activateSearchErrorRemove = () => {
        DOMManip.getElement("#search-input").removeEventListener("input", weatherFunctions.removeError);
        DOMManip.getElement("#search-input").addEventListener("input", weatherFunctions.removeError);
    };

    return { activateSearch, activateTempToggle, activateSearchErrorRemove };
})();
