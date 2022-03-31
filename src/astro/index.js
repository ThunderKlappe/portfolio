/* eslint-disable no-unused-vars */
import { createShowcase, photoFunctions } from "../Showcase";
import "../index.css";
import neowise from "./assets/neowise.jpg";
import hoodoo from "./assets/hoodoo.JPG";
import hoodoo2 from "./assets/hoodoo2.JPG";
import hoodoo3 from "./assets/hoodoo3.JPG";
import waldo from "./assets/waldo.JPG";
import waldo2 from "./assets/waldo2.JPG";

const createAstro = (() => {
    createShowcase("Astrophotography");
    const page = photoFunctions.createPhotoPage(neowise, hoodoo, hoodoo2, hoodoo3, waldo, waldo2);

    photoFunctions.displayPhotoPage(page);
})();
