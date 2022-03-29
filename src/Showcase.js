import DOMManip from "./DOMManip";
import createFooter from "./Footer";
import createHeader from "./Header";
import "./index.css";

export default function createShowcase(title) {
    const header = createHeader(title);
    const content = DOMManip.makeNewElement("div", "content");
    const footer = createFooter();

    const titleContainer = DOMManip.makeNewElement("div", "title-container", "title-container");
    const titleText = DOMManip.makeNewElement("div", "title", "title-text", title);

    titleContainer.appendChild(titleText);
    DOMManip.appendChildren(content, titleContainer);
    DOMManip.appendChildren(document.body, header, content, footer);
}
