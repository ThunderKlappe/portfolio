import { DOMManip } from "./DOMManip";
import createHeader from "./Header";
import "./index.css";

// eslint-disable-next-line no-unused-vars
const displayPage = (() => {
    const header = createHeader("Tim Schley's Portfolio");
    const content = DOMManip.makeNewElement("div", "content");
    const titleContainer = DOMManip.makeNewElement("div", "title-container");
    const headshot = DOMManip.makeNewElement("div", "headshot");
    const title = DOMManip.makeNewElement(
        "div",
        "title",
        "title-text",
        "Tim Schley - Development, Film, Photography"
    );
    const aboutMe = DOMManip.makeNewElement(
        "div",
        "about-me",
        "content-text",
        "Tim Schley is a listener. With a keen ear and a professional eye, Tim works with you to discover what you are looking for and what you need. With an attention to detail, he will always provide you with a product that you will be happy with."
    );
    const links = DOMManip.makeNewElement("div", "links");
    const developmentContainer = DOMManip.makeNewElement("div", "development-container", "link-container");
    const developmentLabel = DOMManip.makeNewElement(
        "div",
        "development-label",
        "content-text",
        "Web Development"
    );
    const battleshipButton = DOMManip.makeNewElement("a", "battleship-button", "link-button", "Battleship", {
        href: "./battleship/index.html",
    });
    const weatherButton = DOMManip.makeNewElement("a", "weather-button", "link-button", "WeatherSearch", {
        href: "./weather/index.html",
    });
    const todoButton = DOMManip.makeNewElement("a", "todo-button", "link-button", "ToDo List", {
        href: "./todo/index.html",
    });
    const tictactoeButton = DOMManip.makeNewElement("a", "tictactoe-button", "link-button", "Tic-Tac-Toe", {
        href: "./tic-tac-toe/index.html",
    });

    const videoContainer = DOMManip.makeNewElement("div", "video-container", "link-container");
    const videoLabel = DOMManip.makeNewElement("div", "video-label", "content-text", "Video Production");
    const weddingsButton = DOMManip.makeNewElement("a", "weddings-button", "link-button", "Weddings", {
        href: "./weddings/index.html",
    });
    const adventureButton = DOMManip.makeNewElement("a", "adventure-button", "link-button", "Adventure", {
        href: "./adventure/index.html",
    });
    const otherButton = DOMManip.makeNewElement("a", "other-button", "link-button", "Other", {
        href: "./other/index.html",
    });

    const photoContainer = DOMManip.makeNewElement("div", "photo-container", "link-container");
    const photoLabel = DOMManip.makeNewElement("div", "photo-label", "content-text", "Photography");
    const natureButton = DOMManip.makeNewElement("a", "nature-button", "link-button", "Nature", {
        href: "./nature/index.html",
    });
    const astroButton = DOMManip.makeNewElement("a", "astro-button", "link-button", "Astrophotography", {
        href: "./astro/index.html",
    });

    DOMManip.appendChildren(
        developmentContainer,
        developmentLabel,
        battleshipButton,
        weatherButton,
        todoButton,
        tictactoeButton
    );

    DOMManip.appendChildren(videoContainer, videoLabel, weddingsButton, adventureButton, otherButton);

    DOMManip.appendChildren(photoContainer, photoLabel, natureButton, astroButton);

    DOMManip.appendChildren(links, developmentContainer, videoContainer, photoContainer);
    DOMManip.appendChildren(titleContainer, headshot, title);
    DOMManip.appendChildren(content, titleContainer, aboutMe, links);
    DOMManip.appendChildren(document.body, header, content);
})();
