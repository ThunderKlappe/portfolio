/* eslint-disable no-unused-vars */
import { createShowcase, videoFunctions } from "../Showcase";
import "../index.css";

const createAdventure = (() => {
    createShowcase("Adventure");
    const page = videoFunctions.createVideoPage(
        { title: "Canyoneering", source: "https://www.youtube.com/embed/ASq_Xpd5CQE" },
        { title: "OSU Raft Guide School", source: "https://www.youtube.com/embed/pPSFDdElh-w" },
        { title: "OSU Whitewater Rescue", source: "https://www.youtube.com/embed/mDT2CUaOG7g" },
        { title: "Ice Climbing Road Trip", source: "https://www.youtube.com/embed/KvH4lERlG4E" },
        { title: "OSU Wilderness Survival Class", source: "https://www.youtube.com/embed/q6xImMB3NLI" }
    );

    videoFunctions.displayVideoPage(page);
})();
