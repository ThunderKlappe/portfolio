/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/battleship/BuildPage.js":
/*!*************************************!*\
  !*** ./src/battleship/BuildPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildPage": () => (/* binding */ BuildPage)
/* harmony export */ });
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMManip */ "./src/battleship/DOMManip.js");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventHandler */ "./src/battleship/EventHandler.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./src/battleship/Modal.js");
/* harmony import */ var _ships_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ships.json */ "./src/battleship/ships.json");
/* eslint-disable no-unused-vars */




var BuildPage = function () {
  var activateBoard = function activateBoard(id) {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement(id).classList.add("active");
  };

  var _makeGrid = function _makeGrid(id) {
    var gridContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", id, "board");

    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        gridContainer.appendChild(_DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "space-".concat(j, "-").concat(i), "board-space", "", {
          "data-xPos": j
        }, {
          "data-yPos": i
        }));
      }
    }

    return gridContainer;
  };

  var buildStartingPage = function buildStartingPage() {
    var header = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "header", "", "Battleship");
    var content = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "content");
    var gameContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "game-container");
    var instructions = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "game-instructions", "board-label", "The game is simple: destroy your opponent before they destroy you.");
    var boardsContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "boards-container");
    var playerBoardWrapper = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "player-board-wrapper", "board-wrapper");

    var playerBoard = _makeGrid("player-board");

    var playerBoardLabel = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "player-board-label", "board-label", "Player's Board");
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(playerBoardWrapper, playerBoard, playerBoardLabel);
    var computerBoardWrapper = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "computer-board-wrapper", "board-wrapper");

    var computerBoard = _makeGrid("computer-board");

    var computerBoardLabel = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "computer-board-label", "board-label", "Computer's Board");
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(computerBoardWrapper, computerBoard, computerBoardLabel);
    var newGameButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("button", "new-game-button", "page-button", "New Game");
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(boardsContainer, playerBoardWrapper, computerBoardWrapper);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(gameContainer, instructions, boardsContainer, newGameButton);
    content.appendChild(gameContainer);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(document.body, header, content);
    _EventHandler__WEBPACK_IMPORTED_MODULE_1__.EventHandler.activateNewGameButton();
  };

  var buildNewGameModal = function buildNewGameModal() {
    var newGameModal = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "new-game-modal", "modal content");
    var newGameTitle = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "new-game-title", "modal-title", "Please place your ships on the grid");
    var shipName = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "ship-name", "ship-name", "", {
      "data-index": 0
    });
    var rotateButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("button", "ship-rotate-button", "modal-button", "Rotate", {
      "data-direction": "right"
    });

    var setUpGrid = _makeGrid("set-up-board");

    var startGameButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("button", "start-game-button", "modal-button", "Start Game");
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(newGameModal, newGameTitle, shipName, rotateButton, setUpGrid, startGameButton);
    Promise.resolve(_Modal__WEBPACK_IMPORTED_MODULE_2__.Modal.displayModal(newGameModal)).then(_EventHandler__WEBPACK_IMPORTED_MODULE_1__.EventHandler.activateNewGameModal()).then(_EventHandler__WEBPACK_IMPORTED_MODULE_1__.EventHandler.activateSpaces("#set-up-board")).then(displayBoatSetUp()).then(activateBoard("#set-up-board"));
  };

  var toggleRotateButton = function toggleRotateButton() {
    var rotateButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#ship-rotate-button");
    var currentState = rotateButton.dataset.direction;
    currentState == "right" ? rotateButton.dataset.direction = "down" : rotateButton.dataset.direction = "right";
  };

  var _badHover = function _badHover(xPos, yPos, size, direction) {
    for (var i = 0; i < size; i++) {
      var position = void 0;

      if (direction == "right") {
        var offset = void 0;
        xPos + i < 10 ? offset = xPos + i : offset = xPos - (size - i);
        position = "".concat(offset, "-").concat(yPos);
      } else {
        var _offset = void 0;

        yPos + i < 10 ? _offset = yPos + i : _offset = yPos - (size - i);
        position = "".concat(xPos, "-").concat(_offset);
      }

      _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#set-up-board #space-".concat(position)).classList.toggle("bad-hover");
    }
  };

  var hoverSetUp = function hoverSetUp(e) {
    var size = parseInt(_DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#ship-name").dataset.size);
    var direction = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#ship-rotate-button").dataset.direction;

    for (var i = 0; i < size; i++) {
      var xPos = parseInt(e.currentTarget.dataset.xpos);
      var yPos = parseInt(e.currentTarget.dataset.ypos);
      var position = void 0;

      if (direction == "right") {
        var offset = void 0;
        xPos + i < 10 ? offset = xPos + i : offset = xPos - (size - i);
        position = "".concat(offset, "-").concat(yPos);
      } else {
        var _offset2 = void 0;

        yPos + i < 10 ? _offset2 = yPos + i : _offset2 = yPos - (size - i);
        position = "".concat(xPos, "-").concat(_offset2);
      }

      if (_DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#set-up-board #space-".concat(position)).classList.contains("boat-placed")) {
        _badHover(xPos, yPos, size, direction);

        return;
      }

      _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#set-up-board #space-".concat(position)).classList.toggle("hover");
    }
  };

  var addHoverAttack = function addHoverAttack(e) {
    var position = "".concat(e.currentTarget.dataset.xpos, "-").concat(e.currentTarget.dataset.ypos);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#computer-board #space-".concat(position)).classList.add("hover");
  };

  var removeHoverAttack = function removeHoverAttack(e) {
    var position = "".concat(e.currentTarget.dataset.xpos, "-").concat(e.currentTarget.dataset.ypos);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#computer-board #space-".concat(position)).classList.remove("hover");
  };

  var displayBoatSetUp = function displayBoatSetUp(e) {
    var shipName = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#ship-name");
    var shipIndex = parseInt(shipName.dataset.index);
    shipName.textContent = _ships_json__WEBPACK_IMPORTED_MODULE_3__[shipIndex].shipName;
    shipName.setAttribute("data-size", _ships_json__WEBPACK_IMPORTED_MODULE_3__[shipIndex].shipSize);
    shipName.setAttribute("data-index", ++shipIndex);

    if (e) {
      hoverSetUp(e);
    }

    if (shipIndex > 5) {
      _EventHandler__WEBPACK_IMPORTED_MODULE_1__.EventHandler.deactivateSpaces("#set-up-board");
    }
  };

  var placePlayerShips = function placePlayerShips(ships) {
    ships.forEach(function (ship) {
      ship.getPosition().forEach(function (position) {
        _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#player-board #space-".concat(position.xPos, "-").concat(position.yPos)).classList.add("boat-placed");
      });
    });
  };

  var fillInAttack = function fillInAttack(x, y, playerName, hit) {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#".concat(playerName, "-board #space-").concat(x, "-").concat(y)).classList.add("attacked");

    if (hit) {
      _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#".concat(playerName, "-board #space-").concat(x, "-").concat(y)).classList.add("hit");
    }
  };

  var markDestroyedShip = function markDestroyedShip(position, playerName) {
    position.forEach(function (space) {
      var spaceElem = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#".concat(playerName, "-board #space-").concat(space.xPos, "-").concat(space.yPos));
      spaceElem.classList.add("destroyed");
      spaceElem.classList.remove("hit");
    });
  };

  var displayMessage = function displayMessage(message) {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#game-instructions").textContent = message;
  };

  var rebuildBoards = function rebuildBoards() {
    var playerBoardWrapper = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#player-board-wrapper");
    playerBoardWrapper.firstElementChild.remove();
    playerBoardWrapper.insertBefore(_makeGrid("player-board"), playerBoardWrapper.lastElementChild);
    var computerBoardWrapper = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#computer-board-wrapper");
    computerBoardWrapper.firstElementChild.remove();
    computerBoardWrapper.insertBefore(_makeGrid("computer-board"), computerBoardWrapper.lastElementChild);
  };

  return {
    activateBoard: activateBoard,
    buildStartingPage: buildStartingPage,
    buildNewGameModal: buildNewGameModal,
    displayBoatSetUp: displayBoatSetUp,
    toggleRotateButton: toggleRotateButton,
    hoverSetUp: hoverSetUp,
    addHoverAttack: addHoverAttack,
    removeHoverAttack: removeHoverAttack,
    placePlayerShips: placePlayerShips,
    fillInAttack: fillInAttack,
    markDestroyedShip: markDestroyedShip,
    displayMessage: displayMessage,
    rebuildBoards: rebuildBoards
  };
}();

/***/ }),

/***/ "./src/battleship/DOMManip.js":
/*!************************************!*\
  !*** ./src/battleship/DOMManip.js ***!
  \************************************/
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

/***/ "./src/battleship/EventHandler.js":
/*!****************************************!*\
  !*** ./src/battleship/EventHandler.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventHandler": () => (/* binding */ EventHandler)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/battleship/index.js");
/* harmony import */ var _BuildPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuildPage */ "./src/battleship/BuildPage.js");
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMManip */ "./src/battleship/DOMManip.js");



var EventHandler = function () {
  var activateNewGameButton = function activateNewGameButton() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.getElement("#new-game-button").addEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.Game.newGame);
  };

  var activateNewGameModal = function activateNewGameModal() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.getElement("#ship-rotate-button").addEventListener("click", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.toggleRotateButton);
    _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.getElement("#start-game-button").addEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.Game.startGame);
  };

  var activateSpaces = function activateSpaces(id) {
    _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.getElements("".concat(id, " .board-space:not(.attacked)")).forEach(function (space) {
      space.addEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.Game.spaceClicked);

      if (id == "#set-up-board") {
        space.addEventListener("mouseover", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverSetUp);
        space.addEventListener("mouseout", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverSetUp);
      } else if (id == "#computer-board") {
        space.addEventListener("mouseover", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.addHoverAttack);
        space.addEventListener("mouseout", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.removeHoverAttack);
      }
    });
  };

  var deactivateSpaces = function deactivateSpaces(id) {
    _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.getElements("".concat(id, " .board-space")).forEach(function (space) {
      space.removeEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.Game.spaceClicked);

      if (id == "#set-up-board") {
        space.removeEventListener("mouseover", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverSetUp);
        space.removeEventListener("mouseout", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverSetUp);
      } else if (id == "#computer-board") {
        space.removeEventListener("mouseover", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverAttack);
        space.removeEventListener("mouseout", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverAttack);
      }
    });
  }; // const deactivateAttackedSpace = space => {
  //     space.removeEventListener("click", Game.spaceClicked);
  //     space.removeEventListener("mouseover", BuildPage.hoverAttack);
  //     space.removeEventListener("mouseout", BuildPage.hoverAttack);
  // };


  return {
    activateNewGameButton: activateNewGameButton,
    activateNewGameModal: activateNewGameModal,
    activateSpaces: activateSpaces,
    deactivateSpaces: deactivateSpaces //deactivateAttackedSpace,

  };
}();

/***/ }),

/***/ "./src/battleship/Gameboard.js":
/*!*************************************!*\
  !*** ./src/battleship/Gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/battleship/Ship.js");

function Board() {
  var _spaces = _initSpaces();

  var _ships = [];
  var _hitList = [];
  var _spaceList = [];

  function _initSpaces() {
    var spaces = [];

    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        spaces.push({
          xPos: i,
          yPos: j,
          attacked: false
        });
      }
    }

    return spaces;
  }

  function getBoard() {
    return _spaces.map(function (x) {
      return x;
    });
  }

  function checkPlace(x, y) {
    return _spaces[_spaces.findIndex(function (element) {
      return element.xPos == x && element.yPos == y;
    })];
  }

  function attackSpace(x, y) {
    _spaces[_spaces.findIndex(function (element) {
      return element.xPos == x && element.yPos == y;
    })].attacked = true;
    var hit = -1;

    _ships.forEach(function (ship, index) {
      if (ship.attackSpace(x, y)) {
        hit = index;
      }
    });

    _hitList.push({
      xPos: x,
      yPos: y
    });

    return hit;
  }

  function addShip(size, x, y, dir, name) {
    _ships.push((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(size, x, y, dir, name));

    for (var i = 0; i < size; i++) {
      if (dir == "right") {
        _spaceList.push({
          xPos: parseInt(x) + i,
          yPos: y
        });
      } else {
        _spaceList.push({
          xPos: x,
          yPos: parseInt(y) + i
        });
      }
    }
  }

  function getShips() {
    return _ships.map(function (x) {
      return x;
    });
  }

  function getHitList() {
    return _hitList.map(function (x) {
      return x;
    });
  }

  function getSpaceList() {
    return _spaceList.map(function (x) {
      return x;
    });
  }

  function allDestroyed() {
    return _ships.every(function (ship) {
      return ship.isDestroyed() == true;
    });
  }

  return {
    getBoard: getBoard,
    checkPlace: checkPlace,
    attackSpace: attackSpace,
    addShip: addShip,
    getShips: getShips,
    getHitList: getHitList,
    getSpaceList: getSpaceList,
    allDestroyed: allDestroyed
  };
}

/***/ }),

/***/ "./src/battleship/Modal.js":
/*!*********************************!*\
  !*** ./src/battleship/Modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMManip */ "./src/battleship/DOMManip.js");



var Modal = function () {
  function displayModal(_x) {
    return _displayModal.apply(this, arguments);
  }

  function _displayModal() {
    _displayModal = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(modal) {
      var modalContainer;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              modalContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.makeNewElement("div", "modal-background", "modal back");
              modalContainer.appendChild(modal);
              Promise.resolve(document.body.appendChild(modalContainer)).then(function () {
                setTimeout(function () {
                  return modalContainer.classList.add("active");
                }, 0);
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _displayModal.apply(this, arguments);
  }

  function closeCurrentModal() {
    return _closeCurrentModal.apply(this, arguments);
  }

  function _closeCurrentModal() {
    _closeCurrentModal = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var modal;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              modal = _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.getElement("#modal-background");
              Promise.resolve(modal.classList.remove("active")).then(setTimeout(function () {
                return modal.remove();
              }, 200));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _closeCurrentModal.apply(this, arguments);
  }

  return {
    displayModal: displayModal,
    closeCurrentModal: closeCurrentModal
  };
}();

/***/ }),

/***/ "./src/battleship/Player.js":
/*!**********************************!*\
  !*** ./src/battleship/Player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/battleship/Gameboard.js");

function Player(name) {
  var _name = name;

  var _board = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  var _lost = false;
  var _isTurn = false;
  var lastResult = "";
  var _attackSuccess = [];

  function getName() {
    return _name;
  }

  function isLost() {
    return _lost;
  }

  function toggleTurn() {
    _isTurn = !_isTurn;
  }

  function getTurn() {
    return _isTurn;
  }

  function addShip(size, x, y, dir, name) {
    _board.addShip(size, x, y, dir, name);
  }

  function attack(x, y) {
    var hitShipIndex = _board.attackSpace(x, y);

    if (_board.allDestroyed()) {
      _lost = true;
    }

    return hitShipIndex;
  }

  function getBoard() {
    return _board;
  }

  function addSuccess(x, y) {
    _attackSuccess.push({
      xPos: x,
      yPos: y
    });
  }

  function getSuccess() {
    return _attackSuccess.map(function (x) {
      return x;
    });
  }

  return {
    getName: getName,
    isLost: isLost,
    toggleTurn: toggleTurn,
    getTurn: getTurn,
    addShip: addShip,
    attack: attack,
    getBoard: getBoard,
    addSuccess: addSuccess,
    getSuccess: getSuccess,
    lastResult: lastResult
  };
}

/***/ }),

/***/ "./src/battleship/Ship.js":
/*!********************************!*\
  !*** ./src/battleship/Ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(size, x, y, dir, name) {
  var _health = Array.from({
    length: size
  }, function () {
    return "good";
  });

  var _destroyed = false;

  var _coordinates = _setStarting(x, y, dir);

  var _name = name;

  function getCurrentHealth() {
    return _health.map(function (x) {
      return x;
    });
  }

  function isDestroyed() {
    return _destroyed;
  }

  function _damage(location) {
    _health[location] = "damage";

    if (_health.every(function (place) {
      return place == "damage";
    })) {
      _destroyed = true;
    }
  }

  function _setStarting(incomingx, incomingy) {
    var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "right";
    var spaces = [];
    var x = parseInt(incomingx);
    var y = parseInt(incomingy);

    for (var i = 0; i < size; i++) {
      if (dir == "right") {
        spaces.push({
          xPos: x + i,
          yPos: y
        });
      } else if (dir == "left") {
        spaces.push({
          xPos: x - i,
          yPos: y
        });
      } else if (dir == "down") {
        spaces.push({
          xPos: x,
          yPos: y + i
        });
      } else if (dir == "up") {
        spaces.push({
          xPos: x,
          yPos: y - i
        });
      }
    }

    return spaces;
  }

  function getPosition() {
    return _coordinates.map(function (x) {
      return x;
    });
  }

  function getName() {
    return _name;
  }

  function attackSpace(x, y) {
    var attackIndex = _coordinates.findIndex(function (element) {
      return element.xPos == x && element.yPos == y;
    });

    if (attackIndex >= 0) {
      _damage(attackIndex);

      return true;
    }

    return false;
  }

  return {
    getCurrentHealth: getCurrentHealth,
    isDestroyed: isDestroyed,
    getPosition: getPosition,
    getName: getName,
    attackSpace: attackSpace
  };
}

/***/ }),

/***/ "./src/battleship/index.js":
/*!*********************************!*\
  !*** ./src/battleship/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/battleship/style.css");
/* harmony import */ var _BuildPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuildPage */ "./src/battleship/BuildPage.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/battleship/Player.js");
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMManip */ "./src/battleship/DOMManip.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ "./src/battleship/Modal.js");
/* harmony import */ var _ships_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ships.json */ "./src/battleship/ships.json");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EventHandler */ "./src/battleship/EventHandler.js");
/* eslint-disable no-unexpected-multiline */

/* eslint-disable no-unused-vars */







var Game = function () {
  var _humanPlayer;

  var _computerPlayer;

  var newGame = function newGame() {
    _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.buildNewGameModal();
    _humanPlayer = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])("player");
    _computerPlayer = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])("computer");
  };

  var spaceClicked = function spaceClicked(e) {
    e.currentTarget.parentElement.id == "set-up-board" ? _placeBoat(e) : _attackComputerPlayer(e);
  };

  var _switchTurns = function _switchTurns() {
    _humanPlayer.toggleTurn();

    _computerPlayer.toggleTurn();
  };

  var _placeBoat = function _placeBoat(e) {
    var hoverSpaces = _DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElements(".board-space.hover");
    var badHoverSpaces = _DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElements(".board-space.bad-hover");

    if (badHoverSpaces.length == 0) {
      hoverSpaces.forEach(function (space) {
        space.classList.add("boat-placed");
        space.classList.toggle("hover");
      });
      var shipSize = _DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#ship-name").dataset.size;
      var shipName = _DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#ship-name").textContent;
      var shipDirection = _DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#ship-rotate-button").dataset.direction;

      _humanPlayer.addShip(shipSize, hoverSpaces[0].dataset.xpos, hoverSpaces[0].dataset.ypos, shipDirection, shipName);

      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayBoatSetUp(e);
    }
  };

  var _isAttackValid = function _isAttackValid(player, x, y) {
    var valid = true;
    player.getBoard().getHitList().forEach(function (space) {
      if (space.xPos == x && space.yPos == y) {
        valid = false;
      }
    });
    return valid;
  };

  var _isAttackHit = function _isAttackHit(player, x, y) {
    var hit = false;

    if (player.getBoard().getSpaceList().some(function (space) {
      return space.xPos == x && space.yPos == y;
    })) {
      hit = true;
    }

    return hit;
  };

  var _checkDestroyed = function _checkDestroyed(player, attackedShip) {
    if (player.getBoard().getShips()[attackedShip].isDestroyed()) {
      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.markDestroyedShip(player.getBoard().getShips()[attackedShip].getPosition(), player.getName());
      return true;
    }

    return false;
  };

  var _attackPlayer = function _attackPlayer(player, x, y) {
    var playerName = player.getName();

    if (_isAttackValid(player, x, y)) {
      var attackedShip = player.attack(x, y);

      var hit = _isAttackHit(player, x, y);

      player.lastResult = hit;

      if (hit) {
        player.addSuccess(x, y);
      }

      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.fillInAttack(x, y, playerName, hit);

      if (attackedShip >= 0) {
        if (_checkDestroyed(player, attackedShip)) {
          player.lastResult = player.getBoard().getShips()[attackedShip].getName();
        }
      }

      return true;
    }

    return false;
  };

  var _displayLastResult = function _displayLastResult(player) {
    var lastResult = player.lastResult;

    if (player == _computerPlayer) {
      lastResult == true ? _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("You fire at the computer... It's a Hit!") : lastResult == false ? _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("You fire at the computer... It's a Miss...") : _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("You sunk their ".concat(lastResult, "!"));
    } else {
      lastResult == true ? _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("The computer fires at you... It's a Hit...") : lastResult == false ? _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("The computer fires at you... It's a Miss!") : _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("They sunk your ".concat(lastResult, "!"));
    }
  };

  var _attackComputerPlayer = function _attackComputerPlayer(e) {
    var xPos = e.currentTarget.dataset.xpos;
    var yPos = e.currentTarget.dataset.ypos;

    _attackPlayer(_computerPlayer, xPos, yPos);

    _displayLastResult(_computerPlayer);

    _EventHandler__WEBPACK_IMPORTED_MODULE_6__.EventHandler.deactivateSpaces("#computer-board");
    _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.removeHoverAttack(e);

    _switchTurns();

    _playTurn();
  }; //for testing only


  var _placeComputerShips = function _placeComputerShips() {
    _computerPlayer.getBoard().getShips().forEach(function (ship) {
      ship.getPosition().forEach(function (position) {
        _DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#computer-board #space-".concat(position.xPos, "-").concat(position.yPos)).classList.add("boat-placed");
      });
    });
  };

  var _generateComputerShips = function _generateComputerShips() {
    var i = 0; //go through each ship

    var _loop = function _loop() {
      var xPos = void 0;
      var yPos = void 0;
      var direction = void 0; //randomly pick a direction either right or down

      Math.floor(Math.random() * 2) == 0 ? direction = "right" : direction = "down";

      if (direction == "right") {
        //restrict the random so it doesn't pick a starting place that would put the pieces outside
        //of the grid
        xPos = Math.floor(Math.random() * (10 - _ships_json__WEBPACK_IMPORTED_MODULE_5__[i].shipSize));
        yPos = Math.floor(Math.random() * 10);
      } else {
        xPos = Math.floor(Math.random() * 10);
        yPos = Math.floor(Math.random() * (10 - _ships_json__WEBPACK_IMPORTED_MODULE_5__[i].shipSize));
      }

      var taken = false;
      var valid = true;

      _computerPlayer.getBoard().getShips().forEach(function (ship) {
        ship.getPosition().forEach(function (pos) {
          //look at each of the current ships
          for (var j = 0; j < _ships_json__WEBPACK_IMPORTED_MODULE_5__[i].shipSize; j++) {
            //and compare their coordinates to the possible coordinates of this new ship
            if (direction == "right") {
              if (xPos + j == pos.xPos && yPos == pos.yPos) {
                //if it's already taken, can't submit the new ship
                taken = true;
              }
            }

            if (direction == "down") {
              if (xPos == pos.xPos && yPos + j == pos.yPos) {
                taken = true;
              }
            }
          }
        });
      }); //if the space is not already taken, add the ship to the Player's board


      if (!taken) {
        _computerPlayer.addShip(_ships_json__WEBPACK_IMPORTED_MODULE_5__[i].shipSize, xPos, yPos, direction, _ships_json__WEBPACK_IMPORTED_MODULE_5__[i].shipName);

        console.log(_computerPlayer.getBoard().getShips()[i].getPosition()); //go to the next ship in the array

        i++;
      }
    };

    while (i < _ships_json__WEBPACK_IMPORTED_MODULE_5__.length - 1) {
      _loop();
    } //_placeComputerShips();

  };

  var _isAttacked = function _isAttacked(x, y) {
    if (_DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#player-board #space-".concat(x, "-").concat(y)).classList.contains("attacked")) {
      return true;
    }
  };

  var _isHit = function _isHit(x, y) {
    if (_DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#player-board #space-".concat(x, "-").concat(y)).classList.contains("hit")) {
      return true;
    }
  };

  var _isDestroyed = function _isDestroyed(x, y) {
    if (_DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#player-board #space-".concat(x, "-").concat(y)).classList.contains("destroyed")) {
      return true;
    }
  };

  var _checkAround = function _checkAround(lastHit) {
    var nextHit = {
      xPos: lastHit.xPos,
      yPos: lastHit.yPos
    };

    if (lastHit.xPos != 9) {
      nextHit = {
        xPos: lastHit.xPos + 1,
        yPos: lastHit.yPos
      };
    }

    if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
      return nextHit;
    } else if (lastHit.xPos != 0) {
      nextHit = {
        xPos: lastHit.xPos - 1,
        yPos: lastHit.yPos
      };
    }

    if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
      return nextHit;
    } else if (lastHit.yPos != 9) {
      nextHit = {
        xPos: lastHit.xPos,
        yPos: lastHit.yPos + 1
      };
    }

    if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
      return nextHit;
    } else if (lastHit.yPos != 0) {
      nextHit = {
        xPos: lastHit.xPos,
        yPos: lastHit.yPos - 1
      };
    }

    if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
      return nextHit;
    }

    return false;
  };

  var _checkInLine = function _checkInLine(position) {
    var oppPos;
    var checkX;
    var checkY;
    var stop1;
    var stop2;
    var checkPos = {
      xPos: position.xPos + 1,
      yPos: position.yPos
    };

    if (checkPos.xPos == 10) {
      checkX = checkPos.xPos;
      checkY = checkPos.yPos;

      if (checkY + 1 < 10) {
        _isHit(checkX - 1, checkY + 1) ? stop1 = true : stop1 = false;
      }

      if (checkY - 1 >= 0) {
        _isHit(checkX - 1, checkY - 1) ? stop2 = true : stop2 = false;
      }

      if (!stop1 && !stop2) {
        oppPos = {
          xPos: position.xPos - 1,
          yPos: position.yPos
        };

        if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
          return oppPos;
        }
      }
    } else if (_isHit(checkPos.xPos, checkPos.yPos)) {
      oppPos = {
        xPos: position.xPos - 1,
        yPos: position.yPos
      };

      if (oppPos.xPos >= 0) {
        if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
          return oppPos;
        }
      }
    }

    checkPos = {
      xPos: position.xPos - 1,
      yPos: position.yPos
    };

    if (checkPos.xPos == -1) {
      checkX = checkPos.xPos;
      checkY = checkPos.yPos;

      if (checkY + 1 < 10) {
        _isHit(checkX + 1, checkY + 1) ? stop1 = true : stop1 = false;
      }

      if (checkY - 1 >= 0) {
        _isHit(checkX + 1, checkY - 1) ? stop2 = true : stop2 = false;
      }

      if (!stop1 && !stop2) {
        oppPos = {
          xPos: position.xPos + 1,
          yPos: position.yPos
        };

        if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
          return oppPos;
        }
      }
    } else if (_isHit(checkPos.xPos, checkPos.yPos)) {
      oppPos = {
        xPos: position.xPos + 1,
        yPos: position.yPos
      };

      if (oppPos.xPos < 10) {
        if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
          return oppPos;
        }
      }
    }

    checkPos = {
      xPos: position.xPos,
      yPos: position.yPos + 1
    };

    if (checkPos.yPos == 10) {
      checkX = checkPos.xPos;
      checkY = checkPos.yPos;

      if (checkX + 1 < 10) {
        _isHit(checkX + 1, checkY - 1) ? stop1 = true : stop1 = false;
      }

      if (checkX - 1 >= 0) {
        _isHit(checkX - 1, checkY - 1) ? stop2 = true : stop2 = false;
      }

      if (!stop1 && !stop2) {
        oppPos = {
          xPos: position.xPos,
          yPos: position.yPos - 1
        };

        if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
          return oppPos;
        }
      }
    } else if (_isHit(checkPos.xPos, checkPos.yPos)) {
      oppPos = {
        xPos: position.xPos,
        yPos: position.yPos - 1
      };

      if (oppPos.yPos >= 0) {
        if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
          return oppPos;
        }
      }
    }

    checkPos = {
      xPos: position.xPos,
      yPos: position.yPos - 1
    };

    if (checkPos.yPos == -1) {
      checkX = checkPos.xPos;
      checkY = checkPos.yPos;

      if (checkX + 1 < 10) {
        _isHit(checkX + 1, checkY + 1) ? stop1 = true : stop1 = false;
      }

      if (checkX - 1 >= 0) {
        _isHit(checkX - 1, checkY + 1) ? stop2 = true : stop2 = false;
      }

      if (!stop1 && !stop2) {
        oppPos = {
          xPos: position.xPos,
          yPos: position.yPos + 1
        };

        if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
          return oppPos;
        }
      }
    } else if (_isHit(checkPos.xPos, checkPos.yPos)) {
      oppPos = {
        xPos: position.xPos,
        yPos: position.yPos + 1
      };

      if (oppPos.yPos < 10) {
        if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
          return oppPos;
        }
      }
    }
  }; // const _checkInLine = (lastHit, previousHit) => {
  //     let nextHit;
  //     if (lastHit.xPos == previousHit.xPos + 1) {
  //         nextHit = { xPos: lastHit.xPos + 1, yPos: lastHit.yPos };
  //         if (nextHit.xPos != 10) {
  //             if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
  //                 return nextHit;
  //             }
  //         }
  //     }
  //     if (lastHit.xPos == previousHit.xPos - 1) {
  //         nextHit = { xPos: lastHit.xPos - 1, yPos: lastHit.yPos };
  //         if (nextHit.xPos != -1) {
  //             if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
  //                 return nextHit;
  //             }
  //         }
  //     }
  //     if (lastHit.yPos == previousHit.yPos + 1) {
  //         nextHit = { xPos: lastHit.xPos, yPos: lastHit.yPos + 1 };
  //         if (nextHit.yPos != 10) {
  //             if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
  //                 return nextHit;
  //             }
  //         }
  //     }
  //     if (lastHit.yPos == previousHit.yPos - 1) {
  //         nextHit = { xPos: lastHit.xPos, yPos: lastHit.yPos - 1 };
  //         if (nextHit.yPos != -1) {
  //             if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
  //                 return nextHit;
  //             }
  //         }
  //     }
  // };


  var _chooseComputerSpot = function _chooseComputerSpot() {
    var successList = _humanPlayer.getSuccess();

    if (successList.length > 0) {
      var i = 1;

      while (i <= successList.length) {
        var hitCheck = successList[successList.length - i];
        var lastHit = successList[successList.length - 1];
        var nextHit = void 0;

        if (successList.length - i - 1 < 0) {
          if (!_isDestroyed(lastHit.xPos, lastHit.yPos)) {
            nextHit = _checkInLine(hitCheck);

            if (!nextHit) {
              nextHit = _checkAround(lastHit);
            }
          }
        } else {
          if (!_isDestroyed(hitCheck.xPos, hitCheck.yPos)) {
            nextHit = _checkInLine(hitCheck);
          }
        }

        if (nextHit) {
          return nextHit;
        } else {
          i++;
        }
      }
    }

    var hits = _DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElements("#player-board .hit");

    if (hits.length > 0) {
      return _checkAround({
        xPos: parseInt(hits[0].dataset.xpos),
        yPos: parseInt(hits[0].dataset.ypos)
      });
    }

    return {
      xPos: Math.floor(Math.random() * 10),
      yPos: Math.floor(Math.random() * 10)
    };
  };

  var _computerPlayersTurn = function _computerPlayersTurn() {
    var playedValid = false;

    while (!playedValid) {
      var attackPosition = _chooseComputerSpot();

      playedValid = _attackPlayer(_humanPlayer, attackPosition.xPos, attackPosition.yPos);
    }

    _displayLastResult(_humanPlayer);

    _switchTurns();
  };

  var _randomPause = function _randomPause(minLength, maxLength) {
    var pauseLength = Math.floor(Math.random() * (maxLength - minLength) + minLength);
    return new Promise(function (resolve) {
      return setTimeout(resolve, pauseLength);
    });
  };

  var _coinFlip = function _coinFlip() {
    return Math.floor(Math.random() * 2);
  };

  var _chooseTurn = function _chooseTurn() {
    if (_coinFlip()) {
      _humanPlayer.toggleTurn();

      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("Flipping Coin... Player goes first.");
    } else {
      _computerPlayer.toggleTurn();

      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("Flipping Coin... Computer goes first.");
    }
  };

  var _playTurn = function _playTurn() {
    if (_humanPlayer.isLost()) {
      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("The computer has destroyed your entire fleet... Play Again?");
    } else if (_computerPlayer.isLost()) {
      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("You've successfully destroyed all of the computer's ships! Play Again?");
    } else {
      if (_humanPlayer.getTurn()) {
        _EventHandler__WEBPACK_IMPORTED_MODULE_6__.EventHandler.activateSpaces("#computer-board");
      } else {
        _randomPause(500, 500).then(function () {
          return _computerPlayersTurn();
        }).then(function () {
          return _playTurn();
        });
      }
    }
  };

  var startGame = function startGame() {
    if (_DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#ship-name").dataset.index == 6) {
      Promise.resolve(_Modal__WEBPACK_IMPORTED_MODULE_4__.Modal.closeCurrentModal());
      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.rebuildBoards();
      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.placePlayerShips(_humanPlayer.getBoard().getShips());

      _generateComputerShips();

      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.activateBoard("#computer-board");

      _chooseTurn();

      _playTurn();
    } else {
      var startGameButton = _DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#start-game-button");
      startGameButton.setCustomValidity("");
      startGameButton.setCustomValidity("Please place all of your ships");
      startGameButton.reportValidity();
    }
  };

  return {
    newGame: newGame,
    spaceClicked: spaceClicked,
    startGame: startGame
  };
}();

var initPage = function () {
  Promise.resolve(_BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.buildStartingPage());
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/battleship/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/battleship/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #e6d5b8;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #1b1a17;\n}\n\n#header {\n    height: 72px;\n    background-color: #e45826;\n    color: #1b1a17;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: -webkit-fill-available;\n    background-color: inherit;\n    min-height: inherit;\n}\n\nbutton {\n    border: 2px solid #1b1a17;\n    border-radius: 20px;\n    font-size: 20px;\n    padding: 4px 16px;\n}\nbutton:hover {\n    filter: brightness(80%);\n}\nbutton:active {\n    filter: brightness(60%);\n}\n\n#game-container {\n    background-color: #f0a500;\n    width: 70vw;\n    min-height: 60vh;\n    margin-top: 150px;\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 50px;\n    padding: 60px;\n    align-items: center;\n}\n#game-instructions {\n    text-align: center;\n    background-color: #e45826;\n    border-radius: 30px;\n    padding: 10px;\n}\n#boards-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: inherit;\n    justify-content: space-evenly;\n}\n.board-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.board {\n    width: 300px;\n    height: 300px;\n    display: grid;\n    grid-template-columns: repeat(10, 10% [col-start]);\n    grid-template-rows: repeat(10, 10% [row-start]);\n    background-color: #fff7ea;\n    border: 2px solid black;\n}\n.board-space {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid gray;\n}\n\n.board.active .hover.board-space:not(.attacked) {\n    background-color: #9eff9e;\n    border: 1px solid #4a804a;\n}\n.board-space.boat-placed {\n    background-color: #9ed3ff;\n    border: 1px solid #4a6880;\n}\n.board.active .board-space.bad-hover {\n    background-color: #ff9e9e;\n    border: 1px solid #804a4a;\n}\n.board-space.attacked {\n    background-color: #fdff9e;\n    border: 1px solid #7c804a;\n}\n.board-space.attacked::before {\n    color: #7c804a;\n    font: var(--fa-font-solid);\n    content: \"\\f192\";\n}\n.board-space.attacked.hit::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f111\";\n}\n.board-space.destroyed {\n    background-color: #ff9e9e;\n    border-color: #804a4a;\n}\n.board-space.destroyed::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f057\";\n}\n\n.board-label {\n    font-size: 30px;\n    margin-top: 10px;\n}\n.page-button {\n    background-color: #e45826;\n}\n\n.modal.back {\n    opacity: 0;\n    position: fixed;\n    z-index: -1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.6);\n    transition: 0.2s linear;\n    display: flex;\n    justify-content: center;\n}\n.modal.content {\n    margin-top: 50px;\n    width: 600px;\n    background-color: #e45826;\n    border: 2px solid #1b1a17;\n    border-radius: 30px;\n    height: fit-content;\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.modal-title {\n    text-align: center;\n    background-color: #f0a500;\n    border-radius: 30px;\n    padding: 10px;\n    font-size: 24px;\n    margin: 0px 40px;\n}\n.modal.active {\n    opacity: 1;\n    z-index: 2;\n}\n.modal-button {\n    background-color: #f0a500;\n}\n\n#ship-name {\n    font-size: 22px;\n    font-weight: bold;\n}\n", "",{"version":3,"sources":["webpack://./src/battleship/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,4DAA4D;IAC5D,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,WAAW;IACX,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,aAAa;IACb,eAAe;IACf,cAAc;IACd,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,kDAAkD;IAClD,+CAA+C;IAC/C,yBAAyB;IACzB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,cAAc;IACd,0BAA0B;IAC1B,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,0BAA0B;IAC1B,gBAAgB;AACpB;AACA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;AACA;IACI,cAAc;IACd,0BAA0B;IAC1B,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,UAAU;IACV,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,oCAAoC;IACpC,uBAAuB;IACvB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;IACzB,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,UAAU;IACV,UAAU;AACd;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB","sourcesContent":["body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #e6d5b8;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #1b1a17;\n}\n\n#header {\n    height: 72px;\n    background-color: #e45826;\n    color: #1b1a17;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: -webkit-fill-available;\n    background-color: inherit;\n    min-height: inherit;\n}\n\nbutton {\n    border: 2px solid #1b1a17;\n    border-radius: 20px;\n    font-size: 20px;\n    padding: 4px 16px;\n}\nbutton:hover {\n    filter: brightness(80%);\n}\nbutton:active {\n    filter: brightness(60%);\n}\n\n#game-container {\n    background-color: #f0a500;\n    width: 70vw;\n    min-height: 60vh;\n    margin-top: 150px;\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 50px;\n    padding: 60px;\n    align-items: center;\n}\n#game-instructions {\n    text-align: center;\n    background-color: #e45826;\n    border-radius: 30px;\n    padding: 10px;\n}\n#boards-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: inherit;\n    justify-content: space-evenly;\n}\n.board-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.board {\n    width: 300px;\n    height: 300px;\n    display: grid;\n    grid-template-columns: repeat(10, 10% [col-start]);\n    grid-template-rows: repeat(10, 10% [row-start]);\n    background-color: #fff7ea;\n    border: 2px solid black;\n}\n.board-space {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid gray;\n}\n\n.board.active .hover.board-space:not(.attacked) {\n    background-color: #9eff9e;\n    border: 1px solid #4a804a;\n}\n.board-space.boat-placed {\n    background-color: #9ed3ff;\n    border: 1px solid #4a6880;\n}\n.board.active .board-space.bad-hover {\n    background-color: #ff9e9e;\n    border: 1px solid #804a4a;\n}\n.board-space.attacked {\n    background-color: #fdff9e;\n    border: 1px solid #7c804a;\n}\n.board-space.attacked::before {\n    color: #7c804a;\n    font: var(--fa-font-solid);\n    content: \"\\f192\";\n}\n.board-space.attacked.hit::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f111\";\n}\n.board-space.destroyed {\n    background-color: #ff9e9e;\n    border-color: #804a4a;\n}\n.board-space.destroyed::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f057\";\n}\n\n.board-label {\n    font-size: 30px;\n    margin-top: 10px;\n}\n.page-button {\n    background-color: #e45826;\n}\n\n.modal.back {\n    opacity: 0;\n    position: fixed;\n    z-index: -1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.6);\n    transition: 0.2s linear;\n    display: flex;\n    justify-content: center;\n}\n.modal.content {\n    margin-top: 50px;\n    width: 600px;\n    background-color: #e45826;\n    border: 2px solid #1b1a17;\n    border-radius: 30px;\n    height: fit-content;\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.modal-title {\n    text-align: center;\n    background-color: #f0a500;\n    border-radius: 30px;\n    padding: 10px;\n    font-size: 24px;\n    margin: 0px 40px;\n}\n.modal.active {\n    opacity: 1;\n    z-index: 2;\n}\n.modal-button {\n    background-color: #f0a500;\n}\n\n#ship-name {\n    font-size: 22px;\n    font-weight: bold;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/battleship/style.css":
/*!**********************************!*\
  !*** ./src/battleship/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/battleship/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/battleship/ships.json":
/*!***********************************!*\
  !*** ./src/battleship/ships.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"shipName":"Carrier","shipSize":5},{"shipName":"Battleship","shipSize":4},{"shipName":"Cruiser","shipSize":3},{"shipName":"Submarine","shipSize":3},{"shipName":"Destroyer","shipSize":2},{"shipName":"All Ships Placed","shipSize":0}]');

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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"./battleship/index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_css-loader_dist_runtime_-86adfe"], () => (__webpack_require__("./src/battleship/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCN0U7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYmF0dGxlc2hpcC9CdWlsZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2JhdHRsZXNoaXAvRE9NTWFuaXAuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2JhdHRsZXNoaXAvRXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9iYXR0bGVzaGlwL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYmF0dGxlc2hpcC9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYmF0dGxlc2hpcC9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2JhdHRsZXNoaXAvU2hpcC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYmF0dGxlc2hpcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYmF0dGxlc2hpcC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2JhdHRsZXNoaXAvc3R5bGUuY3NzP2JlYjgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IERPTU1hbmlwIH0gZnJvbSBcIi4vRE9NTWFuaXBcIjtcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0V2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi9Nb2RhbFwiO1xuaW1wb3J0IHNoaXBBcnJheSBmcm9tIFwiLi9zaGlwcy5qc29uXCI7XG5cbmV4cG9ydCBjb25zdCBCdWlsZFBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2YXRlQm9hcmQgPSBpZCA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoaWQpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfTtcbiAgICBjb25zdCBfbWFrZUdyaWQgPSBpZCA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBpZCwgXCJib2FyZFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBgc3BhY2UtJHtqfS0ke2l9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9hcmQtc3BhY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFwiZGF0YS14UG9zXCI6IGogfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJkYXRhLXlQb3NcIjogaSB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncmlkQ29udGFpbmVyO1xuICAgIH07XG4gICAgY29uc3QgYnVpbGRTdGFydGluZ1BhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGVyXCIsIFwiXCIsIFwiQmF0dGxlc2hpcFwiKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiZ2FtZS1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGluc3RydWN0aW9ucyA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwiZ2FtZS1pbnN0cnVjdGlvbnNcIixcbiAgICAgICAgICAgIFwiYm9hcmQtbGFiZWxcIixcbiAgICAgICAgICAgIFwiVGhlIGdhbWUgaXMgc2ltcGxlOiBkZXN0cm95IHlvdXIgb3Bwb25lbnQgYmVmb3JlIHRoZXkgZGVzdHJveSB5b3UuXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYm9hcmRzQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJib2FyZHMtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZFdyYXBwZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInBsYXllci1ib2FyZC13cmFwcGVyXCIsIFwiYm9hcmQtd3JhcHBlclwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBfbWFrZUdyaWQoXCJwbGF5ZXItYm9hcmRcIik7XG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkTGFiZWwgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBcInBsYXllci1ib2FyZC1sYWJlbFwiLFxuICAgICAgICAgICAgXCJib2FyZC1sYWJlbFwiLFxuICAgICAgICAgICAgXCJQbGF5ZXIncyBCb2FyZFwiXG4gICAgICAgICk7XG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKHBsYXllckJvYXJkV3JhcHBlciwgcGxheWVyQm9hcmQsIHBsYXllckJvYXJkTGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRXcmFwcGVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgXCJjb21wdXRlci1ib2FyZC13cmFwcGVyXCIsXG4gICAgICAgICAgICBcImJvYXJkLXdyYXBwZXJcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gX21ha2VHcmlkKFwiY29tcHV0ZXItYm9hcmRcIik7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRMYWJlbCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwiY29tcHV0ZXItYm9hcmQtbGFiZWxcIixcbiAgICAgICAgICAgIFwiYm9hcmQtbGFiZWxcIixcbiAgICAgICAgICAgIFwiQ29tcHV0ZXIncyBCb2FyZFwiXG4gICAgICAgICk7XG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGNvbXB1dGVyQm9hcmRXcmFwcGVyLCBjb21wdXRlckJvYXJkLCBjb21wdXRlckJvYXJkTGFiZWwpO1xuICAgICAgICBjb25zdCBuZXdHYW1lQnV0dG9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJuZXctZ2FtZS1idXR0b25cIiwgXCJwYWdlLWJ1dHRvblwiLCBcIk5ldyBHYW1lXCIpO1xuXG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGJvYXJkc0NvbnRhaW5lciwgcGxheWVyQm9hcmRXcmFwcGVyLCBjb21wdXRlckJvYXJkV3JhcHBlcik7XG5cbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oZ2FtZUNvbnRhaW5lciwgaW5zdHJ1Y3Rpb25zLCBib2FyZHNDb250YWluZXIsIG5ld0dhbWVCdXR0b24pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGdhbWVDb250YWluZXIpO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihkb2N1bWVudC5ib2R5LCBoZWFkZXIsIGNvbnRlbnQpO1xuXG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZU5ld0dhbWVCdXR0b24oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYnVpbGROZXdHYW1lTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0dhbWVNb2RhbCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwibmV3LWdhbWUtbW9kYWxcIiwgXCJtb2RhbCBjb250ZW50XCIpO1xuICAgICAgICBjb25zdCBuZXdHYW1lVGl0bGUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBcIm5ldy1nYW1lLXRpdGxlXCIsXG4gICAgICAgICAgICBcIm1vZGFsLXRpdGxlXCIsXG4gICAgICAgICAgICBcIlBsZWFzZSBwbGFjZSB5b3VyIHNoaXBzIG9uIHRoZSBncmlkXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInNoaXAtbmFtZVwiLCBcInNoaXAtbmFtZVwiLCBcIlwiLCB7XG4gICAgICAgICAgICBcImRhdGEtaW5kZXhcIjogMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIFwic2hpcC1yb3RhdGUtYnV0dG9uXCIsXG4gICAgICAgICAgICBcIm1vZGFsLWJ1dHRvblwiLFxuICAgICAgICAgICAgXCJSb3RhdGVcIixcbiAgICAgICAgICAgIHsgXCJkYXRhLWRpcmVjdGlvblwiOiBcInJpZ2h0XCIgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzZXRVcEdyaWQgPSBfbWFrZUdyaWQoXCJzZXQtdXAtYm9hcmRcIik7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRHYW1lQnV0dG9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJzdGFydC1nYW1lLWJ1dHRvblwiLFxuICAgICAgICAgICAgXCJtb2RhbC1idXR0b25cIixcbiAgICAgICAgICAgIFwiU3RhcnQgR2FtZVwiXG4gICAgICAgICk7XG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKFxuICAgICAgICAgICAgbmV3R2FtZU1vZGFsLFxuICAgICAgICAgICAgbmV3R2FtZVRpdGxlLFxuICAgICAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgICAgICByb3RhdGVCdXR0b24sXG4gICAgICAgICAgICBzZXRVcEdyaWQsXG4gICAgICAgICAgICBzdGFydEdhbWVCdXR0b25cbiAgICAgICAgKTtcblxuICAgICAgICBQcm9taXNlLnJlc29sdmUoTW9kYWwuZGlzcGxheU1vZGFsKG5ld0dhbWVNb2RhbCkpXG4gICAgICAgICAgICAudGhlbihFdmVudEhhbmRsZXIuYWN0aXZhdGVOZXdHYW1lTW9kYWwoKSlcbiAgICAgICAgICAgIC50aGVuKEV2ZW50SGFuZGxlci5hY3RpdmF0ZVNwYWNlcyhcIiNzZXQtdXAtYm9hcmRcIikpXG4gICAgICAgICAgICAudGhlbihkaXNwbGF5Qm9hdFNldFVwKCkpXG4gICAgICAgICAgICAudGhlbihhY3RpdmF0ZUJvYXJkKFwiI3NldC11cC1ib2FyZFwiKSk7XG4gICAgfTtcbiAgICBjb25zdCB0b2dnbGVSb3RhdGVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1yb3RhdGUtYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSByb3RhdGVCdXR0b24uZGF0YXNldC5kaXJlY3Rpb247XG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9PSBcInJpZ2h0XCJcbiAgICAgICAgICAgID8gKHJvdGF0ZUJ1dHRvbi5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiZG93blwiKVxuICAgICAgICAgICAgOiAocm90YXRlQnV0dG9uLmRhdGFzZXQuZGlyZWN0aW9uID0gXCJyaWdodFwiKTtcbiAgICB9O1xuICAgIGNvbnN0IF9iYWRIb3ZlciA9ICh4UG9zLCB5UG9zLCBzaXplLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbjtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldDtcbiAgICAgICAgICAgICAgICB4UG9zICsgaSA8IDEwID8gKG9mZnNldCA9IHhQb3MgKyBpKSA6IChvZmZzZXQgPSB4UG9zIC0gKHNpemUgLSBpKSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBgJHtvZmZzZXR9LSR7eVBvc31gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0O1xuICAgICAgICAgICAgICAgIHlQb3MgKyBpIDwgMTAgPyAob2Zmc2V0ID0geVBvcyArIGkpIDogKG9mZnNldCA9IHlQb3MgLSAoc2l6ZSAtIGkpKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGAke3hQb3N9LSR7b2Zmc2V0fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KGAjc2V0LXVwLWJvYXJkICNzcGFjZS0ke3Bvc2l0aW9ufWApLmNsYXNzTGlzdC50b2dnbGUoXCJiYWQtaG92ZXJcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaG92ZXJTZXRVcCA9IGUgPT4ge1xuICAgICAgICBjb25zdCBzaXplID0gcGFyc2VJbnQoRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzaGlwLW5hbWVcIikuZGF0YXNldC5zaXplKTtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzaGlwLXJvdGF0ZS1idXR0b25cIikuZGF0YXNldC5kaXJlY3Rpb247XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgeFBvcyA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lnhwb3MpO1xuICAgICAgICAgICAgbGV0IHlQb3MgPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC55cG9zKTtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbjtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldDtcbiAgICAgICAgICAgICAgICB4UG9zICsgaSA8IDEwID8gKG9mZnNldCA9IHhQb3MgKyBpKSA6IChvZmZzZXQgPSB4UG9zIC0gKHNpemUgLSBpKSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBgJHtvZmZzZXR9LSR7eVBvc31gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0O1xuICAgICAgICAgICAgICAgIHlQb3MgKyBpIDwgMTAgPyAob2Zmc2V0ID0geVBvcyArIGkpIDogKG9mZnNldCA9IHlQb3MgLSAoc2l6ZSAtIGkpKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGAke3hQb3N9LSR7b2Zmc2V0fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoRE9NTWFuaXAuZ2V0RWxlbWVudChgI3NldC11cC1ib2FyZCAjc3BhY2UtJHtwb3NpdGlvbn1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJib2F0LXBsYWNlZFwiKSkge1xuICAgICAgICAgICAgICAgIF9iYWRIb3Zlcih4UG9zLCB5UG9zLCBzaXplLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoYCNzZXQtdXAtYm9hcmQgI3NwYWNlLSR7cG9zaXRpb259YCkuY2xhc3NMaXN0LnRvZ2dsZShcImhvdmVyXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBhZGRIb3ZlckF0dGFjayA9IGUgPT4ge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGAke2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lnhwb3N9LSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueXBvc31gO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KGAjY29tcHV0ZXItYm9hcmQgI3NwYWNlLSR7cG9zaXRpb259YCkuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlSG92ZXJBdHRhY2sgPSBlID0+IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBgJHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC54cG9zfS0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lnlwb3N9YDtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChgI2NvbXB1dGVyLWJvYXJkICNzcGFjZS0ke3Bvc2l0aW9ufWApLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlCb2F0U2V0VXAgPSBlID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI3NoaXAtbmFtZVwiKTtcbiAgICAgICAgbGV0IHNoaXBJbmRleCA9IHBhcnNlSW50KHNoaXBOYW1lLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICBzaGlwTmFtZS50ZXh0Q29udGVudCA9IHNoaXBBcnJheVtzaGlwSW5kZXhdLnNoaXBOYW1lO1xuICAgICAgICBzaGlwTmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNpemVcIiwgc2hpcEFycmF5W3NoaXBJbmRleF0uc2hpcFNpemUpO1xuICAgICAgICBzaGlwTmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsICsrc2hpcEluZGV4KTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGhvdmVyU2V0VXAoZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoaXBJbmRleCA+IDUpIHtcbiAgICAgICAgICAgIEV2ZW50SGFuZGxlci5kZWFjdGl2YXRlU3BhY2VzKFwiI3NldC11cC1ib2FyZFwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBwbGFjZVBsYXllclNoaXBzID0gc2hpcHMgPT4ge1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgc2hpcC5nZXRQb3NpdGlvbigpLmZvckVhY2gocG9zaXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoYCNwbGF5ZXItYm9hcmQgI3NwYWNlLSR7cG9zaXRpb24ueFBvc30tJHtwb3NpdGlvbi55UG9zfWApLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgICAgICAgIFwiYm9hdC1wbGFjZWRcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBmaWxsSW5BdHRhY2sgPSAoeCwgeSwgcGxheWVyTmFtZSwgaGl0KSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoYCMke3BsYXllck5hbWV9LWJvYXJkICNzcGFjZS0ke3h9LSR7eX1gKS5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrZWRcIik7XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoYCMke3BsYXllck5hbWV9LWJvYXJkICNzcGFjZS0ke3h9LSR7eX1gKS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBtYXJrRGVzdHJveWVkU2hpcCA9IChwb3NpdGlvbiwgcGxheWVyTmFtZSkgPT4ge1xuICAgICAgICBwb3NpdGlvbi5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNlRWxlbSA9IERPTU1hbmlwLmdldEVsZW1lbnQoYCMke3BsYXllck5hbWV9LWJvYXJkICNzcGFjZS0ke3NwYWNlLnhQb3N9LSR7c3BhY2UueVBvc31gKTtcbiAgICAgICAgICAgIHNwYWNlRWxlbS5jbGFzc0xpc3QuYWRkKFwiZGVzdHJveWVkXCIpO1xuICAgICAgICAgICAgc3BhY2VFbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaXRcIik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheU1lc3NhZ2UgPSBtZXNzYWdlID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNnYW1lLWluc3RydWN0aW9uc1wiKS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlYnVpbGRCb2FyZHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkV3JhcHBlciA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjcGxheWVyLWJvYXJkLXdyYXBwZXJcIik7XG4gICAgICAgIHBsYXllckJvYXJkV3JhcHBlci5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgcGxheWVyQm9hcmRXcmFwcGVyLmluc2VydEJlZm9yZShfbWFrZUdyaWQoXCJwbGF5ZXItYm9hcmRcIiksIHBsYXllckJvYXJkV3JhcHBlci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZFdyYXBwZXIgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NvbXB1dGVyLWJvYXJkLXdyYXBwZXJcIik7XG4gICAgICAgIGNvbXB1dGVyQm9hcmRXcmFwcGVyLmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICAgICAgICBjb21wdXRlckJvYXJkV3JhcHBlci5pbnNlcnRCZWZvcmUoX21ha2VHcmlkKFwiY29tcHV0ZXItYm9hcmRcIiksIGNvbXB1dGVyQm9hcmRXcmFwcGVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmF0ZUJvYXJkLFxuICAgICAgICBidWlsZFN0YXJ0aW5nUGFnZSxcbiAgICAgICAgYnVpbGROZXdHYW1lTW9kYWwsXG4gICAgICAgIGRpc3BsYXlCb2F0U2V0VXAsXG4gICAgICAgIHRvZ2dsZVJvdGF0ZUJ1dHRvbixcbiAgICAgICAgaG92ZXJTZXRVcCxcbiAgICAgICAgYWRkSG92ZXJBdHRhY2ssXG4gICAgICAgIHJlbW92ZUhvdmVyQXR0YWNrLFxuICAgICAgICBwbGFjZVBsYXllclNoaXBzLFxuICAgICAgICBmaWxsSW5BdHRhY2ssXG4gICAgICAgIG1hcmtEZXN0cm95ZWRTaGlwLFxuICAgICAgICBkaXNwbGF5TWVzc2FnZSxcbiAgICAgICAgcmVidWlsZEJvYXJkcyxcbiAgICB9O1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCBET01NYW5pcCA9ICgoKSA9PiB7XG4gICAgLy9zaG9ydGhhbmQgdG8gZ2V0IGVsZW1lbnRzIGVhc2llclxuICAgIGNvbnN0IGdldEVsZW1lbnQgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBjb25zdCBnZXRFbGVtZW50cyA9IHNlbGVjdG9yID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgLy9zaG9ydGhhbmQgdG8gbWFrZSBhIG5ldyBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlcyB0byBpdFxuICAgIGNvbnN0IG1ha2VOZXdFbGVtZW50ID0gKHR5cGUsIGlkID0gXCJcIiwgSFRNTENsYXNzID0gXCJcIiwgdGV4dCA9IFwiXCIsIC4uLmF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGlmIChpZCAhPSBcIlwiKSB7XG4gICAgICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSFRNTENsYXNzICE9IFwiXCIpIHtcbiAgICAgICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgSFRNTENsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGF0dCA9PiBuZXdFbGVtLnNldEF0dHJpYnV0ZShPYmplY3Qua2V5cyhhdHQpWzBdLCBhdHRbT2JqZWN0LmtleXMoYXR0KV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdFbGVtO1xuICAgIH07XG5cbiAgICAvL2FkZHMgYWxsIG9mIHRoZSBET00gZWxlbWVudHMgdG8gYSBwYXJlbnRcbiAgICBjb25zdCBhcHBlbmRDaGlsZHJlbiA9IChwYXJlbnQsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgfTtcblxuICAgIC8vaW5zZXJ0cyBhIERPTSBlbGVtZW50IGFmdGVyIGFub3RoZXIgZWxlbWVudFxuICAgIGNvbnN0IGluc2VydEFmdGVyID0gKG5ld05vZGUsIGV4aXN0aW5nTm9kZSkgPT4ge1xuICAgICAgICBleGlzdGluZ05vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgZXhpc3RpbmdOb2RlLm5leHRTaWJsaW5nKTtcbiAgICB9O1xuXG4gICAgLy9jbGVhcnMgb3V0IGFsbCBjaGlsZCBub2RlcyBvZiBhbiBlbGVtZW50LCBza2lwcyBhcyBtYW55IGVsZW1lbnRzIGFzIHJlcXVlc3RlZFxuICAgIGNvbnN0IHJlbW92ZUFsbENoaWxkcmVuID0gKGVsZW1lbnQsIHNraXAgPSAwKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpID4gc2tpcDsgaS0tKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbaSAtIDFdLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldEVsZW1lbnQsIGdldEVsZW1lbnRzLCBtYWtlTmV3RWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4sIGluc2VydEFmdGVyLCByZW1vdmVBbGxDaGlsZHJlbiB9O1xufSkoKTtcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgQnVpbGRQYWdlIH0gZnJvbSBcIi4vQnVpbGRQYWdlXCI7XG5pbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5cbmV4cG9ydCBjb25zdCBFdmVudEhhbmRsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2YXRlTmV3R2FtZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNuZXctZ2FtZS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEdhbWUubmV3R2FtZSk7XG4gICAgfTtcbiAgICBjb25zdCBhY3RpdmF0ZU5ld0dhbWVNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzaGlwLXJvdGF0ZS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEJ1aWxkUGFnZS50b2dnbGVSb3RhdGVCdXR0b24pO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI3N0YXJ0LWdhbWUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBHYW1lLnN0YXJ0R2FtZSk7XG4gICAgfTtcbiAgICBjb25zdCBhY3RpdmF0ZVNwYWNlcyA9IGlkID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoYCR7aWR9IC5ib2FyZC1zcGFjZTpub3QoLmF0dGFja2VkKWApLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICAgICAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEdhbWUuc3BhY2VDbGlja2VkKTtcbiAgICAgICAgICAgIGlmIChpZCA9PSBcIiNzZXQtdXAtYm9hcmRcIikge1xuICAgICAgICAgICAgICAgIHNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgQnVpbGRQYWdlLmhvdmVyU2V0VXApO1xuICAgICAgICAgICAgICAgIHNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBCdWlsZFBhZ2UuaG92ZXJTZXRVcCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlkID09IFwiI2NvbXB1dGVyLWJvYXJkXCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIEJ1aWxkUGFnZS5hZGRIb3ZlckF0dGFjayk7XG4gICAgICAgICAgICAgICAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIEJ1aWxkUGFnZS5yZW1vdmVIb3ZlckF0dGFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgZGVhY3RpdmF0ZVNwYWNlcyA9IGlkID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoYCR7aWR9IC5ib2FyZC1zcGFjZWApLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICAgICAgc3BhY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEdhbWUuc3BhY2VDbGlja2VkKTtcbiAgICAgICAgICAgIGlmIChpZCA9PSBcIiNzZXQtdXAtYm9hcmRcIikge1xuICAgICAgICAgICAgICAgIHNwYWNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgQnVpbGRQYWdlLmhvdmVyU2V0VXApO1xuICAgICAgICAgICAgICAgIHNwYWNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBCdWlsZFBhZ2UuaG92ZXJTZXRVcCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlkID09IFwiI2NvbXB1dGVyLWJvYXJkXCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIEJ1aWxkUGFnZS5ob3ZlckF0dGFjayk7XG4gICAgICAgICAgICAgICAgc3BhY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIEJ1aWxkUGFnZS5ob3ZlckF0dGFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gY29uc3QgZGVhY3RpdmF0ZUF0dGFja2VkU3BhY2UgPSBzcGFjZSA9PiB7XG4gICAgLy8gICAgIHNwYWNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBHYW1lLnNwYWNlQ2xpY2tlZCk7XG4gICAgLy8gICAgIHNwYWNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgQnVpbGRQYWdlLmhvdmVyQXR0YWNrKTtcbiAgICAvLyAgICAgc3BhY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIEJ1aWxkUGFnZS5ob3ZlckF0dGFjayk7XG4gICAgLy8gfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2YXRlTmV3R2FtZUJ1dHRvbixcbiAgICAgICAgYWN0aXZhdGVOZXdHYW1lTW9kYWwsXG4gICAgICAgIGFjdGl2YXRlU3BhY2VzLFxuICAgICAgICBkZWFjdGl2YXRlU3BhY2VzLFxuICAgICAgICAvL2RlYWN0aXZhdGVBdHRhY2tlZFNwYWNlLFxuICAgIH07XG59KSgpO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZCgpIHtcbiAgICBsZXQgX3NwYWNlcyA9IF9pbml0U3BhY2VzKCk7XG4gICAgbGV0IF9zaGlwcyA9IFtdO1xuICAgIGxldCBfaGl0TGlzdCA9IFtdO1xuICAgIGxldCBfc3BhY2VMaXN0ID0gW107XG5cbiAgICBmdW5jdGlvbiBfaW5pdFNwYWNlcygpIHtcbiAgICAgICAgbGV0IHNwYWNlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIHNwYWNlcy5wdXNoKHsgeFBvczogaSwgeVBvczogaiwgYXR0YWNrZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcGFjZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xuICAgICAgICByZXR1cm4gX3NwYWNlcy5tYXAoeCA9PiB4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tQbGFjZSh4LCB5KSB7XG4gICAgICAgIHJldHVybiBfc3BhY2VzW19zcGFjZXMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC54UG9zID09IHggJiYgZWxlbWVudC55UG9zID09IHkpXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0YWNrU3BhY2UoeCwgeSkge1xuICAgICAgICBfc3BhY2VzW19zcGFjZXMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC54UG9zID09IHggJiYgZWxlbWVudC55UG9zID09IHkpXS5hdHRhY2tlZCA9IHRydWU7XG4gICAgICAgIGxldCBoaXQgPSAtMTtcbiAgICAgICAgX3NoaXBzLmZvckVhY2goKHNoaXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5hdHRhY2tTcGFjZSh4LCB5KSkge1xuICAgICAgICAgICAgICAgIGhpdCA9IGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgX2hpdExpc3QucHVzaCh7IHhQb3M6IHgsIHlQb3M6IHkgfSk7XG4gICAgICAgIHJldHVybiBoaXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFNoaXAoc2l6ZSwgeCwgeSwgZGlyLCBuYW1lKSB7XG4gICAgICAgIF9zaGlwcy5wdXNoKFNoaXAoc2l6ZSwgeCwgeSwgZGlyLCBuYW1lKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGlyID09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgICAgIF9zcGFjZUxpc3QucHVzaCh7IHhQb3M6IHBhcnNlSW50KHgpICsgaSwgeVBvczogeSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3NwYWNlTGlzdC5wdXNoKHsgeFBvczogeCwgeVBvczogcGFyc2VJbnQoeSkgKyBpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNoaXBzKCkge1xuICAgICAgICByZXR1cm4gX3NoaXBzLm1hcCh4ID0+IHgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRIaXRMaXN0KCkge1xuICAgICAgICByZXR1cm4gX2hpdExpc3QubWFwKHggPT4geCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNwYWNlTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIF9zcGFjZUxpc3QubWFwKHggPT4geCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFsbERlc3Ryb3llZCgpIHtcbiAgICAgICAgcmV0dXJuIF9zaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuaXNEZXN0cm95ZWQoKSA9PSB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRCb2FyZCwgY2hlY2tQbGFjZSwgYXR0YWNrU3BhY2UsIGFkZFNoaXAsIGdldFNoaXBzLCBnZXRIaXRMaXN0LCBnZXRTcGFjZUxpc3QsIGFsbERlc3Ryb3llZCB9O1xufVxuIiwiaW1wb3J0IHsgRE9NTWFuaXAgfSBmcm9tIFwiLi9ET01NYW5pcFwiO1xuXG5leHBvcnQgY29uc3QgTW9kYWwgPSAoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlNb2RhbChtb2RhbCkge1xuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwibW9kYWwtYmFja2dyb3VuZFwiLCBcIm1vZGFsIGJhY2tcIik7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKSwgMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBjbG9zZUN1cnJlbnRNb2RhbCgpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI21vZGFsLWJhY2tncm91bmRcIik7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZShtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKS50aGVuKHNldFRpbWVvdXQoKCkgPT4gbW9kYWwucmVtb3ZlKCksIDIwMCkpO1xuICAgIH1cbiAgICByZXR1cm4geyBkaXNwbGF5TW9kYWwsIGNsb3NlQ3VycmVudE1vZGFsIH07XG59KSgpO1xuIiwiaW1wb3J0IEJvYXJkIGZyb20gXCIuL0dhbWVib2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIobmFtZSkge1xuICAgIGxldCBfbmFtZSA9IG5hbWU7XG4gICAgbGV0IF9ib2FyZCA9IEJvYXJkKCk7XG4gICAgbGV0IF9sb3N0ID0gZmFsc2U7XG4gICAgbGV0IF9pc1R1cm4gPSBmYWxzZTtcbiAgICBsZXQgbGFzdFJlc3VsdCA9IFwiXCI7XG4gICAgbGV0IF9hdHRhY2tTdWNjZXNzID0gW107XG4gICAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIF9uYW1lO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0xvc3QoKSB7XG4gICAgICAgIHJldHVybiBfbG9zdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9nZ2xlVHVybigpIHtcbiAgICAgICAgX2lzVHVybiA9ICFfaXNUdXJuO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRUdXJuKCkge1xuICAgICAgICByZXR1cm4gX2lzVHVybjtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkU2hpcChzaXplLCB4LCB5LCBkaXIsIG5hbWUpIHtcbiAgICAgICAgX2JvYXJkLmFkZFNoaXAoc2l6ZSwgeCwgeSwgZGlyLCBuYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc3QgaGl0U2hpcEluZGV4ID0gX2JvYXJkLmF0dGFja1NwYWNlKHgsIHkpO1xuICAgICAgICBpZiAoX2JvYXJkLmFsbERlc3Ryb3llZCgpKSB7XG4gICAgICAgICAgICBfbG9zdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhpdFNoaXBJbmRleDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiBfYm9hcmQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFN1Y2Nlc3MoeCwgeSkge1xuICAgICAgICBfYXR0YWNrU3VjY2Vzcy5wdXNoKHsgeFBvczogeCwgeVBvczogeSB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U3VjY2VzcygpIHtcbiAgICAgICAgcmV0dXJuIF9hdHRhY2tTdWNjZXNzLm1hcCh4ID0+IHgpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXROYW1lLFxuICAgICAgICBpc0xvc3QsXG4gICAgICAgIHRvZ2dsZVR1cm4sXG4gICAgICAgIGdldFR1cm4sXG4gICAgICAgIGFkZFNoaXAsXG4gICAgICAgIGF0dGFjayxcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIGFkZFN1Y2Nlc3MsXG4gICAgICAgIGdldFN1Y2Nlc3MsXG4gICAgICAgIGxhc3RSZXN1bHQsXG4gICAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAoc2l6ZSwgeCwgeSwgZGlyLCBuYW1lKSB7XG4gICAgbGV0IF9oZWFsdGggPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzaXplIH0sICgpID0+IFwiZ29vZFwiKTtcbiAgICBsZXQgX2Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIGxldCBfY29vcmRpbmF0ZXMgPSBfc2V0U3RhcnRpbmcoeCwgeSwgZGlyKTtcbiAgICBsZXQgX25hbWUgPSBuYW1lO1xuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudEhlYWx0aCgpIHtcbiAgICAgICAgcmV0dXJuIF9oZWFsdGgubWFwKHggPT4geCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzRGVzdHJveWVkKCkge1xuICAgICAgICByZXR1cm4gX2Rlc3Ryb3llZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2RhbWFnZShsb2NhdGlvbikge1xuICAgICAgICBfaGVhbHRoW2xvY2F0aW9uXSA9IFwiZGFtYWdlXCI7XG4gICAgICAgIGlmIChfaGVhbHRoLmV2ZXJ5KHBsYWNlID0+IHBsYWNlID09IFwiZGFtYWdlXCIpKSB7XG4gICAgICAgICAgICBfZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBfc2V0U3RhcnRpbmcoaW5jb21pbmd4LCBpbmNvbWluZ3ksIGRpciA9IFwicmlnaHRcIikge1xuICAgICAgICBsZXQgc3BhY2VzID0gW107XG4gICAgICAgIGxldCB4ID0gcGFyc2VJbnQoaW5jb21pbmd4KTtcbiAgICAgICAgbGV0IHkgPSBwYXJzZUludChpbmNvbWluZ3kpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRpciA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZXMucHVzaCh7IHhQb3M6IHggKyBpLCB5UG9zOiB5IH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXIgPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZXMucHVzaCh7IHhQb3M6IHggLSBpLCB5UG9zOiB5IH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXIgPT0gXCJkb3duXCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZXMucHVzaCh7IHhQb3M6IHgsIHlQb3M6IHkgKyBpIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXIgPT0gXCJ1cFwiKSB7XG4gICAgICAgICAgICAgICAgc3BhY2VzLnB1c2goeyB4UG9zOiB4LCB5UG9zOiB5IC0gaSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3BhY2VzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9jb29yZGluYXRlcy5tYXAoeCA9PiB4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIF9uYW1lO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdHRhY2tTcGFjZSh4LCB5KSB7XG4gICAgICAgIGxldCBhdHRhY2tJbmRleCA9IF9jb29yZGluYXRlcy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnhQb3MgPT0geCAmJiBlbGVtZW50LnlQb3MgPT0geSk7XG4gICAgICAgIGlmIChhdHRhY2tJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBfZGFtYWdlKGF0dGFja0luZGV4KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRDdXJyZW50SGVhbHRoLCBpc0Rlc3Ryb3llZCwgZ2V0UG9zaXRpb24sIGdldE5hbWUsIGF0dGFja1NwYWNlIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmV4cGVjdGVkLW11bHRpbGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBCdWlsZFBhZ2UgfSBmcm9tIFwiLi9CdWlsZFBhZ2VcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuL01vZGFsXCI7XG5pbXBvcnQgc2hpcEFycmF5IGZyb20gXCIuL3NoaXBzLmpzb25cIjtcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0V2ZW50SGFuZGxlclwiO1xuXG5leHBvcnQgY29uc3QgR2FtZSA9ICgoKSA9PiB7XG4gICAgbGV0IF9odW1hblBsYXllcjtcbiAgICBsZXQgX2NvbXB1dGVyUGxheWVyO1xuICAgIGNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG4gICAgICAgIEJ1aWxkUGFnZS5idWlsZE5ld0dhbWVNb2RhbCgpO1xuICAgICAgICBfaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIik7XG4gICAgICAgIF9jb21wdXRlclBsYXllciA9IFBsYXllcihcImNvbXB1dGVyXCIpO1xuICAgIH07XG4gICAgY29uc3Qgc3BhY2VDbGlja2VkID0gZSA9PiB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmlkID09IFwic2V0LXVwLWJvYXJkXCIgPyBfcGxhY2VCb2F0KGUpIDogX2F0dGFja0NvbXB1dGVyUGxheWVyKGUpO1xuICAgIH07XG4gICAgY29uc3QgX3N3aXRjaFR1cm5zID0gKCkgPT4ge1xuICAgICAgICBfaHVtYW5QbGF5ZXIudG9nZ2xlVHVybigpO1xuICAgICAgICBfY29tcHV0ZXJQbGF5ZXIudG9nZ2xlVHVybigpO1xuICAgIH07XG4gICAgY29uc3QgX3BsYWNlQm9hdCA9IGUgPT4ge1xuICAgICAgICBjb25zdCBob3ZlclNwYWNlcyA9IERPTU1hbmlwLmdldEVsZW1lbnRzKFwiLmJvYXJkLXNwYWNlLmhvdmVyXCIpO1xuICAgICAgICBjb25zdCBiYWRIb3ZlclNwYWNlcyA9IERPTU1hbmlwLmdldEVsZW1lbnRzKFwiLmJvYXJkLXNwYWNlLmJhZC1ob3ZlclwiKTtcbiAgICAgICAgaWYgKGJhZEhvdmVyU3BhY2VzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBob3ZlclNwYWNlcy5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKFwiYm9hdC1wbGFjZWRcIik7XG4gICAgICAgICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LnRvZ2dsZShcImhvdmVyXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBzaGlwU2l6ZSA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1uYW1lXCIpLmRhdGFzZXQuc2l6ZTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBOYW1lID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzaGlwLW5hbWVcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBzaGlwRGlyZWN0aW9uID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzaGlwLXJvdGF0ZS1idXR0b25cIikuZGF0YXNldC5kaXJlY3Rpb247XG4gICAgICAgICAgICBfaHVtYW5QbGF5ZXIuYWRkU2hpcChcbiAgICAgICAgICAgICAgICBzaGlwU2l6ZSxcbiAgICAgICAgICAgICAgICBob3ZlclNwYWNlc1swXS5kYXRhc2V0Lnhwb3MsXG4gICAgICAgICAgICAgICAgaG92ZXJTcGFjZXNbMF0uZGF0YXNldC55cG9zLFxuICAgICAgICAgICAgICAgIHNoaXBEaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgc2hpcE5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBCdWlsZFBhZ2UuZGlzcGxheUJvYXRTZXRVcChlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBfaXNBdHRhY2tWYWxpZCA9IChwbGF5ZXIsIHgsIHkpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgcGxheWVyXG4gICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgLmdldEhpdExpc3QoKVxuICAgICAgICAgICAgLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzcGFjZS54UG9zID09IHggJiYgc3BhY2UueVBvcyA9PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9O1xuXG4gICAgY29uc3QgX2lzQXR0YWNrSGl0ID0gKHBsYXllciwgeCwgeSkgPT4ge1xuICAgICAgICBsZXQgaGl0ID0gZmFsc2U7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYXllclxuICAgICAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAgICAgLmdldFNwYWNlTGlzdCgpXG4gICAgICAgICAgICAgICAgLnNvbWUoc3BhY2UgPT4gc3BhY2UueFBvcyA9PSB4ICYmIHNwYWNlLnlQb3MgPT0geSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoaXQ7XG4gICAgfTtcblxuICAgIGNvbnN0IF9jaGVja0Rlc3Ryb3llZCA9IChwbGF5ZXIsIGF0dGFja2VkU2hpcCkgPT4ge1xuICAgICAgICBpZiAocGxheWVyLmdldEJvYXJkKCkuZ2V0U2hpcHMoKVthdHRhY2tlZFNoaXBdLmlzRGVzdHJveWVkKCkpIHtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS5tYXJrRGVzdHJveWVkU2hpcChcbiAgICAgICAgICAgICAgICBwbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRTaGlwcygpW2F0dGFja2VkU2hpcF0uZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICAgICAgICBwbGF5ZXIuZ2V0TmFtZSgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBfYXR0YWNrUGxheWVyID0gKHBsYXllciwgeCwgeSkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJOYW1lID0gcGxheWVyLmdldE5hbWUoKTtcblxuICAgICAgICBpZiAoX2lzQXR0YWNrVmFsaWQocGxheWVyLCB4LCB5KSkge1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrZWRTaGlwID0gcGxheWVyLmF0dGFjayh4LCB5KTtcbiAgICAgICAgICAgIGxldCBoaXQgPSBfaXNBdHRhY2tIaXQocGxheWVyLCB4LCB5KTtcbiAgICAgICAgICAgIHBsYXllci5sYXN0UmVzdWx0ID0gaGl0O1xuICAgICAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgICAgICAgIHBsYXllci5hZGRTdWNjZXNzKHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQnVpbGRQYWdlLmZpbGxJbkF0dGFjayh4LCB5LCBwbGF5ZXJOYW1lLCBoaXQpO1xuICAgICAgICAgICAgaWYgKGF0dGFja2VkU2hpcCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jaGVja0Rlc3Ryb3llZChwbGF5ZXIsIGF0dGFja2VkU2hpcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmxhc3RSZXN1bHQgPSBwbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRTaGlwcygpW2F0dGFja2VkU2hpcF0uZ2V0TmFtZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgX2Rpc3BsYXlMYXN0UmVzdWx0ID0gcGxheWVyID0+IHtcbiAgICAgICAgY29uc3QgbGFzdFJlc3VsdCA9IHBsYXllci5sYXN0UmVzdWx0O1xuXG4gICAgICAgIGlmIChwbGF5ZXIgPT0gX2NvbXB1dGVyUGxheWVyKSB7XG4gICAgICAgICAgICBsYXN0UmVzdWx0ID09IHRydWVcbiAgICAgICAgICAgICAgICA/IEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShcIllvdSBmaXJlIGF0IHRoZSBjb21wdXRlci4uLiBJdCdzIGEgSGl0IVwiKVxuICAgICAgICAgICAgICAgIDogbGFzdFJlc3VsdCA9PSBmYWxzZVxuICAgICAgICAgICAgICAgID8gQnVpbGRQYWdlLmRpc3BsYXlNZXNzYWdlKFwiWW91IGZpcmUgYXQgdGhlIGNvbXB1dGVyLi4uIEl0J3MgYSBNaXNzLi4uXCIpXG4gICAgICAgICAgICAgICAgOiBCdWlsZFBhZ2UuZGlzcGxheU1lc3NhZ2UoYFlvdSBzdW5rIHRoZWlyICR7bGFzdFJlc3VsdH0hYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0UmVzdWx0ID09IHRydWVcbiAgICAgICAgICAgICAgICA/IEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShcIlRoZSBjb21wdXRlciBmaXJlcyBhdCB5b3UuLi4gSXQncyBhIEhpdC4uLlwiKVxuICAgICAgICAgICAgICAgIDogbGFzdFJlc3VsdCA9PSBmYWxzZVxuICAgICAgICAgICAgICAgID8gQnVpbGRQYWdlLmRpc3BsYXlNZXNzYWdlKFwiVGhlIGNvbXB1dGVyIGZpcmVzIGF0IHlvdS4uLiBJdCdzIGEgTWlzcyFcIilcbiAgICAgICAgICAgICAgICA6IEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShgVGhleSBzdW5rIHlvdXIgJHtsYXN0UmVzdWx0fSFgKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgX2F0dGFja0NvbXB1dGVyUGxheWVyID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHhQb3MgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC54cG9zO1xuICAgICAgICBjb25zdCB5UG9zID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueXBvcztcbiAgICAgICAgX2F0dGFja1BsYXllcihfY29tcHV0ZXJQbGF5ZXIsIHhQb3MsIHlQb3MpO1xuICAgICAgICBfZGlzcGxheUxhc3RSZXN1bHQoX2NvbXB1dGVyUGxheWVyKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmRlYWN0aXZhdGVTcGFjZXMoXCIjY29tcHV0ZXItYm9hcmRcIik7XG4gICAgICAgIEJ1aWxkUGFnZS5yZW1vdmVIb3ZlckF0dGFjayhlKTtcbiAgICAgICAgX3N3aXRjaFR1cm5zKCk7XG4gICAgICAgIF9wbGF5VHVybigpO1xuICAgIH07XG5cbiAgICAvL2ZvciB0ZXN0aW5nIG9ubHlcbiAgICBjb25zdCBfcGxhY2VDb21wdXRlclNoaXBzID0gKCkgPT4ge1xuICAgICAgICBfY29tcHV0ZXJQbGF5ZXJcbiAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAuZ2V0U2hpcHMoKVxuICAgICAgICAgICAgLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICAgICAgc2hpcC5nZXRQb3NpdGlvbigpLmZvckVhY2gocG9zaXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgYCNjb21wdXRlci1ib2FyZCAjc3BhY2UtJHtwb3NpdGlvbi54UG9zfS0ke3Bvc2l0aW9uLnlQb3N9YFxuICAgICAgICAgICAgICAgICAgICApLmNsYXNzTGlzdC5hZGQoXCJib2F0LXBsYWNlZFwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgX2dlbmVyYXRlQ29tcHV0ZXJTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAvL2dvIHRocm91Z2ggZWFjaCBzaGlwXG4gICAgICAgIHdoaWxlIChpIDwgc2hpcEFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGxldCB4UG9zO1xuICAgICAgICAgICAgbGV0IHlQb3M7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uO1xuICAgICAgICAgICAgLy9yYW5kb21seSBwaWNrIGEgZGlyZWN0aW9uIGVpdGhlciByaWdodCBvciBkb3duXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PSAwID8gKGRpcmVjdGlvbiA9IFwicmlnaHRcIikgOiAoZGlyZWN0aW9uID0gXCJkb3duXCIpO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICAvL3Jlc3RyaWN0IHRoZSByYW5kb20gc28gaXQgZG9lc24ndCBwaWNrIGEgc3RhcnRpbmcgcGxhY2UgdGhhdCB3b3VsZCBwdXQgdGhlIHBpZWNlcyBvdXRzaWRlXG4gICAgICAgICAgICAgICAgLy9vZiB0aGUgZ3JpZFxuICAgICAgICAgICAgICAgIHhQb3MgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBzaGlwQXJyYXlbaV0uc2hpcFNpemUpKTtcbiAgICAgICAgICAgICAgICB5UG9zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4UG9zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIHlQb3MgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBzaGlwQXJyYXlbaV0uc2hpcFNpemUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0YWtlbiA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIF9jb21wdXRlclBsYXllclxuICAgICAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAgICAgLmdldFNoaXBzKClcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5nZXRQb3NpdGlvbigpLmZvckVhY2gocG9zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbG9vayBhdCBlYWNoIG9mIHRoZSBjdXJyZW50IHNoaXBzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBBcnJheVtpXS5zaGlwU2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hbmQgY29tcGFyZSB0aGVpciBjb29yZGluYXRlcyB0byB0aGUgcG9zc2libGUgY29vcmRpbmF0ZXMgb2YgdGhpcyBuZXcgc2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4UG9zICsgaiA9PSBwb3MueFBvcyAmJiB5UG9zID09IHBvcy55UG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIGl0J3MgYWxyZWFkeSB0YWtlbiwgY2FuJ3Qgc3VibWl0IHRoZSBuZXcgc2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJkb3duXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhQb3MgPT0gcG9zLnhQb3MgJiYgeVBvcyArIGogPT0gcG9zLnlQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2lmIHRoZSBzcGFjZSBpcyBub3QgYWxyZWFkeSB0YWtlbiwgYWRkIHRoZSBzaGlwIHRvIHRoZSBQbGF5ZXIncyBib2FyZFxuICAgICAgICAgICAgaWYgKCF0YWtlbikge1xuICAgICAgICAgICAgICAgIF9jb21wdXRlclBsYXllci5hZGRTaGlwKHNoaXBBcnJheVtpXS5zaGlwU2l6ZSwgeFBvcywgeVBvcywgZGlyZWN0aW9uLCBzaGlwQXJyYXlbaV0uc2hpcE5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKF9jb21wdXRlclBsYXllci5nZXRCb2FyZCgpLmdldFNoaXBzKClbaV0uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICAgICAgLy9nbyB0byB0aGUgbmV4dCBzaGlwIGluIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL19wbGFjZUNvbXB1dGVyU2hpcHMoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgX2lzQXR0YWNrZWQgPSAoeCwgeSkgPT4ge1xuICAgICAgICBpZiAoRE9NTWFuaXAuZ2V0RWxlbWVudChgI3BsYXllci1ib2FyZCAjc3BhY2UtJHt4fS0ke3l9YCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXR0YWNrZWRcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBfaXNIaXQgPSAoeCwgeSkgPT4ge1xuICAgICAgICBpZiAoRE9NTWFuaXAuZ2V0RWxlbWVudChgI3BsYXllci1ib2FyZCAjc3BhY2UtJHt4fS0ke3l9YCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBfaXNEZXN0cm95ZWQgPSAoeCwgeSkgPT4ge1xuICAgICAgICBpZiAoRE9NTWFuaXAuZ2V0RWxlbWVudChgI3BsYXllci1ib2FyZCAjc3BhY2UtJHt4fS0ke3l9YCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVzdHJveWVkXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBfY2hlY2tBcm91bmQgPSBsYXN0SGl0ID0+IHtcbiAgICAgICAgbGV0IG5leHRIaXQgPSB7IHhQb3M6IGxhc3RIaXQueFBvcywgeVBvczogbGFzdEhpdC55UG9zIH07XG5cbiAgICAgICAgaWYgKGxhc3RIaXQueFBvcyAhPSA5KSB7XG4gICAgICAgICAgICBuZXh0SGl0ID0geyB4UG9zOiBsYXN0SGl0LnhQb3MgKyAxLCB5UG9zOiBsYXN0SGl0LnlQb3MgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghX2lzQXR0YWNrZWQobmV4dEhpdC54UG9zLCBuZXh0SGl0LnlQb3MpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dEhpdDtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0SGl0LnhQb3MgIT0gMCkge1xuICAgICAgICAgICAgbmV4dEhpdCA9IHsgeFBvczogbGFzdEhpdC54UG9zIC0gMSwgeVBvczogbGFzdEhpdC55UG9zIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIV9pc0F0dGFja2VkKG5leHRIaXQueFBvcywgbmV4dEhpdC55UG9zKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRIaXQ7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdEhpdC55UG9zICE9IDkpIHtcbiAgICAgICAgICAgIG5leHRIaXQgPSB7IHhQb3M6IGxhc3RIaXQueFBvcywgeVBvczogbGFzdEhpdC55UG9zICsgMSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFfaXNBdHRhY2tlZChuZXh0SGl0LnhQb3MsIG5leHRIaXQueVBvcykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0SGl0O1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3RIaXQueVBvcyAhPSAwKSB7XG4gICAgICAgICAgICBuZXh0SGl0ID0geyB4UG9zOiBsYXN0SGl0LnhQb3MsIHlQb3M6IGxhc3RIaXQueVBvcyAtIDEgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghX2lzQXR0YWNrZWQobmV4dEhpdC54UG9zLCBuZXh0SGl0LnlQb3MpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dEhpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIGNvbnN0IF9jaGVja0luTGluZSA9IHBvc2l0aW9uID0+IHtcbiAgICAgICAgbGV0IG9wcFBvcztcbiAgICAgICAgbGV0IGNoZWNrWDtcbiAgICAgICAgbGV0IGNoZWNrWTtcbiAgICAgICAgbGV0IHN0b3AxO1xuICAgICAgICBsZXQgc3RvcDI7XG5cbiAgICAgICAgbGV0IGNoZWNrUG9zID0geyB4UG9zOiBwb3NpdGlvbi54UG9zICsgMSwgeVBvczogcG9zaXRpb24ueVBvcyB9O1xuICAgICAgICBpZiAoY2hlY2tQb3MueFBvcyA9PSAxMCkge1xuICAgICAgICAgICAgY2hlY2tYID0gY2hlY2tQb3MueFBvcztcbiAgICAgICAgICAgIGNoZWNrWSA9IGNoZWNrUG9zLnlQb3M7XG5cbiAgICAgICAgICAgIGlmIChjaGVja1kgKyAxIDwgMTApIHtcbiAgICAgICAgICAgICAgICBfaXNIaXQoY2hlY2tYIC0gMSwgY2hlY2tZICsgMSkgPyAoc3RvcDEgPSB0cnVlKSA6IChzdG9wMSA9IGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGVja1kgLSAxID49IDApIHtcbiAgICAgICAgICAgICAgICBfaXNIaXQoY2hlY2tYIC0gMSwgY2hlY2tZIC0gMSkgPyAoc3RvcDIgPSB0cnVlKSA6IChzdG9wMiA9IGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RvcDEgJiYgIXN0b3AyKSB7XG4gICAgICAgICAgICAgICAgb3BwUG9zID0geyB4UG9zOiBwb3NpdGlvbi54UG9zIC0gMSwgeVBvczogcG9zaXRpb24ueVBvcyB9O1xuICAgICAgICAgICAgICAgIGlmICghX2lzQXR0YWNrZWQob3BwUG9zLnhQb3MsIG9wcFBvcy55UG9zKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3BwUG9zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfaXNIaXQoY2hlY2tQb3MueFBvcywgY2hlY2tQb3MueVBvcykpIHtcbiAgICAgICAgICAgIG9wcFBvcyA9IHsgeFBvczogcG9zaXRpb24ueFBvcyAtIDEsIHlQb3M6IHBvc2l0aW9uLnlQb3MgfTtcbiAgICAgICAgICAgIGlmIChvcHBQb3MueFBvcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfaXNBdHRhY2tlZChvcHBQb3MueFBvcywgb3BwUG9zLnlQb3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHBQb3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tQb3MgPSB7IHhQb3M6IHBvc2l0aW9uLnhQb3MgLSAxLCB5UG9zOiBwb3NpdGlvbi55UG9zIH07XG4gICAgICAgIGlmIChjaGVja1Bvcy54UG9zID09IC0xKSB7XG4gICAgICAgICAgICBjaGVja1ggPSBjaGVja1Bvcy54UG9zO1xuICAgICAgICAgICAgY2hlY2tZID0gY2hlY2tQb3MueVBvcztcblxuICAgICAgICAgICAgaWYgKGNoZWNrWSArIDEgPCAxMCkge1xuICAgICAgICAgICAgICAgIF9pc0hpdChjaGVja1ggKyAxLCBjaGVja1kgKyAxKSA/IChzdG9wMSA9IHRydWUpIDogKHN0b3AxID0gZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoZWNrWSAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICAgIF9pc0hpdChjaGVja1ggKyAxLCBjaGVja1kgLSAxKSA/IChzdG9wMiA9IHRydWUpIDogKHN0b3AyID0gZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdG9wMSAmJiAhc3RvcDIpIHtcbiAgICAgICAgICAgICAgICBvcHBQb3MgPSB7IHhQb3M6IHBvc2l0aW9uLnhQb3MgKyAxLCB5UG9zOiBwb3NpdGlvbi55UG9zIH07XG4gICAgICAgICAgICAgICAgaWYgKCFfaXNBdHRhY2tlZChvcHBQb3MueFBvcywgb3BwUG9zLnlQb3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHBQb3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF9pc0hpdChjaGVja1Bvcy54UG9zLCBjaGVja1Bvcy55UG9zKSkge1xuICAgICAgICAgICAgb3BwUG9zID0geyB4UG9zOiBwb3NpdGlvbi54UG9zICsgMSwgeVBvczogcG9zaXRpb24ueVBvcyB9O1xuICAgICAgICAgICAgaWYgKG9wcFBvcy54UG9zIDwgMTApIHtcbiAgICAgICAgICAgICAgICBpZiAoIV9pc0F0dGFja2VkKG9wcFBvcy54UG9zLCBvcHBQb3MueVBvcykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wcFBvcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja1BvcyA9IHsgeFBvczogcG9zaXRpb24ueFBvcywgeVBvczogcG9zaXRpb24ueVBvcyArIDEgfTtcbiAgICAgICAgaWYgKGNoZWNrUG9zLnlQb3MgPT0gMTApIHtcbiAgICAgICAgICAgIGNoZWNrWCA9IGNoZWNrUG9zLnhQb3M7XG4gICAgICAgICAgICBjaGVja1kgPSBjaGVja1Bvcy55UG9zO1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tYICsgMSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgX2lzSGl0KGNoZWNrWCArIDEsIGNoZWNrWSAtIDEpID8gKHN0b3AxID0gdHJ1ZSkgOiAoc3RvcDEgPSBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hlY2tYIC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgX2lzSGl0KGNoZWNrWCAtIDEsIGNoZWNrWSAtIDEpID8gKHN0b3AyID0gdHJ1ZSkgOiAoc3RvcDIgPSBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0b3AxICYmICFzdG9wMikge1xuICAgICAgICAgICAgICAgIG9wcFBvcyA9IHsgeFBvczogcG9zaXRpb24ueFBvcywgeVBvczogcG9zaXRpb24ueVBvcyAtIDEgfTtcbiAgICAgICAgICAgICAgICBpZiAoIV9pc0F0dGFja2VkKG9wcFBvcy54UG9zLCBvcHBQb3MueVBvcykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wcFBvcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoX2lzSGl0KGNoZWNrUG9zLnhQb3MsIGNoZWNrUG9zLnlQb3MpKSB7XG4gICAgICAgICAgICBvcHBQb3MgPSB7IHhQb3M6IHBvc2l0aW9uLnhQb3MsIHlQb3M6IHBvc2l0aW9uLnlQb3MgLSAxIH07XG4gICAgICAgICAgICBpZiAob3BwUG9zLnlQb3MgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICghX2lzQXR0YWNrZWQob3BwUG9zLnhQb3MsIG9wcFBvcy55UG9zKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3BwUG9zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrUG9zID0geyB4UG9zOiBwb3NpdGlvbi54UG9zLCB5UG9zOiBwb3NpdGlvbi55UG9zIC0gMSB9O1xuICAgICAgICBpZiAoY2hlY2tQb3MueVBvcyA9PSAtMSkge1xuICAgICAgICAgICAgY2hlY2tYID0gY2hlY2tQb3MueFBvcztcbiAgICAgICAgICAgIGNoZWNrWSA9IGNoZWNrUG9zLnlQb3M7XG5cbiAgICAgICAgICAgIGlmIChjaGVja1ggKyAxIDwgMTApIHtcbiAgICAgICAgICAgICAgICBfaXNIaXQoY2hlY2tYICsgMSwgY2hlY2tZICsgMSkgPyAoc3RvcDEgPSB0cnVlKSA6IChzdG9wMSA9IGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGVja1ggLSAxID49IDApIHtcbiAgICAgICAgICAgICAgICBfaXNIaXQoY2hlY2tYIC0gMSwgY2hlY2tZICsgMSkgPyAoc3RvcDIgPSB0cnVlKSA6IChzdG9wMiA9IGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RvcDEgJiYgIXN0b3AyKSB7XG4gICAgICAgICAgICAgICAgb3BwUG9zID0geyB4UG9zOiBwb3NpdGlvbi54UG9zLCB5UG9zOiBwb3NpdGlvbi55UG9zICsgMSB9O1xuICAgICAgICAgICAgICAgIGlmICghX2lzQXR0YWNrZWQob3BwUG9zLnhQb3MsIG9wcFBvcy55UG9zKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3BwUG9zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfaXNIaXQoY2hlY2tQb3MueFBvcywgY2hlY2tQb3MueVBvcykpIHtcbiAgICAgICAgICAgIG9wcFBvcyA9IHsgeFBvczogcG9zaXRpb24ueFBvcywgeVBvczogcG9zaXRpb24ueVBvcyArIDEgfTtcbiAgICAgICAgICAgIGlmIChvcHBQb3MueVBvcyA8IDEwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfaXNBdHRhY2tlZChvcHBQb3MueFBvcywgb3BwUG9zLnlQb3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHBQb3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGNvbnN0IF9jaGVja0luTGluZSA9IChsYXN0SGl0LCBwcmV2aW91c0hpdCkgPT4ge1xuICAgIC8vICAgICBsZXQgbmV4dEhpdDtcbiAgICAvLyAgICAgaWYgKGxhc3RIaXQueFBvcyA9PSBwcmV2aW91c0hpdC54UG9zICsgMSkge1xuICAgIC8vICAgICAgICAgbmV4dEhpdCA9IHsgeFBvczogbGFzdEhpdC54UG9zICsgMSwgeVBvczogbGFzdEhpdC55UG9zIH07XG4gICAgLy8gICAgICAgICBpZiAobmV4dEhpdC54UG9zICE9IDEwKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKCFfaXNBdHRhY2tlZChuZXh0SGl0LnhQb3MsIG5leHRIaXQueVBvcykpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHRIaXQ7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChsYXN0SGl0LnhQb3MgPT0gcHJldmlvdXNIaXQueFBvcyAtIDEpIHtcbiAgICAvLyAgICAgICAgIG5leHRIaXQgPSB7IHhQb3M6IGxhc3RIaXQueFBvcyAtIDEsIHlQb3M6IGxhc3RIaXQueVBvcyB9O1xuICAgIC8vICAgICAgICAgaWYgKG5leHRIaXQueFBvcyAhPSAtMSkge1xuICAgIC8vICAgICAgICAgICAgIGlmICghX2lzQXR0YWNrZWQobmV4dEhpdC54UG9zLCBuZXh0SGl0LnlQb3MpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBuZXh0SGl0O1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAobGFzdEhpdC55UG9zID09IHByZXZpb3VzSGl0LnlQb3MgKyAxKSB7XG4gICAgLy8gICAgICAgICBuZXh0SGl0ID0geyB4UG9zOiBsYXN0SGl0LnhQb3MsIHlQb3M6IGxhc3RIaXQueVBvcyArIDEgfTtcbiAgICAvLyAgICAgICAgIGlmIChuZXh0SGl0LnlQb3MgIT0gMTApIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoIV9pc0F0dGFja2VkKG5leHRIaXQueFBvcywgbmV4dEhpdC55UG9zKSkge1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dEhpdDtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKGxhc3RIaXQueVBvcyA9PSBwcmV2aW91c0hpdC55UG9zIC0gMSkge1xuICAgIC8vICAgICAgICAgbmV4dEhpdCA9IHsgeFBvczogbGFzdEhpdC54UG9zLCB5UG9zOiBsYXN0SGl0LnlQb3MgLSAxIH07XG4gICAgLy8gICAgICAgICBpZiAobmV4dEhpdC55UG9zICE9IC0xKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKCFfaXNBdHRhY2tlZChuZXh0SGl0LnhQb3MsIG5leHRIaXQueVBvcykpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHRIaXQ7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfTtcblxuICAgIGNvbnN0IF9jaG9vc2VDb21wdXRlclNwb3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3NMaXN0ID0gX2h1bWFuUGxheWVyLmdldFN1Y2Nlc3MoKTtcbiAgICAgICAgaWYgKHN1Y2Nlc3NMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBpID0gMTtcbiAgICAgICAgICAgIHdoaWxlIChpIDw9IHN1Y2Nlc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCBoaXRDaGVjayA9IHN1Y2Nlc3NMaXN0W3N1Y2Nlc3NMaXN0Lmxlbmd0aCAtIGldO1xuICAgICAgICAgICAgICAgIGxldCBsYXN0SGl0ID0gc3VjY2Vzc0xpc3Rbc3VjY2Vzc0xpc3QubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgbGV0IG5leHRIaXQ7XG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3NMaXN0Lmxlbmd0aCAtIGkgLSAxIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV9pc0Rlc3Ryb3llZChsYXN0SGl0LnhQb3MsIGxhc3RIaXQueVBvcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRIaXQgPSBfY2hlY2tJbkxpbmUoaGl0Q2hlY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXh0SGl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEhpdCA9IF9jaGVja0Fyb3VuZChsYXN0SGl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX2lzRGVzdHJveWVkKGhpdENoZWNrLnhQb3MsIGhpdENoZWNrLnlQb3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0SGl0ID0gX2NoZWNrSW5MaW5lKGhpdENoZWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV4dEhpdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dEhpdDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhpdHMgPSBET01NYW5pcC5nZXRFbGVtZW50cyhcIiNwbGF5ZXItYm9hcmQgLmhpdFwiKTtcbiAgICAgICAgaWYgKGhpdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jaGVja0Fyb3VuZCh7XG4gICAgICAgICAgICAgICAgeFBvczogcGFyc2VJbnQoaGl0c1swXS5kYXRhc2V0Lnhwb3MpLFxuICAgICAgICAgICAgICAgIHlQb3M6IHBhcnNlSW50KGhpdHNbMF0uZGF0YXNldC55cG9zKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgeFBvczogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCB5UG9zOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgX2NvbXB1dGVyUGxheWVyc1R1cm4gPSAoKSA9PiB7XG4gICAgICAgIGxldCBwbGF5ZWRWYWxpZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoIXBsYXllZFZhbGlkKSB7XG4gICAgICAgICAgICBsZXQgYXR0YWNrUG9zaXRpb24gPSBfY2hvb3NlQ29tcHV0ZXJTcG90KCk7XG4gICAgICAgICAgICBwbGF5ZWRWYWxpZCA9IF9hdHRhY2tQbGF5ZXIoX2h1bWFuUGxheWVyLCBhdHRhY2tQb3NpdGlvbi54UG9zLCBhdHRhY2tQb3NpdGlvbi55UG9zKTtcbiAgICAgICAgfVxuICAgICAgICBfZGlzcGxheUxhc3RSZXN1bHQoX2h1bWFuUGxheWVyKTtcbiAgICAgICAgX3N3aXRjaFR1cm5zKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IF9yYW5kb21QYXVzZSA9IChtaW5MZW5ndGgsIG1heExlbmd0aCkgPT4ge1xuICAgICAgICBjb25zdCBwYXVzZUxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXhMZW5ndGggLSBtaW5MZW5ndGgpICsgbWluTGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBwYXVzZUxlbmd0aCkpO1xuICAgIH07XG4gICAgY29uc3QgX2NvaW5GbGlwID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgY29uc3QgX2Nob29zZVR1cm4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChfY29pbkZsaXAoKSkge1xuICAgICAgICAgICAgX2h1bWFuUGxheWVyLnRvZ2dsZVR1cm4oKTtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShcIkZsaXBwaW5nIENvaW4uLi4gUGxheWVyIGdvZXMgZmlyc3QuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2NvbXB1dGVyUGxheWVyLnRvZ2dsZVR1cm4oKTtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShcIkZsaXBwaW5nIENvaW4uLi4gQ29tcHV0ZXIgZ29lcyBmaXJzdC5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgX3BsYXlUdXJuID0gKCkgPT4ge1xuICAgICAgICBpZiAoX2h1bWFuUGxheWVyLmlzTG9zdCgpKSB7XG4gICAgICAgICAgICBCdWlsZFBhZ2UuZGlzcGxheU1lc3NhZ2UoXCJUaGUgY29tcHV0ZXIgaGFzIGRlc3Ryb3llZCB5b3VyIGVudGlyZSBmbGVldC4uLiBQbGF5IEFnYWluP1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChfY29tcHV0ZXJQbGF5ZXIuaXNMb3N0KCkpIHtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShcbiAgICAgICAgICAgICAgICBcIllvdSd2ZSBzdWNjZXNzZnVsbHkgZGVzdHJveWVkIGFsbCBvZiB0aGUgY29tcHV0ZXIncyBzaGlwcyEgUGxheSBBZ2Fpbj9cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChfaHVtYW5QbGF5ZXIuZ2V0VHVybigpKSB7XG4gICAgICAgICAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlU3BhY2VzKFwiI2NvbXB1dGVyLWJvYXJkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfcmFuZG9tUGF1c2UoNTAwLCA1MDApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IF9jb21wdXRlclBsYXllcnNUdXJuKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IF9wbGF5VHVybigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChET01NYW5pcC5nZXRFbGVtZW50KFwiI3NoaXAtbmFtZVwiKS5kYXRhc2V0LmluZGV4ID09IDYpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShNb2RhbC5jbG9zZUN1cnJlbnRNb2RhbCgpKTtcblxuICAgICAgICAgICAgQnVpbGRQYWdlLnJlYnVpbGRCb2FyZHMoKTtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS5wbGFjZVBsYXllclNoaXBzKF9odW1hblBsYXllci5nZXRCb2FyZCgpLmdldFNoaXBzKCkpO1xuICAgICAgICAgICAgX2dlbmVyYXRlQ29tcHV0ZXJTaGlwcygpO1xuICAgICAgICAgICAgQnVpbGRQYWdlLmFjdGl2YXRlQm9hcmQoXCIjY29tcHV0ZXItYm9hcmRcIik7XG4gICAgICAgICAgICBfY2hvb3NlVHVybigpO1xuICAgICAgICAgICAgX3BsYXlUdXJuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydEdhbWVCdXR0b24gPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI3N0YXJ0LWdhbWUtYnV0dG9uXCIpO1xuICAgICAgICAgICAgc3RhcnRHYW1lQnV0dG9uLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICAgICAgc3RhcnRHYW1lQnV0dG9uLnNldEN1c3RvbVZhbGlkaXR5KFwiUGxlYXNlIHBsYWNlIGFsbCBvZiB5b3VyIHNoaXBzXCIpO1xuICAgICAgICAgICAgc3RhcnRHYW1lQnV0dG9uLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB7IG5ld0dhbWUsIHNwYWNlQ2xpY2tlZCwgc3RhcnRHYW1lIH07XG59KSgpO1xuXG5jb25zdCBpbml0UGFnZSA9ICgoKSA9PiB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKEJ1aWxkUGFnZS5idWlsZFN0YXJ0aW5nUGFnZSgpKTtcbn0pKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZkNWI4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMWIxYTE3O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ1ODI2O1xcbiAgICBjb2xvcjogIzFiMWExNztcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFiMWExNztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxufVxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNjAlKTtcXG59XFxuXFxuI2dhbWUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYTUwMDtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDYwdmg7XFxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiA1MHB4O1xcbiAgICBwYWRkaW5nOiA2MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jZ2FtZS1pbnN0cnVjdGlvbnMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDU4MjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbiNib2FyZHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5ib2FyZC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvYXJkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMTAlIFtjb2wtc3RhcnRdKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDEwJSBbcm93LXN0YXJ0XSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZWE7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uYm9hcmQtc3BhY2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLmJvYXJkLmFjdGl2ZSAuaG92ZXIuYm9hcmQtc3BhY2U6bm90KC5hdHRhY2tlZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVmZjllO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGE4MDRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuYm9hdC1wbGFjZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVkM2ZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGE2ODgwO1xcbn1cXG4uYm9hcmQuYWN0aXZlIC5ib2FyZC1zcGFjZS5iYWQtaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZTllO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODA0YTRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuYXR0YWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZjllO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjN2M4MDRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuYXR0YWNrZWQ6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjN2M4MDRhO1xcbiAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMTkyXFxcIjtcXG59XFxuLmJvYXJkLXNwYWNlLmF0dGFja2VkLmhpdDo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICM4MDRhNGE7XFxuICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYxMTFcXFwiO1xcbn1cXG4uYm9hcmQtc3BhY2UuZGVzdHJveWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWU5ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjODA0YTRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuZGVzdHJveWVkOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzgwNGE0YTtcXG4gICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjA1N1xcXCI7XFxufVxcblxcbi5ib2FyZC1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLnBhZ2UtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTgyNjtcXG59XFxuXFxuLm1vZGFsLmJhY2sge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubW9kYWwuY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTgyNjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFiMWExNztcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4ubW9kYWwtdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGE1MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbWFyZ2luOiAwcHggNDBweDtcXG59XFxuLm1vZGFsLmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcbi5tb2RhbC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhNTAwO1xcbn1cXG5cXG4jc2hpcC1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2JhdHRsZXNoaXAvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNERBQTREO0lBQzVELGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0RBQWtEO0lBQ2xELCtDQUErQztJQUMvQyx5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZDViODtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzFiMWExNztcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTgyNjtcXG4gICAgY29sb3I6ICMxYjFhMTc7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxYjFhMTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZzogNHB4IDE2cHg7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbn1cXG5idXR0b246YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDYwJSk7XFxufVxcblxcbiNnYW1lLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGE1MDA7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBtaW4taGVpZ2h0OiA2MHZoO1xcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogNTBweDtcXG4gICAgcGFkZGluZzogNjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2dhbWUtaW5zdHJ1Y3Rpb25zIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ1ODI2O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4jYm9hcmRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4uYm9hcmQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ib2FyZCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDEwJSBbY29sLXN0YXJ0XSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxMCUgW3Jvdy1zdGFydF0pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmN2VhO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuLmJvYXJkLXNwYWNlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5ib2FyZC5hY3RpdmUgLmhvdmVyLmJvYXJkLXNwYWNlOm5vdCguYXR0YWNrZWQpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzllZmY5ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRhODA0YTtcXG59XFxuLmJvYXJkLXNwYWNlLmJvYXQtcGxhY2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzllZDNmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRhNjg4MDtcXG59XFxuLmJvYXJkLmFjdGl2ZSAuYm9hcmQtc3BhY2UuYmFkLWhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWU5ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwNGE0YTtcXG59XFxuLmJvYXJkLXNwYWNlLmF0dGFja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmY5ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdjODA0YTtcXG59XFxuLmJvYXJkLXNwYWNlLmF0dGFja2VkOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzdjODA0YTtcXG4gICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjE5MlxcXCI7XFxufVxcbi5ib2FyZC1zcGFjZS5hdHRhY2tlZC5oaXQ6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjODA0YTRhO1xcbiAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMTExXFxcIjtcXG59XFxuLmJvYXJkLXNwYWNlLmRlc3Ryb3llZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjllOWU7XFxuICAgIGJvcmRlci1jb2xvcjogIzgwNGE0YTtcXG59XFxuLmJvYXJkLXNwYWNlLmRlc3Ryb3llZDo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICM4MDRhNGE7XFxuICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwNTdcXFwiO1xcbn1cXG5cXG4uYm9hcmQtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5wYWdlLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDU4MjY7XFxufVxcblxcbi5tb2RhbC5iYWNrIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1vZGFsLmNvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDU4MjY7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxYjFhMTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLm1vZGFsLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhNTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG1hcmdpbjogMHB4IDQwcHg7XFxufVxcbi5tb2RhbC5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG4ubW9kYWwtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYTUwMDtcXG59XFxuXFxuI3NoaXAtbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi4vYmF0dGxlc2hpcC9pbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19iYWJlbF9ydW50aW1lX3JlZ2VuZXJhdG9yX2luZGV4X2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV8tODZhZGZlXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2JhdHRsZXNoaXAvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJET01NYW5pcCIsIkV2ZW50SGFuZGxlciIsIk1vZGFsIiwic2hpcEFycmF5IiwiQnVpbGRQYWdlIiwiYWN0aXZhdGVCb2FyZCIsImlkIiwiZ2V0RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIl9tYWtlR3JpZCIsImdyaWRDb250YWluZXIiLCJtYWtlTmV3RWxlbWVudCIsImkiLCJqIiwiYXBwZW5kQ2hpbGQiLCJidWlsZFN0YXJ0aW5nUGFnZSIsImhlYWRlciIsImNvbnRlbnQiLCJnYW1lQ29udGFpbmVyIiwiaW5zdHJ1Y3Rpb25zIiwiYm9hcmRzQ29udGFpbmVyIiwicGxheWVyQm9hcmRXcmFwcGVyIiwicGxheWVyQm9hcmQiLCJwbGF5ZXJCb2FyZExhYmVsIiwiYXBwZW5kQ2hpbGRyZW4iLCJjb21wdXRlckJvYXJkV3JhcHBlciIsImNvbXB1dGVyQm9hcmQiLCJjb21wdXRlckJvYXJkTGFiZWwiLCJuZXdHYW1lQnV0dG9uIiwiZG9jdW1lbnQiLCJib2R5IiwiYWN0aXZhdGVOZXdHYW1lQnV0dG9uIiwiYnVpbGROZXdHYW1lTW9kYWwiLCJuZXdHYW1lTW9kYWwiLCJuZXdHYW1lVGl0bGUiLCJzaGlwTmFtZSIsInJvdGF0ZUJ1dHRvbiIsInNldFVwR3JpZCIsInN0YXJ0R2FtZUJ1dHRvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwiZGlzcGxheU1vZGFsIiwidGhlbiIsImFjdGl2YXRlTmV3R2FtZU1vZGFsIiwiYWN0aXZhdGVTcGFjZXMiLCJkaXNwbGF5Qm9hdFNldFVwIiwidG9nZ2xlUm90YXRlQnV0dG9uIiwiY3VycmVudFN0YXRlIiwiZGF0YXNldCIsImRpcmVjdGlvbiIsIl9iYWRIb3ZlciIsInhQb3MiLCJ5UG9zIiwic2l6ZSIsInBvc2l0aW9uIiwib2Zmc2V0IiwidG9nZ2xlIiwiaG92ZXJTZXRVcCIsImUiLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJ4cG9zIiwieXBvcyIsImNvbnRhaW5zIiwiYWRkSG92ZXJBdHRhY2siLCJyZW1vdmVIb3ZlckF0dGFjayIsInJlbW92ZSIsInNoaXBJbmRleCIsImluZGV4IiwidGV4dENvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJzaGlwU2l6ZSIsImRlYWN0aXZhdGVTcGFjZXMiLCJwbGFjZVBsYXllclNoaXBzIiwic2hpcHMiLCJmb3JFYWNoIiwic2hpcCIsImdldFBvc2l0aW9uIiwiZmlsbEluQXR0YWNrIiwieCIsInkiLCJwbGF5ZXJOYW1lIiwiaGl0IiwibWFya0Rlc3Ryb3llZFNoaXAiLCJzcGFjZSIsInNwYWNlRWxlbSIsImRpc3BsYXlNZXNzYWdlIiwibWVzc2FnZSIsInJlYnVpbGRCb2FyZHMiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImluc2VydEJlZm9yZSIsImxhc3RFbGVtZW50Q2hpbGQiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0eXBlIiwiSFRNTENsYXNzIiwidGV4dCIsIm5ld0VsZW0iLCJjcmVhdGVFbGVtZW50IiwiYXR0cmlidXRlcyIsImxlbmd0aCIsImF0dCIsIk9iamVjdCIsImtleXMiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImNoaWxkIiwiaW5zZXJ0QWZ0ZXIiLCJuZXdOb2RlIiwiZXhpc3RpbmdOb2RlIiwicGFyZW50Tm9kZSIsIm5leHRTaWJsaW5nIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJlbGVtZW50Iiwic2tpcCIsImNoaWxkTm9kZXMiLCJHYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5ld0dhbWUiLCJzdGFydEdhbWUiLCJzcGFjZUNsaWNrZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaG92ZXJBdHRhY2siLCJTaGlwIiwiQm9hcmQiLCJfc3BhY2VzIiwiX2luaXRTcGFjZXMiLCJfc2hpcHMiLCJfaGl0TGlzdCIsIl9zcGFjZUxpc3QiLCJzcGFjZXMiLCJwdXNoIiwiYXR0YWNrZWQiLCJnZXRCb2FyZCIsIm1hcCIsImNoZWNrUGxhY2UiLCJmaW5kSW5kZXgiLCJhdHRhY2tTcGFjZSIsImFkZFNoaXAiLCJkaXIiLCJuYW1lIiwiZ2V0U2hpcHMiLCJnZXRIaXRMaXN0IiwiZ2V0U3BhY2VMaXN0IiwiYWxsRGVzdHJveWVkIiwiZXZlcnkiLCJpc0Rlc3Ryb3llZCIsIm1vZGFsIiwibW9kYWxDb250YWluZXIiLCJzZXRUaW1lb3V0IiwiY2xvc2VDdXJyZW50TW9kYWwiLCJQbGF5ZXIiLCJfbmFtZSIsIl9ib2FyZCIsIl9sb3N0IiwiX2lzVHVybiIsImxhc3RSZXN1bHQiLCJfYXR0YWNrU3VjY2VzcyIsImdldE5hbWUiLCJpc0xvc3QiLCJ0b2dnbGVUdXJuIiwiZ2V0VHVybiIsImF0dGFjayIsImhpdFNoaXBJbmRleCIsImFkZFN1Y2Nlc3MiLCJnZXRTdWNjZXNzIiwiX2hlYWx0aCIsIkFycmF5IiwiZnJvbSIsIl9kZXN0cm95ZWQiLCJfY29vcmRpbmF0ZXMiLCJfc2V0U3RhcnRpbmciLCJnZXRDdXJyZW50SGVhbHRoIiwiX2RhbWFnZSIsImxvY2F0aW9uIiwicGxhY2UiLCJpbmNvbWluZ3giLCJpbmNvbWluZ3kiLCJhdHRhY2tJbmRleCIsIl9odW1hblBsYXllciIsIl9jb21wdXRlclBsYXllciIsInBhcmVudEVsZW1lbnQiLCJfcGxhY2VCb2F0IiwiX2F0dGFja0NvbXB1dGVyUGxheWVyIiwiX3N3aXRjaFR1cm5zIiwiaG92ZXJTcGFjZXMiLCJiYWRIb3ZlclNwYWNlcyIsInNoaXBEaXJlY3Rpb24iLCJfaXNBdHRhY2tWYWxpZCIsInBsYXllciIsInZhbGlkIiwiX2lzQXR0YWNrSGl0Iiwic29tZSIsIl9jaGVja0Rlc3Ryb3llZCIsImF0dGFja2VkU2hpcCIsIl9hdHRhY2tQbGF5ZXIiLCJfZGlzcGxheUxhc3RSZXN1bHQiLCJfcGxheVR1cm4iLCJfcGxhY2VDb21wdXRlclNoaXBzIiwiX2dlbmVyYXRlQ29tcHV0ZXJTaGlwcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRha2VuIiwicG9zIiwiY29uc29sZSIsImxvZyIsIl9pc0F0dGFja2VkIiwiX2lzSGl0IiwiX2lzRGVzdHJveWVkIiwiX2NoZWNrQXJvdW5kIiwibGFzdEhpdCIsIm5leHRIaXQiLCJfY2hlY2tJbkxpbmUiLCJvcHBQb3MiLCJjaGVja1giLCJjaGVja1kiLCJzdG9wMSIsInN0b3AyIiwiY2hlY2tQb3MiLCJfY2hvb3NlQ29tcHV0ZXJTcG90Iiwic3VjY2Vzc0xpc3QiLCJoaXRDaGVjayIsImhpdHMiLCJfY29tcHV0ZXJQbGF5ZXJzVHVybiIsInBsYXllZFZhbGlkIiwiYXR0YWNrUG9zaXRpb24iLCJfcmFuZG9tUGF1c2UiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJwYXVzZUxlbmd0aCIsIl9jb2luRmxpcCIsIl9jaG9vc2VUdXJuIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJyZXBvcnRWYWxpZGl0eSIsImluaXRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==