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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9TaG93Y2FzZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYWR2ZW50dXJlL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcblxuZnVuY3Rpb24gY3JlYXRlU2hvd2Nhc2UodGl0bGUpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIodGl0bGUpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRlbnRcIik7XG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG5cbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwidGl0bGUtY29udGFpbmVyXCIsIFwidGl0bGUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRpdGxlVGV4dCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwidGl0bGVcIiwgXCJ0aXRsZS10ZXh0XCIsIHRpdGxlKTtcblxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oY29udGVudCwgdGl0bGVDb250YWluZXIpO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGRvY3VtZW50LmJvZHksIGhlYWRlciwgY29udGVudCwgZm9vdGVyKTtcbn1cbmNvbnN0IHZpZGVvRnVuY3Rpb25zID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBfZW1iZWRWaWRlbyhzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJpRnJhbWVcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcInNob3djYXNlLXZpZGVvXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgeyB3aWR0aDogXCI1NjBcIiB9LFxuICAgICAgICAgICAgeyBoZWlnaHQ6IFwiMzE1XCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBzb3VyY2UgfSxcbiAgICAgICAgICAgIHsgZnJhbWVib3JkZXI6IFwiMFwiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWxsb3c6IFwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgYWxsb3dmdWxsc2NyZWVuOiBcIlwiIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlVmlkZW8odGl0bGUsIHNvdXJjZSkge1xuICAgICAgICBjb25zdCB2aWRlb0NvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwic2hvd2Nhc2UtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB2aWRlb1RpdGxlID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJzaG93Y2FzZS10aXRsZVwiLCB0aXRsZSk7XG4gICAgICAgIGNvbnN0IHZpZGVvID0gX2VtYmVkVmlkZW8oc291cmNlKTtcbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4odmlkZW9Db250YWluZXIsIHZpZGVvVGl0bGUsIHZpZGVvKTtcbiAgICAgICAgcmV0dXJuIHZpZGVvQ29udGFpbmVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVWaWRlb1BhZ2UoLi4udmlkZW9zKSB7XG4gICAgICAgIGxldCBwYWdlID0gW107XG4gICAgICAgIHZpZGVvcy5mb3JFYWNoKHZpZGVvID0+IHtcbiAgICAgICAgICAgIHBhZ2UucHVzaChfY3JlYXRlVmlkZW8odmlkZW8udGl0bGUsIHZpZGVvLnNvdXJjZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlWaWRlb1BhZ2UocGFnZSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjb250ZW50XCIpO1xuICAgICAgICBwYWdlLmZvckVhY2gocGFnZSA9PiB7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgY3JlYXRlVmlkZW9QYWdlLCBkaXNwbGF5VmlkZW9QYWdlIH07XG59KSgpO1xuXG5jb25zdCBwaG90b0Z1bmN0aW9ucyA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUGhvdG9QYWdlKC4uLnBob3Rvcykge1xuICAgICAgICBsZXQgcGFnZSA9IFtdO1xuICAgICAgICBwaG90b3MuZm9yRWFjaCgocGhvdG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIlwiLCBcImltYWdlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICBcIm51bWJlci10ZXh0XCIsXG4gICAgICAgICAgICAgICAgYCR7aW5kZXggKyAxfSAvICR7cGhvdG9zLmxlbmd0aH1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgcGhvdG9ncmFwaCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgcGhvdG9ncmFwaC5zcmMgPSBwaG90bztcblxuICAgICAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oY29udGFpbmVyLCBudW1iZXIsIHBob3RvZ3JhcGgpO1xuICAgICAgICAgICAgcGFnZS5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFnZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5UGhvdG9QYWdlKHBhZ2UpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgcHJldiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiaVwiLCBcInByZXZcIiwgXCJwcmV2IGZhLXNvbGlkIGZhLWFuZ2xlLWxlZnRcIik7XG4gICAgICAgIGNvbnN0IG5leHQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImlcIiwgXCJuZXh0XCIsIFwibmV4dCBmYS1zb2xpZCBmYS1hbmdsZS1yaWdodFwiKTtcbiAgICAgICAgY29uc3QgcGhvdG9Db250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIlwiLCBcInBob3Rvcy1jb250YWluZXJcIik7XG4gICAgICAgIHBhZ2UuZm9yRWFjaChwYWdlID0+IHtcbiAgICAgICAgICAgIHBob3RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4ocGhvdG9Db250YWluZXIsIHByZXYsIG5leHQpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBob3RvQ29udGFpbmVyKTtcbiAgICAgICAgX2FjdGl2YXRlUGhvdG9QYWdlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FjdGl2YXRlUGhvdG9QYWdlKCkge1xuICAgICAgICBjb25zdCBwcmV2ID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIi5wcmV2XCIpO1xuICAgICAgICBjb25zdCBuZXh0ID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIi5uZXh0XCIpO1xuXG4gICAgICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsdXNTbGlkZXMuYmluZChudWxsLCAtMSkpO1xuICAgICAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbHVzU2xpZGVzLmJpbmQobnVsbCwgMSkpO1xuXG4gICAgICAgIGxldCBzbGlkZUluZGV4ID0gMTtcbiAgICAgICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4KTtcblxuICAgICAgICBmdW5jdGlvbiBwbHVzU2xpZGVzKG4pIHtcbiAgICAgICAgICAgIHNob3dTbGlkZXMoKHNsaWRlSW5kZXggKz0gbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGxldCBzbGlkZXMgPSBET01NYW5pcC5nZXRFbGVtZW50cyhcIi5pbWFnZS1jb250YWluZXJcIik7XG4gICAgICAgICAgICBpZiAobiA+IHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuIDwgMSkge1xuICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzbGlkZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVQaG90b1BhZ2UsIGRpc3BsYXlQaG90b1BhZ2UgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGNyZWF0ZVNob3djYXNlLCB2aWRlb0Z1bmN0aW9ucywgcGhvdG9GdW5jdGlvbnMgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgeyBjcmVhdGVTaG93Y2FzZSwgdmlkZW9GdW5jdGlvbnMgfSBmcm9tIFwiLi4vU2hvd2Nhc2VcIjtcbmltcG9ydCBcIi4uL2luZGV4LmNzc1wiO1xuXG5jb25zdCBjcmVhdGVBZHZlbnR1cmUgPSAoKCkgPT4ge1xuICAgIGNyZWF0ZVNob3djYXNlKFwiQWR2ZW50dXJlXCIpO1xuICAgIGNvbnN0IHBhZ2UgPSB2aWRlb0Z1bmN0aW9ucy5jcmVhdGVWaWRlb1BhZ2UoXG4gICAgICAgIHsgdGl0bGU6IFwiQ2FueW9uZWVyaW5nXCIsIHNvdXJjZTogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9BU3FfWHBkNUNRRVwiIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiT1NVIFJhZnQgR3VpZGUgU2Nob29sXCIsIHNvdXJjZTogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9wUFNGRGRFbGgtd1wiIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiT1NVIFdoaXRld2F0ZXIgUmVzY3VlXCIsIHNvdXJjZTogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9tRFQyQ1VhT0c3Z1wiIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiSWNlIENsaW1iaW5nIFJvYWQgVHJpcFwiLCBzb3VyY2U6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvS3ZINGxFUmxHNEVcIiB9LFxuICAgICAgICB7IHRpdGxlOiBcIk9TVSBXaWxkZXJuZXNzIFN1cnZpdmFsIENsYXNzXCIsIHNvdXJjZTogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9xNnhJbU1CM05MSVwiIH1cbiAgICApO1xuXG4gICAgdmlkZW9GdW5jdGlvbnMuZGlzcGxheVZpZGVvUGFnZShwYWdlKTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIuL2FkdmVudHVyZS9pbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJzcmNfRm9vdGVyX2pzLXNyY19IZWFkZXJfanNcIixcInNyY19pbmRleF9jc3NcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYWR2ZW50dXJlL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiRE9NTWFuaXAiLCJjcmVhdGVGb290ZXIiLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVTaG93Y2FzZSIsInRpdGxlIiwiaGVhZGVyIiwiY29udGVudCIsIm1ha2VOZXdFbGVtZW50IiwiZm9vdGVyIiwidGl0bGVDb250YWluZXIiLCJ0aXRsZVRleHQiLCJhcHBlbmRDaGlsZCIsImFwcGVuZENoaWxkcmVuIiwiZG9jdW1lbnQiLCJib2R5IiwidmlkZW9GdW5jdGlvbnMiLCJfZW1iZWRWaWRlbyIsInNvdXJjZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiZnJhbWVib3JkZXIiLCJhbGxvdyIsImFsbG93ZnVsbHNjcmVlbiIsIl9jcmVhdGVWaWRlbyIsInZpZGVvQ29udGFpbmVyIiwidmlkZW9UaXRsZSIsInZpZGVvIiwiY3JlYXRlVmlkZW9QYWdlIiwicGFnZSIsInZpZGVvcyIsImZvckVhY2giLCJwdXNoIiwiZGlzcGxheVZpZGVvUGFnZSIsImdldEVsZW1lbnQiLCJwaG90b0Z1bmN0aW9ucyIsImNyZWF0ZVBob3RvUGFnZSIsInBob3RvcyIsInBob3RvIiwiaW5kZXgiLCJjb250YWluZXIiLCJudW1iZXIiLCJsZW5ndGgiLCJwaG90b2dyYXBoIiwiSW1hZ2UiLCJkaXNwbGF5UGhvdG9QYWdlIiwicHJldiIsIm5leHQiLCJwaG90b0NvbnRhaW5lciIsIl9hY3RpdmF0ZVBob3RvUGFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbHVzU2xpZGVzIiwiYmluZCIsInNsaWRlSW5kZXgiLCJzaG93U2xpZGVzIiwibiIsImkiLCJzbGlkZXMiLCJnZXRFbGVtZW50cyIsInN0eWxlIiwiZGlzcGxheSIsImNyZWF0ZUFkdmVudHVyZSJdLCJzb3VyY2VSb290IjoiIn0=