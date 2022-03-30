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

/***/ "./src/weddings/index.js":
/*!*******************************!*\
  !*** ./src/weddings/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Showcase */ "./src/Showcase.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./src/index.css");
/* eslint-disable no-unused-vars */



var createWeddings = function () {
  (0,_Showcase__WEBPACK_IMPORTED_MODULE_0__.createShowcase)("Weddings");
  var content = document.querySelector("#content");
  var page = _Showcase__WEBPACK_IMPORTED_MODULE_0__.videoFunctions.createVideoPage({
    title: "Ben and Jess Church",
    source: "https://www.youtube.com/embed/iDwgV2nleCY"
  }, {
    title: "Jarrod and Hayley Lowe",
    source: "https://www.youtube.com/embed/BQrpmEs0p48"
  });
  page.forEach(function (page) {
    content.appendChild(page);
  });
}();

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
/******/ 			"./weddings/index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_Footer_js-src_Header_js","src_index_css"], () => (__webpack_require__("./src/weddings/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvd2VkZGluZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPTU1hbmlwIH0gZnJvbSBcIi4vRE9NTWFuaXBcIjtcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuXG5mdW5jdGlvbiBjcmVhdGVTaG93Y2FzZSh0aXRsZSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcih0aXRsZSk7XG4gICAgY29uc3QgY29udGVudCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGVudFwiKTtcbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcblxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0aXRsZS1jb250YWluZXJcIiwgXCJ0aXRsZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgdGl0bGVUZXh0ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0aXRsZVwiLCBcInRpdGxlLXRleHRcIiwgdGl0bGUpO1xuXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihjb250ZW50LCB0aXRsZUNvbnRhaW5lcik7XG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oZG9jdW1lbnQuYm9keSwgaGVhZGVyLCBjb250ZW50LCBmb290ZXIpO1xufVxuY29uc3QgdmlkZW9GdW5jdGlvbnMgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIF9lbWJlZFZpZGVvKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImlGcmFtZVwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwic2hvd2Nhc2UtdmlkZW9cIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICB7IHdpZHRoOiBcIjU2MFwiIH0sXG4gICAgICAgICAgICB7IGhlaWdodDogXCIzMTVcIiB9LFxuICAgICAgICAgICAgeyBzcmM6IHNvdXJjZSB9LFxuICAgICAgICAgICAgeyBmcmFtZWJvcmRlcjogXCIwXCIgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhbGxvdzogXCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBhbGxvd2Z1bGxzY3JlZW46IFwiXCIgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVWaWRlbyh0aXRsZSwgc291cmNlKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJzaG93Y2FzZS1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHZpZGVvVGl0bGUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIlwiLCBcInNob3djYXNlLXRpdGxlXCIsIHRpdGxlKTtcbiAgICAgICAgY29uc3QgdmlkZW8gPSBfZW1iZWRWaWRlbyhzb3VyY2UpO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbih2aWRlb0NvbnRhaW5lciwgdmlkZW9UaXRsZSwgdmlkZW8pO1xuICAgICAgICByZXR1cm4gdmlkZW9Db250YWluZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVZpZGVvUGFnZSguLi52aWRlb3MpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSBbXTtcbiAgICAgICAgdmlkZW9zLmZvckVhY2godmlkZW8gPT4ge1xuICAgICAgICAgICAgcGFnZS5wdXNoKF9jcmVhdGVWaWRlbyh2aWRlby50aXRsZSwgdmlkZW8uc291cmNlKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFnZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheVZpZGVvUGFnZShwYWdlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NvbnRlbnRcIik7XG4gICAgICAgIHBhZ2UuZm9yRWFjaChwYWdlID0+IHtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4geyBjcmVhdGVWaWRlb1BhZ2UsIGRpc3BsYXlWaWRlb1BhZ2UgfTtcbn0pKCk7XG5cbmNvbnN0IHBob3RvRnVuY3Rpb25zID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQaG90b1BhZ2UoLi4ucGhvdG9zKSB7XG4gICAgICAgIGxldCBwYWdlID0gW107XG4gICAgICAgIHBob3Rvcy5mb3JFYWNoKChwaG90bywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiaW1hZ2UtY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgIFwibnVtYmVyLXRleHRcIixcbiAgICAgICAgICAgICAgICBgJHtpbmRleCArIDF9IC8gJHtwaG90b3MubGVuZ3RofWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBwaG90b2dyYXBoID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBwaG90b2dyYXBoLnNyYyA9IHBob3RvO1xuXG4gICAgICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihjb250YWluZXIsIG51bWJlciwgcGhvdG9ncmFwaCk7XG4gICAgICAgICAgICBwYWdlLnB1c2goY29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQaG90b1BhZ2UocGFnZSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjb250ZW50XCIpO1xuICAgICAgICBjb25zdCBwcmV2ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJpXCIsIFwicHJldlwiLCBcInByZXYgZmEtc29saWQgZmEtYW5nbGUtbGVmdFwiKTtcbiAgICAgICAgY29uc3QgbmV4dCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiaVwiLCBcIm5leHRcIiwgXCJuZXh0IGZhLXNvbGlkIGZhLWFuZ2xlLXJpZ2h0XCIpO1xuICAgICAgICBjb25zdCBwaG90b0NvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwicGhvdG9zLWNvbnRhaW5lclwiKTtcbiAgICAgICAgcGFnZS5mb3JFYWNoKHBhZ2UgPT4ge1xuICAgICAgICAgICAgcGhvdG9Db250YWluZXIuYXBwZW5kQ2hpbGQocGFnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihwaG90b0NvbnRhaW5lciwgcHJldiwgbmV4dCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGhvdG9Db250YWluZXIpO1xuICAgICAgICBfYWN0aXZhdGVQaG90b1BhZ2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWN0aXZhdGVQaG90b1BhZ2UoKSB7XG4gICAgICAgIGNvbnN0IHByZXYgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiLnByZXZcIik7XG4gICAgICAgIGNvbnN0IG5leHQgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiLm5leHRcIik7XG5cbiAgICAgICAgcHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGx1c1NsaWRlcy5iaW5kKG51bGwsIC0xKSk7XG4gICAgICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsdXNTbGlkZXMuYmluZChudWxsLCAxKSk7XG5cbiAgICAgICAgbGV0IHNsaWRlSW5kZXggPSAxO1xuICAgICAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHBsdXNTbGlkZXMobikge1xuICAgICAgICAgICAgc2hvd1NsaWRlcygoc2xpZGVJbmRleCArPSBuKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzaG93U2xpZGVzKG4pIHtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgbGV0IHNsaWRlcyA9IERPTU1hbmlwLmdldEVsZW1lbnRzKFwiLmltYWdlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGlmIChuID4gc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG4gPCAxKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNsaWRlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZVBob3RvUGFnZSwgZGlzcGxheVBob3RvUGFnZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgY3JlYXRlU2hvd2Nhc2UsIHZpZGVvRnVuY3Rpb25zLCBwaG90b0Z1bmN0aW9ucyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IGNyZWF0ZVNob3djYXNlLCB2aWRlb0Z1bmN0aW9ucyB9IGZyb20gXCIuLi9TaG93Y2FzZVwiO1xuaW1wb3J0IFwiLi4vaW5kZXguY3NzXCI7XG5cbmNvbnN0IGNyZWF0ZVdlZGRpbmdzID0gKCgpID0+IHtcbiAgICBjcmVhdGVTaG93Y2FzZShcIldlZGRpbmdzXCIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCBwYWdlID0gdmlkZW9GdW5jdGlvbnMuY3JlYXRlVmlkZW9QYWdlKFxuICAgICAgICB7IHRpdGxlOiBcIkJlbiBhbmQgSmVzcyBDaHVyY2hcIiwgc291cmNlOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2lEd2dWMm5sZUNZXCIgfSxcbiAgICAgICAgeyB0aXRsZTogXCJKYXJyb2QgYW5kIEhheWxleSBMb3dlXCIsIHNvdXJjZTogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9CUXJwbUVzMHA0OFwiIH1cbiAgICApO1xuXG4gICAgcGFnZS5mb3JFYWNoKHBhZ2UgPT4ge1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UpO1xuICAgIH0pO1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi4vd2VkZGluZ3MvaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3JjX0Zvb3Rlcl9qcy1zcmNfSGVhZGVyX2pzXCIsXCJzcmNfaW5kZXhfY3NzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3dlZGRpbmdzL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiRE9NTWFuaXAiLCJjcmVhdGVGb290ZXIiLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVTaG93Y2FzZSIsInRpdGxlIiwiaGVhZGVyIiwiY29udGVudCIsIm1ha2VOZXdFbGVtZW50IiwiZm9vdGVyIiwidGl0bGVDb250YWluZXIiLCJ0aXRsZVRleHQiLCJhcHBlbmRDaGlsZCIsImFwcGVuZENoaWxkcmVuIiwiZG9jdW1lbnQiLCJib2R5IiwidmlkZW9GdW5jdGlvbnMiLCJfZW1iZWRWaWRlbyIsInNvdXJjZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiZnJhbWVib3JkZXIiLCJhbGxvdyIsImFsbG93ZnVsbHNjcmVlbiIsIl9jcmVhdGVWaWRlbyIsInZpZGVvQ29udGFpbmVyIiwidmlkZW9UaXRsZSIsInZpZGVvIiwiY3JlYXRlVmlkZW9QYWdlIiwicGFnZSIsInZpZGVvcyIsImZvckVhY2giLCJwdXNoIiwiZGlzcGxheVZpZGVvUGFnZSIsImdldEVsZW1lbnQiLCJwaG90b0Z1bmN0aW9ucyIsImNyZWF0ZVBob3RvUGFnZSIsInBob3RvcyIsInBob3RvIiwiaW5kZXgiLCJjb250YWluZXIiLCJudW1iZXIiLCJsZW5ndGgiLCJwaG90b2dyYXBoIiwiSW1hZ2UiLCJkaXNwbGF5UGhvdG9QYWdlIiwicHJldiIsIm5leHQiLCJwaG90b0NvbnRhaW5lciIsIl9hY3RpdmF0ZVBob3RvUGFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbHVzU2xpZGVzIiwiYmluZCIsInNsaWRlSW5kZXgiLCJzaG93U2xpZGVzIiwibiIsImkiLCJzbGlkZXMiLCJnZXRFbGVtZW50cyIsInN0eWxlIiwiZGlzcGxheSIsImNyZWF0ZVdlZGRpbmdzIiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=