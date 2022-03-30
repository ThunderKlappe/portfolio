/* eslint-disable no-unused-vars */
import { createShowcase, videoFunctions } from "../Showcase";
import "../index.css";

const createAdventure = (() => {
    createShowcase("Other Video Projects");
    const page = videoFunctions.createVideoPage(
        { title: "How to fix a flat tire", source: "https://www.youtube.com/embed/kz7u97MsdK0" },
        { title: "Plastic Straw Documentary", source: "https://www.youtube.com/embed/qsX1-blmtuU" },
        { title: "Go Outside", source: "https://www.youtube.com/embed/oEYiZng7sOQ" },
        { title: "Animatic Example", source: "https://www.youtube.com/embed/ni5rqleTuts" }
    );

    videoFunctions.displayVideoPage(page);
})();
