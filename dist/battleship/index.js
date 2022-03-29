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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header */ "./src/Header.js");
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
    var header = (0,_Header__WEBPACK_IMPORTED_MODULE_4__["default"])("Battleship");
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #e6d5b8;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #1b1a17;\n}\n\n#header {\n    background-color: #e45826;\n    color: #1b1a17;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: -webkit-fill-available;\n    background-color: inherit;\n    min-height: inherit;\n}\n\nbutton {\n    border: 2px solid #1b1a17;\n    border-radius: 20px;\n    font-size: 20px;\n    padding: 4px 16px;\n}\nbutton:hover {\n    filter: brightness(80%);\n}\nbutton:active {\n    filter: brightness(60%);\n}\n\n#game-container {\n    background-color: #f0a500;\n    width: 70vw;\n    min-height: 60vh;\n    margin-top: 150px;\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 50px;\n    padding: 60px;\n    align-items: center;\n}\n#game-instructions {\n    text-align: center;\n    background-color: #e45826;\n    border-radius: 30px;\n    padding: 10px;\n}\n#boards-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: inherit;\n    justify-content: space-evenly;\n}\n.board-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.board {\n    width: 300px;\n    height: 300px;\n    display: grid;\n    grid-template-columns: repeat(10, 10% [col-start]);\n    grid-template-rows: repeat(10, 10% [row-start]);\n    background-color: #fff7ea;\n    border: 2px solid black;\n}\n.board-space {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid gray;\n}\n\n.board.active .hover.board-space:not(.attacked) {\n    background-color: #9eff9e;\n    border: 1px solid #4a804a;\n}\n.board-space.boat-placed {\n    background-color: #9ed3ff;\n    border: 1px solid #4a6880;\n}\n.board.active .board-space.bad-hover {\n    background-color: #ff9e9e;\n    border: 1px solid #804a4a;\n}\n.board-space.attacked {\n    background-color: #fdff9e;\n    border: 1px solid #7c804a;\n}\n.board-space.attacked::before {\n    color: #7c804a;\n    font: var(--fa-font-solid);\n    content: \"\\f192\";\n}\n.board-space.attacked.hit::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f111\";\n}\n.board-space.destroyed {\n    background-color: #ff9e9e;\n    border-color: #804a4a;\n}\n.board-space.destroyed::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f057\";\n}\n\n.board-label {\n    font-size: 30px;\n    margin-top: 10px;\n}\n.page-button {\n    background-color: #e45826;\n}\n\n.modal.back {\n    opacity: 0;\n    position: fixed;\n    z-index: -1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.6);\n    transition: 0.2s linear;\n    display: flex;\n    justify-content: center;\n}\n.modal.content {\n    margin-top: 50px;\n    width: 600px;\n    background-color: #e45826;\n    border: 2px solid #1b1a17;\n    border-radius: 30px;\n    height: inherit;\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.modal-title {\n    text-align: center;\n    background-color: #f0a500;\n    border-radius: 30px;\n    padding: 10px;\n    font-size: 24px;\n    margin: 0px 40px;\n}\n.modal.active {\n    opacity: 1;\n    z-index: 2;\n}\n.modal-button {\n    background-color: #f0a500;\n}\n\n#ship-name {\n    font-size: 22px;\n    font-weight: bold;\n}\n", "",{"version":3,"sources":["webpack://./src/battleship/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,4DAA4D;IAC5D,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,aAAa;IACb,eAAe;IACf,cAAc;IACd,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,kDAAkD;IAClD,+CAA+C;IAC/C,yBAAyB;IACzB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,cAAc;IACd,0BAA0B;IAC1B,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,0BAA0B;IAC1B,gBAAgB;AACpB;AACA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;AACA;IACI,cAAc;IACd,0BAA0B;IAC1B,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,UAAU;IACV,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,oCAAoC;IACpC,uBAAuB;IACvB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,UAAU;IACV,UAAU;AACd;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB","sourcesContent":["body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #e6d5b8;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #1b1a17;\n}\n\n#header {\n    background-color: #e45826;\n    color: #1b1a17;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: -webkit-fill-available;\n    background-color: inherit;\n    min-height: inherit;\n}\n\nbutton {\n    border: 2px solid #1b1a17;\n    border-radius: 20px;\n    font-size: 20px;\n    padding: 4px 16px;\n}\nbutton:hover {\n    filter: brightness(80%);\n}\nbutton:active {\n    filter: brightness(60%);\n}\n\n#game-container {\n    background-color: #f0a500;\n    width: 70vw;\n    min-height: 60vh;\n    margin-top: 150px;\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 50px;\n    padding: 60px;\n    align-items: center;\n}\n#game-instructions {\n    text-align: center;\n    background-color: #e45826;\n    border-radius: 30px;\n    padding: 10px;\n}\n#boards-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: inherit;\n    justify-content: space-evenly;\n}\n.board-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.board {\n    width: 300px;\n    height: 300px;\n    display: grid;\n    grid-template-columns: repeat(10, 10% [col-start]);\n    grid-template-rows: repeat(10, 10% [row-start]);\n    background-color: #fff7ea;\n    border: 2px solid black;\n}\n.board-space {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid gray;\n}\n\n.board.active .hover.board-space:not(.attacked) {\n    background-color: #9eff9e;\n    border: 1px solid #4a804a;\n}\n.board-space.boat-placed {\n    background-color: #9ed3ff;\n    border: 1px solid #4a6880;\n}\n.board.active .board-space.bad-hover {\n    background-color: #ff9e9e;\n    border: 1px solid #804a4a;\n}\n.board-space.attacked {\n    background-color: #fdff9e;\n    border: 1px solid #7c804a;\n}\n.board-space.attacked::before {\n    color: #7c804a;\n    font: var(--fa-font-solid);\n    content: \"\\f192\";\n}\n.board-space.attacked.hit::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f111\";\n}\n.board-space.destroyed {\n    background-color: #ff9e9e;\n    border-color: #804a4a;\n}\n.board-space.destroyed::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f057\";\n}\n\n.board-label {\n    font-size: 30px;\n    margin-top: 10px;\n}\n.page-button {\n    background-color: #e45826;\n}\n\n.modal.back {\n    opacity: 0;\n    position: fixed;\n    z-index: -1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.6);\n    transition: 0.2s linear;\n    display: flex;\n    justify-content: center;\n}\n.modal.content {\n    margin-top: 50px;\n    width: 600px;\n    background-color: #e45826;\n    border: 2px solid #1b1a17;\n    border-radius: 30px;\n    height: inherit;\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.modal-title {\n    text-align: center;\n    background-color: #f0a500;\n    border-radius: 30px;\n    padding: 10px;\n    font-size: 24px;\n    margin: 0px 40px;\n}\n.modal.active {\n    opacity: 1;\n    z-index: 2;\n}\n.modal-button {\n    background-color: #f0a500;\n}\n\n#ship-name {\n    font-size: 22px;\n    font-weight: bold;\n}\n"],"sourceRoot":""}]);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_css-loader_dist_runtime_-86adfe","src_Header_js"], () => (__webpack_require__("./src/battleship/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2JhdHRsZXNoaXAvQnVpbGRQYWdlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9iYXR0bGVzaGlwL0RPTU1hbmlwLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9iYXR0bGVzaGlwL0V2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYmF0dGxlc2hpcC9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2JhdHRsZXNoaXAvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2JhdHRsZXNoaXAvUGxheWVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9iYXR0bGVzaGlwL1NoaXAuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2JhdHRsZXNoaXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2JhdHRsZXNoaXAvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9iYXR0bGVzaGlwL3N0eWxlLmNzcz9iZWI4Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9FdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4vTW9kYWxcIjtcbmltcG9ydCBzaGlwQXJyYXkgZnJvbSBcIi4vc2hpcHMuanNvblwiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi4vSGVhZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBCdWlsZFBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2YXRlQm9hcmQgPSBpZCA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoaWQpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfTtcbiAgICBjb25zdCBfbWFrZUdyaWQgPSBpZCA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBpZCwgXCJib2FyZFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBgc3BhY2UtJHtqfS0ke2l9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9hcmQtc3BhY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFwiZGF0YS14UG9zXCI6IGogfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJkYXRhLXlQb3NcIjogaSB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncmlkQ29udGFpbmVyO1xuICAgIH07XG4gICAgY29uc3QgYnVpbGRTdGFydGluZ1BhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcihcIkJhdHRsZXNoaXBcIik7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRlbnRcIik7XG4gICAgICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImdhbWUtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBpbnN0cnVjdGlvbnMgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBcImdhbWUtaW5zdHJ1Y3Rpb25zXCIsXG4gICAgICAgICAgICBcImJvYXJkLWxhYmVsXCIsXG4gICAgICAgICAgICBcIlRoZSBnYW1lIGlzIHNpbXBsZTogZGVzdHJveSB5b3VyIG9wcG9uZW50IGJlZm9yZSB0aGV5IGRlc3Ryb3kgeW91LlwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiYm9hcmRzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmRXcmFwcGVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwbGF5ZXItYm9hcmQtd3JhcHBlclwiLCBcImJvYXJkLXdyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gX21ha2VHcmlkKFwicGxheWVyLWJvYXJkXCIpO1xuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZExhYmVsID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgXCJwbGF5ZXItYm9hcmQtbGFiZWxcIixcbiAgICAgICAgICAgIFwiYm9hcmQtbGFiZWxcIixcbiAgICAgICAgICAgIFwiUGxheWVyJ3MgQm9hcmRcIlxuICAgICAgICApO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihwbGF5ZXJCb2FyZFdyYXBwZXIsIHBsYXllckJvYXJkLCBwbGF5ZXJCb2FyZExhYmVsKTtcblxuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkV3JhcHBlciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwiY29tcHV0ZXItYm9hcmQtd3JhcHBlclwiLFxuICAgICAgICAgICAgXCJib2FyZC13cmFwcGVyXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IF9tYWtlR3JpZChcImNvbXB1dGVyLWJvYXJkXCIpO1xuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkTGFiZWwgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBcImNvbXB1dGVyLWJvYXJkLWxhYmVsXCIsXG4gICAgICAgICAgICBcImJvYXJkLWxhYmVsXCIsXG4gICAgICAgICAgICBcIkNvbXB1dGVyJ3MgQm9hcmRcIlxuICAgICAgICApO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihjb21wdXRlckJvYXJkV3JhcHBlciwgY29tcHV0ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZExhYmVsKTtcbiAgICAgICAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwibmV3LWdhbWUtYnV0dG9uXCIsIFwicGFnZS1idXR0b25cIiwgXCJOZXcgR2FtZVwiKTtcblxuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihib2FyZHNDb250YWluZXIsIHBsYXllckJvYXJkV3JhcHBlciwgY29tcHV0ZXJCb2FyZFdyYXBwZXIpO1xuXG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGdhbWVDb250YWluZXIsIGluc3RydWN0aW9ucywgYm9hcmRzQ29udGFpbmVyLCBuZXdHYW1lQnV0dG9uKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChnYW1lQ29udGFpbmVyKTtcbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oZG9jdW1lbnQuYm9keSwgaGVhZGVyLCBjb250ZW50KTtcblxuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVOZXdHYW1lQnV0dG9uKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGJ1aWxkTmV3R2FtZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdHYW1lTW9kYWwgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIm5ldy1nYW1lLW1vZGFsXCIsIFwibW9kYWwgY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgbmV3R2FtZVRpdGxlID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgXCJuZXctZ2FtZS10aXRsZVwiLFxuICAgICAgICAgICAgXCJtb2RhbC10aXRsZVwiLFxuICAgICAgICAgICAgXCJQbGVhc2UgcGxhY2UgeW91ciBzaGlwcyBvbiB0aGUgZ3JpZFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzaGlwLW5hbWVcIiwgXCJzaGlwLW5hbWVcIiwgXCJcIiwge1xuICAgICAgICAgICAgXCJkYXRhLWluZGV4XCI6IDAsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByb3RhdGVCdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcInNoaXAtcm90YXRlLWJ1dHRvblwiLFxuICAgICAgICAgICAgXCJtb2RhbC1idXR0b25cIixcbiAgICAgICAgICAgIFwiUm90YXRlXCIsXG4gICAgICAgICAgICB7IFwiZGF0YS1kaXJlY3Rpb25cIjogXCJyaWdodFwiIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2V0VXBHcmlkID0gX21ha2VHcmlkKFwic2V0LXVwLWJvYXJkXCIpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIFwic3RhcnQtZ2FtZS1idXR0b25cIixcbiAgICAgICAgICAgIFwibW9kYWwtYnV0dG9uXCIsXG4gICAgICAgICAgICBcIlN0YXJ0IEdhbWVcIlxuICAgICAgICApO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihcbiAgICAgICAgICAgIG5ld0dhbWVNb2RhbCxcbiAgICAgICAgICAgIG5ld0dhbWVUaXRsZSxcbiAgICAgICAgICAgIHNoaXBOYW1lLFxuICAgICAgICAgICAgcm90YXRlQnV0dG9uLFxuICAgICAgICAgICAgc2V0VXBHcmlkLFxuICAgICAgICAgICAgc3RhcnRHYW1lQnV0dG9uXG4gICAgICAgICk7XG5cbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKE1vZGFsLmRpc3BsYXlNb2RhbChuZXdHYW1lTW9kYWwpKVxuICAgICAgICAgICAgLnRoZW4oRXZlbnRIYW5kbGVyLmFjdGl2YXRlTmV3R2FtZU1vZGFsKCkpXG4gICAgICAgICAgICAudGhlbihFdmVudEhhbmRsZXIuYWN0aXZhdGVTcGFjZXMoXCIjc2V0LXVwLWJvYXJkXCIpKVxuICAgICAgICAgICAgLnRoZW4oZGlzcGxheUJvYXRTZXRVcCgpKVxuICAgICAgICAgICAgLnRoZW4oYWN0aXZhdGVCb2FyZChcIiNzZXQtdXAtYm9hcmRcIikpO1xuICAgIH07XG4gICAgY29uc3QgdG9nZ2xlUm90YXRlQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByb3RhdGVCdXR0b24gPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI3NoaXAtcm90YXRlLWJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gcm90YXRlQnV0dG9uLmRhdGFzZXQuZGlyZWN0aW9uO1xuICAgICAgICBjdXJyZW50U3RhdGUgPT0gXCJyaWdodFwiXG4gICAgICAgICAgICA/IChyb3RhdGVCdXR0b24uZGF0YXNldC5kaXJlY3Rpb24gPSBcImRvd25cIilcbiAgICAgICAgICAgIDogKHJvdGF0ZUJ1dHRvbi5kYXRhc2V0LmRpcmVjdGlvbiA9IFwicmlnaHRcIik7XG4gICAgfTtcbiAgICBjb25zdCBfYmFkSG92ZXIgPSAoeFBvcywgeVBvcywgc2l6ZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb247XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgeFBvcyArIGkgPCAxMCA/IChvZmZzZXQgPSB4UG9zICsgaSkgOiAob2Zmc2V0ID0geFBvcyAtIChzaXplIC0gaSkpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gYCR7b2Zmc2V0fS0ke3lQb3N9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldDtcbiAgICAgICAgICAgICAgICB5UG9zICsgaSA8IDEwID8gKG9mZnNldCA9IHlQb3MgKyBpKSA6IChvZmZzZXQgPSB5UG9zIC0gKHNpemUgLSBpKSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBgJHt4UG9zfS0ke29mZnNldH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChgI3NldC11cC1ib2FyZCAjc3BhY2UtJHtwb3NpdGlvbn1gKS5jbGFzc0xpc3QudG9nZ2xlKFwiYmFkLWhvdmVyXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhvdmVyU2V0VXAgPSBlID0+IHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHBhcnNlSW50KERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1uYW1lXCIpLmRhdGFzZXQuc2l6ZSk7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1yb3RhdGUtYnV0dG9uXCIpLmRhdGFzZXQuZGlyZWN0aW9uO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgbGV0IHhQb3MgPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC54cG9zKTtcbiAgICAgICAgICAgIGxldCB5UG9zID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueXBvcyk7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb247XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgeFBvcyArIGkgPCAxMCA/IChvZmZzZXQgPSB4UG9zICsgaSkgOiAob2Zmc2V0ID0geFBvcyAtIChzaXplIC0gaSkpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gYCR7b2Zmc2V0fS0ke3lQb3N9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldDtcbiAgICAgICAgICAgICAgICB5UG9zICsgaSA8IDEwID8gKG9mZnNldCA9IHlQb3MgKyBpKSA6IChvZmZzZXQgPSB5UG9zIC0gKHNpemUgLSBpKSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBgJHt4UG9zfS0ke29mZnNldH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKERPTU1hbmlwLmdldEVsZW1lbnQoYCNzZXQtdXAtYm9hcmQgI3NwYWNlLSR7cG9zaXRpb259YCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYm9hdC1wbGFjZWRcIikpIHtcbiAgICAgICAgICAgICAgICBfYmFkSG92ZXIoeFBvcywgeVBvcywgc2l6ZSwgZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KGAjc2V0LXVwLWJvYXJkICNzcGFjZS0ke3Bvc2l0aW9ufWApLmNsYXNzTGlzdC50b2dnbGUoXCJob3ZlclwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYWRkSG92ZXJBdHRhY2sgPSBlID0+IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBgJHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC54cG9zfS0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lnlwb3N9YDtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChgI2NvbXB1dGVyLWJvYXJkICNzcGFjZS0ke3Bvc2l0aW9ufWApLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZUhvdmVyQXR0YWNrID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gYCR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueHBvc30tJHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC55cG9zfWA7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoYCNjb21wdXRlci1ib2FyZCAjc3BhY2UtJHtwb3NpdGlvbn1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XG4gICAgfTtcbiAgICBjb25zdCBkaXNwbGF5Qm9hdFNldFVwID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzaGlwLW5hbWVcIik7XG4gICAgICAgIGxldCBzaGlwSW5kZXggPSBwYXJzZUludChzaGlwTmFtZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgc2hpcE5hbWUudGV4dENvbnRlbnQgPSBzaGlwQXJyYXlbc2hpcEluZGV4XS5zaGlwTmFtZTtcbiAgICAgICAgc2hpcE5hbWUuc2V0QXR0cmlidXRlKFwiZGF0YS1zaXplXCIsIHNoaXBBcnJheVtzaGlwSW5kZXhdLnNoaXBTaXplKTtcbiAgICAgICAgc2hpcE5hbWUuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCArK3NoaXBJbmRleCk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBob3ZlclNldFVwKGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaGlwSW5kZXggPiA1KSB7XG4gICAgICAgICAgICBFdmVudEhhbmRsZXIuZGVhY3RpdmF0ZVNwYWNlcyhcIiNzZXQtdXAtYm9hcmRcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VQbGF5ZXJTaGlwcyA9IHNoaXBzID0+IHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIHNoaXAuZ2V0UG9zaXRpb24oKS5mb3JFYWNoKHBvc2l0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KGAjcGxheWVyLWJvYXJkICNzcGFjZS0ke3Bvc2l0aW9uLnhQb3N9LSR7cG9zaXRpb24ueVBvc31gKS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgICAgICAgICBcImJvYXQtcGxhY2VkXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgZmlsbEluQXR0YWNrID0gKHgsIHksIHBsYXllck5hbWUsIGhpdCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KGAjJHtwbGF5ZXJOYW1lfS1ib2FyZCAjc3BhY2UtJHt4fS0ke3l9YCkuY2xhc3NMaXN0LmFkZChcImF0dGFja2VkXCIpO1xuICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KGAjJHtwbGF5ZXJOYW1lfS1ib2FyZCAjc3BhY2UtJHt4fS0ke3l9YCkuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgbWFya0Rlc3Ryb3llZFNoaXAgPSAocG9zaXRpb24sIHBsYXllck5hbWUpID0+IHtcbiAgICAgICAgcG9zaXRpb24uZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGFjZUVsZW0gPSBET01NYW5pcC5nZXRFbGVtZW50KGAjJHtwbGF5ZXJOYW1lfS1ib2FyZCAjc3BhY2UtJHtzcGFjZS54UG9zfS0ke3NwYWNlLnlQb3N9YCk7XG4gICAgICAgICAgICBzcGFjZUVsZW0uY2xhc3NMaXN0LmFkZChcImRlc3Ryb3llZFwiKTtcbiAgICAgICAgICAgIHNwYWNlRWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGl0XCIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlNZXNzYWdlID0gbWVzc2FnZSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjZ2FtZS1pbnN0cnVjdGlvbnNcIikudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIH07XG5cbiAgICBjb25zdCByZWJ1aWxkQm9hcmRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZFdyYXBwZXIgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI3BsYXllci1ib2FyZC13cmFwcGVyXCIpO1xuICAgICAgICBwbGF5ZXJCb2FyZFdyYXBwZXIuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIHBsYXllckJvYXJkV3JhcHBlci5pbnNlcnRCZWZvcmUoX21ha2VHcmlkKFwicGxheWVyLWJvYXJkXCIpLCBwbGF5ZXJCb2FyZFdyYXBwZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRXcmFwcGVyID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjb21wdXRlci1ib2FyZC13cmFwcGVyXCIpO1xuICAgICAgICBjb21wdXRlckJvYXJkV3JhcHBlci5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZFdyYXBwZXIuaW5zZXJ0QmVmb3JlKF9tYWtlR3JpZChcImNvbXB1dGVyLWJvYXJkXCIpLCBjb21wdXRlckJvYXJkV3JhcHBlci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZhdGVCb2FyZCxcbiAgICAgICAgYnVpbGRTdGFydGluZ1BhZ2UsXG4gICAgICAgIGJ1aWxkTmV3R2FtZU1vZGFsLFxuICAgICAgICBkaXNwbGF5Qm9hdFNldFVwLFxuICAgICAgICB0b2dnbGVSb3RhdGVCdXR0b24sXG4gICAgICAgIGhvdmVyU2V0VXAsXG4gICAgICAgIGFkZEhvdmVyQXR0YWNrLFxuICAgICAgICByZW1vdmVIb3ZlckF0dGFjayxcbiAgICAgICAgcGxhY2VQbGF5ZXJTaGlwcyxcbiAgICAgICAgZmlsbEluQXR0YWNrLFxuICAgICAgICBtYXJrRGVzdHJveWVkU2hpcCxcbiAgICAgICAgZGlzcGxheU1lc3NhZ2UsXG4gICAgICAgIHJlYnVpbGRCb2FyZHMsXG4gICAgfTtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgRE9NTWFuaXAgPSAoKCkgPT4ge1xuICAgIC8vc2hvcnRoYW5kIHRvIGdldCBlbGVtZW50cyBlYXNpZXJcbiAgICBjb25zdCBnZXRFbGVtZW50ID0gc2VsZWN0b3IgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29uc3QgZ2V0RWxlbWVudHMgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIC8vc2hvcnRoYW5kIHRvIG1ha2UgYSBuZXcgZWxlbWVudCBhbmQgYWRkIGF0dHJpYnV0ZXMgdG8gaXRcbiAgICBjb25zdCBtYWtlTmV3RWxlbWVudCA9ICh0eXBlLCBpZCA9IFwiXCIsIEhUTUxDbGFzcyA9IFwiXCIsIHRleHQgPSBcIlwiLCAuLi5hdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBpZiAoaWQgIT0gXCJcIikge1xuICAgICAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEhUTUxDbGFzcyAhPSBcIlwiKSB7XG4gICAgICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIEhUTUxDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RWxlbS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHQgPT4gbmV3RWxlbS5zZXRBdHRyaWJ1dGUoT2JqZWN0LmtleXMoYXR0KVswXSwgYXR0W09iamVjdC5rZXlzKGF0dCldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3RWxlbTtcbiAgICB9O1xuXG4gICAgLy9hZGRzIGFsbCBvZiB0aGUgRE9NIGVsZW1lbnRzIHRvIGEgcGFyZW50XG4gICAgY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSAocGFyZW50LCAuLi5jaGlsZHJlbikgPT4ge1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICAgIH07XG5cbiAgICAvL2luc2VydHMgYSBET00gZWxlbWVudCBhZnRlciBhbm90aGVyIGVsZW1lbnRcbiAgICBjb25zdCBpbnNlcnRBZnRlciA9IChuZXdOb2RlLCBleGlzdGluZ05vZGUpID0+IHtcbiAgICAgICAgZXhpc3RpbmdOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIGV4aXN0aW5nTm9kZS5uZXh0U2libGluZyk7XG4gICAgfTtcblxuICAgIC8vY2xlYXJzIG91dCBhbGwgY2hpbGQgbm9kZXMgb2YgYW4gZWxlbWVudCwgc2tpcHMgYXMgbWFueSBlbGVtZW50cyBhcyByZXF1ZXN0ZWRcbiAgICBjb25zdCByZW1vdmVBbGxDaGlsZHJlbiA9IChlbGVtZW50LCBza2lwID0gMCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaSA+IHNraXA7IGktLSkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzW2kgLSAxXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRFbGVtZW50LCBnZXRFbGVtZW50cywgbWFrZU5ld0VsZW1lbnQsIGFwcGVuZENoaWxkcmVuLCBpbnNlcnRBZnRlciwgcmVtb3ZlQWxsQ2hpbGRyZW4gfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IEJ1aWxkUGFnZSB9IGZyb20gXCIuL0J1aWxkUGFnZVwiO1xuaW1wb3J0IHsgRE9NTWFuaXAgfSBmcm9tIFwiLi9ET01NYW5pcFwiO1xuXG5leHBvcnQgY29uc3QgRXZlbnRIYW5kbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBhY3RpdmF0ZU5ld0dhbWVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjbmV3LWdhbWUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBHYW1lLm5ld0dhbWUpO1xuICAgIH07XG4gICAgY29uc3QgYWN0aXZhdGVOZXdHYW1lTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1yb3RhdGUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBCdWlsZFBhZ2UudG9nZ2xlUm90YXRlQnV0dG9uKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzdGFydC1nYW1lLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgR2FtZS5zdGFydEdhbWUpO1xuICAgIH07XG4gICAgY29uc3QgYWN0aXZhdGVTcGFjZXMgPSBpZCA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKGAke2lkfSAuYm9hcmQtc3BhY2U6bm90KC5hdHRhY2tlZClgKS5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgICAgIHNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBHYW1lLnNwYWNlQ2xpY2tlZCk7XG4gICAgICAgICAgICBpZiAoaWQgPT0gXCIjc2V0LXVwLWJvYXJkXCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIEJ1aWxkUGFnZS5ob3ZlclNldFVwKTtcbiAgICAgICAgICAgICAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgQnVpbGRQYWdlLmhvdmVyU2V0VXApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpZCA9PSBcIiNjb21wdXRlci1ib2FyZFwiKSB7XG4gICAgICAgICAgICAgICAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBCdWlsZFBhZ2UuYWRkSG92ZXJBdHRhY2spO1xuICAgICAgICAgICAgICAgIHNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBCdWlsZFBhZ2UucmVtb3ZlSG92ZXJBdHRhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGRlYWN0aXZhdGVTcGFjZXMgPSBpZCA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKGAke2lkfSAuYm9hcmQtc3BhY2VgKS5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgICAgIHNwYWNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBHYW1lLnNwYWNlQ2xpY2tlZCk7XG4gICAgICAgICAgICBpZiAoaWQgPT0gXCIjc2V0LXVwLWJvYXJkXCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIEJ1aWxkUGFnZS5ob3ZlclNldFVwKTtcbiAgICAgICAgICAgICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgQnVpbGRQYWdlLmhvdmVyU2V0VXApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpZCA9PSBcIiNjb21wdXRlci1ib2FyZFwiKSB7XG4gICAgICAgICAgICAgICAgc3BhY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBCdWlsZFBhZ2UuaG92ZXJBdHRhY2spO1xuICAgICAgICAgICAgICAgIHNwYWNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBCdWlsZFBhZ2UuaG92ZXJBdHRhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGNvbnN0IGRlYWN0aXZhdGVBdHRhY2tlZFNwYWNlID0gc3BhY2UgPT4ge1xuICAgIC8vICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgR2FtZS5zcGFjZUNsaWNrZWQpO1xuICAgIC8vICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIEJ1aWxkUGFnZS5ob3ZlckF0dGFjayk7XG4gICAgLy8gICAgIHNwYWNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBCdWlsZFBhZ2UuaG92ZXJBdHRhY2spO1xuICAgIC8vIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmF0ZU5ld0dhbWVCdXR0b24sXG4gICAgICAgIGFjdGl2YXRlTmV3R2FtZU1vZGFsLFxuICAgICAgICBhY3RpdmF0ZVNwYWNlcyxcbiAgICAgICAgZGVhY3RpdmF0ZVNwYWNlcyxcbiAgICAgICAgLy9kZWFjdGl2YXRlQXR0YWNrZWRTcGFjZSxcbiAgICB9O1xufSkoKTtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmQoKSB7XG4gICAgbGV0IF9zcGFjZXMgPSBfaW5pdFNwYWNlcygpO1xuICAgIGxldCBfc2hpcHMgPSBbXTtcbiAgICBsZXQgX2hpdExpc3QgPSBbXTtcbiAgICBsZXQgX3NwYWNlTGlzdCA9IFtdO1xuXG4gICAgZnVuY3Rpb24gX2luaXRTcGFjZXMoKSB7XG4gICAgICAgIGxldCBzcGFjZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBzcGFjZXMucHVzaCh7IHhQb3M6IGksIHlQb3M6IGosIGF0dGFja2VkOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3BhY2VzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIF9zcGFjZXMubWFwKHggPT4geCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrUGxhY2UoeCwgeSkge1xuICAgICAgICByZXR1cm4gX3NwYWNlc1tfc3BhY2VzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQueFBvcyA9PSB4ICYmIGVsZW1lbnQueVBvcyA9PSB5KV07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dGFja1NwYWNlKHgsIHkpIHtcbiAgICAgICAgX3NwYWNlc1tfc3BhY2VzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQueFBvcyA9PSB4ICYmIGVsZW1lbnQueVBvcyA9PSB5KV0uYXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICBsZXQgaGl0ID0gLTE7XG4gICAgICAgIF9zaGlwcy5mb3JFYWNoKChzaGlwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuYXR0YWNrU3BhY2UoeCwgeSkpIHtcbiAgICAgICAgICAgICAgICBoaXQgPSBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIF9oaXRMaXN0LnB1c2goeyB4UG9zOiB4LCB5UG9zOiB5IH0pO1xuICAgICAgICByZXR1cm4gaGl0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRTaGlwKHNpemUsIHgsIHksIGRpciwgbmFtZSkge1xuICAgICAgICBfc2hpcHMucHVzaChTaGlwKHNpemUsIHgsIHksIGRpciwgbmFtZSkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRpciA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICBfc3BhY2VMaXN0LnB1c2goeyB4UG9zOiBwYXJzZUludCh4KSArIGksIHlQb3M6IHkgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9zcGFjZUxpc3QucHVzaCh7IHhQb3M6IHgsIHlQb3M6IHBhcnNlSW50KHkpICsgaSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTaGlwcygpIHtcbiAgICAgICAgcmV0dXJuIF9zaGlwcy5tYXAoeCA9PiB4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0SGl0TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIF9oaXRMaXN0Lm1hcCh4ID0+IHgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTcGFjZUxpc3QoKSB7XG4gICAgICAgIHJldHVybiBfc3BhY2VMaXN0Lm1hcCh4ID0+IHgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhbGxEZXN0cm95ZWQoKSB7XG4gICAgICAgIHJldHVybiBfc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLmlzRGVzdHJveWVkKCkgPT0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0Qm9hcmQsIGNoZWNrUGxhY2UsIGF0dGFja1NwYWNlLCBhZGRTaGlwLCBnZXRTaGlwcywgZ2V0SGl0TGlzdCwgZ2V0U3BhY2VMaXN0LCBhbGxEZXN0cm95ZWQgfTtcbn1cbiIsImltcG9ydCB7IERPTU1hbmlwIH0gZnJvbSBcIi4vRE9NTWFuaXBcIjtcblxuZXhwb3J0IGNvbnN0IE1vZGFsID0gKCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBkaXNwbGF5TW9kYWwobW9kYWwpIHtcbiAgICAgICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIm1vZGFsLWJhY2tncm91bmRcIiwgXCJtb2RhbCBiYWNrXCIpO1xuICAgICAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZShkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIiksIDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gY2xvc2VDdXJyZW50TW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNtb2RhbC1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUobW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSkudGhlbihzZXRUaW1lb3V0KCgpID0+IG1vZGFsLnJlbW92ZSgpLCAyMDApKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZGlzcGxheU1vZGFsLCBjbG9zZUN1cnJlbnRNb2RhbCB9O1xufSkoKTtcbiIsImltcG9ydCBCb2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKG5hbWUpIHtcbiAgICBsZXQgX25hbWUgPSBuYW1lO1xuICAgIGxldCBfYm9hcmQgPSBCb2FyZCgpO1xuICAgIGxldCBfbG9zdCA9IGZhbHNlO1xuICAgIGxldCBfaXNUdXJuID0gZmFsc2U7XG4gICAgbGV0IGxhc3RSZXN1bHQgPSBcIlwiO1xuICAgIGxldCBfYXR0YWNrU3VjY2VzcyA9IFtdO1xuICAgIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiBfbmFtZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNMb3N0KCkge1xuICAgICAgICByZXR1cm4gX2xvc3Q7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZVR1cm4oKSB7XG4gICAgICAgIF9pc1R1cm4gPSAhX2lzVHVybjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0VHVybigpIHtcbiAgICAgICAgcmV0dXJuIF9pc1R1cm47XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFNoaXAoc2l6ZSwgeCwgeSwgZGlyLCBuYW1lKSB7XG4gICAgICAgIF9ib2FyZC5hZGRTaGlwKHNpemUsIHgsIHksIGRpciwgbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dGFjayh4LCB5KSB7XG4gICAgICAgIGNvbnN0IGhpdFNoaXBJbmRleCA9IF9ib2FyZC5hdHRhY2tTcGFjZSh4LCB5KTtcbiAgICAgICAgaWYgKF9ib2FyZC5hbGxEZXN0cm95ZWQoKSkge1xuICAgICAgICAgICAgX2xvc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoaXRTaGlwSW5kZXg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xuICAgICAgICByZXR1cm4gX2JvYXJkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRTdWNjZXNzKHgsIHkpIHtcbiAgICAgICAgX2F0dGFja1N1Y2Nlc3MucHVzaCh7IHhQb3M6IHgsIHlQb3M6IHkgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFN1Y2Nlc3MoKSB7XG4gICAgICAgIHJldHVybiBfYXR0YWNrU3VjY2Vzcy5tYXAoeCA9PiB4KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgaXNMb3N0LFxuICAgICAgICB0b2dnbGVUdXJuLFxuICAgICAgICBnZXRUdXJuLFxuICAgICAgICBhZGRTaGlwLFxuICAgICAgICBhdHRhY2ssXG4gICAgICAgIGdldEJvYXJkLFxuICAgICAgICBhZGRTdWNjZXNzLFxuICAgICAgICBnZXRTdWNjZXNzLFxuICAgICAgICBsYXN0UmVzdWx0LFxuICAgIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKHNpemUsIHgsIHksIGRpciwgbmFtZSkge1xuICAgIGxldCBfaGVhbHRoID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2l6ZSB9LCAoKSA9PiBcImdvb2RcIik7XG4gICAgbGV0IF9kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICBsZXQgX2Nvb3JkaW5hdGVzID0gX3NldFN0YXJ0aW5nKHgsIHksIGRpcik7XG4gICAgbGV0IF9uYW1lID0gbmFtZTtcblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRIZWFsdGgoKSB7XG4gICAgICAgIHJldHVybiBfaGVhbHRoLm1hcCh4ID0+IHgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0Rlc3Ryb3llZCgpIHtcbiAgICAgICAgcmV0dXJuIF9kZXN0cm95ZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kYW1hZ2UobG9jYXRpb24pIHtcbiAgICAgICAgX2hlYWx0aFtsb2NhdGlvbl0gPSBcImRhbWFnZVwiO1xuICAgICAgICBpZiAoX2hlYWx0aC5ldmVyeShwbGFjZSA9PiBwbGFjZSA9PSBcImRhbWFnZVwiKSkge1xuICAgICAgICAgICAgX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gX3NldFN0YXJ0aW5nKGluY29taW5neCwgaW5jb21pbmd5LCBkaXIgPSBcInJpZ2h0XCIpIHtcbiAgICAgICAgbGV0IHNwYWNlcyA9IFtdO1xuICAgICAgICBsZXQgeCA9IHBhcnNlSW50KGluY29taW5neCk7XG4gICAgICAgIGxldCB5ID0gcGFyc2VJbnQoaW5jb21pbmd5KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkaXIgPT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgc3BhY2VzLnB1c2goeyB4UG9zOiB4ICsgaSwgeVBvczogeSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyID09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICAgICAgc3BhY2VzLnB1c2goeyB4UG9zOiB4IC0gaSwgeVBvczogeSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyID09IFwiZG93blwiKSB7XG4gICAgICAgICAgICAgICAgc3BhY2VzLnB1c2goeyB4UG9zOiB4LCB5UG9zOiB5ICsgaSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyID09IFwidXBcIikge1xuICAgICAgICAgICAgICAgIHNwYWNlcy5wdXNoKHsgeFBvczogeCwgeVBvczogeSAtIGkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwYWNlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiBfY29vcmRpbmF0ZXMubWFwKHggPT4geCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiBfbmFtZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0YWNrU3BhY2UoeCwgeSkge1xuICAgICAgICBsZXQgYXR0YWNrSW5kZXggPSBfY29vcmRpbmF0ZXMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC54UG9zID09IHggJiYgZWxlbWVudC55UG9zID09IHkpO1xuICAgICAgICBpZiAoYXR0YWNrSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgX2RhbWFnZShhdHRhY2tJbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0Q3VycmVudEhlYWx0aCwgaXNEZXN0cm95ZWQsIGdldFBvc2l0aW9uLCBnZXROYW1lLCBhdHRhY2tTcGFjZSB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5leHBlY3RlZC1tdWx0aWxpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgQnVpbGRQYWdlIH0gZnJvbSBcIi4vQnVpbGRQYWdlXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgRE9NTWFuaXAgfSBmcm9tIFwiLi9ET01NYW5pcFwiO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi9Nb2RhbFwiO1xuaW1wb3J0IHNoaXBBcnJheSBmcm9tIFwiLi9zaGlwcy5qc29uXCI7XG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9FdmVudEhhbmRsZXJcIjtcblxuZXhwb3J0IGNvbnN0IEdhbWUgPSAoKCkgPT4ge1xuICAgIGxldCBfaHVtYW5QbGF5ZXI7XG4gICAgbGV0IF9jb21wdXRlclBsYXllcjtcbiAgICBjb25zdCBuZXdHYW1lID0gKCkgPT4ge1xuICAgICAgICBCdWlsZFBhZ2UuYnVpbGROZXdHYW1lTW9kYWwoKTtcbiAgICAgICAgX2h1bWFuUGxheWVyID0gUGxheWVyKFwicGxheWVyXCIpO1xuICAgICAgICBfY29tcHV0ZXJQbGF5ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiKTtcbiAgICB9O1xuICAgIGNvbnN0IHNwYWNlQ2xpY2tlZCA9IGUgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5pZCA9PSBcInNldC11cC1ib2FyZFwiID8gX3BsYWNlQm9hdChlKSA6IF9hdHRhY2tDb21wdXRlclBsYXllcihlKTtcbiAgICB9O1xuICAgIGNvbnN0IF9zd2l0Y2hUdXJucyA9ICgpID0+IHtcbiAgICAgICAgX2h1bWFuUGxheWVyLnRvZ2dsZVR1cm4oKTtcbiAgICAgICAgX2NvbXB1dGVyUGxheWVyLnRvZ2dsZVR1cm4oKTtcbiAgICB9O1xuICAgIGNvbnN0IF9wbGFjZUJvYXQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgaG92ZXJTcGFjZXMgPSBET01NYW5pcC5nZXRFbGVtZW50cyhcIi5ib2FyZC1zcGFjZS5ob3ZlclwiKTtcbiAgICAgICAgY29uc3QgYmFkSG92ZXJTcGFjZXMgPSBET01NYW5pcC5nZXRFbGVtZW50cyhcIi5ib2FyZC1zcGFjZS5iYWQtaG92ZXJcIik7XG4gICAgICAgIGlmIChiYWRIb3ZlclNwYWNlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgaG92ZXJTcGFjZXMuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZChcImJvYXQtcGxhY2VkXCIpO1xuICAgICAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC50b2dnbGUoXCJob3ZlclwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2hpcFNpemUgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI3NoaXAtbmFtZVwiKS5kYXRhc2V0LnNpemU7XG4gICAgICAgICAgICBjb25zdCBzaGlwTmFtZSA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1uYW1lXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgY29uc3Qgc2hpcERpcmVjdGlvbiA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1yb3RhdGUtYnV0dG9uXCIpLmRhdGFzZXQuZGlyZWN0aW9uO1xuICAgICAgICAgICAgX2h1bWFuUGxheWVyLmFkZFNoaXAoXG4gICAgICAgICAgICAgICAgc2hpcFNpemUsXG4gICAgICAgICAgICAgICAgaG92ZXJTcGFjZXNbMF0uZGF0YXNldC54cG9zLFxuICAgICAgICAgICAgICAgIGhvdmVyU3BhY2VzWzBdLmRhdGFzZXQueXBvcyxcbiAgICAgICAgICAgICAgICBzaGlwRGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgIHNoaXBOYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgQnVpbGRQYWdlLmRpc3BsYXlCb2F0U2V0VXAoZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgX2lzQXR0YWNrVmFsaWQgPSAocGxheWVyLCB4LCB5KSA9PiB7XG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgIHBsYXllclxuICAgICAgICAgICAgLmdldEJvYXJkKClcbiAgICAgICAgICAgIC5nZXRIaXRMaXN0KClcbiAgICAgICAgICAgIC5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3BhY2UueFBvcyA9PSB4ICYmIHNwYWNlLnlQb3MgPT0geSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IF9pc0F0dGFja0hpdCA9IChwbGF5ZXIsIHgsIHkpID0+IHtcbiAgICAgICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwbGF5ZXJcbiAgICAgICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgICAgIC5nZXRTcGFjZUxpc3QoKVxuICAgICAgICAgICAgICAgIC5zb21lKHNwYWNlID0+IHNwYWNlLnhQb3MgPT0geCAmJiBzcGFjZS55UG9zID09IHkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGl0O1xuICAgIH07XG5cbiAgICBjb25zdCBfY2hlY2tEZXN0cm95ZWQgPSAocGxheWVyLCBhdHRhY2tlZFNoaXApID0+IHtcbiAgICAgICAgaWYgKHBsYXllci5nZXRCb2FyZCgpLmdldFNoaXBzKClbYXR0YWNrZWRTaGlwXS5pc0Rlc3Ryb3llZCgpKSB7XG4gICAgICAgICAgICBCdWlsZFBhZ2UubWFya0Rlc3Ryb3llZFNoaXAoXG4gICAgICAgICAgICAgICAgcGxheWVyLmdldEJvYXJkKCkuZ2V0U2hpcHMoKVthdHRhY2tlZFNoaXBdLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgICAgICAgcGxheWVyLmdldE5hbWUoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgX2F0dGFja1BsYXllciA9IChwbGF5ZXIsIHgsIHkpID0+IHtcbiAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IHBsYXllci5nZXROYW1lKCk7XG5cbiAgICAgICAgaWYgKF9pc0F0dGFja1ZhbGlkKHBsYXllciwgeCwgeSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dGFja2VkU2hpcCA9IHBsYXllci5hdHRhY2soeCwgeSk7XG4gICAgICAgICAgICBsZXQgaGl0ID0gX2lzQXR0YWNrSGl0KHBsYXllciwgeCwgeSk7XG4gICAgICAgICAgICBwbGF5ZXIubGFzdFJlc3VsdCA9IGhpdDtcbiAgICAgICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuYWRkU3VjY2Vzcyh4LCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEJ1aWxkUGFnZS5maWxsSW5BdHRhY2soeCwgeSwgcGxheWVyTmFtZSwgaGl0KTtcbiAgICAgICAgICAgIGlmIChhdHRhY2tlZFNoaXAgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChfY2hlY2tEZXN0cm95ZWQocGxheWVyLCBhdHRhY2tlZFNoaXApKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5sYXN0UmVzdWx0ID0gcGxheWVyLmdldEJvYXJkKCkuZ2V0U2hpcHMoKVthdHRhY2tlZFNoaXBdLmdldE5hbWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IF9kaXNwbGF5TGFzdFJlc3VsdCA9IHBsYXllciA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3RSZXN1bHQgPSBwbGF5ZXIubGFzdFJlc3VsdDtcblxuICAgICAgICBpZiAocGxheWVyID09IF9jb21wdXRlclBsYXllcikge1xuICAgICAgICAgICAgbGFzdFJlc3VsdCA9PSB0cnVlXG4gICAgICAgICAgICAgICAgPyBCdWlsZFBhZ2UuZGlzcGxheU1lc3NhZ2UoXCJZb3UgZmlyZSBhdCB0aGUgY29tcHV0ZXIuLi4gSXQncyBhIEhpdCFcIilcbiAgICAgICAgICAgICAgICA6IGxhc3RSZXN1bHQgPT0gZmFsc2VcbiAgICAgICAgICAgICAgICA/IEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShcIllvdSBmaXJlIGF0IHRoZSBjb21wdXRlci4uLiBJdCdzIGEgTWlzcy4uLlwiKVxuICAgICAgICAgICAgICAgIDogQnVpbGRQYWdlLmRpc3BsYXlNZXNzYWdlKGBZb3Ugc3VuayB0aGVpciAke2xhc3RSZXN1bHR9IWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFzdFJlc3VsdCA9PSB0cnVlXG4gICAgICAgICAgICAgICAgPyBCdWlsZFBhZ2UuZGlzcGxheU1lc3NhZ2UoXCJUaGUgY29tcHV0ZXIgZmlyZXMgYXQgeW91Li4uIEl0J3MgYSBIaXQuLi5cIilcbiAgICAgICAgICAgICAgICA6IGxhc3RSZXN1bHQgPT0gZmFsc2VcbiAgICAgICAgICAgICAgICA/IEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShcIlRoZSBjb21wdXRlciBmaXJlcyBhdCB5b3UuLi4gSXQncyBhIE1pc3MhXCIpXG4gICAgICAgICAgICAgICAgOiBCdWlsZFBhZ2UuZGlzcGxheU1lc3NhZ2UoYFRoZXkgc3VuayB5b3VyICR7bGFzdFJlc3VsdH0hYCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IF9hdHRhY2tDb21wdXRlclBsYXllciA9IGUgPT4ge1xuICAgICAgICBjb25zdCB4UG9zID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueHBvcztcbiAgICAgICAgY29uc3QgeVBvcyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lnlwb3M7XG4gICAgICAgIF9hdHRhY2tQbGF5ZXIoX2NvbXB1dGVyUGxheWVyLCB4UG9zLCB5UG9zKTtcbiAgICAgICAgX2Rpc3BsYXlMYXN0UmVzdWx0KF9jb21wdXRlclBsYXllcik7XG4gICAgICAgIEV2ZW50SGFuZGxlci5kZWFjdGl2YXRlU3BhY2VzKFwiI2NvbXB1dGVyLWJvYXJkXCIpO1xuICAgICAgICBCdWlsZFBhZ2UucmVtb3ZlSG92ZXJBdHRhY2soZSk7XG4gICAgICAgIF9zd2l0Y2hUdXJucygpO1xuICAgICAgICBfcGxheVR1cm4oKTtcbiAgICB9O1xuXG4gICAgLy9mb3IgdGVzdGluZyBvbmx5XG4gICAgY29uc3QgX3BsYWNlQ29tcHV0ZXJTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgX2NvbXB1dGVyUGxheWVyXG4gICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgLmdldFNoaXBzKClcbiAgICAgICAgICAgIC5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgICAgIHNoaXAuZ2V0UG9zaXRpb24oKS5mb3JFYWNoKHBvc2l0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIGAjY29tcHV0ZXItYm9hcmQgI3NwYWNlLSR7cG9zaXRpb24ueFBvc30tJHtwb3NpdGlvbi55UG9zfWBcbiAgICAgICAgICAgICAgICAgICAgKS5jbGFzc0xpc3QuYWRkKFwiYm9hdC1wbGFjZWRcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IF9nZW5lcmF0ZUNvbXB1dGVyU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLy9nbyB0aHJvdWdoIGVhY2ggc2hpcFxuICAgICAgICB3aGlsZSAoaSA8IHNoaXBBcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBsZXQgeFBvcztcbiAgICAgICAgICAgIGxldCB5UG9zO1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjtcbiAgICAgICAgICAgIC8vcmFuZG9tbHkgcGljayBhIGRpcmVjdGlvbiBlaXRoZXIgcmlnaHQgb3IgZG93blxuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT0gMCA/IChkaXJlY3Rpb24gPSBcInJpZ2h0XCIpIDogKGRpcmVjdGlvbiA9IFwiZG93blwiKTtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgLy9yZXN0cmljdCB0aGUgcmFuZG9tIHNvIGl0IGRvZXNuJ3QgcGljayBhIHN0YXJ0aW5nIHBsYWNlIHRoYXQgd291bGQgcHV0IHRoZSBwaWVjZXMgb3V0c2lkZVxuICAgICAgICAgICAgICAgIC8vb2YgdGhlIGdyaWRcbiAgICAgICAgICAgICAgICB4UG9zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gc2hpcEFycmF5W2ldLnNoaXBTaXplKSk7XG4gICAgICAgICAgICAgICAgeVBvcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeFBvcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB5UG9zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gc2hpcEFycmF5W2ldLnNoaXBTaXplKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdGFrZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICBfY29tcHV0ZXJQbGF5ZXJcbiAgICAgICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgICAgIC5nZXRTaGlwcygpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuZ2V0UG9zaXRpb24oKS5mb3JFYWNoKHBvcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2xvb2sgYXQgZWFjaCBvZiB0aGUgY3VycmVudCBzaGlwc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwQXJyYXlbaV0uc2hpcFNpemU7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYW5kIGNvbXBhcmUgdGhlaXIgY29vcmRpbmF0ZXMgdG8gdGhlIHBvc3NpYmxlIGNvb3JkaW5hdGVzIG9mIHRoaXMgbmV3IHNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeFBvcyArIGogPT0gcG9zLnhQb3MgJiYgeVBvcyA9PSBwb3MueVBvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiBpdCdzIGFscmVhZHkgdGFrZW4sIGNhbid0IHN1Ym1pdCB0aGUgbmV3IHNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiZG93blwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4UG9zID09IHBvcy54UG9zICYmIHlQb3MgKyBqID09IHBvcy55UG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9pZiB0aGUgc3BhY2UgaXMgbm90IGFscmVhZHkgdGFrZW4sIGFkZCB0aGUgc2hpcCB0byB0aGUgUGxheWVyJ3MgYm9hcmRcbiAgICAgICAgICAgIGlmICghdGFrZW4pIHtcbiAgICAgICAgICAgICAgICBfY29tcHV0ZXJQbGF5ZXIuYWRkU2hpcChzaGlwQXJyYXlbaV0uc2hpcFNpemUsIHhQb3MsIHlQb3MsIGRpcmVjdGlvbiwgc2hpcEFycmF5W2ldLnNoaXBOYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhfY29tcHV0ZXJQbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRTaGlwcygpW2ldLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgICAgIC8vZ28gdG8gdGhlIG5leHQgc2hpcCBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9fcGxhY2VDb21wdXRlclNoaXBzKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IF9pc0F0dGFja2VkID0gKHgsIHkpID0+IHtcbiAgICAgICAgaWYgKERPTU1hbmlwLmdldEVsZW1lbnQoYCNwbGF5ZXItYm9hcmQgI3NwYWNlLSR7eH0tJHt5fWApLmNsYXNzTGlzdC5jb250YWlucyhcImF0dGFja2VkXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgX2lzSGl0ID0gKHgsIHkpID0+IHtcbiAgICAgICAgaWYgKERPTU1hbmlwLmdldEVsZW1lbnQoYCNwbGF5ZXItYm9hcmQgI3NwYWNlLSR7eH0tJHt5fWApLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgX2lzRGVzdHJveWVkID0gKHgsIHkpID0+IHtcbiAgICAgICAgaWYgKERPTU1hbmlwLmdldEVsZW1lbnQoYCNwbGF5ZXItYm9hcmQgI3NwYWNlLSR7eH0tJHt5fWApLmNsYXNzTGlzdC5jb250YWlucyhcImRlc3Ryb3llZFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgX2NoZWNrQXJvdW5kID0gbGFzdEhpdCA9PiB7XG4gICAgICAgIGxldCBuZXh0SGl0ID0geyB4UG9zOiBsYXN0SGl0LnhQb3MsIHlQb3M6IGxhc3RIaXQueVBvcyB9O1xuXG4gICAgICAgIGlmIChsYXN0SGl0LnhQb3MgIT0gOSkge1xuICAgICAgICAgICAgbmV4dEhpdCA9IHsgeFBvczogbGFzdEhpdC54UG9zICsgMSwgeVBvczogbGFzdEhpdC55UG9zIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIV9pc0F0dGFja2VkKG5leHRIaXQueFBvcywgbmV4dEhpdC55UG9zKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRIaXQ7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdEhpdC54UG9zICE9IDApIHtcbiAgICAgICAgICAgIG5leHRIaXQgPSB7IHhQb3M6IGxhc3RIaXQueFBvcyAtIDEsIHlQb3M6IGxhc3RIaXQueVBvcyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFfaXNBdHRhY2tlZChuZXh0SGl0LnhQb3MsIG5leHRIaXQueVBvcykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0SGl0O1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3RIaXQueVBvcyAhPSA5KSB7XG4gICAgICAgICAgICBuZXh0SGl0ID0geyB4UG9zOiBsYXN0SGl0LnhQb3MsIHlQb3M6IGxhc3RIaXQueVBvcyArIDEgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghX2lzQXR0YWNrZWQobmV4dEhpdC54UG9zLCBuZXh0SGl0LnlQb3MpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dEhpdDtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0SGl0LnlQb3MgIT0gMCkge1xuICAgICAgICAgICAgbmV4dEhpdCA9IHsgeFBvczogbGFzdEhpdC54UG9zLCB5UG9zOiBsYXN0SGl0LnlQb3MgLSAxIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIV9pc0F0dGFja2VkKG5leHRIaXQueFBvcywgbmV4dEhpdC55UG9zKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRIaXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBjb25zdCBfY2hlY2tJbkxpbmUgPSBwb3NpdGlvbiA9PiB7XG4gICAgICAgIGxldCBvcHBQb3M7XG4gICAgICAgIGxldCBjaGVja1g7XG4gICAgICAgIGxldCBjaGVja1k7XG4gICAgICAgIGxldCBzdG9wMTtcbiAgICAgICAgbGV0IHN0b3AyO1xuXG4gICAgICAgIGxldCBjaGVja1BvcyA9IHsgeFBvczogcG9zaXRpb24ueFBvcyArIDEsIHlQb3M6IHBvc2l0aW9uLnlQb3MgfTtcbiAgICAgICAgaWYgKGNoZWNrUG9zLnhQb3MgPT0gMTApIHtcbiAgICAgICAgICAgIGNoZWNrWCA9IGNoZWNrUG9zLnhQb3M7XG4gICAgICAgICAgICBjaGVja1kgPSBjaGVja1Bvcy55UG9zO1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tZICsgMSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgX2lzSGl0KGNoZWNrWCAtIDEsIGNoZWNrWSArIDEpID8gKHN0b3AxID0gdHJ1ZSkgOiAoc3RvcDEgPSBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hlY2tZIC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgX2lzSGl0KGNoZWNrWCAtIDEsIGNoZWNrWSAtIDEpID8gKHN0b3AyID0gdHJ1ZSkgOiAoc3RvcDIgPSBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0b3AxICYmICFzdG9wMikge1xuICAgICAgICAgICAgICAgIG9wcFBvcyA9IHsgeFBvczogcG9zaXRpb24ueFBvcyAtIDEsIHlQb3M6IHBvc2l0aW9uLnlQb3MgfTtcbiAgICAgICAgICAgICAgICBpZiAoIV9pc0F0dGFja2VkKG9wcFBvcy54UG9zLCBvcHBQb3MueVBvcykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wcFBvcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoX2lzSGl0KGNoZWNrUG9zLnhQb3MsIGNoZWNrUG9zLnlQb3MpKSB7XG4gICAgICAgICAgICBvcHBQb3MgPSB7IHhQb3M6IHBvc2l0aW9uLnhQb3MgLSAxLCB5UG9zOiBwb3NpdGlvbi55UG9zIH07XG4gICAgICAgICAgICBpZiAob3BwUG9zLnhQb3MgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmICghX2lzQXR0YWNrZWQob3BwUG9zLnhQb3MsIG9wcFBvcy55UG9zKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3BwUG9zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrUG9zID0geyB4UG9zOiBwb3NpdGlvbi54UG9zIC0gMSwgeVBvczogcG9zaXRpb24ueVBvcyB9O1xuICAgICAgICBpZiAoY2hlY2tQb3MueFBvcyA9PSAtMSkge1xuICAgICAgICAgICAgY2hlY2tYID0gY2hlY2tQb3MueFBvcztcbiAgICAgICAgICAgIGNoZWNrWSA9IGNoZWNrUG9zLnlQb3M7XG5cbiAgICAgICAgICAgIGlmIChjaGVja1kgKyAxIDwgMTApIHtcbiAgICAgICAgICAgICAgICBfaXNIaXQoY2hlY2tYICsgMSwgY2hlY2tZICsgMSkgPyAoc3RvcDEgPSB0cnVlKSA6IChzdG9wMSA9IGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGVja1kgLSAxID49IDApIHtcbiAgICAgICAgICAgICAgICBfaXNIaXQoY2hlY2tYICsgMSwgY2hlY2tZIC0gMSkgPyAoc3RvcDIgPSB0cnVlKSA6IChzdG9wMiA9IGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RvcDEgJiYgIXN0b3AyKSB7XG4gICAgICAgICAgICAgICAgb3BwUG9zID0geyB4UG9zOiBwb3NpdGlvbi54UG9zICsgMSwgeVBvczogcG9zaXRpb24ueVBvcyB9O1xuICAgICAgICAgICAgICAgIGlmICghX2lzQXR0YWNrZWQob3BwUG9zLnhQb3MsIG9wcFBvcy55UG9zKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3BwUG9zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfaXNIaXQoY2hlY2tQb3MueFBvcywgY2hlY2tQb3MueVBvcykpIHtcbiAgICAgICAgICAgIG9wcFBvcyA9IHsgeFBvczogcG9zaXRpb24ueFBvcyArIDEsIHlQb3M6IHBvc2l0aW9uLnlQb3MgfTtcbiAgICAgICAgICAgIGlmIChvcHBQb3MueFBvcyA8IDEwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfaXNBdHRhY2tlZChvcHBQb3MueFBvcywgb3BwUG9zLnlQb3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHBQb3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tQb3MgPSB7IHhQb3M6IHBvc2l0aW9uLnhQb3MsIHlQb3M6IHBvc2l0aW9uLnlQb3MgKyAxIH07XG4gICAgICAgIGlmIChjaGVja1Bvcy55UG9zID09IDEwKSB7XG4gICAgICAgICAgICBjaGVja1ggPSBjaGVja1Bvcy54UG9zO1xuICAgICAgICAgICAgY2hlY2tZID0gY2hlY2tQb3MueVBvcztcblxuICAgICAgICAgICAgaWYgKGNoZWNrWCArIDEgPCAxMCkge1xuICAgICAgICAgICAgICAgIF9pc0hpdChjaGVja1ggKyAxLCBjaGVja1kgLSAxKSA/IChzdG9wMSA9IHRydWUpIDogKHN0b3AxID0gZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoZWNrWCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICAgIF9pc0hpdChjaGVja1ggLSAxLCBjaGVja1kgLSAxKSA/IChzdG9wMiA9IHRydWUpIDogKHN0b3AyID0gZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdG9wMSAmJiAhc3RvcDIpIHtcbiAgICAgICAgICAgICAgICBvcHBQb3MgPSB7IHhQb3M6IHBvc2l0aW9uLnhQb3MsIHlQb3M6IHBvc2l0aW9uLnlQb3MgLSAxIH07XG4gICAgICAgICAgICAgICAgaWYgKCFfaXNBdHRhY2tlZChvcHBQb3MueFBvcywgb3BwUG9zLnlQb3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHBQb3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF9pc0hpdChjaGVja1Bvcy54UG9zLCBjaGVja1Bvcy55UG9zKSkge1xuICAgICAgICAgICAgb3BwUG9zID0geyB4UG9zOiBwb3NpdGlvbi54UG9zLCB5UG9zOiBwb3NpdGlvbi55UG9zIC0gMSB9O1xuICAgICAgICAgICAgaWYgKG9wcFBvcy55UG9zID49IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoIV9pc0F0dGFja2VkKG9wcFBvcy54UG9zLCBvcHBQb3MueVBvcykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wcFBvcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja1BvcyA9IHsgeFBvczogcG9zaXRpb24ueFBvcywgeVBvczogcG9zaXRpb24ueVBvcyAtIDEgfTtcbiAgICAgICAgaWYgKGNoZWNrUG9zLnlQb3MgPT0gLTEpIHtcbiAgICAgICAgICAgIGNoZWNrWCA9IGNoZWNrUG9zLnhQb3M7XG4gICAgICAgICAgICBjaGVja1kgPSBjaGVja1Bvcy55UG9zO1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tYICsgMSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgX2lzSGl0KGNoZWNrWCArIDEsIGNoZWNrWSArIDEpID8gKHN0b3AxID0gdHJ1ZSkgOiAoc3RvcDEgPSBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hlY2tYIC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgX2lzSGl0KGNoZWNrWCAtIDEsIGNoZWNrWSArIDEpID8gKHN0b3AyID0gdHJ1ZSkgOiAoc3RvcDIgPSBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0b3AxICYmICFzdG9wMikge1xuICAgICAgICAgICAgICAgIG9wcFBvcyA9IHsgeFBvczogcG9zaXRpb24ueFBvcywgeVBvczogcG9zaXRpb24ueVBvcyArIDEgfTtcbiAgICAgICAgICAgICAgICBpZiAoIV9pc0F0dGFja2VkKG9wcFBvcy54UG9zLCBvcHBQb3MueVBvcykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wcFBvcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoX2lzSGl0KGNoZWNrUG9zLnhQb3MsIGNoZWNrUG9zLnlQb3MpKSB7XG4gICAgICAgICAgICBvcHBQb3MgPSB7IHhQb3M6IHBvc2l0aW9uLnhQb3MsIHlQb3M6IHBvc2l0aW9uLnlQb3MgKyAxIH07XG4gICAgICAgICAgICBpZiAob3BwUG9zLnlQb3MgPCAxMCkge1xuICAgICAgICAgICAgICAgIGlmICghX2lzQXR0YWNrZWQob3BwUG9zLnhQb3MsIG9wcFBvcy55UG9zKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3BwUG9zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBjb25zdCBfY2hlY2tJbkxpbmUgPSAobGFzdEhpdCwgcHJldmlvdXNIaXQpID0+IHtcbiAgICAvLyAgICAgbGV0IG5leHRIaXQ7XG4gICAgLy8gICAgIGlmIChsYXN0SGl0LnhQb3MgPT0gcHJldmlvdXNIaXQueFBvcyArIDEpIHtcbiAgICAvLyAgICAgICAgIG5leHRIaXQgPSB7IHhQb3M6IGxhc3RIaXQueFBvcyArIDEsIHlQb3M6IGxhc3RIaXQueVBvcyB9O1xuICAgIC8vICAgICAgICAgaWYgKG5leHRIaXQueFBvcyAhPSAxMCkge1xuICAgIC8vICAgICAgICAgICAgIGlmICghX2lzQXR0YWNrZWQobmV4dEhpdC54UG9zLCBuZXh0SGl0LnlQb3MpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBuZXh0SGl0O1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAobGFzdEhpdC54UG9zID09IHByZXZpb3VzSGl0LnhQb3MgLSAxKSB7XG4gICAgLy8gICAgICAgICBuZXh0SGl0ID0geyB4UG9zOiBsYXN0SGl0LnhQb3MgLSAxLCB5UG9zOiBsYXN0SGl0LnlQb3MgfTtcbiAgICAvLyAgICAgICAgIGlmIChuZXh0SGl0LnhQb3MgIT0gLTEpIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoIV9pc0F0dGFja2VkKG5leHRIaXQueFBvcywgbmV4dEhpdC55UG9zKSkge1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dEhpdDtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKGxhc3RIaXQueVBvcyA9PSBwcmV2aW91c0hpdC55UG9zICsgMSkge1xuICAgIC8vICAgICAgICAgbmV4dEhpdCA9IHsgeFBvczogbGFzdEhpdC54UG9zLCB5UG9zOiBsYXN0SGl0LnlQb3MgKyAxIH07XG4gICAgLy8gICAgICAgICBpZiAobmV4dEhpdC55UG9zICE9IDEwKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKCFfaXNBdHRhY2tlZChuZXh0SGl0LnhQb3MsIG5leHRIaXQueVBvcykpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHRIaXQ7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChsYXN0SGl0LnlQb3MgPT0gcHJldmlvdXNIaXQueVBvcyAtIDEpIHtcbiAgICAvLyAgICAgICAgIG5leHRIaXQgPSB7IHhQb3M6IGxhc3RIaXQueFBvcywgeVBvczogbGFzdEhpdC55UG9zIC0gMSB9O1xuICAgIC8vICAgICAgICAgaWYgKG5leHRIaXQueVBvcyAhPSAtMSkge1xuICAgIC8vICAgICAgICAgICAgIGlmICghX2lzQXR0YWNrZWQobmV4dEhpdC54UG9zLCBuZXh0SGl0LnlQb3MpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBuZXh0SGl0O1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH07XG5cbiAgICBjb25zdCBfY2hvb3NlQ29tcHV0ZXJTcG90ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzTGlzdCA9IF9odW1hblBsYXllci5nZXRTdWNjZXNzKCk7XG4gICAgICAgIGlmIChzdWNjZXNzTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgaSA9IDE7XG4gICAgICAgICAgICB3aGlsZSAoaSA8PSBzdWNjZXNzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgaGl0Q2hlY2sgPSBzdWNjZXNzTGlzdFtzdWNjZXNzTGlzdC5sZW5ndGggLSBpXTtcbiAgICAgICAgICAgICAgICBsZXQgbGFzdEhpdCA9IHN1Y2Nlc3NMaXN0W3N1Y2Nlc3NMaXN0Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0SGl0O1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzTGlzdC5sZW5ndGggLSBpIC0gMSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXNEZXN0cm95ZWQobGFzdEhpdC54UG9zLCBsYXN0SGl0LnlQb3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0SGl0ID0gX2NoZWNrSW5MaW5lKGhpdENoZWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmV4dEhpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRIaXQgPSBfY2hlY2tBcm91bmQobGFzdEhpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV9pc0Rlc3Ryb3llZChoaXRDaGVjay54UG9zLCBoaXRDaGVjay55UG9zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEhpdCA9IF9jaGVja0luTGluZShoaXRDaGVjayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5leHRIaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHRIaXQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoaXRzID0gRE9NTWFuaXAuZ2V0RWxlbWVudHMoXCIjcGxheWVyLWJvYXJkIC5oaXRcIik7XG4gICAgICAgIGlmIChoaXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBfY2hlY2tBcm91bmQoe1xuICAgICAgICAgICAgICAgIHhQb3M6IHBhcnNlSW50KGhpdHNbMF0uZGF0YXNldC54cG9zKSxcbiAgICAgICAgICAgICAgICB5UG9zOiBwYXJzZUludChoaXRzWzBdLmRhdGFzZXQueXBvcyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHhQb3M6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgeVBvczogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApIH07XG4gICAgfTtcblxuICAgIGNvbnN0IF9jb21wdXRlclBsYXllcnNUdXJuID0gKCkgPT4ge1xuICAgICAgICBsZXQgcGxheWVkVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCFwbGF5ZWRWYWxpZCkge1xuICAgICAgICAgICAgbGV0IGF0dGFja1Bvc2l0aW9uID0gX2Nob29zZUNvbXB1dGVyU3BvdCgpO1xuICAgICAgICAgICAgcGxheWVkVmFsaWQgPSBfYXR0YWNrUGxheWVyKF9odW1hblBsYXllciwgYXR0YWNrUG9zaXRpb24ueFBvcywgYXR0YWNrUG9zaXRpb24ueVBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgX2Rpc3BsYXlMYXN0UmVzdWx0KF9odW1hblBsYXllcik7XG4gICAgICAgIF9zd2l0Y2hUdXJucygpO1xuICAgIH07XG5cbiAgICBjb25zdCBfcmFuZG9tUGF1c2UgPSAobWluTGVuZ3RoLCBtYXhMZW5ndGgpID0+IHtcbiAgICAgICAgY29uc3QgcGF1c2VMZW5ndGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4TGVuZ3RoIC0gbWluTGVuZ3RoKSArIG1pbkxlbmd0aCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgcGF1c2VMZW5ndGgpKTtcbiAgICB9O1xuICAgIGNvbnN0IF9jb2luRmxpcCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIGNvbnN0IF9jaG9vc2VUdXJuID0gKCkgPT4ge1xuICAgICAgICBpZiAoX2NvaW5GbGlwKCkpIHtcbiAgICAgICAgICAgIF9odW1hblBsYXllci50b2dnbGVUdXJuKCk7XG4gICAgICAgICAgICBCdWlsZFBhZ2UuZGlzcGxheU1lc3NhZ2UoXCJGbGlwcGluZyBDb2luLi4uIFBsYXllciBnb2VzIGZpcnN0LlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9jb21wdXRlclBsYXllci50b2dnbGVUdXJuKCk7XG4gICAgICAgICAgICBCdWlsZFBhZ2UuZGlzcGxheU1lc3NhZ2UoXCJGbGlwcGluZyBDb2luLi4uIENvbXB1dGVyIGdvZXMgZmlyc3QuXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IF9wbGF5VHVybiA9ICgpID0+IHtcbiAgICAgICAgaWYgKF9odW1hblBsYXllci5pc0xvc3QoKSkge1xuICAgICAgICAgICAgQnVpbGRQYWdlLmRpc3BsYXlNZXNzYWdlKFwiVGhlIGNvbXB1dGVyIGhhcyBkZXN0cm95ZWQgeW91ciBlbnRpcmUgZmxlZXQuLi4gUGxheSBBZ2Fpbj9cIik7XG4gICAgICAgIH0gZWxzZSBpZiAoX2NvbXB1dGVyUGxheWVyLmlzTG9zdCgpKSB7XG4gICAgICAgICAgICBCdWlsZFBhZ2UuZGlzcGxheU1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgXCJZb3UndmUgc3VjY2Vzc2Z1bGx5IGRlc3Ryb3llZCBhbGwgb2YgdGhlIGNvbXB1dGVyJ3Mgc2hpcHMhIFBsYXkgQWdhaW4/XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoX2h1bWFuUGxheWVyLmdldFR1cm4oKSkge1xuICAgICAgICAgICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZVNwYWNlcyhcIiNjb21wdXRlci1ib2FyZFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3JhbmRvbVBhdXNlKDUwMCwgNTAwKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBfY29tcHV0ZXJQbGF5ZXJzVHVybigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBfcGxheVR1cm4oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgICAgICBpZiAoRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzaGlwLW5hbWVcIikuZGF0YXNldC5pbmRleCA9PSA2KSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoTW9kYWwuY2xvc2VDdXJyZW50TW9kYWwoKSk7XG5cbiAgICAgICAgICAgIEJ1aWxkUGFnZS5yZWJ1aWxkQm9hcmRzKCk7XG4gICAgICAgICAgICBCdWlsZFBhZ2UucGxhY2VQbGF5ZXJTaGlwcyhfaHVtYW5QbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRTaGlwcygpKTtcbiAgICAgICAgICAgIF9nZW5lcmF0ZUNvbXB1dGVyU2hpcHMoKTtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS5hY3RpdmF0ZUJvYXJkKFwiI2NvbXB1dGVyLWJvYXJkXCIpO1xuICAgICAgICAgICAgX2Nob29zZVR1cm4oKTtcbiAgICAgICAgICAgIF9wbGF5VHVybigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRHYW1lQnV0dG9uID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzdGFydC1nYW1lLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIHN0YXJ0R2FtZUJ1dHRvbi5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICAgICAgICAgIHN0YXJ0R2FtZUJ1dHRvbi5zZXRDdXN0b21WYWxpZGl0eShcIlBsZWFzZSBwbGFjZSBhbGwgb2YgeW91ciBzaGlwc1wiKTtcbiAgICAgICAgICAgIHN0YXJ0R2FtZUJ1dHRvbi5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4geyBuZXdHYW1lLCBzcGFjZUNsaWNrZWQsIHN0YXJ0R2FtZSB9O1xufSkoKTtcblxuY29uc3QgaW5pdFBhZ2UgPSAoKCkgPT4ge1xuICAgIFByb21pc2UucmVzb2x2ZShCdWlsZFBhZ2UuYnVpbGRTdGFydGluZ1BhZ2UoKSk7XG59KSgpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZDViODtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzFiMWExNztcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDU4MjY7XFxuICAgIGNvbG9yOiAjMWIxYTE3O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWIxYTE3O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG59XFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg2MCUpO1xcbn1cXG5cXG4jZ2FtZS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhNTAwO1xcbiAgICB3aWR0aDogNzB2dztcXG4gICAgbWluLWhlaWdodDogNjB2aDtcXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDYwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNnYW1lLWluc3RydWN0aW9ucyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTgyNjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuI2JvYXJkcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLmJvYXJkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYm9hcmQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxMCUgW2NvbC1zdGFydF0pO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMTAlIFtyb3ctc3RhcnRdKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdlYTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcbi5ib2FyZC1zcGFjZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4uYm9hcmQuYWN0aXZlIC5ob3Zlci5ib2FyZC1zcGFjZTpub3QoLmF0dGFja2VkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZWZmOWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YTgwNGE7XFxufVxcbi5ib2FyZC1zcGFjZS5ib2F0LXBsYWNlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZWQzZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YTY4ODA7XFxufVxcbi5ib2FyZC5hY3RpdmUgLmJvYXJkLXNwYWNlLmJhZC1ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjllOWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDRhNGE7XFxufVxcbi5ib2FyZC1zcGFjZS5hdHRhY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZmOWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YzgwNGE7XFxufVxcbi5ib2FyZC1zcGFjZS5hdHRhY2tlZDo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICM3YzgwNGE7XFxuICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYxOTJcXFwiO1xcbn1cXG4uYm9hcmQtc3BhY2UuYXR0YWNrZWQuaGl0OjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzgwNGE0YTtcXG4gICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjExMVxcXCI7XFxufVxcbi5ib2FyZC1zcGFjZS5kZXN0cm95ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZTllO1xcbiAgICBib3JkZXItY29sb3I6ICM4MDRhNGE7XFxufVxcbi5ib2FyZC1zcGFjZS5kZXN0cm95ZWQ6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjODA0YTRhO1xcbiAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDU3XFxcIjtcXG59XFxuXFxuLmJvYXJkLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ucGFnZS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ1ODI2O1xcbn1cXG5cXG4ubW9kYWwuYmFjayB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tb2RhbC5jb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ1ODI2O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWIxYTE3O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLm1vZGFsLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhNTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG1hcmdpbjogMHB4IDQwcHg7XFxufVxcbi5tb2RhbC5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG4ubW9kYWwtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYTUwMDtcXG59XFxuXFxuI3NoaXAtbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9iYXR0bGVzaGlwL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDREQUE0RDtJQUM1RCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtEQUFrRDtJQUNsRCwrQ0FBK0M7SUFDL0MseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmQ1Yjg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMxYjFhMTc7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ1ODI2O1xcbiAgICBjb2xvcjogIzFiMWExNztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFiMWExNztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxufVxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNjAlKTtcXG59XFxuXFxuI2dhbWUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYTUwMDtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDYwdmg7XFxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiA1MHB4O1xcbiAgICBwYWRkaW5nOiA2MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jZ2FtZS1pbnN0cnVjdGlvbnMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDU4MjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbiNib2FyZHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5ib2FyZC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvYXJkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMTAlIFtjb2wtc3RhcnRdKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDEwJSBbcm93LXN0YXJ0XSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZWE7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uYm9hcmQtc3BhY2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLmJvYXJkLmFjdGl2ZSAuaG92ZXIuYm9hcmQtc3BhY2U6bm90KC5hdHRhY2tlZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVmZjllO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGE4MDRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuYm9hdC1wbGFjZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVkM2ZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGE2ODgwO1xcbn1cXG4uYm9hcmQuYWN0aXZlIC5ib2FyZC1zcGFjZS5iYWQtaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZTllO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODA0YTRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuYXR0YWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZjllO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjN2M4MDRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuYXR0YWNrZWQ6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjN2M4MDRhO1xcbiAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMTkyXFxcIjtcXG59XFxuLmJvYXJkLXNwYWNlLmF0dGFja2VkLmhpdDo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICM4MDRhNGE7XFxuICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYxMTFcXFwiO1xcbn1cXG4uYm9hcmQtc3BhY2UuZGVzdHJveWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWU5ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjODA0YTRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuZGVzdHJveWVkOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzgwNGE0YTtcXG4gICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjA1N1xcXCI7XFxufVxcblxcbi5ib2FyZC1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLnBhZ2UtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTgyNjtcXG59XFxuXFxuLm1vZGFsLmJhY2sge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubW9kYWwuY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTgyNjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFiMWExNztcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5tb2RhbC10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYTUwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBtYXJnaW46IDBweCA0MHB4O1xcbn1cXG4ubW9kYWwuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuLm1vZGFsLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGE1MDA7XFxufVxcblxcbiNzaGlwLW5hbWUge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIuL2JhdHRsZXNoaXAvaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYmFiZWxfcnVudGltZV9yZWdlbmVyYXRvcl9pbmRleF9qcy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfLTg2YWRmZVwiLFwic3JjX0hlYWRlcl9qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9iYXR0bGVzaGlwL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiRE9NTWFuaXAiLCJFdmVudEhhbmRsZXIiLCJNb2RhbCIsInNoaXBBcnJheSIsImNyZWF0ZUhlYWRlciIsIkJ1aWxkUGFnZSIsImFjdGl2YXRlQm9hcmQiLCJpZCIsImdldEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJfbWFrZUdyaWQiLCJncmlkQ29udGFpbmVyIiwibWFrZU5ld0VsZW1lbnQiLCJpIiwiaiIsImFwcGVuZENoaWxkIiwiYnVpbGRTdGFydGluZ1BhZ2UiLCJoZWFkZXIiLCJjb250ZW50IiwiZ2FtZUNvbnRhaW5lciIsImluc3RydWN0aW9ucyIsImJvYXJkc0NvbnRhaW5lciIsInBsYXllckJvYXJkV3JhcHBlciIsInBsYXllckJvYXJkIiwicGxheWVyQm9hcmRMYWJlbCIsImFwcGVuZENoaWxkcmVuIiwiY29tcHV0ZXJCb2FyZFdyYXBwZXIiLCJjb21wdXRlckJvYXJkIiwiY29tcHV0ZXJCb2FyZExhYmVsIiwibmV3R2FtZUJ1dHRvbiIsImRvY3VtZW50IiwiYm9keSIsImFjdGl2YXRlTmV3R2FtZUJ1dHRvbiIsImJ1aWxkTmV3R2FtZU1vZGFsIiwibmV3R2FtZU1vZGFsIiwibmV3R2FtZVRpdGxlIiwic2hpcE5hbWUiLCJyb3RhdGVCdXR0b24iLCJzZXRVcEdyaWQiLCJzdGFydEdhbWVCdXR0b24iLCJQcm9taXNlIiwicmVzb2x2ZSIsImRpc3BsYXlNb2RhbCIsInRoZW4iLCJhY3RpdmF0ZU5ld0dhbWVNb2RhbCIsImFjdGl2YXRlU3BhY2VzIiwiZGlzcGxheUJvYXRTZXRVcCIsInRvZ2dsZVJvdGF0ZUJ1dHRvbiIsImN1cnJlbnRTdGF0ZSIsImRhdGFzZXQiLCJkaXJlY3Rpb24iLCJfYmFkSG92ZXIiLCJ4UG9zIiwieVBvcyIsInNpemUiLCJwb3NpdGlvbiIsIm9mZnNldCIsInRvZ2dsZSIsImhvdmVyU2V0VXAiLCJlIiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwieHBvcyIsInlwb3MiLCJjb250YWlucyIsImFkZEhvdmVyQXR0YWNrIiwicmVtb3ZlSG92ZXJBdHRhY2siLCJyZW1vdmUiLCJzaGlwSW5kZXgiLCJpbmRleCIsInRleHRDb250ZW50Iiwic2V0QXR0cmlidXRlIiwic2hpcFNpemUiLCJkZWFjdGl2YXRlU3BhY2VzIiwicGxhY2VQbGF5ZXJTaGlwcyIsInNoaXBzIiwiZm9yRWFjaCIsInNoaXAiLCJnZXRQb3NpdGlvbiIsImZpbGxJbkF0dGFjayIsIngiLCJ5IiwicGxheWVyTmFtZSIsImhpdCIsIm1hcmtEZXN0cm95ZWRTaGlwIiwic3BhY2UiLCJzcGFjZUVsZW0iLCJkaXNwbGF5TWVzc2FnZSIsIm1lc3NhZ2UiLCJyZWJ1aWxkQm9hcmRzIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJsYXN0RWxlbWVudENoaWxkIiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidHlwZSIsIkhUTUxDbGFzcyIsInRleHQiLCJuZXdFbGVtIiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZXMiLCJsZW5ndGgiLCJhdHQiLCJPYmplY3QiLCJrZXlzIiwicGFyZW50IiwiY2hpbGRyZW4iLCJjaGlsZCIsImluc2VydEFmdGVyIiwibmV3Tm9kZSIsImV4aXN0aW5nTm9kZSIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZyIsInJlbW92ZUFsbENoaWxkcmVuIiwiZWxlbWVudCIsInNraXAiLCJjaGlsZE5vZGVzIiwiR2FtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdHYW1lIiwic3RhcnRHYW1lIiwic3BhY2VDbGlja2VkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhvdmVyQXR0YWNrIiwiU2hpcCIsIkJvYXJkIiwiX3NwYWNlcyIsIl9pbml0U3BhY2VzIiwiX3NoaXBzIiwiX2hpdExpc3QiLCJfc3BhY2VMaXN0Iiwic3BhY2VzIiwicHVzaCIsImF0dGFja2VkIiwiZ2V0Qm9hcmQiLCJtYXAiLCJjaGVja1BsYWNlIiwiZmluZEluZGV4IiwiYXR0YWNrU3BhY2UiLCJhZGRTaGlwIiwiZGlyIiwibmFtZSIsImdldFNoaXBzIiwiZ2V0SGl0TGlzdCIsImdldFNwYWNlTGlzdCIsImFsbERlc3Ryb3llZCIsImV2ZXJ5IiwiaXNEZXN0cm95ZWQiLCJtb2RhbCIsIm1vZGFsQ29udGFpbmVyIiwic2V0VGltZW91dCIsImNsb3NlQ3VycmVudE1vZGFsIiwiUGxheWVyIiwiX25hbWUiLCJfYm9hcmQiLCJfbG9zdCIsIl9pc1R1cm4iLCJsYXN0UmVzdWx0IiwiX2F0dGFja1N1Y2Nlc3MiLCJnZXROYW1lIiwiaXNMb3N0IiwidG9nZ2xlVHVybiIsImdldFR1cm4iLCJhdHRhY2siLCJoaXRTaGlwSW5kZXgiLCJhZGRTdWNjZXNzIiwiZ2V0U3VjY2VzcyIsIl9oZWFsdGgiLCJBcnJheSIsImZyb20iLCJfZGVzdHJveWVkIiwiX2Nvb3JkaW5hdGVzIiwiX3NldFN0YXJ0aW5nIiwiZ2V0Q3VycmVudEhlYWx0aCIsIl9kYW1hZ2UiLCJsb2NhdGlvbiIsInBsYWNlIiwiaW5jb21pbmd4IiwiaW5jb21pbmd5IiwiYXR0YWNrSW5kZXgiLCJfaHVtYW5QbGF5ZXIiLCJfY29tcHV0ZXJQbGF5ZXIiLCJwYXJlbnRFbGVtZW50IiwiX3BsYWNlQm9hdCIsIl9hdHRhY2tDb21wdXRlclBsYXllciIsIl9zd2l0Y2hUdXJucyIsImhvdmVyU3BhY2VzIiwiYmFkSG92ZXJTcGFjZXMiLCJzaGlwRGlyZWN0aW9uIiwiX2lzQXR0YWNrVmFsaWQiLCJwbGF5ZXIiLCJ2YWxpZCIsIl9pc0F0dGFja0hpdCIsInNvbWUiLCJfY2hlY2tEZXN0cm95ZWQiLCJhdHRhY2tlZFNoaXAiLCJfYXR0YWNrUGxheWVyIiwiX2Rpc3BsYXlMYXN0UmVzdWx0IiwiX3BsYXlUdXJuIiwiX3BsYWNlQ29tcHV0ZXJTaGlwcyIsIl9nZW5lcmF0ZUNvbXB1dGVyU2hpcHMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0YWtlbiIsInBvcyIsImNvbnNvbGUiLCJsb2ciLCJfaXNBdHRhY2tlZCIsIl9pc0hpdCIsIl9pc0Rlc3Ryb3llZCIsIl9jaGVja0Fyb3VuZCIsImxhc3RIaXQiLCJuZXh0SGl0IiwiX2NoZWNrSW5MaW5lIiwib3BwUG9zIiwiY2hlY2tYIiwiY2hlY2tZIiwic3RvcDEiLCJzdG9wMiIsImNoZWNrUG9zIiwiX2Nob29zZUNvbXB1dGVyU3BvdCIsInN1Y2Nlc3NMaXN0IiwiaGl0Q2hlY2siLCJoaXRzIiwiX2NvbXB1dGVyUGxheWVyc1R1cm4iLCJwbGF5ZWRWYWxpZCIsImF0dGFja1Bvc2l0aW9uIiwiX3JhbmRvbVBhdXNlIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwicGF1c2VMZW5ndGgiLCJfY29pbkZsaXAiLCJfY2hvb3NlVHVybiIsInNldEN1c3RvbVZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJpbml0UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=