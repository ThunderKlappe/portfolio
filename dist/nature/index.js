/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Showcase.js":
/*!*************************!*\
  !*** ./src/Showcase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShowcase": () => (/* binding */ createShowcase),
/* harmony export */   "photoFunctions": () => (/* binding */ photoFunctions),
/* harmony export */   "videoFunctions": () => (/* binding */ videoFunctions)
/* harmony export */ });
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./src/Footer.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _showcase_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showcase.css */ "./src/showcase.css");





function createShowcase(title) {
  var header = (0,_Header__WEBPACK_IMPORTED_MODULE_2__["default"])(title);
  var content = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "content");
  var footer = (0,_Footer__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var titleContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "title-container", "title-container");
  var titleText = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "title", "title-text", title);
  titleContainer.appendChild(titleText);
  _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(content, titleContainer);
  _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(document.body, header, content, footer);
}

var videoFunctions = function () {
  function _embedVideo(source) {
    return _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("iFrame", "", "showcase-video", "", {
      width: "560"
    }, {
      height: "315"
    }, {
      src: source
    }, {
      frameborder: "0"
    }, {
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    }, {
      allowfullscreen: ""
    });
  }

  function _createVideo(title, source) {
    var videoContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "", "showcase-container");
    var videoTitle = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "", "showcase-title", title);

    var video = _embedVideo(source);

    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(videoContainer, videoTitle, video);
    return videoContainer;
  }

  function createVideoPage() {
    var page = [];

    for (var _len = arguments.length, videos = new Array(_len), _key = 0; _key < _len; _key++) {
      videos[_key] = arguments[_key];
    }

    videos.forEach(function (video) {
      page.push(_createVideo(video.title, video.source));
    });
    return page;
  }

  function displayVideoPage(page) {
    var content = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#content");
    page.forEach(function (page) {
      content.appendChild(page);
    });
  }

  return {
    createVideoPage: createVideoPage,
    displayVideoPage: displayVideoPage
  };
}();

var photoFunctions = function () {
  function createPhotoPage() {
    for (var _len2 = arguments.length, photos = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      photos[_key2] = arguments[_key2];
    }

    var page = [];
    photos.forEach(function (photo, index) {
      var container = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "", "image-container");
      var number = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "", "number-text", "".concat(index + 1, " / ").concat(photos.length));
      var photograph = new Image();
      photograph.src = photo;
      _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(container, number, photograph);
      page.push(container);
    });
    return page;
  }

  function displayPhotoPage(page) {
    var content = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#content");
    var prev = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("i", "prev", "prev fa-solid fa-angle-left");
    var next = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("i", "next", "next fa-solid fa-angle-right");
    var photoContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "", "photos-container");
    page.forEach(function (page) {
      photoContainer.appendChild(page);
    });
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(photoContainer, prev, next);
    content.appendChild(photoContainer);

    _activatePhotoPage();
  }

  function _activatePhotoPage() {
    var prev = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement(".prev");
    var next = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement(".next");
    prev.addEventListener("click", plusSlides.bind(null, -1));
    next.addEventListener("click", plusSlides.bind(null, 1));
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function showSlides(n) {
      var i;
      var slides = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElements(".image-container");

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

  return {
    createPhotoPage: createPhotoPage,
    displayPhotoPage: displayPhotoPage
  };
}();



/***/ }),

/***/ "./src/nature/index.js":
/*!*****************************!*\
  !*** ./src/nature/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Showcase */ "./src/Showcase.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./src/index.css");
/* harmony import */ var _assets_iceland_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/iceland.jpg */ "./src/nature/assets/iceland.jpg");
/* harmony import */ var _assets_iceland2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/iceland2.jpg */ "./src/nature/assets/iceland2.jpg");
/* harmony import */ var _assets_iceland3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/iceland3.jpg */ "./src/nature/assets/iceland3.jpg");
/* harmony import */ var _assets_iceland4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/iceland4.jpg */ "./src/nature/assets/iceland4.jpg");
/* harmony import */ var _assets_icelandwaterfall_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icelandwaterfall.jpg */ "./src/nature/assets/icelandwaterfall.jpg");
/* harmony import */ var _assets_icelandwaterfall2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icelandwaterfall2.jpg */ "./src/nature/assets/icelandwaterfall2.jpg");
/* harmony import */ var _assets_maryspeak_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/maryspeak.jpg */ "./src/nature/assets/maryspeak.jpg");
/* harmony import */ var _assets_nightfog_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/nightfog.jpg */ "./src/nature/assets/nightfog.jpg");
/* harmony import */ var _assets_qville_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/qville.jpg */ "./src/nature/assets/qville.jpg");
/* harmony import */ var _assets_qville2_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/qville2.jpg */ "./src/nature/assets/qville2.jpg");
/* harmony import */ var _assets_rainbowcloud_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/rainbowcloud.jpg */ "./src/nature/assets/rainbowcloud.jpg");
/* harmony import */ var _assets_river_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/river.jpg */ "./src/nature/assets/river.jpg");
/* harmony import */ var _assets_rogue2_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/rogue2.jpg */ "./src/nature/assets/rogue2.jpg");
/* harmony import */ var _assets_rogue3_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/rogue3.jpg */ "./src/nature/assets/rogue3.jpg");
/* harmony import */ var _assets_sisters_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/sisters.jpg */ "./src/nature/assets/sisters.jpg");
/* harmony import */ var _assets_snowymarys_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/snowymarys.jpg */ "./src/nature/assets/snowymarys.jpg");
/* harmony import */ var _assets_snowymarys2_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/snowymarys2.jpg */ "./src/nature/assets/snowymarys2.jpg");
/* harmony import */ var _assets_sunset_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/sunset.jpg */ "./src/nature/assets/sunset.jpg");
/* harmony import */ var _assets_sunset2_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/sunset2.jpg */ "./src/nature/assets/sunset2.jpg");
/* harmony import */ var _assets_tfj_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/tfj.jpg */ "./src/nature/assets/tfj.jpg");
/* harmony import */ var _assets_waterfall_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/waterfall.jpg */ "./src/nature/assets/waterfall.jpg");
/* harmony import */ var _assets_waldo_JPG__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/waldo.JPG */ "./src/nature/assets/waldo.JPG");
/* harmony import */ var _assets_waldo2_JPG__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/waldo2.JPG */ "./src/nature/assets/waldo2.JPG");
/* eslint-disable no-unused-vars */


























var createNature = function () {
  (0,_Showcase__WEBPACK_IMPORTED_MODULE_0__.createShowcase)("Nature");
  var page = _Showcase__WEBPACK_IMPORTED_MODULE_0__.photoFunctions.createPhotoPage(_assets_rainbowcloud_jpg__WEBPACK_IMPORTED_MODULE_12__, _assets_waldo_JPG__WEBPACK_IMPORTED_MODULE_23__, _assets_iceland_jpg__WEBPACK_IMPORTED_MODULE_2__, _assets_iceland2_jpg__WEBPACK_IMPORTED_MODULE_3__, _assets_waldo2_JPG__WEBPACK_IMPORTED_MODULE_24__, _assets_iceland3_jpg__WEBPACK_IMPORTED_MODULE_4__, _assets_iceland4_jpg__WEBPACK_IMPORTED_MODULE_5__, _assets_icelandwaterfall_jpg__WEBPACK_IMPORTED_MODULE_6__, _assets_icelandwaterfall2_jpg__WEBPACK_IMPORTED_MODULE_7__, _assets_maryspeak_jpg__WEBPACK_IMPORTED_MODULE_8__, _assets_nightfog_jpg__WEBPACK_IMPORTED_MODULE_9__, _assets_qville_jpg__WEBPACK_IMPORTED_MODULE_10__, _assets_qville2_jpg__WEBPACK_IMPORTED_MODULE_11__, _assets_river_jpg__WEBPACK_IMPORTED_MODULE_13__, _assets_rogue2_jpg__WEBPACK_IMPORTED_MODULE_14__, _assets_rogue3_jpg__WEBPACK_IMPORTED_MODULE_15__, _assets_sisters_jpg__WEBPACK_IMPORTED_MODULE_16__, _assets_snowymarys_jpg__WEBPACK_IMPORTED_MODULE_17__, _assets_snowymarys2_jpg__WEBPACK_IMPORTED_MODULE_18__, _assets_sunset_jpg__WEBPACK_IMPORTED_MODULE_19__, _assets_sunset2_jpg__WEBPACK_IMPORTED_MODULE_20__, _assets_tfj_jpg__WEBPACK_IMPORTED_MODULE_21__, _assets_waterfall_jpg__WEBPACK_IMPORTED_MODULE_22__);
  _Showcase__WEBPACK_IMPORTED_MODULE_0__.photoFunctions.displayPhotoPage(page);
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/showcase.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/showcase.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".showcase-title {\n    font-size: 28px;\n    margin: 8px;\n}\n\n.showcase-container {\n    margin: 20px 0px;\n}\n\n.photos-container {\n    position: relative;\n}\n.image-container {\n    display: none;\n}\n.image-container > img {\n    width: 80vw;\n    max-width: 1000px;\n}\n\n.prev,\n.next {\n    cursor: pointer;\n    position: absolute;\n    top: 40%;\n    width: auto;\n    padding: 50px 16px;\n    margin-top: -26px;\n    color: white;\n    font-weight: bold;\n    font-size: 20px;\n    border-radius: 0 3px 3px 0;\n    user-select: none;\n    -webkit-user-select: none;\n    transition: 0.25s;\n}\n.next {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n.prev:hover,\n.next:hover {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n.number-text {\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n    font-size: 12px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/showcase.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;;IAEI,eAAe;IACf,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,0BAA0B;IAC1B,iBAAiB;IACjB,yBAAyB;IACzB,iBAAiB;AACrB;AACA;IACI,QAAQ;IACR,0BAA0B;AAC9B;AACA;;IAEI,oCAAoC;AACxC;AACA;IACI,YAAY;IACZ,oCAAoC;IACpC,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,MAAM;AACV","sourcesContent":[".showcase-title {\n    font-size: 28px;\n    margin: 8px;\n}\n\n.showcase-container {\n    margin: 20px 0px;\n}\n\n.photos-container {\n    position: relative;\n}\n.image-container {\n    display: none;\n}\n.image-container > img {\n    width: 80vw;\n    max-width: 1000px;\n}\n\n.prev,\n.next {\n    cursor: pointer;\n    position: absolute;\n    top: 40%;\n    width: auto;\n    padding: 50px 16px;\n    margin-top: -26px;\n    color: white;\n    font-weight: bold;\n    font-size: 20px;\n    border-radius: 0 3px 3px 0;\n    user-select: none;\n    -webkit-user-select: none;\n    transition: 0.25s;\n}\n.next {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n.prev:hover,\n.next:hover {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n.number-text {\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n    font-size: 12px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/showcase.css":
/*!**************************!*\
  !*** ./src/showcase.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_showcase_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./showcase.css */ "./node_modules/css-loader/dist/cjs.js!./src/showcase.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_showcase_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_showcase_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_showcase_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_showcase_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/nature/assets/iceland.jpg":
/*!***************************************!*\
  !*** ./src/nature/assets/iceland.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7403b39ce50fcd04436c.jpg";

/***/ }),

/***/ "./src/nature/assets/iceland2.jpg":
/*!****************************************!*\
  !*** ./src/nature/assets/iceland2.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fc76201d8b718f0e6a1.jpg";

/***/ }),

/***/ "./src/nature/assets/iceland3.jpg":
/*!****************************************!*\
  !*** ./src/nature/assets/iceland3.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5281b5e867a21b882c8b.jpg";

/***/ }),

/***/ "./src/nature/assets/iceland4.jpg":
/*!****************************************!*\
  !*** ./src/nature/assets/iceland4.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ca8b5de2f8f106ae4e4.jpg";

/***/ }),

/***/ "./src/nature/assets/icelandwaterfall.jpg":
/*!************************************************!*\
  !*** ./src/nature/assets/icelandwaterfall.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e86ccdb1fc3df787fc75.jpg";

/***/ }),

/***/ "./src/nature/assets/icelandwaterfall2.jpg":
/*!*************************************************!*\
  !*** ./src/nature/assets/icelandwaterfall2.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92ace9ca14a9727b913d.jpg";

/***/ }),

/***/ "./src/nature/assets/maryspeak.jpg":
/*!*****************************************!*\
  !*** ./src/nature/assets/maryspeak.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "573b7821ee295f1cfc4e.jpg";

/***/ }),

/***/ "./src/nature/assets/nightfog.jpg":
/*!****************************************!*\
  !*** ./src/nature/assets/nightfog.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc1578c2f8f5b7279563.jpg";

/***/ }),

/***/ "./src/nature/assets/qville.jpg":
/*!**************************************!*\
  !*** ./src/nature/assets/qville.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d1a73044ca018459c52.jpg";

/***/ }),

/***/ "./src/nature/assets/qville2.jpg":
/*!***************************************!*\
  !*** ./src/nature/assets/qville2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d13b775b1a9b62f3e435.jpg";

/***/ }),

/***/ "./src/nature/assets/rainbowcloud.jpg":
/*!********************************************!*\
  !*** ./src/nature/assets/rainbowcloud.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8806b3466b37842009f4.jpg";

/***/ }),

/***/ "./src/nature/assets/river.jpg":
/*!*************************************!*\
  !*** ./src/nature/assets/river.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28a80c42c02893e9e8ae.jpg";

/***/ }),

/***/ "./src/nature/assets/rogue2.jpg":
/*!**************************************!*\
  !*** ./src/nature/assets/rogue2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7a97fe6c9f9939461f7.jpg";

/***/ }),

/***/ "./src/nature/assets/rogue3.jpg":
/*!**************************************!*\
  !*** ./src/nature/assets/rogue3.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71ae704abf0117a63dda.jpg";

/***/ }),

/***/ "./src/nature/assets/sisters.jpg":
/*!***************************************!*\
  !*** ./src/nature/assets/sisters.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6a69a3d0433d777ac25.jpg";

/***/ }),

/***/ "./src/nature/assets/snowymarys.jpg":
/*!******************************************!*\
  !*** ./src/nature/assets/snowymarys.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25f72424dcaac41b7279.jpg";

/***/ }),

/***/ "./src/nature/assets/snowymarys2.jpg":
/*!*******************************************!*\
  !*** ./src/nature/assets/snowymarys2.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecb64ed1478c03c8f006.jpg";

/***/ }),

/***/ "./src/nature/assets/sunset.jpg":
/*!**************************************!*\
  !*** ./src/nature/assets/sunset.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1725895f88dd793d6ee6.jpg";

/***/ }),

/***/ "./src/nature/assets/sunset2.jpg":
/*!***************************************!*\
  !*** ./src/nature/assets/sunset2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f755ef07c41feeeb6dc2.jpg";

/***/ }),

/***/ "./src/nature/assets/tfj.jpg":
/*!***********************************!*\
  !*** ./src/nature/assets/tfj.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2bb30751ace06e0c7335.jpg";

/***/ }),

/***/ "./src/nature/assets/waldo.JPG":
/*!*************************************!*\
  !*** ./src/nature/assets/waldo.JPG ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6be5207267e677c08e4c.JPG";

/***/ }),

/***/ "./src/nature/assets/waldo2.JPG":
/*!**************************************!*\
  !*** ./src/nature/assets/waldo2.JPG ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b16b72dc0985c3008ca.JPG";

/***/ }),

/***/ "./src/nature/assets/waterfall.jpg":
/*!*****************************************!*\
  !*** ./src/nature/assets/waterfall.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7925bcde154a651ebfb3.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"./nature/index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_Footer_js-src_Header_js","src_index_css"], () => (__webpack_require__("./src/nature/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL1Nob3djYXNlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9uYXR1cmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3Nob3djYXNlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc2hvd2Nhc2UuY3NzPzE3MjMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPTU1hbmlwIH0gZnJvbSBcIi4vRE9NTWFuaXBcIjtcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IFwiLi9zaG93Y2FzZS5jc3NcIjtcblxuZnVuY3Rpb24gY3JlYXRlU2hvd2Nhc2UodGl0bGUpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIodGl0bGUpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRlbnRcIik7XG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG5cbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwidGl0bGUtY29udGFpbmVyXCIsIFwidGl0bGUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRpdGxlVGV4dCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwidGl0bGVcIiwgXCJ0aXRsZS10ZXh0XCIsIHRpdGxlKTtcblxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oY29udGVudCwgdGl0bGVDb250YWluZXIpO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGRvY3VtZW50LmJvZHksIGhlYWRlciwgY29udGVudCwgZm9vdGVyKTtcbn1cbmNvbnN0IHZpZGVvRnVuY3Rpb25zID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBfZW1iZWRWaWRlbyhzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJpRnJhbWVcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcInNob3djYXNlLXZpZGVvXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgeyB3aWR0aDogXCI1NjBcIiB9LFxuICAgICAgICAgICAgeyBoZWlnaHQ6IFwiMzE1XCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBzb3VyY2UgfSxcbiAgICAgICAgICAgIHsgZnJhbWVib3JkZXI6IFwiMFwiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWxsb3c6IFwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgYWxsb3dmdWxsc2NyZWVuOiBcIlwiIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlVmlkZW8odGl0bGUsIHNvdXJjZSkge1xuICAgICAgICBjb25zdCB2aWRlb0NvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwic2hvd2Nhc2UtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB2aWRlb1RpdGxlID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJzaG93Y2FzZS10aXRsZVwiLCB0aXRsZSk7XG4gICAgICAgIGNvbnN0IHZpZGVvID0gX2VtYmVkVmlkZW8oc291cmNlKTtcbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4odmlkZW9Db250YWluZXIsIHZpZGVvVGl0bGUsIHZpZGVvKTtcbiAgICAgICAgcmV0dXJuIHZpZGVvQ29udGFpbmVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVWaWRlb1BhZ2UoLi4udmlkZW9zKSB7XG4gICAgICAgIGxldCBwYWdlID0gW107XG4gICAgICAgIHZpZGVvcy5mb3JFYWNoKHZpZGVvID0+IHtcbiAgICAgICAgICAgIHBhZ2UucHVzaChfY3JlYXRlVmlkZW8odmlkZW8udGl0bGUsIHZpZGVvLnNvdXJjZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlWaWRlb1BhZ2UocGFnZSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjb250ZW50XCIpO1xuICAgICAgICBwYWdlLmZvckVhY2gocGFnZSA9PiB7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgY3JlYXRlVmlkZW9QYWdlLCBkaXNwbGF5VmlkZW9QYWdlIH07XG59KSgpO1xuXG5jb25zdCBwaG90b0Z1bmN0aW9ucyA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUGhvdG9QYWdlKC4uLnBob3Rvcykge1xuICAgICAgICBsZXQgcGFnZSA9IFtdO1xuICAgICAgICBwaG90b3MuZm9yRWFjaCgocGhvdG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIlwiLCBcImltYWdlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICBcIm51bWJlci10ZXh0XCIsXG4gICAgICAgICAgICAgICAgYCR7aW5kZXggKyAxfSAvICR7cGhvdG9zLmxlbmd0aH1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgcGhvdG9ncmFwaCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgcGhvdG9ncmFwaC5zcmMgPSBwaG90bztcblxuICAgICAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oY29udGFpbmVyLCBudW1iZXIsIHBob3RvZ3JhcGgpO1xuICAgICAgICAgICAgcGFnZS5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFnZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5UGhvdG9QYWdlKHBhZ2UpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgcHJldiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiaVwiLCBcInByZXZcIiwgXCJwcmV2IGZhLXNvbGlkIGZhLWFuZ2xlLWxlZnRcIik7XG4gICAgICAgIGNvbnN0IG5leHQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImlcIiwgXCJuZXh0XCIsIFwibmV4dCBmYS1zb2xpZCBmYS1hbmdsZS1yaWdodFwiKTtcbiAgICAgICAgY29uc3QgcGhvdG9Db250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIlwiLCBcInBob3Rvcy1jb250YWluZXJcIik7XG4gICAgICAgIHBhZ2UuZm9yRWFjaChwYWdlID0+IHtcbiAgICAgICAgICAgIHBob3RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4ocGhvdG9Db250YWluZXIsIHByZXYsIG5leHQpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBob3RvQ29udGFpbmVyKTtcbiAgICAgICAgX2FjdGl2YXRlUGhvdG9QYWdlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FjdGl2YXRlUGhvdG9QYWdlKCkge1xuICAgICAgICBjb25zdCBwcmV2ID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIi5wcmV2XCIpO1xuICAgICAgICBjb25zdCBuZXh0ID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIi5uZXh0XCIpO1xuXG4gICAgICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsdXNTbGlkZXMuYmluZChudWxsLCAtMSkpO1xuICAgICAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbHVzU2xpZGVzLmJpbmQobnVsbCwgMSkpO1xuXG4gICAgICAgIGxldCBzbGlkZUluZGV4ID0gMTtcbiAgICAgICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4KTtcblxuICAgICAgICBmdW5jdGlvbiBwbHVzU2xpZGVzKG4pIHtcbiAgICAgICAgICAgIHNob3dTbGlkZXMoKHNsaWRlSW5kZXggKz0gbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGxldCBzbGlkZXMgPSBET01NYW5pcC5nZXRFbGVtZW50cyhcIi5pbWFnZS1jb250YWluZXJcIik7XG4gICAgICAgICAgICBpZiAobiA+IHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuIDwgMSkge1xuICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzbGlkZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVQaG90b1BhZ2UsIGRpc3BsYXlQaG90b1BhZ2UgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGNyZWF0ZVNob3djYXNlLCB2aWRlb0Z1bmN0aW9ucywgcGhvdG9GdW5jdGlvbnMgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgeyBjcmVhdGVTaG93Y2FzZSwgcGhvdG9GdW5jdGlvbnMgfSBmcm9tIFwiLi4vU2hvd2Nhc2VcIjtcbmltcG9ydCBcIi4uL2luZGV4LmNzc1wiO1xuaW1wb3J0IGljZWxhbmQgZnJvbSBcIi4vYXNzZXRzL2ljZWxhbmQuanBnXCI7XG5pbXBvcnQgaWNlbGFuZDIgZnJvbSBcIi4vYXNzZXRzL2ljZWxhbmQyLmpwZ1wiO1xuaW1wb3J0IGljZWxhbmQzIGZyb20gXCIuL2Fzc2V0cy9pY2VsYW5kMy5qcGdcIjtcbmltcG9ydCBpY2VsYW5kNCBmcm9tIFwiLi9hc3NldHMvaWNlbGFuZDQuanBnXCI7XG5pbXBvcnQgaWNlbGFuZHdhdGVyZmFsbCBmcm9tIFwiLi9hc3NldHMvaWNlbGFuZHdhdGVyZmFsbC5qcGdcIjtcbmltcG9ydCBpY2VsYW5kd2F0ZXJmYWxsMiBmcm9tIFwiLi9hc3NldHMvaWNlbGFuZHdhdGVyZmFsbDIuanBnXCI7XG5pbXBvcnQgbWFyeXNwZWFrIGZyb20gXCIuL2Fzc2V0cy9tYXJ5c3BlYWsuanBnXCI7XG5pbXBvcnQgbmlnaHRmb2cgZnJvbSBcIi4vYXNzZXRzL25pZ2h0Zm9nLmpwZ1wiO1xuaW1wb3J0IHF2aWxsZSBmcm9tIFwiLi9hc3NldHMvcXZpbGxlLmpwZ1wiO1xuaW1wb3J0IHF2aWxsZTIgZnJvbSBcIi4vYXNzZXRzL3F2aWxsZTIuanBnXCI7XG5pbXBvcnQgcmFpbmJvd2Nsb3VkIGZyb20gXCIuL2Fzc2V0cy9yYWluYm93Y2xvdWQuanBnXCI7XG5pbXBvcnQgcml2ZXIgZnJvbSBcIi4vYXNzZXRzL3JpdmVyLmpwZ1wiO1xuaW1wb3J0IHJvZ3VlMiBmcm9tIFwiLi9hc3NldHMvcm9ndWUyLmpwZ1wiO1xuaW1wb3J0IHJvZ3VlMyBmcm9tIFwiLi9hc3NldHMvcm9ndWUzLmpwZ1wiO1xuaW1wb3J0IHNpc3RlcnMgZnJvbSBcIi4vYXNzZXRzL3Npc3RlcnMuanBnXCI7XG5pbXBvcnQgc25vd3ltYXJ5cyBmcm9tIFwiLi9hc3NldHMvc25vd3ltYXJ5cy5qcGdcIjtcbmltcG9ydCBzbm93eW1hcnlzMiBmcm9tIFwiLi9hc3NldHMvc25vd3ltYXJ5czIuanBnXCI7XG5pbXBvcnQgc3Vuc2V0IGZyb20gXCIuL2Fzc2V0cy9zdW5zZXQuanBnXCI7XG5pbXBvcnQgc3Vuc2V0MiBmcm9tIFwiLi9hc3NldHMvc3Vuc2V0Mi5qcGdcIjtcbmltcG9ydCB0ZmogZnJvbSBcIi4vYXNzZXRzL3Rmai5qcGdcIjtcbmltcG9ydCB3YXRlcmZhbGwgZnJvbSBcIi4vYXNzZXRzL3dhdGVyZmFsbC5qcGdcIjtcbmltcG9ydCB3YWxkbyBmcm9tIFwiLi9hc3NldHMvd2FsZG8uSlBHXCI7XG5pbXBvcnQgd2FsZG8yIGZyb20gXCIuL2Fzc2V0cy93YWxkbzIuSlBHXCI7XG5cbmNvbnN0IGNyZWF0ZU5hdHVyZSA9ICgoKSA9PiB7XG4gICAgY3JlYXRlU2hvd2Nhc2UoXCJOYXR1cmVcIik7XG4gICAgY29uc3QgcGFnZSA9IHBob3RvRnVuY3Rpb25zLmNyZWF0ZVBob3RvUGFnZShcbiAgICAgICAgcmFpbmJvd2Nsb3VkLFxuICAgICAgICB3YWxkbyxcbiAgICAgICAgaWNlbGFuZCxcbiAgICAgICAgaWNlbGFuZDIsXG4gICAgICAgIHdhbGRvMixcbiAgICAgICAgaWNlbGFuZDMsXG4gICAgICAgIGljZWxhbmQ0LFxuICAgICAgICBpY2VsYW5kd2F0ZXJmYWxsLFxuICAgICAgICBpY2VsYW5kd2F0ZXJmYWxsMixcbiAgICAgICAgbWFyeXNwZWFrLFxuICAgICAgICBuaWdodGZvZyxcbiAgICAgICAgcXZpbGxlLFxuICAgICAgICBxdmlsbGUyLFxuICAgICAgICByaXZlcixcbiAgICAgICAgcm9ndWUyLFxuICAgICAgICByb2d1ZTMsXG4gICAgICAgIHNpc3RlcnMsXG4gICAgICAgIHNub3d5bWFyeXMsXG4gICAgICAgIHNub3d5bWFyeXMyLFxuICAgICAgICBzdW5zZXQsXG4gICAgICAgIHN1bnNldDIsXG4gICAgICAgIHRmaixcbiAgICAgICAgd2F0ZXJmYWxsXG4gICAgKTtcblxuICAgIHBob3RvRnVuY3Rpb25zLmRpc3BsYXlQaG90b1BhZ2UocGFnZSk7XG59KSgpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2hvd2Nhc2UtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIG1hcmdpbjogOHB4O1xcbn1cXG5cXG4uc2hvd2Nhc2UtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcXG59XFxuXFxuLnBob3Rvcy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaW1hZ2UtY29udGFpbmVyID4gaW1nIHtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbn1cXG5cXG4ucHJldixcXG4ubmV4dCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHBhZGRpbmc6IDUwcHggMTZweDtcXG4gICAgbWFyZ2luLXRvcDogLTI2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuLm5leHQge1xcbiAgICByaWdodDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxufVxcbi5wcmV2OmhvdmVyLFxcbi5uZXh0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4ubnVtYmVyLXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zaG93Y2FzZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksUUFBUTtJQUNSLDBCQUEwQjtBQUM5QjtBQUNBOztJQUVJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixNQUFNO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNob3djYXNlLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBtYXJnaW46IDhweDtcXG59XFxuXFxuLnNob3djYXNlLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMjBweCAwcHg7XFxufVxcblxcbi5waG90b3MtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmltYWdlLWNvbnRhaW5lciA+IGltZyB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG59XFxuXFxuLnByZXYsXFxuLm5leHQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwYWRkaW5nOiA1MHB4IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IC0yNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcbi5uZXh0IHtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xcbn1cXG4ucHJldjpob3ZlcixcXG4ubmV4dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuLm51bWJlci10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Nob3djYXNlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hvd2Nhc2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiLi9uYXR1cmUvaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3JjX0Zvb3Rlcl9qcy1zcmNfSGVhZGVyX2pzXCIsXCJzcmNfaW5kZXhfY3NzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL25hdHVyZS9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIkRPTU1hbmlwIiwiY3JlYXRlRm9vdGVyIiwiY3JlYXRlSGVhZGVyIiwiY3JlYXRlU2hvd2Nhc2UiLCJ0aXRsZSIsImhlYWRlciIsImNvbnRlbnQiLCJtYWtlTmV3RWxlbWVudCIsImZvb3RlciIsInRpdGxlQ29udGFpbmVyIiwidGl0bGVUZXh0IiwiYXBwZW5kQ2hpbGQiLCJhcHBlbmRDaGlsZHJlbiIsImRvY3VtZW50IiwiYm9keSIsInZpZGVvRnVuY3Rpb25zIiwiX2VtYmVkVmlkZW8iLCJzb3VyY2UiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImZyYW1lYm9yZGVyIiwiYWxsb3ciLCJhbGxvd2Z1bGxzY3JlZW4iLCJfY3JlYXRlVmlkZW8iLCJ2aWRlb0NvbnRhaW5lciIsInZpZGVvVGl0bGUiLCJ2aWRlbyIsImNyZWF0ZVZpZGVvUGFnZSIsInBhZ2UiLCJ2aWRlb3MiLCJmb3JFYWNoIiwicHVzaCIsImRpc3BsYXlWaWRlb1BhZ2UiLCJnZXRFbGVtZW50IiwicGhvdG9GdW5jdGlvbnMiLCJjcmVhdGVQaG90b1BhZ2UiLCJwaG90b3MiLCJwaG90byIsImluZGV4IiwiY29udGFpbmVyIiwibnVtYmVyIiwibGVuZ3RoIiwicGhvdG9ncmFwaCIsIkltYWdlIiwiZGlzcGxheVBob3RvUGFnZSIsInByZXYiLCJuZXh0IiwicGhvdG9Db250YWluZXIiLCJfYWN0aXZhdGVQaG90b1BhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwicGx1c1NsaWRlcyIsImJpbmQiLCJzbGlkZUluZGV4Iiwic2hvd1NsaWRlcyIsIm4iLCJpIiwic2xpZGVzIiwiZ2V0RWxlbWVudHMiLCJzdHlsZSIsImRpc3BsYXkiLCJpY2VsYW5kIiwiaWNlbGFuZDIiLCJpY2VsYW5kMyIsImljZWxhbmQ0IiwiaWNlbGFuZHdhdGVyZmFsbCIsImljZWxhbmR3YXRlcmZhbGwyIiwibWFyeXNwZWFrIiwibmlnaHRmb2ciLCJxdmlsbGUiLCJxdmlsbGUyIiwicmFpbmJvd2Nsb3VkIiwicml2ZXIiLCJyb2d1ZTIiLCJyb2d1ZTMiLCJzaXN0ZXJzIiwic25vd3ltYXJ5cyIsInNub3d5bWFyeXMyIiwic3Vuc2V0Iiwic3Vuc2V0MiIsInRmaiIsIndhdGVyZmFsbCIsIndhbGRvIiwid2FsZG8yIiwiY3JlYXRlTmF0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==