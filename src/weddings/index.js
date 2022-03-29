/* eslint-disable no-unused-vars */
import { createShowcase, videoFunctions } from "../Showcase";
import "../index.css";

const createWeddings = (() => {
    createShowcase("Weddings");
    const content = document.querySelector("#content");

    const page = videoFunctions.createVideoPage(
        {title:"Ben and Jess Church", source:"https://www.youtube.com/embed/iDwgV2nleCY"}, 
        {title:"Jarrod and Hayley Lowe", source:"https://www.youtube.com/embed/BQrpmEs0p48"});

    page.forEach(page=>{
        content.appendChild(page);
    });
})();
