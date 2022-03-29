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

    function createVideo(title, source) {
        const videoContainer = DOMManip.makeNewElement("div", "", "showcase-container");
        const videoTitle = DOMManip.makeNewElement("div", "", "showcase-title", title);
        const videoBenJess = _embedVideo(source);
        DOMManip.appendChildren(videoContainer, videoTitle, videoBenJess);
        return videoContainer;
    }
    return { createVideo };
})();

export { createShowcase, videoFunctions };
