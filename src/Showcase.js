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

    function _createVideo(title, source) {
        const videoContainer = DOMManip.makeNewElement("div", "", "showcase-container");
        const videoTitle = DOMManip.makeNewElement("div", "", "showcase-title", title);
        const video = _embedVideo(source);
        DOMManip.appendChildren(videoContainer, videoTitle, video);
        return videoContainer;
    }
    function createVideoPage(...videos) {
        let page = [];
        videos.forEach(video => {
            page.push(_createVideo(video.title, video.source));
        });
        return page;
    }
    function displayVideoPage(page) {
        const content = DOMManip.getElement("#content");
        page.forEach(page => {
            content.appendChild(page);
        });
    }
    return { createVideoPage, displayVideoPage };
})();

const photoFunctions = (() => {
    function createPhotoPage(...photos) {
        let page = [];
        photos.forEach((photo, index) => {
            const container = DOMManip.makeNewElement("div", "", "image-container");
            const number = DOMManip.makeNewElement(
                "div",
                "",
                "number-text",
                `${index + 1} / ${photos.length}`
            );
            const photograph = new Image();
            photograph.src = photo;

            DOMManip.appendChildren(container, number, photograph);
            page.push(container);
        });
        return page;
    }

    function displayPhotoPage(page) {
        const content = DOMManip.getElement("#content");
        const prev = DOMManip.makeNewElement("i", "prev", "prev fa-solid fa-angle-left");
        const next = DOMManip.makeNewElement("i", "next", "next fa-solid fa-angle-right");
        const photoContainer = DOMManip.makeNewElement("div", "", "photos-container");
        page.forEach(page => {
            photoContainer.appendChild(page);
        });
        DOMManip.appendChildren(photoContainer, prev, next);
        content.appendChild(photoContainer);
        _activatePhotoPage();
    }

    function _activatePhotoPage() {
        const prev = DOMManip.getElement(".prev");
        const next = DOMManip.getElement(".next");

        prev.addEventListener("click", plusSlides.bind(null, -1));
        next.addEventListener("click", plusSlides.bind(null, 1));

        let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides((slideIndex += n));
        }

        function showSlides(n) {
            let i;
            let slides = DOMManip.getElements(".image-container");
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }
    }

    return { createPhotoPage, displayPhotoPage };
})();

export { createShowcase, videoFunctions, photoFunctions };
