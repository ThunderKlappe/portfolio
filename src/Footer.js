/* eslint-disable no-unused-vars */
import { DOMManip } from "./DOMManip";
import "./footer.css";

export default function createFooter() {
    const footerBar = DOMManip.makeNewElement("div", "footer", "footer");
    const devBy = DOMManip.makeNewElement(
        "a",
        "developed-by",
        "footer-text",
        "Developed by Tim Schley - 2022",
        { href: "./index.html" }
    );
    const linkedin = DOMManip.makeNewElement("i", "footer-linkedin", "footer-link fa-brands fa-linkedin");
    const github = DOMManip.makeNewElement("i", "footer-github", "footer-link fa-brands fa-github-square");
    const youtube = DOMManip.makeNewElement("i", "footer-youtube", "footer-link fa-brands fa-youtube-square");

    const activateFooter = (() => {
        linkedin.addEventListener(
            "click",
            () => (window.location.href = "https://www.linkedin.com/in/tim-schley-56119662/")
        );
        github.addEventListener("click", () => (window.location.href = "https://github.com/ThunderKlappe"));
        youtube.addEventListener(
            "click",
            () => (window.location.href = "https://www.youtube.com/user/PandaTimmy")
        );
    })();

    DOMManip.appendChildren(footerBar, devBy, linkedin, github, youtube);

    return footerBar;
}
