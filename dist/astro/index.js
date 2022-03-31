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

/***/ "./src/astro/index.js":
/*!****************************!*\
  !*** ./src/astro/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Showcase */ "./src/Showcase.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./src/index.css");
/* harmony import */ var _assets_neowise_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/neowise.jpg */ "./src/astro/assets/neowise.jpg");
/* harmony import */ var _assets_hoodoo_JPG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/hoodoo.JPG */ "./src/astro/assets/hoodoo.JPG");
/* harmony import */ var _assets_hoodoo2_JPG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/hoodoo2.JPG */ "./src/astro/assets/hoodoo2.JPG");
/* harmony import */ var _assets_hoodoo3_JPG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/hoodoo3.JPG */ "./src/astro/assets/hoodoo3.JPG");
/* harmony import */ var _assets_waldo_JPG__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/waldo.JPG */ "./src/astro/assets/waldo.JPG");
/* harmony import */ var _assets_waldo2_JPG__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/waldo2.JPG */ "./src/astro/assets/waldo2.JPG");
/* eslint-disable no-unused-vars */









var createAstro = function () {
  (0,_Showcase__WEBPACK_IMPORTED_MODULE_0__.createShowcase)("Astrophotography");
  var page = _Showcase__WEBPACK_IMPORTED_MODULE_0__.photoFunctions.createPhotoPage(_assets_neowise_jpg__WEBPACK_IMPORTED_MODULE_2__, _assets_hoodoo_JPG__WEBPACK_IMPORTED_MODULE_3__, _assets_hoodoo2_JPG__WEBPACK_IMPORTED_MODULE_4__, _assets_hoodoo3_JPG__WEBPACK_IMPORTED_MODULE_5__, _assets_waldo_JPG__WEBPACK_IMPORTED_MODULE_6__, _assets_waldo2_JPG__WEBPACK_IMPORTED_MODULE_7__);
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

/***/ "./src/astro/assets/hoodoo.JPG":
/*!*************************************!*\
  !*** ./src/astro/assets/hoodoo.JPG ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73361088a409213b25df.JPG";

/***/ }),

/***/ "./src/astro/assets/hoodoo2.JPG":
/*!**************************************!*\
  !*** ./src/astro/assets/hoodoo2.JPG ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3441432e88b80523ff98.JPG";

/***/ }),

/***/ "./src/astro/assets/hoodoo3.JPG":
/*!**************************************!*\
  !*** ./src/astro/assets/hoodoo3.JPG ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7202ac552548ad3ec44d.JPG";

/***/ }),

/***/ "./src/astro/assets/neowise.jpg":
/*!**************************************!*\
  !*** ./src/astro/assets/neowise.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0677962653a669e134ea.jpg";

/***/ }),

/***/ "./src/astro/assets/waldo.JPG":
/*!************************************!*\
  !*** ./src/astro/assets/waldo.JPG ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "095211b5375d14382daf.JPG";

/***/ }),

/***/ "./src/astro/assets/waldo2.JPG":
/*!*************************************!*\
  !*** ./src/astro/assets/waldo2.JPG ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "253a0f850a877474d1bb.JPG";

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
/******/ 			"./astro/index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_Footer_js-src_Header_js","src_index_css"], () => (__webpack_require__("./src/astro/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL1Nob3djYXNlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3Ryby9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc2hvd2Nhc2UuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zaG93Y2FzZS5jc3M/MTcyMyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9NTWFuaXAgfSBmcm9tIFwiLi9ET01NYW5pcFwiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgXCIuL3Nob3djYXNlLmNzc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVTaG93Y2FzZSh0aXRsZSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcih0aXRsZSk7XG4gICAgY29uc3QgY29udGVudCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGVudFwiKTtcbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcblxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0aXRsZS1jb250YWluZXJcIiwgXCJ0aXRsZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgdGl0bGVUZXh0ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0aXRsZVwiLCBcInRpdGxlLXRleHRcIiwgdGl0bGUpO1xuXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihjb250ZW50LCB0aXRsZUNvbnRhaW5lcik7XG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oZG9jdW1lbnQuYm9keSwgaGVhZGVyLCBjb250ZW50LCBmb290ZXIpO1xufVxuY29uc3QgdmlkZW9GdW5jdGlvbnMgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIF9lbWJlZFZpZGVvKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImlGcmFtZVwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwic2hvd2Nhc2UtdmlkZW9cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICB7IHdpZHRoOiBcIjU2MFwiIH0sXG4gICAgICAgICAgICB7IGhlaWdodDogXCIzMTVcIiB9LFxuICAgICAgICAgICAgeyBzcmM6IHNvdXJjZSB9LFxuICAgICAgICAgICAgeyBmcmFtZWJvcmRlcjogXCIwXCIgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhbGxvdzogXCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBhbGxvd2Z1bGxzY3JlZW46IFwiXCIgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVWaWRlbyh0aXRsZSwgc291cmNlKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJzaG93Y2FzZS1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHZpZGVvVGl0bGUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIlwiLCBcInNob3djYXNlLXRpdGxlXCIsIHRpdGxlKTtcbiAgICAgICAgY29uc3QgdmlkZW8gPSBfZW1iZWRWaWRlbyhzb3VyY2UpO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbih2aWRlb0NvbnRhaW5lciwgdmlkZW9UaXRsZSwgdmlkZW8pO1xuICAgICAgICByZXR1cm4gdmlkZW9Db250YWluZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVZpZGVvUGFnZSguLi52aWRlb3MpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSBbXTtcbiAgICAgICAgdmlkZW9zLmZvckVhY2godmlkZW8gPT4ge1xuICAgICAgICAgICAgcGFnZS5wdXNoKF9jcmVhdGVWaWRlbyh2aWRlby50aXRsZSwgdmlkZW8uc291cmNlKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFnZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheVZpZGVvUGFnZShwYWdlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NvbnRlbnRcIik7XG4gICAgICAgIHBhZ2UuZm9yRWFjaChwYWdlID0+IHtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4geyBjcmVhdGVWaWRlb1BhZ2UsIGRpc3BsYXlWaWRlb1BhZ2UgfTtcbn0pKCk7XG5cbmNvbnN0IHBob3RvRnVuY3Rpb25zID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQaG90b1BhZ2UoLi4ucGhvdG9zKSB7XG4gICAgICAgIGxldCBwYWdlID0gW107XG4gICAgICAgIHBob3Rvcy5mb3JFYWNoKChwaG90bywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiaW1hZ2UtY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgIFwibnVtYmVyLXRleHRcIixcbiAgICAgICAgICAgICAgICBgJHtpbmRleCArIDF9IC8gJHtwaG90b3MubGVuZ3RofWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBwaG90b2dyYXBoID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBwaG90b2dyYXBoLnNyYyA9IHBob3RvO1xuXG4gICAgICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihjb250YWluZXIsIG51bWJlciwgcGhvdG9ncmFwaCk7XG4gICAgICAgICAgICBwYWdlLnB1c2goY29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQaG90b1BhZ2UocGFnZSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjb250ZW50XCIpO1xuICAgICAgICBjb25zdCBwcmV2ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJpXCIsIFwicHJldlwiLCBcInByZXYgZmEtc29saWQgZmEtYW5nbGUtbGVmdFwiKTtcbiAgICAgICAgY29uc3QgbmV4dCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiaVwiLCBcIm5leHRcIiwgXCJuZXh0IGZhLXNvbGlkIGZhLWFuZ2xlLXJpZ2h0XCIpO1xuICAgICAgICBjb25zdCBwaG90b0NvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwicGhvdG9zLWNvbnRhaW5lclwiKTtcbiAgICAgICAgcGFnZS5mb3JFYWNoKHBhZ2UgPT4ge1xuICAgICAgICAgICAgcGhvdG9Db250YWluZXIuYXBwZW5kQ2hpbGQocGFnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihwaG90b0NvbnRhaW5lciwgcHJldiwgbmV4dCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGhvdG9Db250YWluZXIpO1xuICAgICAgICBfYWN0aXZhdGVQaG90b1BhZ2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWN0aXZhdGVQaG90b1BhZ2UoKSB7XG4gICAgICAgIGNvbnN0IHByZXYgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiLnByZXZcIik7XG4gICAgICAgIGNvbnN0IG5leHQgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiLm5leHRcIik7XG5cbiAgICAgICAgcHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGx1c1NsaWRlcy5iaW5kKG51bGwsIC0xKSk7XG4gICAgICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsdXNTbGlkZXMuYmluZChudWxsLCAxKSk7XG5cbiAgICAgICAgbGV0IHNsaWRlSW5kZXggPSAxO1xuICAgICAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHBsdXNTbGlkZXMobikge1xuICAgICAgICAgICAgc2hvd1NsaWRlcygoc2xpZGVJbmRleCArPSBuKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzaG93U2xpZGVzKG4pIHtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgbGV0IHNsaWRlcyA9IERPTU1hbmlwLmdldEVsZW1lbnRzKFwiLmltYWdlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGlmIChuID4gc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG4gPCAxKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNsaWRlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZVBob3RvUGFnZSwgZGlzcGxheVBob3RvUGFnZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgY3JlYXRlU2hvd2Nhc2UsIHZpZGVvRnVuY3Rpb25zLCBwaG90b0Z1bmN0aW9ucyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IGNyZWF0ZVNob3djYXNlLCBwaG90b0Z1bmN0aW9ucyB9IGZyb20gXCIuLi9TaG93Y2FzZVwiO1xuaW1wb3J0IFwiLi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgbmVvd2lzZSBmcm9tIFwiLi9hc3NldHMvbmVvd2lzZS5qcGdcIjtcbmltcG9ydCBob29kb28gZnJvbSBcIi4vYXNzZXRzL2hvb2Rvby5KUEdcIjtcbmltcG9ydCBob29kb28yIGZyb20gXCIuL2Fzc2V0cy9ob29kb28yLkpQR1wiO1xuaW1wb3J0IGhvb2RvbzMgZnJvbSBcIi4vYXNzZXRzL2hvb2RvbzMuSlBHXCI7XG5pbXBvcnQgd2FsZG8gZnJvbSBcIi4vYXNzZXRzL3dhbGRvLkpQR1wiO1xuaW1wb3J0IHdhbGRvMiBmcm9tIFwiLi9hc3NldHMvd2FsZG8yLkpQR1wiO1xuXG5jb25zdCBjcmVhdGVBc3RybyA9ICgoKSA9PiB7XG4gICAgY3JlYXRlU2hvd2Nhc2UoXCJBc3Ryb3Bob3RvZ3JhcGh5XCIpO1xuICAgIGNvbnN0IHBhZ2UgPSBwaG90b0Z1bmN0aW9ucy5jcmVhdGVQaG90b1BhZ2UobmVvd2lzZSwgaG9vZG9vLCBob29kb28yLCBob29kb28zLCB3YWxkbywgd2FsZG8yKTtcblxuICAgIHBob3RvRnVuY3Rpb25zLmRpc3BsYXlQaG90b1BhZ2UocGFnZSk7XG59KSgpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2hvd2Nhc2UtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIG1hcmdpbjogOHB4O1xcbn1cXG5cXG4uc2hvd2Nhc2UtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcXG59XFxuXFxuLnBob3Rvcy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaW1hZ2UtY29udGFpbmVyID4gaW1nIHtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbn1cXG5cXG4ucHJldixcXG4ubmV4dCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHBhZGRpbmc6IDUwcHggMTZweDtcXG4gICAgbWFyZ2luLXRvcDogLTI2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuLm5leHQge1xcbiAgICByaWdodDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxufVxcbi5wcmV2OmhvdmVyLFxcbi5uZXh0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4ubnVtYmVyLXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zaG93Y2FzZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksUUFBUTtJQUNSLDBCQUEwQjtBQUM5QjtBQUNBOztJQUVJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixNQUFNO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNob3djYXNlLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBtYXJnaW46IDhweDtcXG59XFxuXFxuLnNob3djYXNlLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMjBweCAwcHg7XFxufVxcblxcbi5waG90b3MtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmltYWdlLWNvbnRhaW5lciA+IGltZyB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG59XFxuXFxuLnByZXYsXFxuLm5leHQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwYWRkaW5nOiA1MHB4IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IC0yNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcbi5uZXh0IHtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xcbn1cXG4ucHJldjpob3ZlcixcXG4ubmV4dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuLm51bWJlci10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Nob3djYXNlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hvd2Nhc2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiLi9hc3Ryby9pbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJzcmNfRm9vdGVyX2pzLXNyY19IZWFkZXJfanNcIixcInNyY19pbmRleF9jc3NcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXN0cm8vaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJET01NYW5pcCIsImNyZWF0ZUZvb3RlciIsImNyZWF0ZUhlYWRlciIsImNyZWF0ZVNob3djYXNlIiwidGl0bGUiLCJoZWFkZXIiLCJjb250ZW50IiwibWFrZU5ld0VsZW1lbnQiLCJmb290ZXIiLCJ0aXRsZUNvbnRhaW5lciIsInRpdGxlVGV4dCIsImFwcGVuZENoaWxkIiwiYXBwZW5kQ2hpbGRyZW4iLCJkb2N1bWVudCIsImJvZHkiLCJ2aWRlb0Z1bmN0aW9ucyIsIl9lbWJlZFZpZGVvIiwic291cmNlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJmcmFtZWJvcmRlciIsImFsbG93IiwiYWxsb3dmdWxsc2NyZWVuIiwiX2NyZWF0ZVZpZGVvIiwidmlkZW9Db250YWluZXIiLCJ2aWRlb1RpdGxlIiwidmlkZW8iLCJjcmVhdGVWaWRlb1BhZ2UiLCJwYWdlIiwidmlkZW9zIiwiZm9yRWFjaCIsInB1c2giLCJkaXNwbGF5VmlkZW9QYWdlIiwiZ2V0RWxlbWVudCIsInBob3RvRnVuY3Rpb25zIiwiY3JlYXRlUGhvdG9QYWdlIiwicGhvdG9zIiwicGhvdG8iLCJpbmRleCIsImNvbnRhaW5lciIsIm51bWJlciIsImxlbmd0aCIsInBob3RvZ3JhcGgiLCJJbWFnZSIsImRpc3BsYXlQaG90b1BhZ2UiLCJwcmV2IiwibmV4dCIsInBob3RvQ29udGFpbmVyIiwiX2FjdGl2YXRlUGhvdG9QYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsdXNTbGlkZXMiLCJiaW5kIiwic2xpZGVJbmRleCIsInNob3dTbGlkZXMiLCJuIiwiaSIsInNsaWRlcyIsImdldEVsZW1lbnRzIiwic3R5bGUiLCJkaXNwbGF5IiwibmVvd2lzZSIsImhvb2RvbyIsImhvb2RvbzIiLCJob29kb28zIiwid2FsZG8iLCJ3YWxkbzIiLCJjcmVhdGVBc3RybyJdLCJzb3VyY2VSb290IjoiIn0=