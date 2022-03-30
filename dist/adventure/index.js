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

/***/ "./src/adventure/index.js":
/*!********************************!*\
  !*** ./src/adventure/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Showcase */ "./src/Showcase.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./src/index.css");
/* eslint-disable no-unused-vars */



var createAdventure = function () {
  (0,_Showcase__WEBPACK_IMPORTED_MODULE_0__.createShowcase)("Adventure");
  var page = _Showcase__WEBPACK_IMPORTED_MODULE_0__.videoFunctions.createVideoPage({
    title: "Canyoneering",
    source: "https://www.youtube.com/embed/ASq_Xpd5CQE"
  }, {
    title: "OSU Raft Guide School",
    source: "https://www.youtube.com/embed/pPSFDdElh-w"
  }, {
    title: "OSU Whitewater Rescue",
    source: "https://www.youtube.com/embed/mDT2CUaOG7g"
  }, {
    title: "Ice Climbing Road Trip",
    source: "https://www.youtube.com/embed/KvH4lERlG4E"
  }, {
    title: "OSU Wilderness Survival Class",
    source: "https://www.youtube.com/embed/q6xImMB3NLI"
  });
  _Showcase__WEBPACK_IMPORTED_MODULE_0__.videoFunctions.displayVideoPage(page);
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
/******/ 			"./adventure/index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_Footer_js-src_Header_js","src_index_css"], () => (__webpack_require__("./src/adventure/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvU2hvd2Nhc2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2FkdmVudHVyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc2hvd2Nhc2UuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zaG93Y2FzZS5jc3M/MTcyMyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9NTWFuaXAgfSBmcm9tIFwiLi9ET01NYW5pcFwiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgXCIuL3Nob3djYXNlLmNzc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVTaG93Y2FzZSh0aXRsZSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcih0aXRsZSk7XG4gICAgY29uc3QgY29udGVudCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGVudFwiKTtcbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcblxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0aXRsZS1jb250YWluZXJcIiwgXCJ0aXRsZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgdGl0bGVUZXh0ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0aXRsZVwiLCBcInRpdGxlLXRleHRcIiwgdGl0bGUpO1xuXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihjb250ZW50LCB0aXRsZUNvbnRhaW5lcik7XG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oZG9jdW1lbnQuYm9keSwgaGVhZGVyLCBjb250ZW50LCBmb290ZXIpO1xufVxuY29uc3QgdmlkZW9GdW5jdGlvbnMgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIF9lbWJlZFZpZGVvKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImlGcmFtZVwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwic2hvd2Nhc2UtdmlkZW9cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICB7IHdpZHRoOiBcIjU2MFwiIH0sXG4gICAgICAgICAgICB7IGhlaWdodDogXCIzMTVcIiB9LFxuICAgICAgICAgICAgeyBzcmM6IHNvdXJjZSB9LFxuICAgICAgICAgICAgeyBmcmFtZWJvcmRlcjogXCIwXCIgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhbGxvdzogXCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBhbGxvd2Z1bGxzY3JlZW46IFwiXCIgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVWaWRlbyh0aXRsZSwgc291cmNlKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJzaG93Y2FzZS1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHZpZGVvVGl0bGUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIlwiLCBcInNob3djYXNlLXRpdGxlXCIsIHRpdGxlKTtcbiAgICAgICAgY29uc3QgdmlkZW8gPSBfZW1iZWRWaWRlbyhzb3VyY2UpO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbih2aWRlb0NvbnRhaW5lciwgdmlkZW9UaXRsZSwgdmlkZW8pO1xuICAgICAgICByZXR1cm4gdmlkZW9Db250YWluZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVZpZGVvUGFnZSguLi52aWRlb3MpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSBbXTtcbiAgICAgICAgdmlkZW9zLmZvckVhY2godmlkZW8gPT4ge1xuICAgICAgICAgICAgcGFnZS5wdXNoKF9jcmVhdGVWaWRlbyh2aWRlby50aXRsZSwgdmlkZW8uc291cmNlKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFnZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheVZpZGVvUGFnZShwYWdlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NvbnRlbnRcIik7XG4gICAgICAgIHBhZ2UuZm9yRWFjaChwYWdlID0+IHtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4geyBjcmVhdGVWaWRlb1BhZ2UsIGRpc3BsYXlWaWRlb1BhZ2UgfTtcbn0pKCk7XG5cbmNvbnN0IHBob3RvRnVuY3Rpb25zID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQaG90b1BhZ2UoLi4ucGhvdG9zKSB7XG4gICAgICAgIGxldCBwYWdlID0gW107XG4gICAgICAgIHBob3Rvcy5mb3JFYWNoKChwaG90bywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiaW1hZ2UtY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgIFwibnVtYmVyLXRleHRcIixcbiAgICAgICAgICAgICAgICBgJHtpbmRleCArIDF9IC8gJHtwaG90b3MubGVuZ3RofWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBwaG90b2dyYXBoID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBwaG90b2dyYXBoLnNyYyA9IHBob3RvO1xuXG4gICAgICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihjb250YWluZXIsIG51bWJlciwgcGhvdG9ncmFwaCk7XG4gICAgICAgICAgICBwYWdlLnB1c2goY29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQaG90b1BhZ2UocGFnZSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjb250ZW50XCIpO1xuICAgICAgICBjb25zdCBwcmV2ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJpXCIsIFwicHJldlwiLCBcInByZXYgZmEtc29saWQgZmEtYW5nbGUtbGVmdFwiKTtcbiAgICAgICAgY29uc3QgbmV4dCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiaVwiLCBcIm5leHRcIiwgXCJuZXh0IGZhLXNvbGlkIGZhLWFuZ2xlLXJpZ2h0XCIpO1xuICAgICAgICBjb25zdCBwaG90b0NvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwicGhvdG9zLWNvbnRhaW5lclwiKTtcbiAgICAgICAgcGFnZS5mb3JFYWNoKHBhZ2UgPT4ge1xuICAgICAgICAgICAgcGhvdG9Db250YWluZXIuYXBwZW5kQ2hpbGQocGFnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihwaG90b0NvbnRhaW5lciwgcHJldiwgbmV4dCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGhvdG9Db250YWluZXIpO1xuICAgICAgICBfYWN0aXZhdGVQaG90b1BhZ2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWN0aXZhdGVQaG90b1BhZ2UoKSB7XG4gICAgICAgIGNvbnN0IHByZXYgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiLnByZXZcIik7XG4gICAgICAgIGNvbnN0IG5leHQgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiLm5leHRcIik7XG5cbiAgICAgICAgcHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGx1c1NsaWRlcy5iaW5kKG51bGwsIC0xKSk7XG4gICAgICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsdXNTbGlkZXMuYmluZChudWxsLCAxKSk7XG5cbiAgICAgICAgbGV0IHNsaWRlSW5kZXggPSAxO1xuICAgICAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHBsdXNTbGlkZXMobikge1xuICAgICAgICAgICAgc2hvd1NsaWRlcygoc2xpZGVJbmRleCArPSBuKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzaG93U2xpZGVzKG4pIHtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgbGV0IHNsaWRlcyA9IERPTU1hbmlwLmdldEVsZW1lbnRzKFwiLmltYWdlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGlmIChuID4gc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG4gPCAxKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNsaWRlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZVBob3RvUGFnZSwgZGlzcGxheVBob3RvUGFnZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgY3JlYXRlU2hvd2Nhc2UsIHZpZGVvRnVuY3Rpb25zLCBwaG90b0Z1bmN0aW9ucyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IGNyZWF0ZVNob3djYXNlLCB2aWRlb0Z1bmN0aW9ucyB9IGZyb20gXCIuLi9TaG93Y2FzZVwiO1xuaW1wb3J0IFwiLi4vaW5kZXguY3NzXCI7XG5cbmNvbnN0IGNyZWF0ZUFkdmVudHVyZSA9ICgoKSA9PiB7XG4gICAgY3JlYXRlU2hvd2Nhc2UoXCJBZHZlbnR1cmVcIik7XG4gICAgY29uc3QgcGFnZSA9IHZpZGVvRnVuY3Rpb25zLmNyZWF0ZVZpZGVvUGFnZShcbiAgICAgICAgeyB0aXRsZTogXCJDYW55b25lZXJpbmdcIiwgc291cmNlOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0FTcV9YcGQ1Q1FFXCIgfSxcbiAgICAgICAgeyB0aXRsZTogXCJPU1UgUmFmdCBHdWlkZSBTY2hvb2xcIiwgc291cmNlOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3BQU0ZEZEVsaC13XCIgfSxcbiAgICAgICAgeyB0aXRsZTogXCJPU1UgV2hpdGV3YXRlciBSZXNjdWVcIiwgc291cmNlOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL21EVDJDVWFPRzdnXCIgfSxcbiAgICAgICAgeyB0aXRsZTogXCJJY2UgQ2xpbWJpbmcgUm9hZCBUcmlwXCIsIHNvdXJjZTogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9Ldkg0bEVSbEc0RVwiIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiT1NVIFdpbGRlcm5lc3MgU3Vydml2YWwgQ2xhc3NcIiwgc291cmNlOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3E2eEltTUIzTkxJXCIgfVxuICAgICk7XG5cbiAgICB2aWRlb0Z1bmN0aW9ucy5kaXNwbGF5VmlkZW9QYWdlKHBhZ2UpO1xufSkoKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNob3djYXNlLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBtYXJnaW46IDhweDtcXG59XFxuXFxuLnNob3djYXNlLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMjBweCAwcHg7XFxufVxcblxcbi5waG90b3MtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmltYWdlLWNvbnRhaW5lciA+IGltZyB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG59XFxuXFxuLnByZXYsXFxuLm5leHQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwYWRkaW5nOiA1MHB4IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IC0yNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcbi5uZXh0IHtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xcbn1cXG4ucHJldjpob3ZlcixcXG4ubmV4dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuLm51bWJlci10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2hvd2Nhc2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFFBQVE7SUFDUiwwQkFBMEI7QUFDOUI7QUFDQTs7SUFFSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsTUFBTTtBQUNWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zaG93Y2FzZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgbWFyZ2luOiA4cHg7XFxufVxcblxcbi5zaG93Y2FzZS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbn1cXG5cXG4ucGhvdG9zLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5pbWFnZS1jb250YWluZXIgPiBpbWcge1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxufVxcblxcbi5wcmV2LFxcbi5uZXh0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDAlO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgcGFkZGluZzogNTBweCAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMjZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG4ubmV4dCB7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXG59XFxuLnByZXY6aG92ZXIsXFxuLm5leHQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbi5udW1iZXItdGV4dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaG93Y2FzZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Nob3djYXNlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi4vYWR2ZW50dXJlL2luZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInNyY19Gb290ZXJfanMtc3JjX0hlYWRlcl9qc1wiLFwic3JjX2luZGV4X2Nzc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hZHZlbnR1cmUvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJET01NYW5pcCIsImNyZWF0ZUZvb3RlciIsImNyZWF0ZUhlYWRlciIsImNyZWF0ZVNob3djYXNlIiwidGl0bGUiLCJoZWFkZXIiLCJjb250ZW50IiwibWFrZU5ld0VsZW1lbnQiLCJmb290ZXIiLCJ0aXRsZUNvbnRhaW5lciIsInRpdGxlVGV4dCIsImFwcGVuZENoaWxkIiwiYXBwZW5kQ2hpbGRyZW4iLCJkb2N1bWVudCIsImJvZHkiLCJ2aWRlb0Z1bmN0aW9ucyIsIl9lbWJlZFZpZGVvIiwic291cmNlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJmcmFtZWJvcmRlciIsImFsbG93IiwiYWxsb3dmdWxsc2NyZWVuIiwiX2NyZWF0ZVZpZGVvIiwidmlkZW9Db250YWluZXIiLCJ2aWRlb1RpdGxlIiwidmlkZW8iLCJjcmVhdGVWaWRlb1BhZ2UiLCJwYWdlIiwidmlkZW9zIiwiZm9yRWFjaCIsInB1c2giLCJkaXNwbGF5VmlkZW9QYWdlIiwiZ2V0RWxlbWVudCIsInBob3RvRnVuY3Rpb25zIiwiY3JlYXRlUGhvdG9QYWdlIiwicGhvdG9zIiwicGhvdG8iLCJpbmRleCIsImNvbnRhaW5lciIsIm51bWJlciIsImxlbmd0aCIsInBob3RvZ3JhcGgiLCJJbWFnZSIsImRpc3BsYXlQaG90b1BhZ2UiLCJwcmV2IiwibmV4dCIsInBob3RvQ29udGFpbmVyIiwiX2FjdGl2YXRlUGhvdG9QYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsdXNTbGlkZXMiLCJiaW5kIiwic2xpZGVJbmRleCIsInNob3dTbGlkZXMiLCJuIiwiaSIsInNsaWRlcyIsImdldEVsZW1lbnRzIiwic3R5bGUiLCJkaXNwbGF5IiwiY3JlYXRlQWR2ZW50dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==