"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_Footer_js-src_Header_js"],{

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

/***/ "./src/Footer.js":
/*!***********************!*\
  !*** ./src/Footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.css */ "./src/footer.css");
/* eslint-disable no-unused-vars */


function createFooter() {
  var footerBar = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "footer", "footer");
  var devBy = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("a", "developed-by", "footer-text", "Developed by Tim Schley - 2022", {
    href: "./index.html"
  });
  var linkedin = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("i", "footer-linkedin", "footer-link fa-brands fa-linkedin");
  var github = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("i", "footer-github", "footer-link fa-brands fa-github-square");
  var youtube = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("i", "footer-youtube", "footer-link fa-brands fa-youtube-square");

  var activateFooter = function () {
    linkedin.addEventListener("click", function () {
      return window.location.href = "https://www.linkedin.com/in/tim-schley-56119662/";
    });
    github.addEventListener("click", function () {
      return window.location.href = "https://github.com/ThunderKlappe";
    });
    youtube.addEventListener("click", function () {
      return window.location.href = "https://www.youtube.com/user/PandaTimmy";
    });
  }();

  _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(footerBar, devBy, linkedin, github, youtube);
  return footerBar;
}

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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/footer.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/footer.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "#footer {\n    width: 100%;\n\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n}\n#footer > * {\n    cursor: pointer;\n    margin: 5px;\n}\n#footer > *:hover {\n    filter: brightness(70%);\n}\n\n.footer-link {\n    font-size: 40px;\n    color: inherit;\n}\n\n.footer-text {\n    font-size: 18px;\n    color: inherit;\n    text-decoration: none;\n}\n.footer-text:hover {\n    text-decoration: underline;\n}\n", "",{"version":3,"sources":["webpack://./src/footer.css"],"names":[],"mappings":"AAAA;IACI,WAAW;;IAEX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,WAAW;AACf;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,qBAAqB;AACzB;AACA;IACI,0BAA0B;AAC9B","sourcesContent":["#footer {\n    width: 100%;\n\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n}\n#footer > * {\n    cursor: pointer;\n    margin: 5px;\n}\n#footer > *:hover {\n    filter: brightness(70%);\n}\n\n.footer-link {\n    font-size: 40px;\n    color: inherit;\n}\n\n.footer-text {\n    font-size: 18px;\n    color: inherit;\n    text-decoration: none;\n}\n.footer-text:hover {\n    text-decoration: underline;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./src/footer.css":
/*!************************!*\
  !*** ./src/footer.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9ET01NYW5pcC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvRm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Zvb3Rlci5jc3M/ODFkNyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaGVhZGVyLmNzcz9hYjJkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBET01NYW5pcCA9ICgoKSA9PiB7XG4gICAgLy9zaG9ydGhhbmQgdG8gZ2V0IGVsZW1lbnRzIGVhc2llclxuICAgIGNvbnN0IGdldEVsZW1lbnQgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBjb25zdCBnZXRFbGVtZW50cyA9IHNlbGVjdG9yID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgLy9zaG9ydGhhbmQgdG8gbWFrZSBhIG5ldyBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlcyB0byBpdFxuICAgIGNvbnN0IG1ha2VOZXdFbGVtZW50ID0gKHR5cGUsIGlkID0gXCJcIiwgSFRNTENsYXNzID0gXCJcIiwgdGV4dCA9IFwiXCIsIC4uLmF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGlmIChpZCAhPSBcIlwiKSB7XG4gICAgICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSFRNTENsYXNzICE9IFwiXCIpIHtcbiAgICAgICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgSFRNTENsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGF0dCA9PiBuZXdFbGVtLnNldEF0dHJpYnV0ZShPYmplY3Qua2V5cyhhdHQpWzBdLCBhdHRbT2JqZWN0LmtleXMoYXR0KV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdFbGVtO1xuICAgIH07XG5cbiAgICAvL2FkZHMgYWxsIG9mIHRoZSBET00gZWxlbWVudHMgdG8gYSBwYXJlbnRcbiAgICBjb25zdCBhcHBlbmRDaGlsZHJlbiA9IChwYXJlbnQsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgfTtcblxuICAgIC8vaW5zZXJ0cyBhIERPTSBlbGVtZW50IGFmdGVyIGFub3RoZXIgZWxlbWVudFxuICAgIGNvbnN0IGluc2VydEFmdGVyID0gKG5ld05vZGUsIGV4aXN0aW5nTm9kZSkgPT4ge1xuICAgICAgICBleGlzdGluZ05vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgZXhpc3RpbmdOb2RlLm5leHRTaWJsaW5nKTtcbiAgICB9O1xuXG4gICAgLy9jbGVhcnMgb3V0IGFsbCBjaGlsZCBub2RlcyBvZiBhbiBlbGVtZW50LCBza2lwcyBhcyBtYW55IGVsZW1lbnRzIGFzIHJlcXVlc3RlZFxuICAgIGNvbnN0IHJlbW92ZUFsbENoaWxkcmVuID0gKGVsZW1lbnQsIHNraXAgPSAwKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpID4gc2tpcDsgaS0tKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbaSAtIDFdLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldEVsZW1lbnQsIGdldEVsZW1lbnRzLCBtYWtlTmV3RWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4sIGluc2VydEFmdGVyLCByZW1vdmVBbGxDaGlsZHJlbiB9O1xufSkoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5pbXBvcnQgXCIuL2Zvb3Rlci5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlckJhciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiZm9vdGVyXCIsIFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IGRldkJ5ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICBcImRldmVsb3BlZC1ieVwiLFxuICAgICAgICBcImZvb3Rlci10ZXh0XCIsXG4gICAgICAgIFwiRGV2ZWxvcGVkIGJ5IFRpbSBTY2hsZXkgLSAyMDIyXCIsXG4gICAgICAgIHsgaHJlZjogXCIuL2luZGV4Lmh0bWxcIiB9XG4gICAgKTtcbiAgICBjb25zdCBsaW5rZWRpbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiaVwiLCBcImZvb3Rlci1saW5rZWRpblwiLCBcImZvb3Rlci1saW5rIGZhLWJyYW5kcyBmYS1saW5rZWRpblwiKTtcbiAgICBjb25zdCBnaXRodWIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImlcIiwgXCJmb290ZXItZ2l0aHViXCIsIFwiZm9vdGVyLWxpbmsgZmEtYnJhbmRzIGZhLWdpdGh1Yi1zcXVhcmVcIik7XG4gICAgY29uc3QgeW91dHViZSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiaVwiLCBcImZvb3Rlci15b3V0dWJlXCIsIFwiZm9vdGVyLWxpbmsgZmEtYnJhbmRzIGZhLXlvdXR1YmUtc3F1YXJlXCIpO1xuXG4gICAgY29uc3QgYWN0aXZhdGVGb290ZXIgPSAoKCkgPT4ge1xuICAgICAgICBsaW5rZWRpbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgKCkgPT4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdGltLXNjaGxleS01NjExOTY2Mi9cIilcbiAgICAgICAgKTtcbiAgICAgICAgZ2l0aHViLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiAod2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9UaHVuZGVyS2xhcHBlXCIpKTtcbiAgICAgICAgeW91dHViZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgKCkgPT4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS91c2VyL1BhbmRhVGltbXlcIilcbiAgICAgICAgKTtcbiAgICB9KSgpO1xuXG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oZm9vdGVyQmFyLCBkZXZCeSwgbGlua2VkaW4sIGdpdGh1YiwgeW91dHViZSk7XG5cbiAgICByZXR1cm4gZm9vdGVyQmFyO1xufVxuIiwiaW1wb3J0IHsgRE9NTWFuaXAgfSBmcm9tIFwiLi9ET01NYW5pcFwiO1xuaW1wb3J0IFwiLi9oZWFkZXIuY3NzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIodGl0bGUpIHtcbiAgICBjb25zdCBoZWFkZXJCYXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImhlYWRlclwiLCBcImhlYWRlclwiKTtcbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGVyLXRpdGxlXCIsIFwiaGVhZGVyLXRpdGxlXCIsIHRpdGxlKTtcbiAgICBjb25zdCBoZWFkZXJMaW5rQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXItbGluay1jb250YWluZXJcIik7XG4gICAgY29uc3QgaGVhZGVyRGV2Q29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiaGVhZGVyLWRldi1jb250YWluZXJcIixcbiAgICAgICAgXCJoZWFkZXItY29udGFpbmVyXCIsXG4gICAgICAgIFwiRGV2ZWxvcG1lbnRcIlxuICAgICk7XG4gICAgY29uc3QgaGVhZGVyVmlkZW9Db250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJoZWFkZXItdmlkZW8tY29udGFpbmVyXCIsXG4gICAgICAgIFwiaGVhZGVyLWNvbnRhaW5lclwiLFxuICAgICAgICBcIlZpZGVvXCJcbiAgICApO1xuICAgIGNvbnN0IGhlYWRlclBob3RvQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiaGVhZGVyLXBob3RvLWNvbnRhaW5lclwiLFxuICAgICAgICBcImhlYWRlci1jb250YWluZXJcIixcbiAgICAgICAgXCJQaG90b2dyYXBoeVwiXG4gICAgKTtcbiAgICBjb25zdCBoZWFkZXJBYm91dCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYVwiLCBcImhlYWRlci1hYm91dFwiLCBcImhlYWRlci1jb250YWluZXJcIiwgXCJBYm91dCBNZVwiLCB7XG4gICAgICAgIGhyZWY6IFwiLi9hYm91dC9pbmRleC5odG1sXCIsXG4gICAgfSk7XG5cbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihcbiAgICAgICAgaGVhZGVyTGlua0NvbnRhaW5lcixcbiAgICAgICAgaGVhZGVyRGV2Q29udGFpbmVyLFxuICAgICAgICBoZWFkZXJWaWRlb0NvbnRhaW5lcixcbiAgICAgICAgaGVhZGVyUGhvdG9Db250YWluZXIsXG4gICAgICAgIGhlYWRlckFib3V0XG4gICAgKTtcblxuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGhlYWRlckJhciwgaGVhZGVyVGl0bGUsIGhlYWRlckxpbmtDb250YWluZXIpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgY29uc3QgX2FjdGl2YXRlSGVhZGVyID0gKCgpID0+IHtcbiAgICAgICAgaGVhZGVyRGV2Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaG92ZXJPbik7XG4gICAgICAgIGhlYWRlclZpZGVvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaG92ZXJPbik7XG4gICAgICAgIGhlYWRlclBob3RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaG92ZXJPbik7XG4gICAgICAgIGhlYWRlckRldkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBob3Zlck9mZik7XG4gICAgICAgIGhlYWRlclZpZGVvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhvdmVyT2ZmKTtcbiAgICAgICAgaGVhZGVyUGhvdG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaG92ZXJPZmYpO1xuXG4gICAgICAgIGhlYWRlckRldkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Rldik7XG4gICAgICAgIGhlYWRlclZpZGVvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93VmlkZW8pO1xuICAgICAgICBoZWFkZXJQaG90b0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Bob3RvKTtcbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gaG92ZXJPbihlKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaG92ZXJPZmYoZSkge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIERPTU1hbmlwLnJlbW92ZUFsbENoaWxkcmVuKGUuY3VycmVudFRhcmdldCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93RGV2KGUpIHtcbiAgICAgICAgY29uc3QgZGV2TWVudSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiZGV2LW1lbnVcIiwgXCJoZWFkZXItbWVudVwiKTtcbiAgICAgICAgY29uc3QgYmF0dGxlc2hpcCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYVwiLCBcImhlYWRlci1iYXR0bGVzaGlwXCIsIFwiaGVhZGVyLWxpbmtcIiwgXCJCYXR0bGVzaGlwXCIsIHtcbiAgICAgICAgICAgIGhyZWY6IFwiLi9iYXR0bGVzaGlwL2luZGV4Lmh0bWxcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJoZWFkZXItd2VhdGhlclwiLCBcImhlYWRlci1saW5rXCIsIFwiV2VhdGhlclNlYXJjaFwiLCB7XG4gICAgICAgICAgICBocmVmOiBcIi4vd2VhdGhlci9pbmRleC5odG1sXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b2RvID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJhXCIsIFwiaGVhZGVyLXRvZG9cIiwgXCJoZWFkZXItbGlua1wiLCBcIlRvRG8gTGlzdFwiLCB7XG4gICAgICAgICAgICBocmVmOiBcIi4vdG9kby9pbmRleC5odG1sXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0aWN0YWN0b2UgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJoZWFkZXItdGljdGFjdG9lXCIsIFwiaGVhZGVyLWxpbmtcIiwgXCJUaWMtVGFjLVRvZVwiLCB7XG4gICAgICAgICAgICBocmVmOiBcIi4vdGljLXRhYy10b2UvaW5kZXguaHRtbFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihkZXZNZW51LCBiYXR0bGVzaGlwLCB3ZWF0aGVyLCB0b2RvLCB0aWN0YWN0b2UpO1xuXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5hcHBlbmRDaGlsZChkZXZNZW51KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2hvd1ZpZGVvKGUpIHtcbiAgICAgICAgY29uc3QgdmlkZW9NZW51ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ2aWRlby1tZW51XCIsIFwiaGVhZGVyLW1lbnVcIik7XG4gICAgICAgIGNvbnN0IHdlZGRpbmdzID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJhXCIsIFwiaGVhZGVyLXdlZGRpbmdzXCIsIFwiaGVhZGVyLWxpbmtcIiwgXCJXZWRkaW5nc1wiLCB7XG4gICAgICAgICAgICBocmVmOiBcIi4vd2VkZGluZ3MvaW5kZXguaHRtbFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYWR2ZW50dXJlID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJhXCIsIFwiaGVhZGVyLWFkdmVudHVyZVwiLCBcImhlYWRlci1saW5rXCIsIFwiQWR2ZW50dXJlXCIsIHtcbiAgICAgICAgICAgIGhyZWY6IFwiLi9hZHZlbnR1cmUvaW5kZXguaHRtbFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb3RoZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJoZWFkZXItb3RoZXJcIiwgXCJoZWFkZXItbGlua1wiLCBcIk90aGVyXCIsIHtcbiAgICAgICAgICAgIGhyZWY6IFwiLi9vdGhlci9pbmRleC5odG1sXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKHZpZGVvTWVudSwgd2VkZGluZ3MsIGFkdmVudHVyZSwgb3RoZXIpO1xuXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5hcHBlbmRDaGlsZCh2aWRlb01lbnUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzaG93UGhvdG8oZSkge1xuICAgICAgICBjb25zdCBwaG90b01lbnUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInBob3RvLW1lbnVcIiwgXCJoZWFkZXItbWVudVwiKTtcbiAgICAgICAgY29uc3QgbmF0dXJlID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJhXCIsIFwiaGVhZGVyLW5hdHVyZVwiLCBcImhlYWRlci1saW5rXCIsIFwiTmF0dXJlXCIsIHtcbiAgICAgICAgICAgIGhyZWY6IFwiLi9uYXR1cmUvaW5kZXguaHRtbFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYXN0cm8gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJoZWFkZXItYXN0cm9cIiwgXCJoZWFkZXItbGlua1wiLCBcIkFzdHJvcGhvdG9ncmFwaHlcIiwge1xuICAgICAgICAgICAgaHJlZjogXCIuL2FzdHJvL2luZGV4Lmh0bWxcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4ocGhvdG9NZW51LCBuYXR1cmUsIGFzdHJvKTtcblxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQocGhvdG9NZW51KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVyQmFyO1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbiNmb290ZXIgPiAqIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuI2Zvb3RlciA+ICo6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcXG59XFxuXFxuLmZvb3Rlci1saW5rIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmZvb3Rlci10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uZm9vdGVyLXRleHQ6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Zvb3Rlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXOztJQUVYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbiNmb290ZXIgPiAqIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuI2Zvb3RlciA+ICo6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcXG59XFxuXFxuLmZvb3Rlci1saW5rIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmZvb3Rlci10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uZm9vdGVyLXRleHQ6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2hlYWRlciB7XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcbiNoZWFkZXItdGl0bGUge1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuI2hlYWRlci1saW5rLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5oZWFkZXItY29udGFpbmVyLmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XFxufVxcbi5oZWFkZXItbWVudSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWluLXdpZHRoOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiA0NHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5oZWFkZXItbGluayB7XFxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uaGVhZGVyLWxpbms6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuI2hlYWRlci1hYm91dCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jaGVhZGVyLWFib3V0OmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2hlYWRlciB7XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcbiNoZWFkZXItdGl0bGUge1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuI2hlYWRlci1saW5rLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5oZWFkZXItY29udGFpbmVyLmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XFxufVxcbi5oZWFkZXItbWVudSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWluLXdpZHRoOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiA0NHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5oZWFkZXItbGluayB7XFxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uaGVhZGVyLWxpbms6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuI2hlYWRlci1hYm91dCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jaGVhZGVyLWFib3V0OmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbIkRPTU1hbmlwIiwiZ2V0RWxlbWVudCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFrZU5ld0VsZW1lbnQiLCJ0eXBlIiwiaWQiLCJIVE1MQ2xhc3MiLCJ0ZXh0IiwibmV3RWxlbSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImF0dHJpYnV0ZXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiYXR0IiwiT2JqZWN0Iiwia2V5cyIsImFwcGVuZENoaWxkcmVuIiwicGFyZW50IiwiY2hpbGRyZW4iLCJjaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QWZ0ZXIiLCJuZXdOb2RlIiwiZXhpc3RpbmdOb2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJlbGVtZW50Iiwic2tpcCIsImkiLCJjaGlsZE5vZGVzIiwicmVtb3ZlIiwiY3JlYXRlRm9vdGVyIiwiZm9vdGVyQmFyIiwiZGV2QnkiLCJocmVmIiwibGlua2VkaW4iLCJnaXRodWIiLCJ5b3V0dWJlIiwiYWN0aXZhdGVGb290ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwibG9jYXRpb24iLCJjcmVhdGVIZWFkZXIiLCJ0aXRsZSIsImhlYWRlckJhciIsImhlYWRlclRpdGxlIiwiaGVhZGVyTGlua0NvbnRhaW5lciIsImhlYWRlckRldkNvbnRhaW5lciIsImhlYWRlclZpZGVvQ29udGFpbmVyIiwiaGVhZGVyUGhvdG9Db250YWluZXIiLCJoZWFkZXJBYm91dCIsIl9hY3RpdmF0ZUhlYWRlciIsImhvdmVyT24iLCJob3Zlck9mZiIsInNob3dEZXYiLCJzaG93VmlkZW8iLCJzaG93UGhvdG8iLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiY3VycmVudFRhcmdldCIsImRldk1lbnUiLCJiYXR0bGVzaGlwIiwid2VhdGhlciIsInRvZG8iLCJ0aWN0YWN0b2UiLCJ2aWRlb01lbnUiLCJ3ZWRkaW5ncyIsImFkdmVudHVyZSIsIm90aGVyIiwicGhvdG9NZW51IiwibmF0dXJlIiwiYXN0cm8iXSwic291cmNlUm9vdCI6IiJ9