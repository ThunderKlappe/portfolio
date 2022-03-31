/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./src/Footer.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");



 // eslint-disable-next-line no-unused-vars

var displayPage = function () {
  var header = (0,_Header__WEBPACK_IMPORTED_MODULE_2__["default"])("Tim Schley's Portfolio");
  var content = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "content");
  var footer = (0,_Footer__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var titleContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "title-container");
  var headshot = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "headshot");
  var title = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "title", "title-text", "Tim Schley - Development, Film, Photography");
  var aboutMe = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "about-me", "brief-description content-text", "Tim Schley is a listener. With a keen ear and a professional eye, Tim works with you to discover what you are looking for and what you need. With an attention to detail, he will always provide you with a product that you will be happy with.");
  var links = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "links");
  var developmentContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "development-container", "link-container");
  var developmentLabel = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "development-label", "content-text", "Web Development");
  var battleshipButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "battleship-button", "link-button", "Battleship", {
    href: "./battleship/index.html"
  });
  var weatherButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "weather-button", "link-button", "WeatherSearch", {
    href: "./weather/index.html"
  });
  var todoButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "todo-button", "link-button", "ToDo List", {
    href: "./todo/index.html"
  });
  var tictactoeButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "tictactoe-button", "link-button", "Tic-Tac-Toe", {
    href: "./tic-tac-toe/index.html"
  });
  var videoContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "video-container", "link-container");
  var videoLabel = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "video-label", "content-text", "Video Production");
  var weddingsButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "weddings-button", "link-button", "Weddings", {
    href: "./weddings/index.html"
  });
  var adventureButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "adventure-button", "link-button", "Adventure", {
    href: "./adventure/index.html"
  });
  var otherButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "other-button", "link-button", "Other", {
    href: "./other/index.html"
  });
  var photoContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "photo-container", "link-container");
  var photoLabel = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "photo-label", "content-text", "Photography");
  var natureButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "nature-button", "link-button", "Nature", {
    href: "./nature/index.html"
  });
  var astroButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "astro-button", "link-button", "Astrophotography", {
    href: "./astro/index.html"
  });
  _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(developmentContainer, developmentLabel, battleshipButton, weatherButton, todoButton, tictactoeButton);
  _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(videoContainer, videoLabel, weddingsButton, adventureButton, otherButton);
  _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(photoContainer, photoLabel, natureButton, astroButton);
  _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(links, developmentContainer, videoContainer, photoContainer);
  _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(titleContainer, headshot, title);
  _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(content, titleContainer, aboutMe, links);
  _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(document.body, header, content, footer);
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
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 			"index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_Footer_js-src_Header_js","src_index_css"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUcsV0FBVyxHQUFJLFlBQU07QUFDdkIsTUFBTUMsTUFBTSxHQUFHRixtREFBWSxDQUFDLHdCQUFELENBQTNCO0FBQ0EsTUFBTUcsT0FBTyxHQUFHTCw4REFBQSxDQUF3QixLQUF4QixFQUErQixTQUEvQixDQUFoQjtBQUNBLE1BQU1PLE1BQU0sR0FBR04sbURBQVksRUFBM0I7QUFDQSxNQUFNTyxjQUFjLEdBQUdSLDhEQUFBLENBQXdCLEtBQXhCLEVBQStCLGlCQUEvQixDQUF2QjtBQUNBLE1BQU1TLFFBQVEsR0FBR1QsOERBQUEsQ0FBd0IsS0FBeEIsRUFBK0IsVUFBL0IsQ0FBakI7QUFDQSxNQUFNVSxLQUFLLEdBQUdWLDhEQUFBLENBQ1YsS0FEVSxFQUVWLE9BRlUsRUFHVixZQUhVLEVBSVYsNkNBSlUsQ0FBZDtBQU1BLE1BQU1XLE9BQU8sR0FBR1gsOERBQUEsQ0FDWixLQURZLEVBRVosVUFGWSxFQUdaLGdDQUhZLEVBSVosa1BBSlksQ0FBaEI7QUFNQSxNQUFNWSxLQUFLLEdBQUdaLDhEQUFBLENBQXdCLEtBQXhCLEVBQStCLE9BQS9CLENBQWQ7QUFDQSxNQUFNYSxvQkFBb0IsR0FBR2IsOERBQUEsQ0FBd0IsS0FBeEIsRUFBK0IsdUJBQS9CLEVBQXdELGdCQUF4RCxDQUE3QjtBQUNBLE1BQU1jLGdCQUFnQixHQUFHZCw4REFBQSxDQUNyQixLQURxQixFQUVyQixtQkFGcUIsRUFHckIsY0FIcUIsRUFJckIsaUJBSnFCLENBQXpCO0FBTUEsTUFBTWUsZ0JBQWdCLEdBQUdmLDhEQUFBLENBQXdCLEdBQXhCLEVBQTZCLG1CQUE3QixFQUFrRCxhQUFsRCxFQUFpRSxZQUFqRSxFQUErRTtBQUNwR2dCLElBQUFBLElBQUksRUFBRTtBQUQ4RixHQUEvRSxDQUF6QjtBQUdBLE1BQU1DLGFBQWEsR0FBR2pCLDhEQUFBLENBQXdCLEdBQXhCLEVBQTZCLGdCQUE3QixFQUErQyxhQUEvQyxFQUE4RCxlQUE5RCxFQUErRTtBQUNqR2dCLElBQUFBLElBQUksRUFBRTtBQUQyRixHQUEvRSxDQUF0QjtBQUdBLE1BQU1FLFVBQVUsR0FBR2xCLDhEQUFBLENBQXdCLEdBQXhCLEVBQTZCLGFBQTdCLEVBQTRDLGFBQTVDLEVBQTJELFdBQTNELEVBQXdFO0FBQ3ZGZ0IsSUFBQUEsSUFBSSxFQUFFO0FBRGlGLEdBQXhFLENBQW5CO0FBR0EsTUFBTUcsZUFBZSxHQUFHbkIsOERBQUEsQ0FBd0IsR0FBeEIsRUFBNkIsa0JBQTdCLEVBQWlELGFBQWpELEVBQWdFLGFBQWhFLEVBQStFO0FBQ25HZ0IsSUFBQUEsSUFBSSxFQUFFO0FBRDZGLEdBQS9FLENBQXhCO0FBSUEsTUFBTUksY0FBYyxHQUFHcEIsOERBQUEsQ0FBd0IsS0FBeEIsRUFBK0IsaUJBQS9CLEVBQWtELGdCQUFsRCxDQUF2QjtBQUNBLE1BQU1xQixVQUFVLEdBQUdyQiw4REFBQSxDQUF3QixLQUF4QixFQUErQixhQUEvQixFQUE4QyxjQUE5QyxFQUE4RCxrQkFBOUQsQ0FBbkI7QUFDQSxNQUFNc0IsY0FBYyxHQUFHdEIsOERBQUEsQ0FBd0IsR0FBeEIsRUFBNkIsaUJBQTdCLEVBQWdELGFBQWhELEVBQStELFVBQS9ELEVBQTJFO0FBQzlGZ0IsSUFBQUEsSUFBSSxFQUFFO0FBRHdGLEdBQTNFLENBQXZCO0FBR0EsTUFBTU8sZUFBZSxHQUFHdkIsOERBQUEsQ0FBd0IsR0FBeEIsRUFBNkIsa0JBQTdCLEVBQWlELGFBQWpELEVBQWdFLFdBQWhFLEVBQTZFO0FBQ2pHZ0IsSUFBQUEsSUFBSSxFQUFFO0FBRDJGLEdBQTdFLENBQXhCO0FBR0EsTUFBTVEsV0FBVyxHQUFHeEIsOERBQUEsQ0FBd0IsR0FBeEIsRUFBNkIsY0FBN0IsRUFBNkMsYUFBN0MsRUFBNEQsT0FBNUQsRUFBcUU7QUFDckZnQixJQUFBQSxJQUFJLEVBQUU7QUFEK0UsR0FBckUsQ0FBcEI7QUFJQSxNQUFNUyxjQUFjLEdBQUd6Qiw4REFBQSxDQUF3QixLQUF4QixFQUErQixpQkFBL0IsRUFBa0QsZ0JBQWxELENBQXZCO0FBQ0EsTUFBTTBCLFVBQVUsR0FBRzFCLDhEQUFBLENBQXdCLEtBQXhCLEVBQStCLGFBQS9CLEVBQThDLGNBQTlDLEVBQThELGFBQTlELENBQW5CO0FBQ0EsTUFBTTJCLFlBQVksR0FBRzNCLDhEQUFBLENBQXdCLEdBQXhCLEVBQTZCLGVBQTdCLEVBQThDLGFBQTlDLEVBQTZELFFBQTdELEVBQXVFO0FBQ3hGZ0IsSUFBQUEsSUFBSSxFQUFFO0FBRGtGLEdBQXZFLENBQXJCO0FBR0EsTUFBTVksV0FBVyxHQUFHNUIsOERBQUEsQ0FBd0IsR0FBeEIsRUFBNkIsY0FBN0IsRUFBNkMsYUFBN0MsRUFBNEQsa0JBQTVELEVBQWdGO0FBQ2hHZ0IsSUFBQUEsSUFBSSxFQUFFO0FBRDBGLEdBQWhGLENBQXBCO0FBSUFoQixFQUFBQSw4REFBQSxDQUNJYSxvQkFESixFQUVJQyxnQkFGSixFQUdJQyxnQkFISixFQUlJRSxhQUpKLEVBS0lDLFVBTEosRUFNSUMsZUFOSjtBQVNBbkIsRUFBQUEsOERBQUEsQ0FBd0JvQixjQUF4QixFQUF3Q0MsVUFBeEMsRUFBb0RDLGNBQXBELEVBQW9FQyxlQUFwRSxFQUFxRkMsV0FBckY7QUFFQXhCLEVBQUFBLDhEQUFBLENBQXdCeUIsY0FBeEIsRUFBd0NDLFVBQXhDLEVBQW9EQyxZQUFwRCxFQUFrRUMsV0FBbEU7QUFFQTVCLEVBQUFBLDhEQUFBLENBQXdCWSxLQUF4QixFQUErQkMsb0JBQS9CLEVBQXFETyxjQUFyRCxFQUFxRUssY0FBckU7QUFDQXpCLEVBQUFBLDhEQUFBLENBQXdCUSxjQUF4QixFQUF3Q0MsUUFBeEMsRUFBa0RDLEtBQWxEO0FBQ0FWLEVBQUFBLDhEQUFBLENBQXdCSyxPQUF4QixFQUFpQ0csY0FBakMsRUFBaURHLE9BQWpELEVBQTBEQyxLQUExRDtBQUNBWixFQUFBQSw4REFBQSxDQUF3QjhCLFFBQVEsQ0FBQ0MsSUFBakMsRUFBdUMzQixNQUF2QyxFQUErQ0MsT0FBL0MsRUFBd0RFLE1BQXhEO0FBQ0gsQ0E3RW1CLEVBQXBCOzs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9NTWFuaXAgfSBmcm9tIFwiLi9ET01NYW5pcFwiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmNvbnN0IGRpc3BsYXlQYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoXCJUaW0gU2NobGV5J3MgUG9ydGZvbGlvXCIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRlbnRcIik7XG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInRpdGxlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBoZWFkc2hvdCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiaGVhZHNob3RcIik7XG4gICAgY29uc3QgdGl0bGUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJ0aXRsZVwiLFxuICAgICAgICBcInRpdGxlLXRleHRcIixcbiAgICAgICAgXCJUaW0gU2NobGV5IC0gRGV2ZWxvcG1lbnQsIEZpbG0sIFBob3RvZ3JhcGh5XCJcbiAgICApO1xuICAgIGNvbnN0IGFib3V0TWUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJhYm91dC1tZVwiLFxuICAgICAgICBcImJyaWVmLWRlc2NyaXB0aW9uIGNvbnRlbnQtdGV4dFwiLFxuICAgICAgICBcIlRpbSBTY2hsZXkgaXMgYSBsaXN0ZW5lci4gV2l0aCBhIGtlZW4gZWFyIGFuZCBhIHByb2Zlc3Npb25hbCBleWUsIFRpbSB3b3JrcyB3aXRoIHlvdSB0byBkaXNjb3ZlciB3aGF0IHlvdSBhcmUgbG9va2luZyBmb3IgYW5kIHdoYXQgeW91IG5lZWQuIFdpdGggYW4gYXR0ZW50aW9uIHRvIGRldGFpbCwgaGUgd2lsbCBhbHdheXMgcHJvdmlkZSB5b3Ugd2l0aCBhIHByb2R1Y3QgdGhhdCB5b3Ugd2lsbCBiZSBoYXBweSB3aXRoLlwiXG4gICAgKTtcbiAgICBjb25zdCBsaW5rcyA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwibGlua3NcIik7XG4gICAgY29uc3QgZGV2ZWxvcG1lbnRDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImRldmVsb3BtZW50LWNvbnRhaW5lclwiLCBcImxpbmstY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGRldmVsb3BtZW50TGFiZWwgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJkZXZlbG9wbWVudC1sYWJlbFwiLFxuICAgICAgICBcImNvbnRlbnQtdGV4dFwiLFxuICAgICAgICBcIldlYiBEZXZlbG9wbWVudFwiXG4gICAgKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwQnV0dG9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJhXCIsIFwiYmF0dGxlc2hpcC1idXR0b25cIiwgXCJsaW5rLWJ1dHRvblwiLCBcIkJhdHRsZXNoaXBcIiwge1xuICAgICAgICBocmVmOiBcIi4vYmF0dGxlc2hpcC9pbmRleC5odG1sXCIsXG4gICAgfSk7XG4gICAgY29uc3Qgd2VhdGhlckJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYVwiLCBcIndlYXRoZXItYnV0dG9uXCIsIFwibGluay1idXR0b25cIiwgXCJXZWF0aGVyU2VhcmNoXCIsIHtcbiAgICAgICAgaHJlZjogXCIuL3dlYXRoZXIvaW5kZXguaHRtbFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJ0b2RvLWJ1dHRvblwiLCBcImxpbmstYnV0dG9uXCIsIFwiVG9EbyBMaXN0XCIsIHtcbiAgICAgICAgaHJlZjogXCIuL3RvZG8vaW5kZXguaHRtbFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHRpY3RhY3RvZUJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYVwiLCBcInRpY3RhY3RvZS1idXR0b25cIiwgXCJsaW5rLWJ1dHRvblwiLCBcIlRpYy1UYWMtVG9lXCIsIHtcbiAgICAgICAgaHJlZjogXCIuL3RpYy10YWMtdG9lL2luZGV4Lmh0bWxcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IHZpZGVvQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ2aWRlby1jb250YWluZXJcIiwgXCJsaW5rLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB2aWRlb0xhYmVsID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ2aWRlby1sYWJlbFwiLCBcImNvbnRlbnQtdGV4dFwiLCBcIlZpZGVvIFByb2R1Y3Rpb25cIik7XG4gICAgY29uc3Qgd2VkZGluZ3NCdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJ3ZWRkaW5ncy1idXR0b25cIiwgXCJsaW5rLWJ1dHRvblwiLCBcIldlZGRpbmdzXCIsIHtcbiAgICAgICAgaHJlZjogXCIuL3dlZGRpbmdzL2luZGV4Lmh0bWxcIixcbiAgICB9KTtcbiAgICBjb25zdCBhZHZlbnR1cmVCdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJhZHZlbnR1cmUtYnV0dG9uXCIsIFwibGluay1idXR0b25cIiwgXCJBZHZlbnR1cmVcIiwge1xuICAgICAgICBocmVmOiBcIi4vYWR2ZW50dXJlL2luZGV4Lmh0bWxcIixcbiAgICB9KTtcbiAgICBjb25zdCBvdGhlckJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYVwiLCBcIm90aGVyLWJ1dHRvblwiLCBcImxpbmstYnV0dG9uXCIsIFwiT3RoZXJcIiwge1xuICAgICAgICBocmVmOiBcIi4vb3RoZXIvaW5kZXguaHRtbFwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGhvdG9Db250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInBob3RvLWNvbnRhaW5lclwiLCBcImxpbmstY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHBob3RvTGFiZWwgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInBob3RvLWxhYmVsXCIsIFwiY29udGVudC10ZXh0XCIsIFwiUGhvdG9ncmFwaHlcIik7XG4gICAgY29uc3QgbmF0dXJlQnV0dG9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJhXCIsIFwibmF0dXJlLWJ1dHRvblwiLCBcImxpbmstYnV0dG9uXCIsIFwiTmF0dXJlXCIsIHtcbiAgICAgICAgaHJlZjogXCIuL25hdHVyZS9pbmRleC5odG1sXCIsXG4gICAgfSk7XG4gICAgY29uc3QgYXN0cm9CdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJhc3Ryby1idXR0b25cIiwgXCJsaW5rLWJ1dHRvblwiLCBcIkFzdHJvcGhvdG9ncmFwaHlcIiwge1xuICAgICAgICBocmVmOiBcIi4vYXN0cm8vaW5kZXguaHRtbFwiLFxuICAgIH0pO1xuXG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oXG4gICAgICAgIGRldmVsb3BtZW50Q29udGFpbmVyLFxuICAgICAgICBkZXZlbG9wbWVudExhYmVsLFxuICAgICAgICBiYXR0bGVzaGlwQnV0dG9uLFxuICAgICAgICB3ZWF0aGVyQnV0dG9uLFxuICAgICAgICB0b2RvQnV0dG9uLFxuICAgICAgICB0aWN0YWN0b2VCdXR0b25cbiAgICApO1xuXG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4odmlkZW9Db250YWluZXIsIHZpZGVvTGFiZWwsIHdlZGRpbmdzQnV0dG9uLCBhZHZlbnR1cmVCdXR0b24sIG90aGVyQnV0dG9uKTtcblxuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKHBob3RvQ29udGFpbmVyLCBwaG90b0xhYmVsLCBuYXR1cmVCdXR0b24sIGFzdHJvQnV0dG9uKTtcblxuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGxpbmtzLCBkZXZlbG9wbWVudENvbnRhaW5lciwgdmlkZW9Db250YWluZXIsIHBob3RvQ29udGFpbmVyKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbih0aXRsZUNvbnRhaW5lciwgaGVhZHNob3QsIHRpdGxlKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihjb250ZW50LCB0aXRsZUNvbnRhaW5lciwgYWJvdXRNZSwgbGlua3MpO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGRvY3VtZW50LmJvZHksIGhlYWRlciwgY29udGVudCwgZm9vdGVyKTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInNyY19Gb290ZXJfanMtc3JjX0hlYWRlcl9qc1wiLFwic3JjX2luZGV4X2Nzc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIkRPTU1hbmlwIiwiY3JlYXRlRm9vdGVyIiwiY3JlYXRlSGVhZGVyIiwiZGlzcGxheVBhZ2UiLCJoZWFkZXIiLCJjb250ZW50IiwibWFrZU5ld0VsZW1lbnQiLCJmb290ZXIiLCJ0aXRsZUNvbnRhaW5lciIsImhlYWRzaG90IiwidGl0bGUiLCJhYm91dE1lIiwibGlua3MiLCJkZXZlbG9wbWVudENvbnRhaW5lciIsImRldmVsb3BtZW50TGFiZWwiLCJiYXR0bGVzaGlwQnV0dG9uIiwiaHJlZiIsIndlYXRoZXJCdXR0b24iLCJ0b2RvQnV0dG9uIiwidGljdGFjdG9lQnV0dG9uIiwidmlkZW9Db250YWluZXIiLCJ2aWRlb0xhYmVsIiwid2VkZGluZ3NCdXR0b24iLCJhZHZlbnR1cmVCdXR0b24iLCJvdGhlckJ1dHRvbiIsInBob3RvQ29udGFpbmVyIiwicGhvdG9MYWJlbCIsIm5hdHVyZUJ1dHRvbiIsImFzdHJvQnV0dG9uIiwiYXBwZW5kQ2hpbGRyZW4iLCJkb2N1bWVudCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9