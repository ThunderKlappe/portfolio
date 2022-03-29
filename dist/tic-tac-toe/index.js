/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tic-tac-toe/DOMManip.js":
/*!*************************************!*\
  !*** ./src/tic-tac-toe/DOMManip.js ***!
  \*************************************/
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

/***/ "./src/tic-tac-toe/index.js":
/*!**********************************!*\
  !*** ./src/tic-tac-toe/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/tic-tac-toe/style.css");
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMManip */ "./src/tic-tac-toe/DOMManip.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header */ "./src/Header.js");




var Player = function Player(type) {
  var getType = function getType() {
    return type;
  };

  return {
    getType: getType
  };
};

var AIPlayer = function AIPlayer(type, difficulty) {
  var _Player = Player(type),
      getType = _Player.getType; //if somebody can win, go there.


  var _defendOrAttack = function _defendOrAttack(player) {
    for (var i = 0; i < 9; i++) {
      var _dummyBoard = board.getBoard().map(function (ele) {
        return ele;
      });

      if (_dummyBoard[i] == "") {
        _dummyBoard[i] = player.getType();

        if (board.checkIfWon(_dummyBoard) == player.getType()) {
          display.playPiece(i, this);
          return true;
        }
      }
    }

    return false;
  }; //picks a random empty spot


  var _pickRandom = function _pickRandom() {
    var _randStart = Math.floor(Math.random() * board.getBoard().length); // eslint-disable-next-line no-constant-condition


    while (true) {
      if (board.getBoard()[_randStart] == "") {
        display.playPiece(_randStart, this);
        return;
      } else {
        _randStart++;

        if (_randStart == board.getBoard().length) {
          _randStart = 0;
        }
      }
    }
  };

  var _chooseMove = function _chooseMove() {
    var _playMade = false;

    var _oppPlays = board.getBoard().reduce(function (a, b) {
      return b == display.getPlayer1().getType() ? a + 1 : a;
    }, 0); //check if the AI can win


    _playMade = _defendOrAttack.call(this, this); //check if the Player can win

    if (!_playMade) {
      _playMade = _defendOrAttack.call(this, display.getPlayer1());
    }

    if (!_playMade) {
      if (_oppPlays == 0) {
        display.playPiece(0, this);
        return;
      } else if (_oppPlays == 1 && type == "x") {
        if (board.getBoard()[8] == "") {
          display.playPiece(8, this);
          return;
        }
      } else if (_oppPlays == 2) {
        //If the opponent played on two corners, play on a side.
        var _sidePieces = [];

        for (var i = 1; i < board.getBoard().length; i += 2) {
          _sidePieces.push(board.getBoard()[i]);
        }

        if (!_sidePieces.includes(display.getPlayer1().getType())) {
          display.playPiece(1, this);
          return;
        }
      } //go to the middle if it's available


      if (board.getBoard()[4] == "") {
        display.playPiece(4, this); //go to the corner if the middle is taken
      } else if (board.getBoard()[0] == "") {
        display.playPiece(0, this);
      } //or else pick a random spot.
      else {
        _pickRandom.call(this);
      }
    }
  };

  var makeMove = function makeMove() {
    //decided whether to make the correct move or random move based on difficulty
    if (Math.floor(Math.random() * difficulty) == 0) {
      _chooseMove.call(this);
    } else {
      _pickRandom.call(this);
    }
  };

  return {
    getType: getType,
    makeMove: makeMove
  };
}; // eslint-disable-next-line no-unused-vars


var _makeDisplay = function () {
  var header = (0,_Header__WEBPACK_IMPORTED_MODULE_2__["default"])("Tic-Tac-Toe");
  var content = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "content");
  var boardContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "board-container");
  var pieceSelection = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "piece-selection", "instructions", "Please Select Your Piece:");
  var pieceSelectionHelper = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "piece-selection-helper", "sub-instructions", "X goes first, O goes second");
  var pieceContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "piece-container", "choice-container");
  var xPiece = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "x-piece", "piece-button x-piece active", "x", {
    value: "x"
  });
  var oPiece = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "o-piece", "piece-button o-piece", "o", {
    value: "o"
  });
  var aiSelection = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "ai-selection", "instructions", "Please Select The Difficulty");
  var difficultyContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "difficulty-container", "choice-container");
  var easyButton = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "easy-button", "difficulty-button active", "Easy", {
    value: "3"
  });
  var mediumButton = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "medium-button", "difficulty-button", "Medium", {
    value: "2"
  });
  var impossibleButton = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "impossible-button", "difficulty-button", "Impossible", {
    value: "1"
  });
  var startGame = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "start-game", "", "Start Game");
  var board = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "board");
  var boardSpace1 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space no-top-border no-left-border", "", {
    "data-space": 0
  });
  var boardSpace2 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space no-top-border", "", {
    "data-space": 1
  });
  var boardSpace3 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space no-top-border", "", {
    "data-space": 2
  });
  var boardSpace4 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space no-left-border", "", {
    "data-space": 3
  });
  var boardSpace5 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space", "", {
    "data-space": 4
  });
  var boardSpace6 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space", "", {
    "data-space": 5
  });
  var boardSpace7 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space no-left-border", "", {
    "data-space": 6
  });
  var boardSpace8 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space", "", {
    "data-space": 7
  });
  var boardSpace9 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space", "", {
    "data-space": 8
  });
  var winner = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "winner");
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(pieceContainer, xPiece, oPiece);
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(difficultyContainer, easyButton, mediumButton, impossibleButton);
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(board, boardSpace1, boardSpace2, boardSpace3, boardSpace4, boardSpace5, boardSpace6, boardSpace7, boardSpace8, boardSpace9);
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(boardContainer, pieceSelection, pieceSelectionHelper, pieceContainer, aiSelection, difficultyContainer, startGame, board, winner);
  content.appendChild(boardContainer);
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(document.body, header, content);
}();

var board = function () {
  var _gameBoard = ["", "", "", "", "", "", "", "", ""];

  var getBoard = function getBoard() {
    return _gameBoard;
  };

  var update = function update(index, player) {
    _gameBoard[index] = player.getType();
  };

  var clearBoard = function clearBoard() {
    return _gameBoard = ["", "", "", "", "", "", "", "", ""];
  }; //if all three entries are the same, return true


  var _checkWinCon = function _checkWinCon(a, b, c) {
    return a == b && a == c && a != "" ? 1 : 0;
  }; //check all rows, columns and diagonals for wins


  var checkIfWon = function checkIfWon(board) {
    var _winner = _checkWinCon(board[0], board[1], board[2]) ? board[0] : _checkWinCon(board[3], board[4], board[5]) ? board[3] : _checkWinCon(board[6], board[7], board[8]) ? board[6] : _checkWinCon(board[0], board[3], board[6]) ? board[0] : _checkWinCon(board[1], board[4], board[7]) ? board[1] : _checkWinCon(board[2], board[5], board[8]) ? board[2] : _checkWinCon(board[0], board[4], board[8]) ? board[0] : _checkWinCon(board[2], board[4], board[6]) ? board[6] : 0;

    if (_winner == 0 && !board.includes("")) {
      _winner = "draw";
    }

    return _winner;
  };

  return {
    update: update,
    getBoard: getBoard,
    checkIfWon: checkIfWon,
    clearBoard: clearBoard
  };
}(); //this section regards the player selection buttons


var playerSel = function () {
  //default player selection is x
  var _playerSelection = "x";

  var _playerPieceSelectors = document.querySelectorAll(".piece-button");

  var _getPlayerChoice = function _getPlayerChoice(e) {
    //gets the value of what is selected and makes only once choice active at a time
    _playerSelection = e.target.value;
    e.target.classList.add("active");

    _playerPieceSelectors.forEach(function (button) {
      if (button != e.target) {
        button.classList.remove("active");
      }
    });
  }; //add event listeners to the selection buttons


  var _activatePlayers = function _activatePlayers() {
    return _playerPieceSelectors.forEach(function (button) {
      return button.addEventListener("click", _getPlayerChoice);
    });
  };

  _activatePlayers(); //a function that removes the event listeners from the buttons.


  var deactivatePlayers = function deactivatePlayers() {
    return _playerPieceSelectors.forEach(function (button) {
      return button.removeEventListener("click", _getPlayerChoice);
    });
  };

  var resetPlayer = function resetPlayer() {
    _playerSelection = "x";

    _playerPieceSelectors.forEach(function (button) {
      return button.classList.remove("active");
    });

    _playerPieceSelectors[0].classList.add("active");

    _activatePlayers();
  }; //function that returns what the player chose


  var getPlayerSelection = function getPlayerSelection() {
    return _playerSelection;
  };

  return {
    getPlayerSelection: getPlayerSelection,
    deactivatePlayers: deactivatePlayers,
    resetPlayer: resetPlayer
  };
}(); //this section regards the difficulty selection buttons


var difficultySel = function () {
  //default difficulty selection is Easy
  var _difSelection = 3;

  var _difficultySelectors = document.querySelectorAll(".difficulty-button");

  var _getDifChoice = function _getDifChoice(e) {
    //gets the value of what is selected and makes only once choice active at a time
    _difSelection = e.target.value;
    e.target.classList.add("active");

    _difficultySelectors.forEach(function (button) {
      if (button != e.target) {
        button.classList.remove("active");
      }
    });
  }; //add event listeners to the selection buttons


  var _activateDifficulty = function _activateDifficulty() {
    return _difficultySelectors.forEach(function (button) {
      return button.addEventListener("click", _getDifChoice);
    });
  };

  _activateDifficulty(); //a function that removes the event listeners from the buttons.


  var deactivateDifficulty = function deactivateDifficulty() {
    return _difficultySelectors.forEach(function (button) {
      return button.removeEventListener("click", _getDifChoice);
    });
  }; //resets to default


  var resetDifficulty = function resetDifficulty() {
    _difSelection = 3;

    _difficultySelectors.forEach(function (button) {
      return button.classList.remove("active");
    });

    _difficultySelectors[0].classList.add("active");

    _activateDifficulty();
  }; //function that returns what the player chose


  var getDifficultySelection = function getDifficultySelection() {
    return _difSelection;
  };

  return {
    getDifficultySelection: getDifficultySelection,
    deactivateDifficulty: deactivateDifficulty,
    resetDifficulty: resetDifficulty
  };
}();

var display = function () {
  var _player1;

  var _player2;

  var _currentPlayer;

  var _gameOver = false;

  var _gameBoardPieces = document.querySelectorAll(".board-space");

  var _startGameButton = document.querySelector("#start-game");

  var _winnerDisplay = document.querySelector("#winner");

  var _newGame = function _newGame() {
    _gameOver = false;
    board.clearBoard();

    _gameBoardPieces.forEach(function (button) {
      button.textContent = "";
      button.classList.remove("x-piece");
      button.classList.remove("o-piece");
      button.classList.remove("filled");
    });

    playerSel.resetPlayer();
    difficultySel.resetDifficulty();

    _startGameButton.classList.remove("active");

    _startGameButton.addEventListener("click", _startGame);

    _winnerDisplay.textContent = "";

    _winnerDisplay.parentElement.lastChild.remove();
  }; //creates the two players, deactivates settings buttons, and activates board


  var _startGame = function _startGame() {
    _startGameButton.classList.add("active");

    _startGameButton.removeEventListener("click", _startGame);

    _player1 = Player(playerSel.getPlayerSelection());
    playerSel.deactivatePlayers();
    _player1.getType() == "x" ? _player2 = AIPlayer("o", difficultySel.getDifficultySelection()) : _player2 = AIPlayer("x", difficultySel.getDifficultySelection());
    difficultySel.deactivateDifficulty();

    if (_player1.getType() == "x") {
      _currentPlayer = _player1;
    } else {
      _currentPlayer = _player2;
      setTimeout(function () {
        return _player2.makeMove();
      }, 500);
    }

    _gameBoardPieces.forEach(function (button) {
      return button.addEventListener("click", _playPlayer1);
    });
  };

  var _updateBoardPiece = function _updateBoardPiece(index, player) {
    _gameBoardPieces[index].textContent = player.getType();

    _gameBoardPieces[index].classList.add("".concat(player.getType(), "-piece"));

    _gameBoardPieces[index].classList.add("filled");

    _gameBoardPieces[index].removeEventListener("click", _playPlayer1);

    board.update(index, player);
  };

  var _pauseCompPlay = function _pauseCompPlay() {
    return new Promise(function (resolve) {
      return setTimeout(resolve, 500);
    });
  }; //if the current player is the computer, they make their move


  var _nextMove = function _nextMove() {
    if (_currentPlayer == _player1) {
      return;
    } else if (_currentPlayer == _player2) {
      _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.getElements(".board-space:not(.filled)").forEach(function (button) {
        return button.removeEventListener("click", _playPlayer1);
      });

      _pauseCompPlay().then(function () {
        return _player2.makeMove();
      }).then(function () {
        if (!_gameOver) {
          _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.getElements(".board-space:not(.filled)").forEach(function (button) {
            return button.addEventListener("click", _playPlayer1);
          });
        }
      });
    }
  }; //plays a piece and checks if the game is over


  var playPiece = function playPiece(index, player) {
    _updateBoardPiece(index, player);

    if (board.checkIfWon(board.getBoard())) {
      if (board.checkIfWon(board.getBoard()) == "x" || board.checkIfWon(board.getBoard()) == "o") {
        _winnerDisplay.textContent = "".concat(player.getType().toUpperCase(), " Wins!");
      } else if (board.checkIfWon(board.getBoard()) == "draw") {
        _winnerDisplay.textContent = "It's a Draw";
      }

      _gameBoardPieces.forEach(function (button) {
        return button.replaceWith(button.cloneNode(true));
      }); //need to update what the gameboard pieces are after they've been cloned to remove
      //the event listeners


      _gameBoardPieces = document.querySelectorAll(".board-space");
      _gameOver = true;
      _currentPlayer = false;

      var _newGameButton = document.createElement("button");

      _newGameButton.setAttribute("id", "new-game-button");

      _newGameButton.textContent = "New Game?";

      _winnerDisplay.parentElement.appendChild(_newGameButton);

      _newGameButton.addEventListener("click", _newGame);
    }

    if (!_gameOver) {
      _currentPlayer == _player1 ? _currentPlayer = _player2 : _currentPlayer = _player1;

      _nextMove();
    }
  };

  var _playPlayer1 = function _playPlayer1(e) {
    playPiece(e.currentTarget.dataset.space, _player1);
  };

  var getPlayer1 = function getPlayer1() {
    return _player1;
  };

  _startGameButton.addEventListener("click", _startGame);

  return {
    playPiece: playPiece,
    getPlayer1: getPlayer1
  };
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/tic-tac-toe/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/tic-tac-toe/style.css ***!
  \*************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #f5f5f5;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #121212;\n}\n#header {\n    background-color: #121212;\n    color: #f5f5f5;\n}\n#content {\n    margin-top: 100px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#board-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 3px solid #121212;\n    border-radius: 20px;\n    width: -webkit-fill-available;\n    min-height: 80vh;\n    padding: 10px;\n    margin: 10px;\n}\n@-moz-document url-prefix() {\n    #board-container {\n        width: -moz-available;\n    }\n}\n.instructions {\n    font-size: 20px;\n    font-weight: bold;\n    margin: 5px;\n}\n.sub-instructions {\n    font-size: 18px;\n    margin: 5px;\n}\n.choice-container {\n    display: flex;\n    gap: 25px;\n    margin: 10px;\n}\nbutton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #121212;\n    border-radius: 15px;\n    background-color: #f5f5f5;\n    color: #121212;\n    transition: 0.5s;\n}\n\n.difficulty-button {\n    width: 110px;\n    font-size: 18px;\n    padding: 5px 0px;\n}\n\n#start-game {\n    padding: 5px 8px;\n    margin: 10px;\n    font-size: 20px;\n    font-weight: bold;\n}\n.active {\n    background-color: #121212;\n    color: #f5f5f5;\n}\n\n.piece-button {\n    height: 50px;\n    width: 50px;\n    font-size: 24px;\n    font-weight: bold;\n}\n.x-piece {\n    color: #f05454;\n}\n.x-piece.active {\n    color: #f5f5f5;\n    background-color: #f05454;\n}\n.o-piece {\n    color: #30475e;\n}\n.o-piece.active {\n    color: #f5f5f5;\n    background-color: #30475e;\n}\n\n#board {\n    margin: 15px;\n    display: grid;\n    grid-template-columns: 33% 33% 33%;\n}\n.board-space {\n    height: 120px;\n    width: 120px;\n    padding: 0;\n    background-color: #f5f5f5;\n    border: none;\n    border-top: 4px solid #121212;\n    border-left: 4px solid #121212;\n    border-radius: 0;\n    font-size: 50px;\n}\n.no-top-border {\n    border-top: none;\n}\n.no-left-border {\n    border-left: none;\n}\n\n#winner {\n    font-size: 20px;\n}\n#new-game-button {\n    font-size: 18px;\n    padding: 5px 8px;\n    margin: 10px;\n}\n#new-game-button:hover {\n    color: #f5f5f5;\n    background-color: #121212;\n}\n", "",{"version":3,"sources":["webpack://./src/tic-tac-toe/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,4DAA4D;IAC5D,cAAc;AAClB;AACA;IACI,yBAAyB;IACzB,cAAc;AAClB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,6BAA6B;IAC7B,gBAAgB;IAChB,aAAa;IACb,YAAY;AAChB;AACA;IACI;QACI,qBAAqB;IACzB;AACJ;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,eAAe;IACf,WAAW;AACf;AACA;IACI,aAAa;IACb,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,mBAAmB;IACnB,yBAAyB;IACzB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;IACd,yBAAyB;AAC7B;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kCAAkC;AACtC;AACA;IACI,aAAa;IACb,YAAY;IACZ,UAAU;IACV,yBAAyB;IACzB,YAAY;IACZ,6BAA6B;IAC7B,8BAA8B;IAC9B,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,cAAc;IACd,yBAAyB;AAC7B","sourcesContent":["body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #f5f5f5;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #121212;\n}\n#header {\n    background-color: #121212;\n    color: #f5f5f5;\n}\n#content {\n    margin-top: 100px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#board-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 3px solid #121212;\n    border-radius: 20px;\n    width: -webkit-fill-available;\n    min-height: 80vh;\n    padding: 10px;\n    margin: 10px;\n}\n@-moz-document url-prefix() {\n    #board-container {\n        width: -moz-available;\n    }\n}\n.instructions {\n    font-size: 20px;\n    font-weight: bold;\n    margin: 5px;\n}\n.sub-instructions {\n    font-size: 18px;\n    margin: 5px;\n}\n.choice-container {\n    display: flex;\n    gap: 25px;\n    margin: 10px;\n}\nbutton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #121212;\n    border-radius: 15px;\n    background-color: #f5f5f5;\n    color: #121212;\n    transition: 0.5s;\n}\n\n.difficulty-button {\n    width: 110px;\n    font-size: 18px;\n    padding: 5px 0px;\n}\n\n#start-game {\n    padding: 5px 8px;\n    margin: 10px;\n    font-size: 20px;\n    font-weight: bold;\n}\n.active {\n    background-color: #121212;\n    color: #f5f5f5;\n}\n\n.piece-button {\n    height: 50px;\n    width: 50px;\n    font-size: 24px;\n    font-weight: bold;\n}\n.x-piece {\n    color: #f05454;\n}\n.x-piece.active {\n    color: #f5f5f5;\n    background-color: #f05454;\n}\n.o-piece {\n    color: #30475e;\n}\n.o-piece.active {\n    color: #f5f5f5;\n    background-color: #30475e;\n}\n\n#board {\n    margin: 15px;\n    display: grid;\n    grid-template-columns: 33% 33% 33%;\n}\n.board-space {\n    height: 120px;\n    width: 120px;\n    padding: 0;\n    background-color: #f5f5f5;\n    border: none;\n    border-top: 4px solid #121212;\n    border-left: 4px solid #121212;\n    border-radius: 0;\n    font-size: 50px;\n}\n.no-top-border {\n    border-top: none;\n}\n.no-left-border {\n    border-left: none;\n}\n\n#winner {\n    font-size: 20px;\n}\n#new-game-button {\n    font-size: 18px;\n    padding: 5px 8px;\n    margin: 10px;\n}\n#new-game-button:hover {\n    color: #f5f5f5;\n    background-color: #121212;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/tic-tac-toe/style.css":
/*!***********************************!*\
  !*** ./src/tic-tac-toe/style.css ***!
  \***********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/tic-tac-toe/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			"./tic-tac-toe/index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_Header_js"], () => (__webpack_require__("./src/tic-tac-toe/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvdGljLXRhYy10b2UvRE9NTWFuaXAuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3RpYy10YWMtdG9lL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy90aWMtdGFjLXRvZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvdGljLXRhYy10b2Uvc3R5bGUuY3NzPzAxNTMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRE9NTWFuaXAgPSAoKCkgPT4ge1xuICAgIC8vc2hvcnRoYW5kIHRvIGdldCBlbGVtZW50cyBlYXNpZXJcbiAgICBjb25zdCBnZXRFbGVtZW50ID0gc2VsZWN0b3IgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29uc3QgZ2V0RWxlbWVudHMgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIC8vc2hvcnRoYW5kIHRvIG1ha2UgYSBuZXcgZWxlbWVudCBhbmQgYWRkIGF0dHJpYnV0ZXMgdG8gaXRcbiAgICBjb25zdCBtYWtlTmV3RWxlbWVudCA9ICh0eXBlLCBpZCA9IFwiXCIsIEhUTUxDbGFzcyA9IFwiXCIsIHRleHQgPSBcIlwiLCAuLi5hdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBpZiAoaWQgIT0gXCJcIikge1xuICAgICAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEhUTUxDbGFzcyAhPSBcIlwiKSB7XG4gICAgICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIEhUTUxDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RWxlbS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHQgPT4gbmV3RWxlbS5zZXRBdHRyaWJ1dGUoT2JqZWN0LmtleXMoYXR0KVswXSwgYXR0W09iamVjdC5rZXlzKGF0dCldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3RWxlbTtcbiAgICB9O1xuXG4gICAgLy9hZGRzIGFsbCBvZiB0aGUgRE9NIGVsZW1lbnRzIHRvIGEgcGFyZW50XG4gICAgY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSAocGFyZW50LCAuLi5jaGlsZHJlbikgPT4ge1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICAgIH07XG5cbiAgICAvL2luc2VydHMgYSBET00gZWxlbWVudCBhZnRlciBhbm90aGVyIGVsZW1lbnRcbiAgICBjb25zdCBpbnNlcnRBZnRlciA9IChuZXdOb2RlLCBleGlzdGluZ05vZGUpID0+IHtcbiAgICAgICAgZXhpc3RpbmdOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIGV4aXN0aW5nTm9kZS5uZXh0U2libGluZyk7XG4gICAgfTtcblxuICAgIC8vY2xlYXJzIG91dCBhbGwgY2hpbGQgbm9kZXMgb2YgYW4gZWxlbWVudCwgc2tpcHMgYXMgbWFueSBlbGVtZW50cyBhcyByZXF1ZXN0ZWRcbiAgICBjb25zdCByZW1vdmVBbGxDaGlsZHJlbiA9IChlbGVtZW50LCBza2lwID0gMCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaSA+IHNraXA7IGktLSkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzW2kgLSAxXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRFbGVtZW50LCBnZXRFbGVtZW50cywgbWFrZU5ld0VsZW1lbnQsIGFwcGVuZENoaWxkcmVuLCBpbnNlcnRBZnRlciwgcmVtb3ZlQWxsQ2hpbGRyZW4gfTtcbn0pKCk7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgRE9NTWFuaXAgfSBmcm9tIFwiLi9ET01NYW5pcFwiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi4vSGVhZGVyXCI7XG5cbmNvbnN0IFBsYXllciA9IHR5cGUgPT4ge1xuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB0eXBlO1xuICAgIHJldHVybiB7IGdldFR5cGUgfTtcbn07XG5cbmNvbnN0IEFJUGxheWVyID0gKHR5cGUsIGRpZmZpY3VsdHkpID0+IHtcbiAgICBjb25zdCB7IGdldFR5cGUgfSA9IFBsYXllcih0eXBlKTtcblxuICAgIC8vaWYgc29tZWJvZHkgY2FuIHdpbiwgZ28gdGhlcmUuXG4gICAgY29uc3QgX2RlZmVuZE9yQXR0YWNrID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgICAgICAgbGV0IF9kdW1teUJvYXJkID0gYm9hcmQuZ2V0Qm9hcmQoKS5tYXAoZWxlID0+IGVsZSk7XG4gICAgICAgICAgICBpZiAoX2R1bW15Qm9hcmRbaV0gPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIF9kdW1teUJvYXJkW2ldID0gcGxheWVyLmdldFR5cGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmQuY2hlY2tJZldvbihfZHVtbXlCb2FyZCkgPT0gcGxheWVyLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LnBsYXlQaWVjZShpLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8vcGlja3MgYSByYW5kb20gZW1wdHkgc3BvdFxuICAgIGNvbnN0IF9waWNrUmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgX3JhbmRTdGFydCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkLmdldEJvYXJkKCkubGVuZ3RoKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGJvYXJkLmdldEJvYXJkKClbX3JhbmRTdGFydF0gPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGRpc3BsYXkucGxheVBpZWNlKF9yYW5kU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3JhbmRTdGFydCsrO1xuICAgICAgICAgICAgICAgIGlmIChfcmFuZFN0YXJ0ID09IGJvYXJkLmdldEJvYXJkKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIF9yYW5kU3RhcnQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBfY2hvb3NlTW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IF9wbGF5TWFkZSA9IGZhbHNlO1xuICAgICAgICBsZXQgX29wcFBsYXlzID0gYm9hcmRcbiAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiAoYiA9PSBkaXNwbGF5LmdldFBsYXllcjEoKS5nZXRUeXBlKCkgPyBhICsgMSA6IGEpLCAwKTtcblxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBBSSBjYW4gd2luXG4gICAgICAgIF9wbGF5TWFkZSA9IF9kZWZlbmRPckF0dGFjay5jYWxsKHRoaXMsIHRoaXMpO1xuICAgICAgICAvL2NoZWNrIGlmIHRoZSBQbGF5ZXIgY2FuIHdpblxuICAgICAgICBpZiAoIV9wbGF5TWFkZSkge1xuICAgICAgICAgICAgX3BsYXlNYWRlID0gX2RlZmVuZE9yQXR0YWNrLmNhbGwodGhpcywgZGlzcGxheS5nZXRQbGF5ZXIxKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghX3BsYXlNYWRlKSB7XG4gICAgICAgICAgICBpZiAoX29wcFBsYXlzID09IDApIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnBsYXlQaWVjZSgwLCB0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKF9vcHBQbGF5cyA9PSAxICYmIHR5cGUgPT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmQuZ2V0Qm9hcmQoKVs4XSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkucGxheVBpZWNlKDgsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChfb3BwUGxheXMgPT0gMikge1xuICAgICAgICAgICAgICAgIC8vSWYgdGhlIG9wcG9uZW50IHBsYXllZCBvbiB0d28gY29ybmVycywgcGxheSBvbiBhIHNpZGUuXG4gICAgICAgICAgICAgICAgbGV0IF9zaWRlUGllY2VzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBib2FyZC5nZXRCb2FyZCgpLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaWRlUGllY2VzLnB1c2goYm9hcmQuZ2V0Qm9hcmQoKVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghX3NpZGVQaWVjZXMuaW5jbHVkZXMoZGlzcGxheS5nZXRQbGF5ZXIxKCkuZ2V0VHlwZSgpKSkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LnBsYXlQaWVjZSgxLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9nbyB0byB0aGUgbWlkZGxlIGlmIGl0J3MgYXZhaWxhYmxlXG4gICAgICAgICAgICBpZiAoYm9hcmQuZ2V0Qm9hcmQoKVs0XSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5wbGF5UGllY2UoNCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgLy9nbyB0byB0aGUgY29ybmVyIGlmIHRoZSBtaWRkbGUgaXMgdGFrZW5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm9hcmQuZ2V0Qm9hcmQoKVswXSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5wbGF5UGllY2UoMCwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL29yIGVsc2UgcGljayBhIHJhbmRvbSBzcG90LlxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3BpY2tSYW5kb20uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBtYWtlTW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9kZWNpZGVkIHdoZXRoZXIgdG8gbWFrZSB0aGUgY29ycmVjdCBtb3ZlIG9yIHJhbmRvbSBtb3ZlIGJhc2VkIG9uIGRpZmZpY3VsdHlcbiAgICAgICAgaWYgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpZmZpY3VsdHkpID09IDApIHtcbiAgICAgICAgICAgIF9jaG9vc2VNb3ZlLmNhbGwodGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfcGlja1JhbmRvbS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldFR5cGUsIG1ha2VNb3ZlIH07XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmNvbnN0IF9tYWtlRGlzcGxheSA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKFwiVGljLVRhYy1Ub2VcIik7XG4gICAgY29uc3QgY29udGVudCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGVudFwiKTtcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiYm9hcmQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHBpZWNlU2VsZWN0aW9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwicGllY2Utc2VsZWN0aW9uXCIsXG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25zXCIsXG4gICAgICAgIFwiUGxlYXNlIFNlbGVjdCBZb3VyIFBpZWNlOlwiXG4gICAgKTtcbiAgICBjb25zdCBwaWVjZVNlbGVjdGlvbkhlbHBlciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcInBpZWNlLXNlbGVjdGlvbi1oZWxwZXJcIixcbiAgICAgICAgXCJzdWItaW5zdHJ1Y3Rpb25zXCIsXG4gICAgICAgIFwiWCBnb2VzIGZpcnN0LCBPIGdvZXMgc2Vjb25kXCJcbiAgICApO1xuICAgIGNvbnN0IHBpZWNlQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwaWVjZS1jb250YWluZXJcIiwgXCJjaG9pY2UtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHhQaWVjZSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwieC1waWVjZVwiLCBcInBpZWNlLWJ1dHRvbiB4LXBpZWNlIGFjdGl2ZVwiLCBcInhcIiwge1xuICAgICAgICB2YWx1ZTogXCJ4XCIsXG4gICAgfSk7XG4gICAgY29uc3Qgb1BpZWNlID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJvLXBpZWNlXCIsIFwicGllY2UtYnV0dG9uIG8tcGllY2VcIiwgXCJvXCIsIHtcbiAgICAgICAgdmFsdWU6IFwib1wiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgYWlTZWxlY3Rpb24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJhaS1zZWxlY3Rpb25cIixcbiAgICAgICAgXCJpbnN0cnVjdGlvbnNcIixcbiAgICAgICAgXCJQbGVhc2UgU2VsZWN0IFRoZSBEaWZmaWN1bHR5XCJcbiAgICApO1xuICAgIGNvbnN0IGRpZmZpY3VsdHlDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImRpZmZpY3VsdHktY29udGFpbmVyXCIsIFwiY2hvaWNlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBlYXN5QnV0dG9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJlYXN5LWJ1dHRvblwiLCBcImRpZmZpY3VsdHktYnV0dG9uIGFjdGl2ZVwiLCBcIkVhc3lcIiwge1xuICAgICAgICB2YWx1ZTogXCIzXCIsXG4gICAgfSk7XG4gICAgY29uc3QgbWVkaXVtQnV0dG9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJtZWRpdW0tYnV0dG9uXCIsIFwiZGlmZmljdWx0eS1idXR0b25cIiwgXCJNZWRpdW1cIiwge1xuICAgICAgICB2YWx1ZTogXCIyXCIsXG4gICAgfSk7XG4gICAgY29uc3QgaW1wb3NzaWJsZUJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICBcImltcG9zc2libGUtYnV0dG9uXCIsXG4gICAgICAgIFwiZGlmZmljdWx0eS1idXR0b25cIixcbiAgICAgICAgXCJJbXBvc3NpYmxlXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiBcIjFcIixcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCBzdGFydEdhbWUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcInN0YXJ0LWdhbWVcIiwgXCJcIiwgXCJTdGFydCBHYW1lXCIpO1xuXG4gICAgY29uc3QgYm9hcmQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImJvYXJkXCIpO1xuICAgIGNvbnN0IGJvYXJkU3BhY2UxID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiYm9hcmQtc3BhY2Ugbm8tdG9wLWJvcmRlciBuby1sZWZ0LWJvcmRlclwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICB7IFwiZGF0YS1zcGFjZVwiOiAwIH1cbiAgICApO1xuICAgIGNvbnN0IGJvYXJkU3BhY2UyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJcIiwgXCJib2FyZC1zcGFjZSBuby10b3AtYm9yZGVyXCIsIFwiXCIsIHtcbiAgICAgICAgXCJkYXRhLXNwYWNlXCI6IDEsXG4gICAgfSk7XG4gICAgY29uc3QgYm9hcmRTcGFjZTMgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlIG5vLXRvcC1ib3JkZXJcIiwgXCJcIiwge1xuICAgICAgICBcImRhdGEtc3BhY2VcIjogMixcbiAgICB9KTtcbiAgICBjb25zdCBib2FyZFNwYWNlNCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiXCIsIFwiYm9hcmQtc3BhY2Ugbm8tbGVmdC1ib3JkZXJcIiwgXCJcIiwge1xuICAgICAgICBcImRhdGEtc3BhY2VcIjogMyxcbiAgICB9KTtcbiAgICBjb25zdCBib2FyZFNwYWNlNSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiXCIsIFwiYm9hcmQtc3BhY2VcIiwgXCJcIiwgeyBcImRhdGEtc3BhY2VcIjogNCB9KTtcbiAgICBjb25zdCBib2FyZFNwYWNlNiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiXCIsIFwiYm9hcmQtc3BhY2VcIiwgXCJcIiwgeyBcImRhdGEtc3BhY2VcIjogNSB9KTtcbiAgICBjb25zdCBib2FyZFNwYWNlNyA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiXCIsIFwiYm9hcmQtc3BhY2Ugbm8tbGVmdC1ib3JkZXJcIiwgXCJcIiwge1xuICAgICAgICBcImRhdGEtc3BhY2VcIjogNixcbiAgICB9KTtcbiAgICBjb25zdCBib2FyZFNwYWNlOCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiXCIsIFwiYm9hcmQtc3BhY2VcIiwgXCJcIiwgeyBcImRhdGEtc3BhY2VcIjogNyB9KTtcbiAgICBjb25zdCBib2FyZFNwYWNlOSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiXCIsIFwiYm9hcmQtc3BhY2VcIiwgXCJcIiwgeyBcImRhdGEtc3BhY2VcIjogOCB9KTtcblxuICAgIGNvbnN0IHdpbm5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwid2lubmVyXCIpO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKHBpZWNlQ29udGFpbmVyLCB4UGllY2UsIG9QaWVjZSk7XG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oZGlmZmljdWx0eUNvbnRhaW5lciwgZWFzeUJ1dHRvbiwgbWVkaXVtQnV0dG9uLCBpbXBvc3NpYmxlQnV0dG9uKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIGJvYXJkU3BhY2UxLFxuICAgICAgICBib2FyZFNwYWNlMixcbiAgICAgICAgYm9hcmRTcGFjZTMsXG4gICAgICAgIGJvYXJkU3BhY2U0LFxuICAgICAgICBib2FyZFNwYWNlNSxcbiAgICAgICAgYm9hcmRTcGFjZTYsXG4gICAgICAgIGJvYXJkU3BhY2U3LFxuICAgICAgICBib2FyZFNwYWNlOCxcbiAgICAgICAgYm9hcmRTcGFjZTlcbiAgICApO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKFxuICAgICAgICBib2FyZENvbnRhaW5lcixcbiAgICAgICAgcGllY2VTZWxlY3Rpb24sXG4gICAgICAgIHBpZWNlU2VsZWN0aW9uSGVscGVyLFxuICAgICAgICBwaWVjZUNvbnRhaW5lcixcbiAgICAgICAgYWlTZWxlY3Rpb24sXG4gICAgICAgIGRpZmZpY3VsdHlDb250YWluZXIsXG4gICAgICAgIHN0YXJ0R2FtZSxcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHdpbm5lclxuICAgICk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oZG9jdW1lbnQuYm9keSwgaGVhZGVyLCBjb250ZW50KTtcbn0pKCk7XG5cbmNvbnN0IGJvYXJkID0gKCgpID0+IHtcbiAgICBsZXQgX2dhbWVCb2FyZCA9IFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXTtcbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IF9nYW1lQm9hcmQ7XG5cbiAgICBjb25zdCB1cGRhdGUgPSAoaW5kZXgsIHBsYXllcikgPT4ge1xuICAgICAgICBfZ2FtZUJvYXJkW2luZGV4XSA9IHBsYXllci5nZXRUeXBlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyQm9hcmQgPSAoKSA9PiAoX2dhbWVCb2FyZCA9IFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSk7XG4gICAgLy9pZiBhbGwgdGhyZWUgZW50cmllcyBhcmUgdGhlIHNhbWUsIHJldHVybiB0cnVlXG4gICAgY29uc3QgX2NoZWNrV2luQ29uID0gKGEsIGIsIGMpID0+IChhID09IGIgJiYgYSA9PSBjICYmIGEgIT0gXCJcIiA/IDEgOiAwKTtcblxuICAgIC8vY2hlY2sgYWxsIHJvd3MsIGNvbHVtbnMgYW5kIGRpYWdvbmFscyBmb3Igd2luc1xuICAgIGNvbnN0IGNoZWNrSWZXb24gPSBib2FyZCA9PiB7XG4gICAgICAgIGxldCBfd2lubmVyID0gX2NoZWNrV2luQ29uKGJvYXJkWzBdLCBib2FyZFsxXSwgYm9hcmRbMl0pXG4gICAgICAgICAgICA/IGJvYXJkWzBdXG4gICAgICAgICAgICA6IF9jaGVja1dpbkNvbihib2FyZFszXSwgYm9hcmRbNF0sIGJvYXJkWzVdKVxuICAgICAgICAgICAgPyBib2FyZFszXVxuICAgICAgICAgICAgOiBfY2hlY2tXaW5Db24oYm9hcmRbNl0sIGJvYXJkWzddLCBib2FyZFs4XSlcbiAgICAgICAgICAgID8gYm9hcmRbNl1cbiAgICAgICAgICAgIDogX2NoZWNrV2luQ29uKGJvYXJkWzBdLCBib2FyZFszXSwgYm9hcmRbNl0pXG4gICAgICAgICAgICA/IGJvYXJkWzBdXG4gICAgICAgICAgICA6IF9jaGVja1dpbkNvbihib2FyZFsxXSwgYm9hcmRbNF0sIGJvYXJkWzddKVxuICAgICAgICAgICAgPyBib2FyZFsxXVxuICAgICAgICAgICAgOiBfY2hlY2tXaW5Db24oYm9hcmRbMl0sIGJvYXJkWzVdLCBib2FyZFs4XSlcbiAgICAgICAgICAgID8gYm9hcmRbMl1cbiAgICAgICAgICAgIDogX2NoZWNrV2luQ29uKGJvYXJkWzBdLCBib2FyZFs0XSwgYm9hcmRbOF0pXG4gICAgICAgICAgICA/IGJvYXJkWzBdXG4gICAgICAgICAgICA6IF9jaGVja1dpbkNvbihib2FyZFsyXSwgYm9hcmRbNF0sIGJvYXJkWzZdKVxuICAgICAgICAgICAgPyBib2FyZFs2XVxuICAgICAgICAgICAgOiAwO1xuXG4gICAgICAgIGlmIChfd2lubmVyID09IDAgJiYgIWJvYXJkLmluY2x1ZGVzKFwiXCIpKSB7XG4gICAgICAgICAgICBfd2lubmVyID0gXCJkcmF3XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3dpbm5lcjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgdXBkYXRlLCBnZXRCb2FyZCwgY2hlY2tJZldvbiwgY2xlYXJCb2FyZCB9O1xufSkoKTtcblxuLy90aGlzIHNlY3Rpb24gcmVnYXJkcyB0aGUgcGxheWVyIHNlbGVjdGlvbiBidXR0b25zXG5jb25zdCBwbGF5ZXJTZWwgPSAoKCkgPT4ge1xuICAgIC8vZGVmYXVsdCBwbGF5ZXIgc2VsZWN0aW9uIGlzIHhcbiAgICBsZXQgX3BsYXllclNlbGVjdGlvbiA9IFwieFwiO1xuICAgIGNvbnN0IF9wbGF5ZXJQaWVjZVNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGllY2UtYnV0dG9uXCIpO1xuICAgIGNvbnN0IF9nZXRQbGF5ZXJDaG9pY2UgPSBlID0+IHtcbiAgICAgICAgLy9nZXRzIHRoZSB2YWx1ZSBvZiB3aGF0IGlzIHNlbGVjdGVkIGFuZCBtYWtlcyBvbmx5IG9uY2UgY2hvaWNlIGFjdGl2ZSBhdCBhIHRpbWVcbiAgICAgICAgX3BsYXllclNlbGVjdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBfcGxheWVyUGllY2VTZWxlY3RvcnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgaWYgKGJ1dHRvbiAhPSBlLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy9hZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzZWxlY3Rpb24gYnV0dG9uc1xuICAgIGNvbnN0IF9hY3RpdmF0ZVBsYXllcnMgPSAoKSA9PlxuICAgICAgICBfcGxheWVyUGllY2VTZWxlY3RvcnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfZ2V0UGxheWVyQ2hvaWNlKSk7XG4gICAgX2FjdGl2YXRlUGxheWVycygpO1xuXG4gICAgLy9hIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyB0aGUgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIGJ1dHRvbnMuXG4gICAgY29uc3QgZGVhY3RpdmF0ZVBsYXllcnMgPSAoKSA9PlxuICAgICAgICBfcGxheWVyUGllY2VTZWxlY3RvcnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfZ2V0UGxheWVyQ2hvaWNlKSk7XG5cbiAgICBjb25zdCByZXNldFBsYXllciA9ICgpID0+IHtcbiAgICAgICAgX3BsYXllclNlbGVjdGlvbiA9IFwieFwiO1xuICAgICAgICBfcGxheWVyUGllY2VTZWxlY3RvcnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgICAgICBfcGxheWVyUGllY2VTZWxlY3RvcnNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgX2FjdGl2YXRlUGxheWVycygpO1xuICAgIH07XG5cbiAgICAvL2Z1bmN0aW9uIHRoYXQgcmV0dXJucyB3aGF0IHRoZSBwbGF5ZXIgY2hvc2VcbiAgICBjb25zdCBnZXRQbGF5ZXJTZWxlY3Rpb24gPSAoKSA9PiBfcGxheWVyU2VsZWN0aW9uO1xuXG4gICAgcmV0dXJuIHsgZ2V0UGxheWVyU2VsZWN0aW9uLCBkZWFjdGl2YXRlUGxheWVycywgcmVzZXRQbGF5ZXIgfTtcbn0pKCk7XG5cbi8vdGhpcyBzZWN0aW9uIHJlZ2FyZHMgdGhlIGRpZmZpY3VsdHkgc2VsZWN0aW9uIGJ1dHRvbnNcbmNvbnN0IGRpZmZpY3VsdHlTZWwgPSAoKCkgPT4ge1xuICAgIC8vZGVmYXVsdCBkaWZmaWN1bHR5IHNlbGVjdGlvbiBpcyBFYXN5XG4gICAgbGV0IF9kaWZTZWxlY3Rpb24gPSAzO1xuICAgIGNvbnN0IF9kaWZmaWN1bHR5U2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kaWZmaWN1bHR5LWJ1dHRvblwiKTtcbiAgICBjb25zdCBfZ2V0RGlmQ2hvaWNlID0gZSA9PiB7XG4gICAgICAgIC8vZ2V0cyB0aGUgdmFsdWUgb2Ygd2hhdCBpcyBzZWxlY3RlZCBhbmQgbWFrZXMgb25seSBvbmNlIGNob2ljZSBhY3RpdmUgYXQgYSB0aW1lXG4gICAgICAgIF9kaWZTZWxlY3Rpb24gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgX2RpZmZpY3VsdHlTZWxlY3RvcnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgaWYgKGJ1dHRvbiAhPSBlLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy9hZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzZWxlY3Rpb24gYnV0dG9uc1xuICAgIGNvbnN0IF9hY3RpdmF0ZURpZmZpY3VsdHkgPSAoKSA9PlxuICAgICAgICBfZGlmZmljdWx0eVNlbGVjdG9ycy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9nZXREaWZDaG9pY2UpKTtcbiAgICBfYWN0aXZhdGVEaWZmaWN1bHR5KCk7XG5cbiAgICAvL2EgZnVuY3Rpb24gdGhhdCByZW1vdmVzIHRoZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgYnV0dG9ucy5cbiAgICBjb25zdCBkZWFjdGl2YXRlRGlmZmljdWx0eSA9ICgpID0+XG4gICAgICAgIF9kaWZmaWN1bHR5U2VsZWN0b3JzLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2dldERpZkNob2ljZSkpO1xuXG4gICAgLy9yZXNldHMgdG8gZGVmYXVsdFxuICAgIGNvbnN0IHJlc2V0RGlmZmljdWx0eSA9ICgpID0+IHtcbiAgICAgICAgX2RpZlNlbGVjdGlvbiA9IDM7XG4gICAgICAgIF9kaWZmaWN1bHR5U2VsZWN0b3JzLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgX2RpZmZpY3VsdHlTZWxlY3RvcnNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgX2FjdGl2YXRlRGlmZmljdWx0eSgpO1xuICAgIH07XG5cbiAgICAvL2Z1bmN0aW9uIHRoYXQgcmV0dXJucyB3aGF0IHRoZSBwbGF5ZXIgY2hvc2VcbiAgICBjb25zdCBnZXREaWZmaWN1bHR5U2VsZWN0aW9uID0gKCkgPT4gX2RpZlNlbGVjdGlvbjtcblxuICAgIHJldHVybiB7IGdldERpZmZpY3VsdHlTZWxlY3Rpb24sIGRlYWN0aXZhdGVEaWZmaWN1bHR5LCByZXNldERpZmZpY3VsdHkgfTtcbn0pKCk7XG5cbmNvbnN0IGRpc3BsYXkgPSAoKCkgPT4ge1xuICAgIGxldCBfcGxheWVyMTtcbiAgICBsZXQgX3BsYXllcjI7XG4gICAgbGV0IF9jdXJyZW50UGxheWVyO1xuICAgIGxldCBfZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICBsZXQgX2dhbWVCb2FyZFBpZWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmQtc3BhY2VcIik7XG4gICAgY29uc3QgX3N0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnQtZ2FtZVwiKTtcbiAgICBjb25zdCBfd2lubmVyRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2lubmVyXCIpO1xuXG4gICAgY29uc3QgX25ld0dhbWUgPSAoKSA9PiB7XG4gICAgICAgIF9nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICBib2FyZC5jbGVhckJvYXJkKCk7XG4gICAgICAgIF9nYW1lQm9hcmRQaWVjZXMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwieC1waWVjZVwiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiby1waWVjZVwiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsbGVkXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcGxheWVyU2VsLnJlc2V0UGxheWVyKCk7XG4gICAgICAgIGRpZmZpY3VsdHlTZWwucmVzZXREaWZmaWN1bHR5KCk7XG4gICAgICAgIF9zdGFydEdhbWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgX3N0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3N0YXJ0R2FtZSk7XG4gICAgICAgIF93aW5uZXJEaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgX3dpbm5lckRpc3BsYXkucGFyZW50RWxlbWVudC5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfTtcblxuICAgIC8vY3JlYXRlcyB0aGUgdHdvIHBsYXllcnMsIGRlYWN0aXZhdGVzIHNldHRpbmdzIGJ1dHRvbnMsIGFuZCBhY3RpdmF0ZXMgYm9hcmRcbiAgICBjb25zdCBfc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgICAgICBfc3RhcnRHYW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIF9zdGFydEdhbWVCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9zdGFydEdhbWUpO1xuICAgICAgICBfcGxheWVyMSA9IFBsYXllcihwbGF5ZXJTZWwuZ2V0UGxheWVyU2VsZWN0aW9uKCkpO1xuICAgICAgICBwbGF5ZXJTZWwuZGVhY3RpdmF0ZVBsYXllcnMoKTtcbiAgICAgICAgX3BsYXllcjEuZ2V0VHlwZSgpID09IFwieFwiXG4gICAgICAgICAgICA/IChfcGxheWVyMiA9IEFJUGxheWVyKFwib1wiLCBkaWZmaWN1bHR5U2VsLmdldERpZmZpY3VsdHlTZWxlY3Rpb24oKSkpXG4gICAgICAgICAgICA6IChfcGxheWVyMiA9IEFJUGxheWVyKFwieFwiLCBkaWZmaWN1bHR5U2VsLmdldERpZmZpY3VsdHlTZWxlY3Rpb24oKSkpO1xuICAgICAgICBkaWZmaWN1bHR5U2VsLmRlYWN0aXZhdGVEaWZmaWN1bHR5KCk7XG4gICAgICAgIGlmIChfcGxheWVyMS5nZXRUeXBlKCkgPT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIF9jdXJyZW50UGxheWVyID0gX3BsYXllcjE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfY3VycmVudFBsYXllciA9IF9wbGF5ZXIyO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBfcGxheWVyMi5tYWtlTW92ZSgpLCA1MDApO1xuICAgICAgICB9XG4gICAgICAgIF9nYW1lQm9hcmRQaWVjZXMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfcGxheVBsYXllcjEpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgX3VwZGF0ZUJvYXJkUGllY2UgPSAoaW5kZXgsIHBsYXllcikgPT4ge1xuICAgICAgICBfZ2FtZUJvYXJkUGllY2VzW2luZGV4XS50ZXh0Q29udGVudCA9IHBsYXllci5nZXRUeXBlKCk7XG4gICAgICAgIF9nYW1lQm9hcmRQaWVjZXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoYCR7cGxheWVyLmdldFR5cGUoKX0tcGllY2VgKTtcbiAgICAgICAgX2dhbWVCb2FyZFBpZWNlc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcImZpbGxlZFwiKTtcbiAgICAgICAgX2dhbWVCb2FyZFBpZWNlc1tpbmRleF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9wbGF5UGxheWVyMSk7XG4gICAgICAgIGJvYXJkLnVwZGF0ZShpbmRleCwgcGxheWVyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgX3BhdXNlQ29tcFBsYXkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwKSk7XG4gICAgfTtcbiAgICAvL2lmIHRoZSBjdXJyZW50IHBsYXllciBpcyB0aGUgY29tcHV0ZXIsIHRoZXkgbWFrZSB0aGVpciBtb3ZlXG4gICAgY29uc3QgX25leHRNb3ZlID0gKCkgPT4ge1xuICAgICAgICBpZiAoX2N1cnJlbnRQbGF5ZXIgPT0gX3BsYXllcjEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfY3VycmVudFBsYXllciA9PSBfcGxheWVyMikge1xuICAgICAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoXCIuYm9hcmQtc3BhY2U6bm90KC5maWxsZWQpXCIpLmZvckVhY2goYnV0dG9uID0+XG4gICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfcGxheVBsYXllcjEpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgX3BhdXNlQ29tcFBsYXkoKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IF9wbGF5ZXIyLm1ha2VNb3ZlKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV9nYW1lT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoXCIuYm9hcmQtc3BhY2U6bm90KC5maWxsZWQpXCIpLmZvckVhY2goYnV0dG9uID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfcGxheVBsYXllcjEpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9wbGF5cyBhIHBpZWNlIGFuZCBjaGVja3MgaWYgdGhlIGdhbWUgaXMgb3ZlclxuICAgIGNvbnN0IHBsYXlQaWVjZSA9IChpbmRleCwgcGxheWVyKSA9PiB7XG4gICAgICAgIF91cGRhdGVCb2FyZFBpZWNlKGluZGV4LCBwbGF5ZXIpO1xuICAgICAgICBpZiAoYm9hcmQuY2hlY2tJZldvbihib2FyZC5nZXRCb2FyZCgpKSkge1xuICAgICAgICAgICAgaWYgKGJvYXJkLmNoZWNrSWZXb24oYm9hcmQuZ2V0Qm9hcmQoKSkgPT0gXCJ4XCIgfHwgYm9hcmQuY2hlY2tJZldvbihib2FyZC5nZXRCb2FyZCgpKSA9PSBcIm9cIikge1xuICAgICAgICAgICAgICAgIF93aW5uZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7cGxheWVyLmdldFR5cGUoKS50b1VwcGVyQ2FzZSgpfSBXaW5zIWA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkLmNoZWNrSWZXb24oYm9hcmQuZ2V0Qm9hcmQoKSkgPT0gXCJkcmF3XCIpIHtcbiAgICAgICAgICAgICAgICBfd2lubmVyRGlzcGxheS50ZXh0Q29udGVudCA9IFwiSXQncyBhIERyYXdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9nYW1lQm9hcmRQaWVjZXMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLnJlcGxhY2VXaXRoKGJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSkpKTtcbiAgICAgICAgICAgIC8vbmVlZCB0byB1cGRhdGUgd2hhdCB0aGUgZ2FtZWJvYXJkIHBpZWNlcyBhcmUgYWZ0ZXIgdGhleSd2ZSBiZWVuIGNsb25lZCB0byByZW1vdmVcbiAgICAgICAgICAgIC8vdGhlIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICAgICAgX2dhbWVCb2FyZFBpZWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmQtc3BhY2VcIik7XG4gICAgICAgICAgICBfZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgX2N1cnJlbnRQbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IF9uZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIF9uZXdHYW1lQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LWdhbWUtYnV0dG9uXCIpO1xuICAgICAgICAgICAgX25ld0dhbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIk5ldyBHYW1lP1wiO1xuICAgICAgICAgICAgX3dpbm5lckRpc3BsYXkucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChfbmV3R2FtZUJ1dHRvbik7XG4gICAgICAgICAgICBfbmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX25ld0dhbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghX2dhbWVPdmVyKSB7XG4gICAgICAgICAgICBfY3VycmVudFBsYXllciA9PSBfcGxheWVyMSA/IChfY3VycmVudFBsYXllciA9IF9wbGF5ZXIyKSA6IChfY3VycmVudFBsYXllciA9IF9wbGF5ZXIxKTtcbiAgICAgICAgICAgIF9uZXh0TW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IF9wbGF5UGxheWVyMSA9IGUgPT4ge1xuICAgICAgICBwbGF5UGllY2UoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc3BhY2UsIF9wbGF5ZXIxKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGxheWVyMSA9ICgpID0+IF9wbGF5ZXIxO1xuXG4gICAgX3N0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3N0YXJ0R2FtZSk7XG5cbiAgICByZXR1cm4geyBwbGF5UGllY2UsIGdldFBsYXllcjEgfTtcbn0pKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMTIxMjEyO1xcbn1cXG4jaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxufVxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMTIxMjEyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgbWluLWhlaWdodDogODB2aDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xcbiAgICAjYm9hcmQtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcXG4gICAgfVxcbn1cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcbi5zdWItaW5zdHJ1Y3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuLmNob2ljZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjEyMTI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICAgIGNvbG9yOiAjMTIxMjEyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uZGlmZmljdWx0eS1idXR0b24ge1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4IDBweDtcXG59XFxuXFxuI3N0YXJ0LWdhbWUge1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG59XFxuXFxuLnBpZWNlLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi54LXBpZWNlIHtcXG4gICAgY29sb3I6ICNmMDU0NTQ7XFxufVxcbi54LXBpZWNlLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA1NDU0O1xcbn1cXG4uby1waWVjZSB7XFxuICAgIGNvbG9yOiAjMzA0NzVlO1xcbn1cXG4uby1waWVjZS5hY3RpdmUge1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNDc1ZTtcXG59XFxuXFxuI2JvYXJkIHtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAzMyUgMzMlO1xcbn1cXG4uYm9hcmQtc3BhY2Uge1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMxMjEyMTI7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzEyMTIxMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG4ubm8tdG9wLWJvcmRlciB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxufVxcbi5uby1sZWZ0LWJvcmRlciB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4jd2lubmVyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4jbmV3LWdhbWUtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbiNuZXctZ2FtZS1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RpYy10YWMtdG9lL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDREQUE0RDtJQUM1RCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJO1FBQ0kscUJBQXFCO0lBQ3pCO0FBQ0o7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzEyMTIxMjtcXG59XFxuI2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbn1cXG4jY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzEyMTIxMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcXG4gICAgI2JvYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogLW1vei1hdmFpbGFibGU7XFxuICAgIH1cXG59XFxuLmluc3RydWN0aW9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG4uc3ViLWluc3RydWN0aW9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcbi5jaG9pY2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTIxMjEyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgICBjb2xvcjogIzEyMTIxMjtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLmRpZmZpY3VsdHktYnV0dG9uIHtcXG4gICAgd2lkdGg6IDExMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAwcHg7XFxufVxcblxcbiNzdGFydC1nYW1lIHtcXG4gICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxufVxcblxcbi5waWVjZS1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ueC1waWVjZSB7XFxuICAgIGNvbG9yOiAjZjA1NDU0O1xcbn1cXG4ueC1waWVjZS5hY3RpdmUge1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwNTQ1NDtcXG59XFxuLm8tcGllY2Uge1xcbiAgICBjb2xvcjogIzMwNDc1ZTtcXG59XFxuLm8tcGllY2UuYWN0aXZlIHtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDQ3NWU7XFxufVxcblxcbiNib2FyZCB7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUgMzMlIDMzJTtcXG59XFxuLmJvYXJkLXNwYWNlIHtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMTIxMjEyO1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMxMjEyMTI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuLm5vLXRvcC1ib3JkZXIge1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbn1cXG4ubm8tbGVmdC1ib3JkZXIge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuXFxuI3dpbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuI25ldy1nYW1lLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG4jbmV3LWdhbWUtYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIuL3RpYy10YWMtdG9lL2luZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInNyY19IZWFkZXJfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdGljLXRhYy10b2UvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJET01NYW5pcCIsImdldEVsZW1lbnQiLCJzZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1ha2VOZXdFbGVtZW50IiwidHlwZSIsImlkIiwiSFRNTENsYXNzIiwidGV4dCIsIm5ld0VsZW0iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJhdHRyaWJ1dGVzIiwibGVuZ3RoIiwiZm9yRWFjaCIsImF0dCIsIk9iamVjdCIsImtleXMiLCJhcHBlbmRDaGlsZHJlbiIsInBhcmVudCIsImNoaWxkcmVuIiwiY2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc2VydEFmdGVyIiwibmV3Tm9kZSIsImV4aXN0aW5nTm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsInJlbW92ZUFsbENoaWxkcmVuIiwiZWxlbWVudCIsInNraXAiLCJpIiwiY2hpbGROb2RlcyIsInJlbW92ZSIsImNyZWF0ZUhlYWRlciIsIlBsYXllciIsImdldFR5cGUiLCJBSVBsYXllciIsImRpZmZpY3VsdHkiLCJfZGVmZW5kT3JBdHRhY2siLCJwbGF5ZXIiLCJfZHVtbXlCb2FyZCIsImJvYXJkIiwiZ2V0Qm9hcmQiLCJtYXAiLCJlbGUiLCJjaGVja0lmV29uIiwiZGlzcGxheSIsInBsYXlQaWVjZSIsIl9waWNrUmFuZG9tIiwiX3JhbmRTdGFydCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIl9jaG9vc2VNb3ZlIiwiX3BsYXlNYWRlIiwiX29wcFBsYXlzIiwicmVkdWNlIiwiYSIsImIiLCJnZXRQbGF5ZXIxIiwiY2FsbCIsIl9zaWRlUGllY2VzIiwicHVzaCIsImluY2x1ZGVzIiwibWFrZU1vdmUiLCJfbWFrZURpc3BsYXkiLCJoZWFkZXIiLCJjb250ZW50IiwiYm9hcmRDb250YWluZXIiLCJwaWVjZVNlbGVjdGlvbiIsInBpZWNlU2VsZWN0aW9uSGVscGVyIiwicGllY2VDb250YWluZXIiLCJ4UGllY2UiLCJ2YWx1ZSIsIm9QaWVjZSIsImFpU2VsZWN0aW9uIiwiZGlmZmljdWx0eUNvbnRhaW5lciIsImVhc3lCdXR0b24iLCJtZWRpdW1CdXR0b24iLCJpbXBvc3NpYmxlQnV0dG9uIiwic3RhcnRHYW1lIiwiYm9hcmRTcGFjZTEiLCJib2FyZFNwYWNlMiIsImJvYXJkU3BhY2UzIiwiYm9hcmRTcGFjZTQiLCJib2FyZFNwYWNlNSIsImJvYXJkU3BhY2U2IiwiYm9hcmRTcGFjZTciLCJib2FyZFNwYWNlOCIsImJvYXJkU3BhY2U5Iiwid2lubmVyIiwiYm9keSIsIl9nYW1lQm9hcmQiLCJ1cGRhdGUiLCJpbmRleCIsImNsZWFyQm9hcmQiLCJfY2hlY2tXaW5Db24iLCJjIiwiX3dpbm5lciIsInBsYXllclNlbCIsIl9wbGF5ZXJTZWxlY3Rpb24iLCJfcGxheWVyUGllY2VTZWxlY3RvcnMiLCJfZ2V0UGxheWVyQ2hvaWNlIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsImJ1dHRvbiIsIl9hY3RpdmF0ZVBsYXllcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVhY3RpdmF0ZVBsYXllcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzZXRQbGF5ZXIiLCJnZXRQbGF5ZXJTZWxlY3Rpb24iLCJkaWZmaWN1bHR5U2VsIiwiX2RpZlNlbGVjdGlvbiIsIl9kaWZmaWN1bHR5U2VsZWN0b3JzIiwiX2dldERpZkNob2ljZSIsIl9hY3RpdmF0ZURpZmZpY3VsdHkiLCJkZWFjdGl2YXRlRGlmZmljdWx0eSIsInJlc2V0RGlmZmljdWx0eSIsImdldERpZmZpY3VsdHlTZWxlY3Rpb24iLCJfcGxheWVyMSIsIl9wbGF5ZXIyIiwiX2N1cnJlbnRQbGF5ZXIiLCJfZ2FtZU92ZXIiLCJfZ2FtZUJvYXJkUGllY2VzIiwiX3N0YXJ0R2FtZUJ1dHRvbiIsIl93aW5uZXJEaXNwbGF5IiwiX25ld0dhbWUiLCJfc3RhcnRHYW1lIiwicGFyZW50RWxlbWVudCIsImxhc3RDaGlsZCIsInNldFRpbWVvdXQiLCJfcGxheVBsYXllcjEiLCJfdXBkYXRlQm9hcmRQaWVjZSIsIl9wYXVzZUNvbXBQbGF5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJfbmV4dE1vdmUiLCJ0aGVuIiwidG9VcHBlckNhc2UiLCJyZXBsYWNlV2l0aCIsImNsb25lTm9kZSIsIl9uZXdHYW1lQnV0dG9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzcGFjZSJdLCJzb3VyY2VSb290IjoiIn0=