import { DOMManip } from "./DOMManip";
import "./header.css";
export default function createHeader(title) {
    const headerBar = DOMManip.makeNewElement("div", "header", "header");
    const headerTitle = DOMManip.makeNewElement("div", "header-title", "header-title", title);
    const headerLinkContainer = DOMManip.makeNewElement("div", "header-link-container");
    const headerDevContainer = DOMManip.makeNewElement(
        "div",
        "header-dev-container",
        "header-container",
        "Development"
    );
    const headerVideoContainer = DOMManip.makeNewElement(
        "div",
        "header-video-container",
        "header-container",
        "Video"
    );
    const headerPhotoContainer = DOMManip.makeNewElement(
        "div",
        "header-photo-container",
        "header-container",
        "Photography"
    );
    const headerAbout = DOMManip.makeNewElement("a", "header-about", "header-container", "About Me", {
        href: "./about/index.html",
    });

    DOMManip.appendChildren(
        headerLinkContainer,
        headerDevContainer,
        headerVideoContainer,
        headerPhotoContainer,
        headerAbout
    );

    DOMManip.appendChildren(headerBar, headerTitle, headerLinkContainer);

    // eslint-disable-next-line no-unused-vars
    const _activateHeader = (() => {
        headerDevContainer.addEventListener("mouseover", hoverOn);
        headerVideoContainer.addEventListener("mouseover", hoverOn);
        headerPhotoContainer.addEventListener("mouseover", hoverOn);
        headerDevContainer.addEventListener("mouseleave", hoverOff);
        headerVideoContainer.addEventListener("mouseleave", hoverOff);
        headerPhotoContainer.addEventListener("mouseleave", hoverOff);

        headerDevContainer.addEventListener("click", showDev);
        headerVideoContainer.addEventListener("click", showVideo);
        headerPhotoContainer.addEventListener("click", showPhoto);
    })();

    function hoverOn(e) {
        e.target.classList.add("hover");
    }
    function hoverOff(e) {
        e.target.classList.remove("hover");
        if (e.target.childNodes.length > 1) {
            DOMManip.removeAllChildren(e.currentTarget, 1);
        }
    }

    function showDev(e) {
        const devMenu = DOMManip.makeNewElement("div", "dev-menu", "header-menu");
        const battleship = DOMManip.makeNewElement("a", "header-battleship", "header-link", "Battleship", {
            href: "./battleship/index.html",
        });
        const weather = DOMManip.makeNewElement("a", "header-weather", "header-link", "WeatherSearch", {
            href: "./weather/index.html",
        });
        const todo = DOMManip.makeNewElement("a", "header-todo", "header-link", "ToDo List", {
            href: "./todo/index.html",
        });
        const tictactoe = DOMManip.makeNewElement("a", "header-tictactoe", "header-link", "Tic-Tac-Toe", {
            href: "./tic-tac-toe/index.html",
        });

        DOMManip.appendChildren(devMenu, battleship, weather, todo, tictactoe);

        e.currentTarget.appendChild(devMenu);
    }
    function showVideo(e) {
        const videoMenu = DOMManip.makeNewElement("div", "video-menu", "header-menu");
        const weddings = DOMManip.makeNewElement("a", "header-weddings", "header-link", "Weddings", {
            href: "./weddings/index.html",
        });
        const adventure = DOMManip.makeNewElement("a", "header-adventure", "header-link", "Adventure", {
            href: "./adventure/index.html",
        });
        const other = DOMManip.makeNewElement("a", "header-other", "header-link", "Other", {
            href: "./other/index.html",
        });

        DOMManip.appendChildren(videoMenu, weddings, adventure, other);

        e.currentTarget.appendChild(videoMenu);
    }
    function showPhoto(e) {
        const photoMenu = DOMManip.makeNewElement("div", "photo-menu", "header-menu");
        const nature = DOMManip.makeNewElement("a", "header-nature", "header-link", "Nature", {
            href: "./nature/index.html",
        });
        const astro = DOMManip.makeNewElement("a", "header-astro", "header-link", "Astrophotography", {
            href: "./astro/index.html",
        });

        DOMManip.appendChildren(photoMenu, nature, astro);

        e.currentTarget.appendChild(photoMenu);
    }

    return headerBar;
}
