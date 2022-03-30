import { DOMManip } from "./DOMManip";
import createFooter from "./Footer";
import createHeader from "./Header";

function createShowcase(title) {
    const header = createHeader(title);
    const content = DOMManip.makeNewElement("div", "content");
    const footer = createFooter();

    const titleContainer = DOMManip.makeNewElement("div", "title-container", "title-container");
    const titleText = DOMManip.makeNewElement("div", "title", "title-text", title);

    titleContainer.appendChild(titleText);
    DOMManip.appendChildren(content, titleContainer);
    DOMManip.appendChildren(document.body, header, content, footer);
}
const videoFunctions = (() => {
    function _embedVideo(source) {
        return DOMManip.makeNewElement(
            "iFrame",
            "",
            "showcase-video",
            "",
            { width: "560" },
            { height: "315" },
            { src: source },
            { frameborder: "0" },
            {
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            },
            { allowfullscreen: "" }
        );
    }

    function _createVideo(title, source) {
        const videoContainer = DOMManip.makeNewElement("div", "", "showcase-container");
        const videoTitle = DOMManip.makeNewElement("div", "", "showcase-title", title);
        const video = _embedVideo(source);
        DOMManip.appendChildren(videoContainer, videoTitle, video);
        return videoContainer;
    }
    function createVideoPage(...videos) {
        let page = [];
        videos.forEach(video => {
            page.push(_createVideo(video.title, video.source));
        });
        return page;
    }
    function displayVideoPage(page) {
        const content = DOMManip.getElement("#content");
        page.forEach(page => {
            content.appendChild(page);
        });
    }
    return { createVideoPage, displayVideoPage };
})();

export { createShowcase, videoFunctions };
