/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  var aboutMe = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "about-me", "content-text", "Tim Schley is a listener. With a keen ear and a professional eye, Tim works with you to discover what you are looking for and what you need. With an attention to detail, he will always provide you with a product that you will be happy with.");
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./1636315073541.jpeg */ "./src/1636315073541.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #fcfcff;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #2e75b5;\n}\n\n#header {\n    background-color: #2e75b5;\n    color: #fcfcff;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: -webkit-fill-available;\n    background-color: inherit;\n    min-height: inherit;\n}\n#title-container {\n    margin: 100px 60px 0px;\n    display: flex;\n    align-items: center;\n    padding: 10px 30px;\n    gap: 50px;\n}\n#headshot {\n    height: 300px;\n    width: 300px;\n    background: rgba(0, 0, 0, 0) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 0% 0% / 300px;\n    border: 2px solid #1a132f;\n    border-radius: 30%;\n    text-align: center;\n    flex-shrink: 0;\n    transition: 0.25s;\n    cursor: pointer;\n}\n#headshot:hover {\n    background: rgba(0, 0, 0, 0.5) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 0% 0% / 300px;\n    background-blend-mode: darken;\n}\n#headshot:hover::after {\n    content: \"About Me\";\n    position: relative;\n    top: 40%;\n    color: #fcfcff;\n    font-size: 30px;\n    font-weight: bold;\n}\n.title-text {\n    font-size: 50px;\n}\n\n.content-text {\n    font-size: 22px;\n    font-weight: bold;\n}\n\n#about-me {\n    width: 50%;\n    margin: 50px;\n    padding: 30px;\n    background-color: #61a4bc;\n    color: #fcfcff;\n    border: 3px solid #1a132f;\n    border-radius: 30px;\n}\n#links {\n    display: flex;\n    gap: 15px;\n    flex-wrap: wrap;\n    border: 3px solid #1a132f;\n    border-radius: 30px;\n    padding: 20px;\n}\n.link-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3px;\n}\n\n.link-button {\n    background-color: #61a4bc;\n    color: #fcfcff;\n    padding: 10px;\n    border: 2px solid #2e75b5;\n    border-radius: 10px;\n    width: 160px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 18px;\n    cursor: pointer;\n}\n.link-button:hover {\n    filter: brightness(0.75);\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,4DAA4D;IAC5D,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,aAAa;IACb,YAAY;IACZ,kFAAsE;IACtE,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,oFAAwE;IACxE,6BAA6B;AACjC;AACA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;IACR,cAAc;IACd,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,SAAS;IACT,eAAe;IACf,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;IACf,eAAe;AACnB;AACA;IACI,wBAAwB;AAC5B","sourcesContent":["body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #fcfcff;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #2e75b5;\n}\n\n#header {\n    background-color: #2e75b5;\n    color: #fcfcff;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: -webkit-fill-available;\n    background-color: inherit;\n    min-height: inherit;\n}\n#title-container {\n    margin: 100px 60px 0px;\n    display: flex;\n    align-items: center;\n    padding: 10px 30px;\n    gap: 50px;\n}\n#headshot {\n    height: 300px;\n    width: 300px;\n    background: rgba(0, 0, 0, 0) url(\"./1636315073541.jpeg\") 0% 0% / 300px;\n    border: 2px solid #1a132f;\n    border-radius: 30%;\n    text-align: center;\n    flex-shrink: 0;\n    transition: 0.25s;\n    cursor: pointer;\n}\n#headshot:hover {\n    background: rgba(0, 0, 0, 0.5) url(\"./1636315073541.jpeg\") 0% 0% / 300px;\n    background-blend-mode: darken;\n}\n#headshot:hover::after {\n    content: \"About Me\";\n    position: relative;\n    top: 40%;\n    color: #fcfcff;\n    font-size: 30px;\n    font-weight: bold;\n}\n.title-text {\n    font-size: 50px;\n}\n\n.content-text {\n    font-size: 22px;\n    font-weight: bold;\n}\n\n#about-me {\n    width: 50%;\n    margin: 50px;\n    padding: 30px;\n    background-color: #61a4bc;\n    color: #fcfcff;\n    border: 3px solid #1a132f;\n    border-radius: 30px;\n}\n#links {\n    display: flex;\n    gap: 15px;\n    flex-wrap: wrap;\n    border: 3px solid #1a132f;\n    border-radius: 30px;\n    padding: 20px;\n}\n.link-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3px;\n}\n\n.link-button {\n    background-color: #61a4bc;\n    color: #fcfcff;\n    padding: 10px;\n    border: 2px solid #2e75b5;\n    border-radius: 10px;\n    width: 160px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 18px;\n    cursor: pointer;\n}\n.link-button:hover {\n    filter: brightness(0.75);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/1636315073541.jpeg":
/*!********************************!*\
  !*** ./src/1636315073541.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edcdb62534510620e7b9.jpeg";

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_Header_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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by8uL3NyYy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9mb290ZXIuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9mb290ZXIuY3NzPzgxZDciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5pbXBvcnQgXCIuL2Zvb3Rlci5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlckJhciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiZm9vdGVyXCIsIFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IGRldkJ5ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICBcImRldmVsb3BlZC1ieVwiLFxuICAgICAgICBcImZvb3Rlci10ZXh0XCIsXG4gICAgICAgIFwiRGV2ZWxvcGVkIGJ5IFRpbSBTY2hsZXkgLSAyMDIyXCIsXG4gICAgICAgIHsgaHJlZjogXCIuL2luZGV4Lmh0bWxcIiB9XG4gICAgKTtcbiAgICBjb25zdCBsaW5rZWRpbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiaVwiLCBcImZvb3Rlci1saW5rZWRpblwiLCBcImZvb3Rlci1saW5rIGZhLWJyYW5kcyBmYS1saW5rZWRpblwiKTtcbiAgICBjb25zdCBnaXRodWIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImlcIiwgXCJmb290ZXItZ2l0aHViXCIsIFwiZm9vdGVyLWxpbmsgZmEtYnJhbmRzIGZhLWdpdGh1Yi1zcXVhcmVcIik7XG4gICAgY29uc3QgeW91dHViZSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiaVwiLCBcImZvb3Rlci15b3V0dWJlXCIsIFwiZm9vdGVyLWxpbmsgZmEtYnJhbmRzIGZhLXlvdXR1YmUtc3F1YXJlXCIpO1xuXG4gICAgY29uc3QgYWN0aXZhdGVGb290ZXIgPSAoKCkgPT4ge1xuICAgICAgICBsaW5rZWRpbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgKCkgPT4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdGltLXNjaGxleS01NjExOTY2Mi9cIilcbiAgICAgICAgKTtcbiAgICAgICAgZ2l0aHViLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiAod2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9UaHVuZGVyS2xhcHBlXCIpKTtcbiAgICAgICAgeW91dHViZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgKCkgPT4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS91c2VyL1BhbmRhVGltbXlcIilcbiAgICAgICAgKTtcbiAgICB9KSgpO1xuXG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oZm9vdGVyQmFyLCBkZXZCeSwgbGlua2VkaW4sIGdpdGh1YiwgeW91dHViZSk7XG5cbiAgICByZXR1cm4gZm9vdGVyQmFyO1xufVxuIiwiaW1wb3J0IHsgRE9NTWFuaXAgfSBmcm9tIFwiLi9ET01NYW5pcFwiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmNvbnN0IGRpc3BsYXlQYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoXCJUaW0gU2NobGV5J3MgUG9ydGZvbGlvXCIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRlbnRcIik7XG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInRpdGxlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBoZWFkc2hvdCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiaGVhZHNob3RcIik7XG4gICAgY29uc3QgdGl0bGUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJ0aXRsZVwiLFxuICAgICAgICBcInRpdGxlLXRleHRcIixcbiAgICAgICAgXCJUaW0gU2NobGV5IC0gRGV2ZWxvcG1lbnQsIEZpbG0sIFBob3RvZ3JhcGh5XCJcbiAgICApO1xuICAgIGNvbnN0IGFib3V0TWUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJhYm91dC1tZVwiLFxuICAgICAgICBcImNvbnRlbnQtdGV4dFwiLFxuICAgICAgICBcIlRpbSBTY2hsZXkgaXMgYSBsaXN0ZW5lci4gV2l0aCBhIGtlZW4gZWFyIGFuZCBhIHByb2Zlc3Npb25hbCBleWUsIFRpbSB3b3JrcyB3aXRoIHlvdSB0byBkaXNjb3ZlciB3aGF0IHlvdSBhcmUgbG9va2luZyBmb3IgYW5kIHdoYXQgeW91IG5lZWQuIFdpdGggYW4gYXR0ZW50aW9uIHRvIGRldGFpbCwgaGUgd2lsbCBhbHdheXMgcHJvdmlkZSB5b3Ugd2l0aCBhIHByb2R1Y3QgdGhhdCB5b3Ugd2lsbCBiZSBoYXBweSB3aXRoLlwiXG4gICAgKTtcbiAgICBjb25zdCBsaW5rcyA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwibGlua3NcIik7XG4gICAgY29uc3QgZGV2ZWxvcG1lbnRDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImRldmVsb3BtZW50LWNvbnRhaW5lclwiLCBcImxpbmstY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGRldmVsb3BtZW50TGFiZWwgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJkZXZlbG9wbWVudC1sYWJlbFwiLFxuICAgICAgICBcImNvbnRlbnQtdGV4dFwiLFxuICAgICAgICBcIldlYiBEZXZlbG9wbWVudFwiXG4gICAgKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwQnV0dG9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJhXCIsIFwiYmF0dGxlc2hpcC1idXR0b25cIiwgXCJsaW5rLWJ1dHRvblwiLCBcIkJhdHRsZXNoaXBcIiwge1xuICAgICAgICBocmVmOiBcIi4vYmF0dGxlc2hpcC9pbmRleC5odG1sXCIsXG4gICAgfSk7XG4gICAgY29uc3Qgd2VhdGhlckJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYVwiLCBcIndlYXRoZXItYnV0dG9uXCIsIFwibGluay1idXR0b25cIiwgXCJXZWF0aGVyU2VhcmNoXCIsIHtcbiAgICAgICAgaHJlZjogXCIuL3dlYXRoZXIvaW5kZXguaHRtbFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJ0b2RvLWJ1dHRvblwiLCBcImxpbmstYnV0dG9uXCIsIFwiVG9EbyBMaXN0XCIsIHtcbiAgICAgICAgaHJlZjogXCIuL3RvZG8vaW5kZXguaHRtbFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHRpY3RhY3RvZUJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYVwiLCBcInRpY3RhY3RvZS1idXR0b25cIiwgXCJsaW5rLWJ1dHRvblwiLCBcIlRpYy1UYWMtVG9lXCIsIHtcbiAgICAgICAgaHJlZjogXCIuL3RpYy10YWMtdG9lL2luZGV4Lmh0bWxcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IHZpZGVvQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ2aWRlby1jb250YWluZXJcIiwgXCJsaW5rLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB2aWRlb0xhYmVsID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ2aWRlby1sYWJlbFwiLCBcImNvbnRlbnQtdGV4dFwiLCBcIlZpZGVvIFByb2R1Y3Rpb25cIik7XG4gICAgY29uc3Qgd2VkZGluZ3NCdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJ3ZWRkaW5ncy1idXR0b25cIiwgXCJsaW5rLWJ1dHRvblwiLCBcIldlZGRpbmdzXCIsIHtcbiAgICAgICAgaHJlZjogXCIuL3dlZGRpbmdzL2luZGV4Lmh0bWxcIixcbiAgICB9KTtcbiAgICBjb25zdCBhZHZlbnR1cmVCdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJhZHZlbnR1cmUtYnV0dG9uXCIsIFwibGluay1idXR0b25cIiwgXCJBZHZlbnR1cmVcIiwge1xuICAgICAgICBocmVmOiBcIi4vYWR2ZW50dXJlL2luZGV4Lmh0bWxcIixcbiAgICB9KTtcbiAgICBjb25zdCBvdGhlckJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYVwiLCBcIm90aGVyLWJ1dHRvblwiLCBcImxpbmstYnV0dG9uXCIsIFwiT3RoZXJcIiwge1xuICAgICAgICBocmVmOiBcIi4vb3RoZXIvaW5kZXguaHRtbFwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGhvdG9Db250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInBob3RvLWNvbnRhaW5lclwiLCBcImxpbmstY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHBob3RvTGFiZWwgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInBob3RvLWxhYmVsXCIsIFwiY29udGVudC10ZXh0XCIsIFwiUGhvdG9ncmFwaHlcIik7XG4gICAgY29uc3QgbmF0dXJlQnV0dG9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJhXCIsIFwibmF0dXJlLWJ1dHRvblwiLCBcImxpbmstYnV0dG9uXCIsIFwiTmF0dXJlXCIsIHtcbiAgICAgICAgaHJlZjogXCIuL25hdHVyZS9pbmRleC5odG1sXCIsXG4gICAgfSk7XG4gICAgY29uc3QgYXN0cm9CdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJhc3Ryby1idXR0b25cIiwgXCJsaW5rLWJ1dHRvblwiLCBcIkFzdHJvcGhvdG9ncmFwaHlcIiwge1xuICAgICAgICBocmVmOiBcIi4vYXN0cm8vaW5kZXguaHRtbFwiLFxuICAgIH0pO1xuXG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oXG4gICAgICAgIGRldmVsb3BtZW50Q29udGFpbmVyLFxuICAgICAgICBkZXZlbG9wbWVudExhYmVsLFxuICAgICAgICBiYXR0bGVzaGlwQnV0dG9uLFxuICAgICAgICB3ZWF0aGVyQnV0dG9uLFxuICAgICAgICB0b2RvQnV0dG9uLFxuICAgICAgICB0aWN0YWN0b2VCdXR0b25cbiAgICApO1xuXG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4odmlkZW9Db250YWluZXIsIHZpZGVvTGFiZWwsIHdlZGRpbmdzQnV0dG9uLCBhZHZlbnR1cmVCdXR0b24sIG90aGVyQnV0dG9uKTtcblxuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKHBob3RvQ29udGFpbmVyLCBwaG90b0xhYmVsLCBuYXR1cmVCdXR0b24sIGFzdHJvQnV0dG9uKTtcblxuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGxpbmtzLCBkZXZlbG9wbWVudENvbnRhaW5lciwgdmlkZW9Db250YWluZXIsIHBob3RvQ29udGFpbmVyKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbih0aXRsZUNvbnRhaW5lciwgaGVhZHNob3QsIHRpdGxlKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihjb250ZW50LCB0aXRsZUNvbnRhaW5lciwgYWJvdXRNZSwgbGlua3MpO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGRvY3VtZW50LmJvZHksIGhlYWRlciwgY29udGVudCwgZm9vdGVyKTtcbn0pKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNmb290ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuI2Zvb3RlciA+ICoge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG4jZm9vdGVyID4gKjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xcbn1cXG5cXG4uZm9vdGVyLWxpbmsge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5mb290ZXItdGV4dDpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7O0lBRVgsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNmb290ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuI2Zvb3RlciA+ICoge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG4jZm9vdGVyID4gKjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xcbn1cXG5cXG4uZm9vdGVyLWxpbmsge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5mb290ZXItdGV4dDpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vMTYzNjMxNTA3MzU0MS5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmY7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMyZTc1YjU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU3NWI1O1xcbiAgICBjb2xvcjogI2ZjZmNmZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcXG59XFxuI3RpdGxlLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMTAwcHggNjBweCAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG4jaGVhZHNob3Qge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSAwJSAwJSAvIDMwMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWExMzJmO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNoZWFkc2hvdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIDAlIDAlIC8gMzAwcHg7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xcbn1cXG4jaGVhZHNob3Q6aG92ZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIkFib3V0IE1lXFxcIjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDQwJTtcXG4gICAgY29sb3I6ICNmY2ZjZmY7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi50aXRsZS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4uY29udGVudC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2Fib3V0LW1lIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiA1MHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFhNGJjO1xcbiAgICBjb2xvcjogI2ZjZmNmZjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzFhMTMyZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuI2xpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxYTEzMmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5saW5rLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG4ubGluay1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFhNGJjO1xcbiAgICBjb2xvcjogI2ZjZmNmZjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJlNzViNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5saW5rLWJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjc1KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDREQUE0RDtJQUM1RCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrRkFBc0U7SUFDdEUseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxvRkFBd0U7SUFDeEUsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZmO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMmU3NWI1O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNzViNTtcXG4gICAgY29sb3I6ICNmY2ZjZmY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcbiN0aXRsZS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDEwMHB4IDYwcHggMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuI2hlYWRzaG90IHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIHVybChcXFwiLi8xNjM2MzE1MDczNTQxLmpwZWdcXFwiKSAwJSAwJSAvIDMwMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWExMzJmO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNoZWFkc2hvdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KSB1cmwoXFxcIi4vMTYzNjMxNTA3MzU0MS5qcGVnXFxcIikgMCUgMCUgLyAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XFxufVxcbiNoZWFkc2hvdDpob3Zlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiQWJvdXQgTWVcXFwiO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNDAlO1xcbiAgICBjb2xvcjogI2ZjZmNmZjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnRpdGxlLXRleHQge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi5jb250ZW50LXRleHQge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jYWJvdXQtbWUge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IDUwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MWE0YmM7XFxuICAgIGNvbG9yOiAjZmNmY2ZmO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMWExMzJmO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG4jbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzFhMTMyZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuLmxpbmstY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbi5saW5rLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MWE0YmM7XFxuICAgIGNvbG9yOiAjZmNmY2ZmO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMmU3NWI1O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxpbmstYnV0dG9uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNzUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInNyY19IZWFkZXJfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJET01NYW5pcCIsImNyZWF0ZUZvb3RlciIsImZvb3RlckJhciIsIm1ha2VOZXdFbGVtZW50IiwiZGV2QnkiLCJocmVmIiwibGlua2VkaW4iLCJnaXRodWIiLCJ5b3V0dWJlIiwiYWN0aXZhdGVGb290ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwibG9jYXRpb24iLCJhcHBlbmRDaGlsZHJlbiIsImNyZWF0ZUhlYWRlciIsImRpc3BsYXlQYWdlIiwiaGVhZGVyIiwiY29udGVudCIsImZvb3RlciIsInRpdGxlQ29udGFpbmVyIiwiaGVhZHNob3QiLCJ0aXRsZSIsImFib3V0TWUiLCJsaW5rcyIsImRldmVsb3BtZW50Q29udGFpbmVyIiwiZGV2ZWxvcG1lbnRMYWJlbCIsImJhdHRsZXNoaXBCdXR0b24iLCJ3ZWF0aGVyQnV0dG9uIiwidG9kb0J1dHRvbiIsInRpY3RhY3RvZUJ1dHRvbiIsInZpZGVvQ29udGFpbmVyIiwidmlkZW9MYWJlbCIsIndlZGRpbmdzQnV0dG9uIiwiYWR2ZW50dXJlQnV0dG9uIiwib3RoZXJCdXR0b24iLCJwaG90b0NvbnRhaW5lciIsInBob3RvTGFiZWwiLCJuYXR1cmVCdXR0b24iLCJhc3Ryb0J1dHRvbiIsImRvY3VtZW50IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=