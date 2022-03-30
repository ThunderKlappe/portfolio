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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvU2hvd2Nhc2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2FkdmVudHVyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9NTWFuaXAgfSBmcm9tIFwiLi9ET01NYW5pcFwiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNob3djYXNlKHRpdGxlKSB7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKHRpdGxlKTtcbiAgICBjb25zdCBjb250ZW50ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInRpdGxlLWNvbnRhaW5lclwiLCBcInRpdGxlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0aXRsZVRleHQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInRpdGxlXCIsIFwidGl0bGUtdGV4dFwiLCB0aXRsZSk7XG5cbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGNvbnRlbnQsIHRpdGxlQ29udGFpbmVyKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihkb2N1bWVudC5ib2R5LCBoZWFkZXIsIGNvbnRlbnQsIGZvb3Rlcik7XG59XG5jb25zdCB2aWRlb0Z1bmN0aW9ucyA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gX2VtYmVkVmlkZW8oc291cmNlKSB7XG4gICAgICAgIHJldHVybiBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiaUZyYW1lXCIsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJzaG93Y2FzZS12aWRlb1wiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIHsgd2lkdGg6IFwiNTYwXCIgfSxcbiAgICAgICAgICAgIHsgaGVpZ2h0OiBcIjMxNVwiIH0sXG4gICAgICAgICAgICB7IHNyYzogc291cmNlIH0sXG4gICAgICAgICAgICB7IGZyYW1lYm9yZGVyOiBcIjBcIiB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFsbG93OiBcImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGFsbG93ZnVsbHNjcmVlbjogXCJcIiB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZVZpZGVvKHRpdGxlLCBzb3VyY2UpIHtcbiAgICAgICAgY29uc3QgdmlkZW9Db250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIlwiLCBcInNob3djYXNlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgdmlkZW9UaXRsZSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwic2hvd2Nhc2UtdGl0bGVcIiwgdGl0bGUpO1xuICAgICAgICBjb25zdCB2aWRlbyA9IF9lbWJlZFZpZGVvKHNvdXJjZSk7XG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKHZpZGVvQ29udGFpbmVyLCB2aWRlb1RpdGxlLCB2aWRlbyk7XG4gICAgICAgIHJldHVybiB2aWRlb0NvbnRhaW5lcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlVmlkZW9QYWdlKC4uLnZpZGVvcykge1xuICAgICAgICBsZXQgcGFnZSA9IFtdO1xuICAgICAgICB2aWRlb3MuZm9yRWFjaCh2aWRlbyA9PiB7XG4gICAgICAgICAgICBwYWdlLnB1c2goX2NyZWF0ZVZpZGVvKHZpZGVvLnRpdGxlLCB2aWRlby5zb3VyY2UpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNwbGF5VmlkZW9QYWdlKHBhZ2UpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjY29udGVudFwiKTtcbiAgICAgICAgcGFnZS5mb3JFYWNoKHBhZ2UgPT4ge1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7IGNyZWF0ZVZpZGVvUGFnZSwgZGlzcGxheVZpZGVvUGFnZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgY3JlYXRlU2hvd2Nhc2UsIHZpZGVvRnVuY3Rpb25zIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgY3JlYXRlU2hvd2Nhc2UsIHZpZGVvRnVuY3Rpb25zIH0gZnJvbSBcIi4uL1Nob3djYXNlXCI7XG5pbXBvcnQgXCIuLi9pbmRleC5jc3NcIjtcblxuY29uc3QgY3JlYXRlQWR2ZW50dXJlID0gKCgpID0+IHtcbiAgICBjcmVhdGVTaG93Y2FzZShcIkFkdmVudHVyZVwiKTtcbiAgICBjb25zdCBwYWdlID0gdmlkZW9GdW5jdGlvbnMuY3JlYXRlVmlkZW9QYWdlKFxuICAgICAgICB7IHRpdGxlOiBcIkNhbnlvbmVlcmluZ1wiLCBzb3VyY2U6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvQVNxX1hwZDVDUUVcIiB9LFxuICAgICAgICB7IHRpdGxlOiBcIk9TVSBSYWZ0IEd1aWRlIFNjaG9vbFwiLCBzb3VyY2U6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvcFBTRkRkRWxoLXdcIiB9LFxuICAgICAgICB7IHRpdGxlOiBcIk9TVSBXaGl0ZXdhdGVyIFJlc2N1ZVwiLCBzb3VyY2U6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvbURUMkNVYU9HN2dcIiB9LFxuICAgICAgICB7IHRpdGxlOiBcIkljZSBDbGltYmluZyBSb2FkIFRyaXBcIiwgc291cmNlOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0t2SDRsRVJsRzRFXCIgfSxcbiAgICAgICAgeyB0aXRsZTogXCJPU1UgV2lsZGVybmVzcyBTdXJ2aXZhbCBDbGFzc1wiLCBzb3VyY2U6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvcTZ4SW1NQjNOTElcIiB9XG4gICAgKTtcblxuICAgIHZpZGVvRnVuY3Rpb25zLmRpc3BsYXlWaWRlb1BhZ2UocGFnZSk7XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiLi9hZHZlbnR1cmUvaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3JjX0Zvb3Rlcl9qcy1zcmNfSGVhZGVyX2pzXCIsXCJzcmNfaW5kZXhfY3NzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FkdmVudHVyZS9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIkRPTU1hbmlwIiwiY3JlYXRlRm9vdGVyIiwiY3JlYXRlSGVhZGVyIiwiY3JlYXRlU2hvd2Nhc2UiLCJ0aXRsZSIsImhlYWRlciIsImNvbnRlbnQiLCJtYWtlTmV3RWxlbWVudCIsImZvb3RlciIsInRpdGxlQ29udGFpbmVyIiwidGl0bGVUZXh0IiwiYXBwZW5kQ2hpbGQiLCJhcHBlbmRDaGlsZHJlbiIsImRvY3VtZW50IiwiYm9keSIsInZpZGVvRnVuY3Rpb25zIiwiX2VtYmVkVmlkZW8iLCJzb3VyY2UiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImZyYW1lYm9yZGVyIiwiYWxsb3ciLCJhbGxvd2Z1bGxzY3JlZW4iLCJfY3JlYXRlVmlkZW8iLCJ2aWRlb0NvbnRhaW5lciIsInZpZGVvVGl0bGUiLCJ2aWRlbyIsImNyZWF0ZVZpZGVvUGFnZSIsInBhZ2UiLCJ2aWRlb3MiLCJmb3JFYWNoIiwicHVzaCIsImRpc3BsYXlWaWRlb1BhZ2UiLCJnZXRFbGVtZW50IiwiY3JlYXRlQWR2ZW50dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==