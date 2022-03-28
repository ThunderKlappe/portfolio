/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

function createHeader(title) {
  var headerBar = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "header", "header", title);
  return headerBar;
}

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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #fcfcff;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #2e75b5;\n}\n\n#header {\n    height: 72px;\n    background-color: #2e75b5;\n    color: #fcfcff;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: -webkit-fill-available;\n    background-color: inherit;\n    min-height: inherit;\n}\n#title-container {\n    margin: 100px 60px 0px;\n    display: flex;\n    align-items: center;\n    padding: 10px 30px;\n    gap: 50px;\n}\n#headshot {\n    height: 300px;\n    width: 300px;\n    background: rgba(0, 0, 0, 0) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 0% 0% / 300px;\n    border: 2px solid #1a132f;\n    border-radius: 30%;\n    text-align: center;\n    flex-shrink: 0;\n    transition: 0.25s;\n    cursor: pointer;\n}\n#headshot:hover {\n    background: rgba(0, 0, 0, 0.5) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 0% 0% / 300px;\n    background-blend-mode: darken;\n}\n#headshot:hover::after {\n    content: \"About Me\";\n    position: relative;\n    top: 40%;\n    color: #fcfcff;\n    font-size: 30px;\n    font-weight: bold;\n}\n.title-text {\n    font-size: 50px;\n}\n\n.content-text {\n    font-size: 22px;\n    font-weight: bold;\n}\n\n#about-me {\n    width: 50%;\n    margin: 50px;\n    padding: 30px;\n    background-color: #61a4bc;\n    color: #fcfcff;\n    border: 3px solid #1a132f;\n    border-radius: 30px;\n}\n#links {\n    display: flex;\n    gap: 15px;\n    flex-wrap: wrap;\n    border: 3px solid #1a132f;\n    border-radius: 30px;\n    padding: 20px;\n}\n.link-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3px;\n}\n\n.link-button {\n    background-color: #61a4bc;\n    color: #fcfcff;\n    padding: 10px;\n    border: 2px solid #2e75b5;\n    border-radius: 10px;\n    width: 160px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 18px;\n    cursor: pointer;\n}\n.link-button:hover {\n    filter: brightness(0.75);\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,4DAA4D;IAC5D,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,WAAW;IACX,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,aAAa;IACb,YAAY;IACZ,kFAAsE;IACtE,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,oFAAwE;IACxE,6BAA6B;AACjC;AACA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;IACR,cAAc;IACd,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,SAAS;IACT,eAAe;IACf,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;IACf,eAAe;AACnB;AACA;IACI,wBAAwB;AAC5B","sourcesContent":["body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #fcfcff;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #2e75b5;\n}\n\n#header {\n    height: 72px;\n    background-color: #2e75b5;\n    color: #fcfcff;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: -webkit-fill-available;\n    background-color: inherit;\n    min-height: inherit;\n}\n#title-container {\n    margin: 100px 60px 0px;\n    display: flex;\n    align-items: center;\n    padding: 10px 30px;\n    gap: 50px;\n}\n#headshot {\n    height: 300px;\n    width: 300px;\n    background: rgba(0, 0, 0, 0) url(\"./1636315073541.jpeg\") 0% 0% / 300px;\n    border: 2px solid #1a132f;\n    border-radius: 30%;\n    text-align: center;\n    flex-shrink: 0;\n    transition: 0.25s;\n    cursor: pointer;\n}\n#headshot:hover {\n    background: rgba(0, 0, 0, 0.5) url(\"./1636315073541.jpeg\") 0% 0% / 300px;\n    background-blend-mode: darken;\n}\n#headshot:hover::after {\n    content: \"About Me\";\n    position: relative;\n    top: 40%;\n    color: #fcfcff;\n    font-size: 30px;\n    font-weight: bold;\n}\n.title-text {\n    font-size: 50px;\n}\n\n.content-text {\n    font-size: 22px;\n    font-weight: bold;\n}\n\n#about-me {\n    width: 50%;\n    margin: 50px;\n    padding: 30px;\n    background-color: #61a4bc;\n    color: #fcfcff;\n    border: 3px solid #1a132f;\n    border-radius: 30px;\n}\n#links {\n    display: flex;\n    gap: 15px;\n    flex-wrap: wrap;\n    border: 3px solid #1a132f;\n    border-radius: 30px;\n    padding: 20px;\n}\n.link-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3px;\n}\n\n.link-button {\n    background-color: #61a4bc;\n    color: #fcfcff;\n    padding: 10px;\n    border: 2px solid #2e75b5;\n    border-radius: 10px;\n    width: 160px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 18px;\n    cursor: pointer;\n}\n.link-button:hover {\n    filter: brightness(0.75);\n}\n"],"sourceRoot":""}]);
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");


 // eslint-disable-next-line no-unused-vars

var displayPage = function () {
  var header = (0,_Header__WEBPACK_IMPORTED_MODULE_1__["default"])("Tim Schley's Portfolio");
  var content = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "content");
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
  _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(document.body, header, content);
}();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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by8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBET01NYW5pcCA9ICgoKSA9PiB7XG4gICAgLy9zaG9ydGhhbmQgdG8gZ2V0IGVsZW1lbnRzIGVhc2llclxuICAgIGNvbnN0IGdldEVsZW1lbnQgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBjb25zdCBnZXRFbGVtZW50cyA9IHNlbGVjdG9yID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgLy9zaG9ydGhhbmQgdG8gbWFrZSBhIG5ldyBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlcyB0byBpdFxuICAgIGNvbnN0IG1ha2VOZXdFbGVtZW50ID0gKHR5cGUsIGlkID0gXCJcIiwgSFRNTENsYXNzID0gXCJcIiwgdGV4dCA9IFwiXCIsIC4uLmF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGlmIChpZCAhPSBcIlwiKSB7XG4gICAgICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSFRNTENsYXNzICE9IFwiXCIpIHtcbiAgICAgICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgSFRNTENsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGF0dCA9PiBuZXdFbGVtLnNldEF0dHJpYnV0ZShPYmplY3Qua2V5cyhhdHQpWzBdLCBhdHRbT2JqZWN0LmtleXMoYXR0KV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdFbGVtO1xuICAgIH07XG5cbiAgICAvL2FkZHMgYWxsIG9mIHRoZSBET00gZWxlbWVudHMgdG8gYSBwYXJlbnRcbiAgICBjb25zdCBhcHBlbmRDaGlsZHJlbiA9IChwYXJlbnQsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgfTtcblxuICAgIC8vaW5zZXJ0cyBhIERPTSBlbGVtZW50IGFmdGVyIGFub3RoZXIgZWxlbWVudFxuICAgIGNvbnN0IGluc2VydEFmdGVyID0gKG5ld05vZGUsIGV4aXN0aW5nTm9kZSkgPT4ge1xuICAgICAgICBleGlzdGluZ05vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgZXhpc3RpbmdOb2RlLm5leHRTaWJsaW5nKTtcbiAgICB9O1xuXG4gICAgLy9jbGVhcnMgb3V0IGFsbCBjaGlsZCBub2RlcyBvZiBhbiBlbGVtZW50LCBza2lwcyBhcyBtYW55IGVsZW1lbnRzIGFzIHJlcXVlc3RlZFxuICAgIGNvbnN0IHJlbW92ZUFsbENoaWxkcmVuID0gKGVsZW1lbnQsIHNraXAgPSAwKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpID4gc2tpcDsgaS0tKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbaSAtIDFdLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldEVsZW1lbnQsIGdldEVsZW1lbnRzLCBtYWtlTmV3RWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4sIGluc2VydEFmdGVyLCByZW1vdmVBbGxDaGlsZHJlbiB9O1xufSkoKTtcbiIsImltcG9ydCB7IERPTU1hbmlwIH0gZnJvbSBcIi4vRE9NTWFuaXBcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcih0aXRsZSkge1xuICAgIGNvbnN0IGhlYWRlckJhciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIsIHRpdGxlKTtcbiAgICByZXR1cm4gaGVhZGVyQmFyO1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vMTYzNjMxNTA3MzU0MS5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmY7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMyZTc1YjU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTc1YjU7XFxuICAgIGNvbG9yOiAjZmNmY2ZmO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xcbn1cXG4jdGl0bGUtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxMDBweCA2MHB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcbiNoZWFkc2hvdCB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIDAlIDAlIC8gMzAwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxYTEzMmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2hlYWRzaG90OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgMCUgMCUgLyAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XFxufVxcbiNoZWFkc2hvdDpob3Zlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiQWJvdXQgTWVcXFwiO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNDAlO1xcbiAgICBjb2xvcjogI2ZjZmNmZjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnRpdGxlLXRleHQge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi5jb250ZW50LXRleHQge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jYWJvdXQtbWUge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IDUwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MWE0YmM7XFxuICAgIGNvbG9yOiAjZmNmY2ZmO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMWExMzJmO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG4jbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzFhMTMyZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuLmxpbmstY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbi5saW5rLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MWE0YmM7XFxuICAgIGNvbG9yOiAjZmNmY2ZmO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMmU3NWI1O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxpbmstYnV0dG9uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNzUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNERBQTREO0lBQzVELGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtGQUFzRTtJQUN0RSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9GQUF3RTtJQUN4RSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmY7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMyZTc1YjU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTc1YjU7XFxuICAgIGNvbG9yOiAjZmNmY2ZmO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xcbn1cXG4jdGl0bGUtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxMDBweCA2MHB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcbiNoZWFkc2hvdCB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSB1cmwoXFxcIi4vMTYzNjMxNTA3MzU0MS5qcGVnXFxcIikgMCUgMCUgLyAzMDBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFhMTMyZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jaGVhZHNob3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSkgdXJsKFxcXCIuLzE2MzYzMTUwNzM1NDEuanBlZ1xcXCIpIDAlIDAlIC8gMzAwcHg7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xcbn1cXG4jaGVhZHNob3Q6aG92ZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIkFib3V0IE1lXFxcIjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDQwJTtcXG4gICAgY29sb3I6ICNmY2ZjZmY7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi50aXRsZS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4uY29udGVudC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2Fib3V0LW1lIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiA1MHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFhNGJjO1xcbiAgICBjb2xvcjogI2ZjZmNmZjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzFhMTMyZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuI2xpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxYTEzMmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5saW5rLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG4ubGluay1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFhNGJjO1xcbiAgICBjb2xvcjogI2ZjZmNmZjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJlNzViNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5saW5rLWJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjc1KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7IERPTU1hbmlwIH0gZnJvbSBcIi4vRE9NTWFuaXBcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmNvbnN0IGRpc3BsYXlQYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoXCJUaW0gU2NobGV5J3MgUG9ydGZvbGlvXCIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRlbnRcIik7XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInRpdGxlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBoZWFkc2hvdCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiaGVhZHNob3RcIik7XG4gICAgY29uc3QgdGl0bGUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJ0aXRsZVwiLFxuICAgICAgICBcInRpdGxlLXRleHRcIixcbiAgICAgICAgXCJUaW0gU2NobGV5IC0gRGV2ZWxvcG1lbnQsIEZpbG0sIFBob3RvZ3JhcGh5XCJcbiAgICApO1xuICAgIGNvbnN0IGFib3V0TWUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJhYm91dC1tZVwiLFxuICAgICAgICBcImNvbnRlbnQtdGV4dFwiLFxuICAgICAgICBcIlRpbSBTY2hsZXkgaXMgYSBsaXN0ZW5lci4gV2l0aCBhIGtlZW4gZWFyIGFuZCBhIHByb2Zlc3Npb25hbCBleWUsIFRpbSB3b3JrcyB3aXRoIHlvdSB0byBkaXNjb3ZlciB3aGF0IHlvdSBhcmUgbG9va2luZyBmb3IgYW5kIHdoYXQgeW91IG5lZWQuIFdpdGggYW4gYXR0ZW50aW9uIHRvIGRldGFpbCwgaGUgd2lsbCBhbHdheXMgcHJvdmlkZSB5b3Ugd2l0aCBhIHByb2R1Y3QgdGhhdCB5b3Ugd2lsbCBiZSBoYXBweSB3aXRoLlwiXG4gICAgKTtcbiAgICBjb25zdCBsaW5rcyA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwibGlua3NcIik7XG4gICAgY29uc3QgZGV2ZWxvcG1lbnRDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImRldmVsb3BtZW50LWNvbnRhaW5lclwiLCBcImxpbmstY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGRldmVsb3BtZW50TGFiZWwgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJkZXZlbG9wbWVudC1sYWJlbFwiLFxuICAgICAgICBcImNvbnRlbnQtdGV4dFwiLFxuICAgICAgICBcIldlYiBEZXZlbG9wbWVudFwiXG4gICAgKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwQnV0dG9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJhXCIsIFwiYmF0dGxlc2hpcC1idXR0b25cIiwgXCJsaW5rLWJ1dHRvblwiLCBcIkJhdHRsZXNoaXBcIiwge1xuICAgICAgICBocmVmOiBcIi4vYmF0dGxlc2hpcC9pbmRleC5odG1sXCIsXG4gICAgfSk7XG4gICAgY29uc3Qgd2VhdGhlckJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYVwiLCBcIndlYXRoZXItYnV0dG9uXCIsIFwibGluay1idXR0b25cIiwgXCJXZWF0aGVyU2VhcmNoXCIsIHtcbiAgICAgICAgaHJlZjogXCIuL3dlYXRoZXIvaW5kZXguaHRtbFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJ0b2RvLWJ1dHRvblwiLCBcImxpbmstYnV0dG9uXCIsIFwiVG9EbyBMaXN0XCIsIHtcbiAgICAgICAgaHJlZjogXCIuL3RvZG8vaW5kZXguaHRtbFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHRpY3RhY3RvZUJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYVwiLCBcInRpY3RhY3RvZS1idXR0b25cIiwgXCJsaW5rLWJ1dHRvblwiLCBcIlRpYy1UYWMtVG9lXCIsIHtcbiAgICAgICAgaHJlZjogXCIuL3RpYy10YWMtdG9lL2luZGV4Lmh0bWxcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IHZpZGVvQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ2aWRlby1jb250YWluZXJcIiwgXCJsaW5rLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB2aWRlb0xhYmVsID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ2aWRlby1sYWJlbFwiLCBcImNvbnRlbnQtdGV4dFwiLCBcIlZpZGVvIFByb2R1Y3Rpb25cIik7XG4gICAgY29uc3Qgd2VkZGluZ3NCdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJ3ZWRkaW5ncy1idXR0b25cIiwgXCJsaW5rLWJ1dHRvblwiLCBcIldlZGRpbmdzXCIsIHtcbiAgICAgICAgaHJlZjogXCIuL3dlZGRpbmdzL2luZGV4Lmh0bWxcIixcbiAgICB9KTtcbiAgICBjb25zdCBhZHZlbnR1cmVCdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJhZHZlbnR1cmUtYnV0dG9uXCIsIFwibGluay1idXR0b25cIiwgXCJBZHZlbnR1cmVcIiwge1xuICAgICAgICBocmVmOiBcIi4vYWR2ZW50dXJlL2luZGV4Lmh0bWxcIixcbiAgICB9KTtcbiAgICBjb25zdCBvdGhlckJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYVwiLCBcIm90aGVyLWJ1dHRvblwiLCBcImxpbmstYnV0dG9uXCIsIFwiT3RoZXJcIiwge1xuICAgICAgICBocmVmOiBcIi4vb3RoZXIvaW5kZXguaHRtbFwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGhvdG9Db250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInBob3RvLWNvbnRhaW5lclwiLCBcImxpbmstY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHBob3RvTGFiZWwgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInBob3RvLWxhYmVsXCIsIFwiY29udGVudC10ZXh0XCIsIFwiUGhvdG9ncmFwaHlcIik7XG4gICAgY29uc3QgbmF0dXJlQnV0dG9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJhXCIsIFwibmF0dXJlLWJ1dHRvblwiLCBcImxpbmstYnV0dG9uXCIsIFwiTmF0dXJlXCIsIHtcbiAgICAgICAgaHJlZjogXCIuL25hdHVyZS9pbmRleC5odG1sXCIsXG4gICAgfSk7XG4gICAgY29uc3QgYXN0cm9CdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImFcIiwgXCJhc3Ryby1idXR0b25cIiwgXCJsaW5rLWJ1dHRvblwiLCBcIkFzdHJvcGhvdG9ncmFwaHlcIiwge1xuICAgICAgICBocmVmOiBcIi4vYXN0cm8vaW5kZXguaHRtbFwiLFxuICAgIH0pO1xuXG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oXG4gICAgICAgIGRldmVsb3BtZW50Q29udGFpbmVyLFxuICAgICAgICBkZXZlbG9wbWVudExhYmVsLFxuICAgICAgICBiYXR0bGVzaGlwQnV0dG9uLFxuICAgICAgICB3ZWF0aGVyQnV0dG9uLFxuICAgICAgICB0b2RvQnV0dG9uLFxuICAgICAgICB0aWN0YWN0b2VCdXR0b25cbiAgICApO1xuXG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4odmlkZW9Db250YWluZXIsIHZpZGVvTGFiZWwsIHdlZGRpbmdzQnV0dG9uLCBhZHZlbnR1cmVCdXR0b24sIG90aGVyQnV0dG9uKTtcblxuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKHBob3RvQ29udGFpbmVyLCBwaG90b0xhYmVsLCBuYXR1cmVCdXR0b24sIGFzdHJvQnV0dG9uKTtcblxuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGxpbmtzLCBkZXZlbG9wbWVudENvbnRhaW5lciwgdmlkZW9Db250YWluZXIsIHBob3RvQ29udGFpbmVyKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbih0aXRsZUNvbnRhaW5lciwgaGVhZHNob3QsIHRpdGxlKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihjb250ZW50LCB0aXRsZUNvbnRhaW5lciwgYWJvdXRNZSwgbGlua3MpO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGRvY3VtZW50LmJvZHksIGhlYWRlciwgY29udGVudCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbIkRPTU1hbmlwIiwiZ2V0RWxlbWVudCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFrZU5ld0VsZW1lbnQiLCJ0eXBlIiwiaWQiLCJIVE1MQ2xhc3MiLCJ0ZXh0IiwibmV3RWxlbSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImF0dHJpYnV0ZXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiYXR0IiwiT2JqZWN0Iiwia2V5cyIsImFwcGVuZENoaWxkcmVuIiwicGFyZW50IiwiY2hpbGRyZW4iLCJjaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QWZ0ZXIiLCJuZXdOb2RlIiwiZXhpc3RpbmdOb2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJlbGVtZW50Iiwic2tpcCIsImkiLCJjaGlsZE5vZGVzIiwicmVtb3ZlIiwiY3JlYXRlSGVhZGVyIiwidGl0bGUiLCJoZWFkZXJCYXIiLCJkaXNwbGF5UGFnZSIsImhlYWRlciIsImNvbnRlbnQiLCJ0aXRsZUNvbnRhaW5lciIsImhlYWRzaG90IiwiYWJvdXRNZSIsImxpbmtzIiwiZGV2ZWxvcG1lbnRDb250YWluZXIiLCJkZXZlbG9wbWVudExhYmVsIiwiYmF0dGxlc2hpcEJ1dHRvbiIsImhyZWYiLCJ3ZWF0aGVyQnV0dG9uIiwidG9kb0J1dHRvbiIsInRpY3RhY3RvZUJ1dHRvbiIsInZpZGVvQ29udGFpbmVyIiwidmlkZW9MYWJlbCIsIndlZGRpbmdzQnV0dG9uIiwiYWR2ZW50dXJlQnV0dG9uIiwib3RoZXJCdXR0b24iLCJwaG90b0NvbnRhaW5lciIsInBob3RvTGFiZWwiLCJuYXR1cmVCdXR0b24iLCJhc3Ryb0J1dHRvbiIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9