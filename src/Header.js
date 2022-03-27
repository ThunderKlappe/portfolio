import { DOMManip } from "./DOMManip";
export default function createHeader(title) {
    const headerBar = DOMManip.makeNewElement("div", "header", "header", title);
    return headerBar;
}
