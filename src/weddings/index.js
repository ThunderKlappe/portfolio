/* eslint-disable no-unused-vars */
import { DOMManip } from "../DOMManip";
import { createShowcase, videoFunctions } from "../Showcase";
import "../index.css";

const createWeddings = (() => {
    createShowcase("Weddings");
    const content = DOMManip.getElement("#content");

    const containerBenJess = videoFunctions.createVideo(
        "Ben and Jess Church",
        "https://www.youtube.com/embed/iDwgV2nleCY"
    );

    const containerJarrodHayley = videoFunctions.createVideo(
        "Jarrod and Hayley Lowe",
        "https://www.youtube.com/embed/BQrpmEs0p48"
    );

    DOMManip.appendChildren(content, containerBenJess, containerJarrodHayley);
})();
