/* eslint-disable no-unused-vars */
import { createShowcase, photoFunctions } from "../Showcase";
import "../index.css";
import iceland from "./assets/iceland.jpg";
import iceland2 from "./assets/iceland2.jpg";
import iceland3 from "./assets/iceland3.jpg";
import iceland4 from "./assets/iceland4.jpg";
import icelandwaterfall from "./assets/icelandwaterfall.jpg";
import icelandwaterfall2 from "./assets/icelandwaterfall2.jpg";
import maryspeak from "./assets/maryspeak.jpg";
import nightfog from "./assets/nightfog.jpg";
import qville from "./assets/qville.jpg";
import qville2 from "./assets/qville2.jpg";
import rainbowcloud from "./assets/rainbowcloud.jpg";
import river from "./assets/river.jpg";
import rogue2 from "./assets/rogue2.jpg";
import rogue3 from "./assets/rogue3.jpg";
import sisters from "./assets/sisters.jpg";
import snowymarys from "./assets/snowymarys.jpg";
import snowymarys2 from "./assets/snowymarys2.jpg";
import sunset from "./assets/sunset.jpg";
import sunset2 from "./assets/sunset2.jpg";
import tfj from "./assets/tfj.jpg";
import waterfall from "./assets/waterfall.jpg";
import waldo from "./assets/waldo.JPG";
import waldo2 from "./assets/waldo2.JPG";

const createNature = (() => {
    createShowcase("Nature");
    const page = photoFunctions.createPhotoPage(
        rainbowcloud,
        waldo,
        iceland,
        iceland2,
        waldo2,
        iceland3,
        iceland4,
        icelandwaterfall,
        icelandwaterfall2,
        maryspeak,
        nightfog,
        qville,
        qville2,
        river,
        rogue2,
        rogue3,
        sisters,
        snowymarys,
        snowymarys2,
        sunset,
        sunset2,
        tfj,
        waterfall
    );

    photoFunctions.displayPhotoPage(page);
})();
