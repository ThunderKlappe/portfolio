"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_Header_js"],{

/***/ "./src/DOMManip.js":
/*!*************************!*\
  !*** ./src/DOMManip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMManip": () => (/* binding */ DOMManip)
/* harmony export */ });
var DOMManip = function () {
  //shorthand to get elements easier
  var getElement = function getElement(selector) {
    return document.querySelector(selector);
  };

  var getElements = function getElements(selector) {
    return document.querySelectorAll(selector);
  }; //shorthand to make a new element and add attributes to it


  var makeNewElement = function makeNewElement(type) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var HTMLClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    var newElem = document.createElement(type);

    if (id != "") {
      newElem.setAttribute("id", id);
    }

    if (HTMLClass != "") {
      newElem.setAttribute("class", HTMLClass);
    }

    newElem.textContent = text;

    for (var _len = arguments.length, attributes = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      attributes[_key - 4] = arguments[_key];
    }

    if (attributes.length > 0) {
      attributes.forEach(function (att) {
        return newElem.setAttribute(Object.keys(att)[0], att[Object.keys(att)]);
      });
    }

    return newElem;
  }; //adds all of the DOM elements to a parent


  var appendChildren = function appendChildren(parent) {
    for (var _len2 = arguments.length, children = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      children[_key2 - 1] = arguments[_key2];
    }

    children.forEach(function (child) {
      return parent.appendChild(child);
    });
  }; //inserts a DOM element after another element


  var insertAfter = function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }; //clears out all child nodes of an element, skips as many elements as requested


  var removeAllChildren = function removeAllChildren(element) {
    var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    for (var i = element.childNodes.length; i > skip; i--) {
      element.childNodes[i - 1].remove();
    }
  };

  return {
    getElement: getElement,
    getElements: getElements,
    makeNewElement: makeNewElement,
    appendChildren: appendChildren,
    insertAfter: insertAfter,
    removeAllChildren: removeAllChildren
  };
}();

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.css */ "./src/header.css");


function createHeader(title) {
  var headerBar = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "header", "header");
  var headerTitle = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "header-title", "header-title", title);
  var headerLinkContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "header-link-container");
  var headerDevContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "header-dev-container", "header-container", "Development");
  var headerVideoContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "header-video-container", "header-container", "Video");
  var headerPhotoContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "header-photo-container", "header-container", "Photography");
  var headerAbout = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "header-about", "header-container", "About Me", {
    href: "./about/index.html"
  });
  _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(headerLinkContainer, headerDevContainer, headerVideoContainer, headerPhotoContainer, headerAbout);
  _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(headerBar, headerTitle, headerLinkContainer); // eslint-disable-next-line no-unused-vars

  var _activateHeader = function () {
    headerDevContainer.addEventListener("mouseover", hoverOn);
    headerVideoContainer.addEventListener("mouseover", hoverOn);
    headerPhotoContainer.addEventListener("mouseover", hoverOn);
    headerDevContainer.addEventListener("mouseleave", hoverOff);
    headerVideoContainer.addEventListener("mouseleave", hoverOff);
    headerPhotoContainer.addEventListener("mouseleave", hoverOff);
    headerDevContainer.addEventListener("click", showDev);
    headerVideoContainer.addEventListener("click", showVideo);
    headerPhotoContainer.addEventListener("click", showPhoto);
  }();

  function hoverOn(e) {
    e.target.classList.add("hover");
  }

  function hoverOff(e) {
    e.target.classList.remove("hover");

    if (e.target.childNodes.length > 1) {
      _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.removeAllChildren(e.currentTarget, 1);
    }
  }

  function showDev(e) {
    var devMenu = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "dev-menu", "header-menu");
    var battleship = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "header-battleship", "header-link", "Battleship", {
      href: "./battleship/index.html"
    });
    var weather = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "header-weather", "header-link", "WeatherSearch", {
      href: "./weather/index.html"
    });
    var todo = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "header-todo", "header-link", "ToDo List", {
      href: "./todo/index.html"
    });
    var tictactoe = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "header-tictactoe", "header-link", "Tic-Tac-Toe", {
      href: "./tic-tac-toe/index.html"
    });
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(devMenu, battleship, weather, todo, tictactoe);
    e.currentTarget.appendChild(devMenu);
  }

  function showVideo(e) {
    var videoMenu = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "video-menu", "header-menu");
    var weddings = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "header-weddings", "header-link", "Weddings", {
      href: "./weddings/index.html"
    });
    var adventure = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "header-adventure", "header-link", "Adventure", {
      href: "./adventure/index.html"
    });
    var other = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "header-other", "header-link", "Other", {
      href: "./other/index.html"
    });
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(videoMenu, weddings, adventure, other);
    e.currentTarget.appendChild(videoMenu);
  }

  function showPhoto(e) {
    var photoMenu = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "photo-menu", "header-menu");
    var nature = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "header-nature", "header-link", "Nature", {
      href: "./nature/index.html"
    });
    var astro = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "header-astro", "header-link", "Astrophotography", {
      href: "./astro/index.html"
    });
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(photoMenu, nature, astro);
    e.currentTarget.appendChild(photoMenu);
  }

  return headerBar;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/header.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/header.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "#header {\n    height: 72px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 3;\n}\n#header-title {\n    margin-left: 60px;\n    font-size: 32px;\n    font-weight: 900;\n    color: inherit;\n}\n#header-link-container {\n    display: flex;\n    height: 100%;\n    align-items: flex-end;\n    background-color: inherit;\n    color: inherit;\n}\n.header-container {\n    font-size: 20px;\n    padding: 10px 10px;\n    cursor: pointer;\n    border-radius: 20px 20px 0px 0px;\n    background-color: inherit;\n    transition: 0.25s;\n    color: inherit;\n    text-decoration: none;\n}\n.header-container.hover {\n    filter: brightness(70%);\n}\n.header-menu {\n    position: fixed;\n    background-color: inherit;\n    min-width: inherit;\n    padding: 0px 10px;\n    left: 0;\n    top: 44px;\n    display: flex;\n    flex-direction: column;\n    border-radius: 0px 0px 10px 10px;\n    color: inherit;\n}\n.header-link {\n    padding: 3px 10px;\n    color: inherit;\n    text-decoration: none;\n}\n.header-link:hover {\n    text-decoration: underline;\n}\n#header-about {\n    font-weight: bold;\n}\n#header-about:hover {\n    text-decoration: underline;\n}\n", "",{"version":3,"sources":["webpack://./src/header.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,MAAM;IACN,WAAW;IACX,UAAU;AACd;AACA;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,aAAa;IACb,YAAY;IACZ,qBAAqB;IACrB,yBAAyB;IACzB,cAAc;AAClB;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,gCAAgC;IAChC,yBAAyB;IACzB,iBAAiB;IACjB,cAAc;IACd,qBAAqB;AACzB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,iBAAiB;IACjB,OAAO;IACP,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,gCAAgC;IAChC,cAAc;AAClB;AACA;IACI,iBAAiB;IACjB,cAAc;IACd,qBAAqB;AACzB;AACA;IACI,0BAA0B;AAC9B;AACA;IACI,iBAAiB;AACrB;AACA;IACI,0BAA0B;AAC9B","sourcesContent":["#header {\n    height: 72px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 3;\n}\n#header-title {\n    margin-left: 60px;\n    font-size: 32px;\n    font-weight: 900;\n    color: inherit;\n}\n#header-link-container {\n    display: flex;\n    height: 100%;\n    align-items: flex-end;\n    background-color: inherit;\n    color: inherit;\n}\n.header-container {\n    font-size: 20px;\n    padding: 10px 10px;\n    cursor: pointer;\n    border-radius: 20px 20px 0px 0px;\n    background-color: inherit;\n    transition: 0.25s;\n    color: inherit;\n    text-decoration: none;\n}\n.header-container.hover {\n    filter: brightness(70%);\n}\n.header-menu {\n    position: fixed;\n    background-color: inherit;\n    min-width: inherit;\n    padding: 0px 10px;\n    left: 0;\n    top: 44px;\n    display: flex;\n    flex-direction: column;\n    border-radius: 0px 0px 10px 10px;\n    color: inherit;\n}\n.header-link {\n    padding: 3px 10px;\n    color: inherit;\n    text-decoration: none;\n}\n.header-link:hover {\n    text-decoration: underline;\n}\n#header-about {\n    font-weight: bold;\n}\n#header-about:hover {\n    text-decoration: underline;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/header.css":
/*!************************!*\
  !*** ./src/header.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksbUNBQW1DLG1CQUFtQixvQkFBb0IsMEJBQTBCLHFDQUFxQyxzQkFBc0IsYUFBYSxrQkFBa0IsaUJBQWlCLEdBQUcsaUJBQWlCLHdCQUF3QixzQkFBc0IsdUJBQXVCLHFCQUFxQixHQUFHLDBCQUEwQixvQkFBb0IsbUJBQW1CLDRCQUE0QixnQ0FBZ0MscUJBQXFCLEdBQUcscUJBQXFCLHNCQUFzQix5QkFBeUIsc0JBQXNCLHVDQUF1QyxnQ0FBZ0Msd0JBQXdCLHFCQUFxQiw0QkFBNEIsR0FBRywyQkFBMkIsOEJBQThCLEdBQUcsZ0JBQWdCLHNCQUFzQixnQ0FBZ0MseUJBQXlCLHdCQUF3QixjQUFjLGdCQUFnQixvQkFBb0IsNkJBQTZCLHVDQUF1QyxxQkFBcUIsR0FBRyxnQkFBZ0Isd0JBQXdCLHFCQUFxQiw0QkFBNEIsR0FBRyxzQkFBc0IsaUNBQWlDLEdBQUcsaUJBQWlCLHdCQUF3QixHQUFHLHVCQUF1QixpQ0FBaUMsR0FBRyxxQkFBcUI7QUFDanNHO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnZDLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL0RPTU1hbmlwLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2hlYWRlci5jc3M/YWIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRE9NTWFuaXAgPSAoKCkgPT4ge1xuICAgIC8vc2hvcnRoYW5kIHRvIGdldCBlbGVtZW50cyBlYXNpZXJcbiAgICBjb25zdCBnZXRFbGVtZW50ID0gc2VsZWN0b3IgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29uc3QgZ2V0RWxlbWVudHMgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIC8vc2hvcnRoYW5kIHRvIG1ha2UgYSBuZXcgZWxlbWVudCBhbmQgYWRkIGF0dHJpYnV0ZXMgdG8gaXRcbiAgICBjb25zdCBtYWtlTmV3RWxlbWVudCA9ICh0eXBlLCBpZCA9IFwiXCIsIEhUTUxDbGFzcyA9IFwiXCIsIHRleHQgPSBcIlwiLCAuLi5hdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBpZiAoaWQgIT0gXCJcIikge1xuICAgICAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEhUTUxDbGFzcyAhPSBcIlwiKSB7XG4gICAgICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIEhUTUxDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RWxlbS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHQgPT4gbmV3RWxlbS5zZXRBdHRyaWJ1dGUoT2JqZWN0LmtleXMoYXR0KVswXSwgYXR0W09iamVjdC5rZXlzKGF0dCldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3RWxlbTtcbiAgICB9O1xuXG4gICAgLy9hZGRzIGFsbCBvZiB0aGUgRE9NIGVsZW1lbnRzIHRvIGEgcGFyZW50XG4gICAgY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSAocGFyZW50LCAuLi5jaGlsZHJlbikgPT4ge1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICAgIH07XG5cbiAgICAvL2luc2VydHMgYSBET00gZWxlbWVudCBhZnRlciBhbm90aGVyIGVsZW1lbnRcbiAgICBjb25zdCBpbnNlcnRBZnRlciA9IChuZXdOb2RlLCBleGlzdGluZ05vZGUpID0+IHtcbiAgICAgICAgZXhpc3RpbmdOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIGV4aXN0aW5nTm9kZS5uZXh0U2libGluZyk7XG4gICAgfTtcblxuICAgIC8vY2xlYXJzIG91dCBhbGwgY2hpbGQgbm9kZXMgb2YgYW4gZWxlbWVudCwgc2tpcHMgYXMgbWFueSBlbGVtZW50cyBhcyByZXF1ZXN0ZWRcbiAgICBjb25zdCByZW1vdmVBbGxDaGlsZHJlbiA9IChlbGVtZW50LCBza2lwID0gMCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaSA+IHNraXA7IGktLSkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzW2kgLSAxXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRFbGVtZW50LCBnZXRFbGVtZW50cywgbWFrZU5ld0VsZW1lbnQsIGFwcGVuZENoaWxkcmVuLCBpbnNlcnRBZnRlciwgcmVtb3ZlQWxsQ2hpbGRyZW4gfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5pbXBvcnQgXCIuL2hlYWRlci5jc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcih0aXRsZSkge1xuICAgIGNvbnN0IGhlYWRlckJhciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGhlYWRlclRpdGxlID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXItdGl0bGVcIiwgXCJoZWFkZXItdGl0bGVcIiwgdGl0bGUpO1xuICAgIGNvbnN0IGhlYWRlckxpbmtDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImhlYWRlci1saW5rLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBoZWFkZXJEZXZDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJoZWFkZXItZGV2LWNvbnRhaW5lclwiLFxuICAgICAgICBcImhlYWRlci1jb250YWluZXJcIixcbiAgICAgICAgXCJEZXZlbG9wbWVudFwiXG4gICAgKTtcbiAgICBjb25zdCBoZWFkZXJWaWRlb0NvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImhlYWRlci12aWRlby1jb250YWluZXJcIixcbiAgICAgICAgXCJoZWFkZXItY29udGFpbmVyXCIsXG4gICAgICAgIFwiVmlkZW9cIlxuICAgICk7XG4gICAgY29uc3QgaGVhZGVyUGhvdG9Db250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJoZWFkZXItcGhvdG8tY29udGFpbmVyXCIsXG4gICAgICAgIFwiaGVhZGVyLWNvbnRhaW5lclwiLFxuICAgICAgICBcIlBob3RvZ3JhcGh5XCJcbiAgICApO1xuICAgIGNvbnN0IGhlYWRlckFib3V0ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJhXCIsIFwiaGVhZGVyLWFib3V0XCIsIFwiaGVhZGVyLWNvbnRhaW5lclwiLCBcIkFib3V0IE1lXCIsIHtcbiAgICAgICAgaHJlZjogXCIuL2Fib3V0L2luZGV4Lmh0bWxcIixcbiAgICB9KTtcblxuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKFxuICAgICAgICBoZWFkZXJMaW5rQ29udGFpbmVyLFxuICAgICAgICBoZWFkZXJEZXZDb250YWluZXIsXG4gICAgICAgIGhlYWRlclZpZGVvQ29udGFpbmVyLFxuICAgICAgICBoZWFkZXJQaG90b0NvbnRhaW5lcixcbiAgICAgICAgaGVhZGVyQWJvdXRcbiAgICApO1xuXG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oaGVhZGVyQmFyLCBoZWFkZXJUaXRsZSwgaGVhZGVyTGlua0NvbnRhaW5lcik7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBjb25zdCBfYWN0aXZhdGVIZWFkZXIgPSAoKCkgPT4ge1xuICAgICAgICBoZWFkZXJEZXZDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBob3Zlck9uKTtcbiAgICAgICAgaGVhZGVyVmlkZW9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBob3Zlck9uKTtcbiAgICAgICAgaGVhZGVyUGhvdG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBob3Zlck9uKTtcbiAgICAgICAgaGVhZGVyRGV2Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhvdmVyT2ZmKTtcbiAgICAgICAgaGVhZGVyVmlkZW9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaG92ZXJPZmYpO1xuICAgICAgICBoZWFkZXJQaG90b0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBob3Zlck9mZik7XG5cbiAgICAgICAgaGVhZGVyRGV2Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93RGV2KTtcbiAgICAgICAgaGVhZGVyVmlkZW9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dWaWRlbyk7XG4gICAgICAgIGhlYWRlclBob3RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UGhvdG8pO1xuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiBob3Zlck9uKGUpIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBob3Zlck9mZihlKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgRE9NTWFuaXAucmVtb3ZlQWxsQ2hpbGRyZW4oZS5jdXJyZW50VGFyZ2V0LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dEZXYoZSkge1xuICAgICAgICBjb25zdCBkZXZNZW51ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJkZXYtbWVudVwiLCBcImhlYWRlci1tZW51XCIpO1xuICAgICAgICBjb25zdCBiYXR0bGVzaGlwID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJhXCIsIFwiaGVhZGVyLWJhdHRsZXNoaXBcIiwgXCJoZWFkZXItbGlua1wiLCBcIkJhdHRsZXNoaXBcIiwge1xuICAgICAgICAgICAgaHJlZjogXCIuL2JhdHRsZXNoaXAvaW5kZXguaHRtbFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYVwiLCBcImhlYWRlci13ZWF0aGVyXCIsIFwiaGVhZGVyLWxpbmtcIiwgXCJXZWF0aGVyU2VhcmNoXCIsIHtcbiAgICAgICAgICAgIGhyZWY6IFwiLi93ZWF0aGVyL2luZGV4Lmh0bWxcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJoZWFkZXItdG9kb1wiLCBcImhlYWRlci1saW5rXCIsIFwiVG9EbyBMaXN0XCIsIHtcbiAgICAgICAgICAgIGhyZWY6IFwiLi90b2RvL2luZGV4Lmh0bWxcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRpY3RhY3RvZSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYVwiLCBcImhlYWRlci10aWN0YWN0b2VcIiwgXCJoZWFkZXItbGlua1wiLCBcIlRpYy1UYWMtVG9lXCIsIHtcbiAgICAgICAgICAgIGhyZWY6IFwiLi90aWMtdGFjLXRvZS9pbmRleC5odG1sXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGRldk1lbnUsIGJhdHRsZXNoaXAsIHdlYXRoZXIsIHRvZG8sIHRpY3RhY3RvZSk7XG5cbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRldk1lbnUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzaG93VmlkZW8oZSkge1xuICAgICAgICBjb25zdCB2aWRlb01lbnUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInZpZGVvLW1lbnVcIiwgXCJoZWFkZXItbWVudVwiKTtcbiAgICAgICAgY29uc3Qgd2VkZGluZ3MgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJoZWFkZXItd2VkZGluZ3NcIiwgXCJoZWFkZXItbGlua1wiLCBcIldlZGRpbmdzXCIsIHtcbiAgICAgICAgICAgIGhyZWY6IFwiLi93ZWRkaW5ncy9pbmRleC5odG1sXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBhZHZlbnR1cmUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJoZWFkZXItYWR2ZW50dXJlXCIsIFwiaGVhZGVyLWxpbmtcIiwgXCJBZHZlbnR1cmVcIiwge1xuICAgICAgICAgICAgaHJlZjogXCIuL2FkdmVudHVyZS9pbmRleC5odG1sXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvdGhlciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYVwiLCBcImhlYWRlci1vdGhlclwiLCBcImhlYWRlci1saW5rXCIsIFwiT3RoZXJcIiwge1xuICAgICAgICAgICAgaHJlZjogXCIuL290aGVyL2luZGV4Lmh0bWxcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4odmlkZW9NZW51LCB3ZWRkaW5ncywgYWR2ZW50dXJlLCBvdGhlcik7XG5cbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmFwcGVuZENoaWxkKHZpZGVvTWVudSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNob3dQaG90byhlKSB7XG4gICAgICAgIGNvbnN0IHBob3RvTWVudSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwicGhvdG8tbWVudVwiLCBcImhlYWRlci1tZW51XCIpO1xuICAgICAgICBjb25zdCBuYXR1cmUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJoZWFkZXItbmF0dXJlXCIsIFwiaGVhZGVyLWxpbmtcIiwgXCJOYXR1cmVcIiwge1xuICAgICAgICAgICAgaHJlZjogXCIuL25hdHVyZS9pbmRleC5odG1sXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBhc3RybyA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYVwiLCBcImhlYWRlci1hc3Ryb1wiLCBcImhlYWRlci1saW5rXCIsIFwiQXN0cm9waG90b2dyYXBoeVwiLCB7XG4gICAgICAgICAgICBocmVmOiBcIi4vYXN0cm8vaW5kZXguaHRtbFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihwaG90b01lbnUsIG5hdHVyZSwgYXN0cm8pO1xuXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5hcHBlbmRDaGlsZChwaG90b01lbnUpO1xuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJCYXI7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG4jaGVhZGVyLXRpdGxlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcbiNoZWFkZXItbGluay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uaGVhZGVyLWNvbnRhaW5lci5ob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xcbn1cXG4uaGVhZGVyLW1lbnUge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIG1pbi13aWR0aDogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogNDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4uaGVhZGVyLWxpbmsge1xcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmhlYWRlci1saW5rOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbiNoZWFkZXItYWJvdXQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI2hlYWRlci1hYm91dDpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsTUFBTTtJQUNOLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsU0FBUztJQUNULGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG4jaGVhZGVyLXRpdGxlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcbiNoZWFkZXItbGluay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uaGVhZGVyLWNvbnRhaW5lci5ob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xcbn1cXG4uaGVhZGVyLW1lbnUge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIG1pbi13aWR0aDogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogNDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4uaGVhZGVyLWxpbmsge1xcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmhlYWRlci1saW5rOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbiNoZWFkZXItYWJvdXQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI2hlYWRlci1hYm91dDpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiRE9NTWFuaXAiLCJnZXRFbGVtZW50Iiwic2VsZWN0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYWtlTmV3RWxlbWVudCIsInR5cGUiLCJpZCIsIkhUTUxDbGFzcyIsInRleHQiLCJuZXdFbGVtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiYXR0cmlidXRlcyIsImxlbmd0aCIsImZvckVhY2giLCJhdHQiLCJPYmplY3QiLCJrZXlzIiwiYXBwZW5kQ2hpbGRyZW4iLCJwYXJlbnQiLCJjaGlsZHJlbiIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRBZnRlciIsIm5ld05vZGUiLCJleGlzdGluZ05vZGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJyZW1vdmVBbGxDaGlsZHJlbiIsImVsZW1lbnQiLCJza2lwIiwiaSIsImNoaWxkTm9kZXMiLCJyZW1vdmUiLCJjcmVhdGVIZWFkZXIiLCJ0aXRsZSIsImhlYWRlckJhciIsImhlYWRlclRpdGxlIiwiaGVhZGVyTGlua0NvbnRhaW5lciIsImhlYWRlckRldkNvbnRhaW5lciIsImhlYWRlclZpZGVvQ29udGFpbmVyIiwiaGVhZGVyUGhvdG9Db250YWluZXIiLCJoZWFkZXJBYm91dCIsImhyZWYiLCJfYWN0aXZhdGVIZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaG92ZXJPbiIsImhvdmVyT2ZmIiwic2hvd0RldiIsInNob3dWaWRlbyIsInNob3dQaG90byIsImUiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjdXJyZW50VGFyZ2V0IiwiZGV2TWVudSIsImJhdHRsZXNoaXAiLCJ3ZWF0aGVyIiwidG9kbyIsInRpY3RhY3RvZSIsInZpZGVvTWVudSIsIndlZGRpbmdzIiwiYWR2ZW50dXJlIiwib3RoZXIiLCJwaG90b01lbnUiLCJuYXR1cmUiLCJhc3RybyJdLCJzb3VyY2VSb290IjoiIn0=