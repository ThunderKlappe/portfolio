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
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer */ "./src/Footer.js");





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
  var footer = (0,_Footer__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(document.body, header, content, footer);
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #f5f5f5;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #121212;\n}\n#header,\n#footer {\n    background-color: #121212;\n    color: #f5f5f5;\n}\n#content {\n    margin-top: 100px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#board-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 3px solid #121212;\n    border-radius: 20px;\n    width: -webkit-fill-available;\n    min-height: 80vh;\n    padding: 10px;\n    margin: 10px;\n}\n@-moz-document url-prefix() {\n    #board-container {\n        width: -moz-available;\n    }\n}\n.instructions {\n    font-size: 20px;\n    font-weight: bold;\n    margin: 5px;\n}\n.sub-instructions {\n    font-size: 18px;\n    margin: 5px;\n}\n.choice-container {\n    display: flex;\n    gap: 25px;\n    margin: 10px;\n}\nbutton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #121212;\n    border-radius: 15px;\n    background-color: #f5f5f5;\n    color: #121212;\n    transition: 0.5s;\n}\n\n.difficulty-button {\n    width: 110px;\n    font-size: 18px;\n    padding: 5px 0px;\n}\n\n#start-game {\n    padding: 5px 8px;\n    margin: 10px;\n    font-size: 20px;\n    font-weight: bold;\n}\n.active {\n    background-color: #121212;\n    color: #f5f5f5;\n}\n\n.piece-button {\n    height: 50px;\n    width: 50px;\n    font-size: 24px;\n    font-weight: bold;\n}\n.x-piece {\n    color: #f05454;\n}\n.x-piece.active {\n    color: #f5f5f5;\n    background-color: #f05454;\n}\n.o-piece {\n    color: #30475e;\n}\n.o-piece.active {\n    color: #f5f5f5;\n    background-color: #30475e;\n}\n\n#board {\n    margin: 15px;\n    display: grid;\n    grid-template-columns: 33% 33% 33%;\n}\n.board-space {\n    height: 120px;\n    width: 120px;\n    padding: 0;\n    background-color: #f5f5f5;\n    border: none;\n    border-top: 4px solid #121212;\n    border-left: 4px solid #121212;\n    border-radius: 0;\n    font-size: 50px;\n}\n.no-top-border {\n    border-top: none;\n}\n.no-left-border {\n    border-left: none;\n}\n\n#winner {\n    font-size: 20px;\n}\n#new-game-button {\n    font-size: 18px;\n    padding: 5px 8px;\n    margin: 10px;\n}\n#new-game-button:hover {\n    color: #f5f5f5;\n    background-color: #121212;\n}\n", "",{"version":3,"sources":["webpack://./src/tic-tac-toe/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,4DAA4D;IAC5D,cAAc;AAClB;AACA;;IAEI,yBAAyB;IACzB,cAAc;AAClB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,6BAA6B;IAC7B,gBAAgB;IAChB,aAAa;IACb,YAAY;AAChB;AACA;IACI;QACI,qBAAqB;IACzB;AACJ;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,eAAe;IACf,WAAW;AACf;AACA;IACI,aAAa;IACb,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,mBAAmB;IACnB,yBAAyB;IACzB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;IACd,yBAAyB;AAC7B;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kCAAkC;AACtC;AACA;IACI,aAAa;IACb,YAAY;IACZ,UAAU;IACV,yBAAyB;IACzB,YAAY;IACZ,6BAA6B;IAC7B,8BAA8B;IAC9B,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,cAAc;IACd,yBAAyB;AAC7B","sourcesContent":["body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #f5f5f5;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #121212;\n}\n#header,\n#footer {\n    background-color: #121212;\n    color: #f5f5f5;\n}\n#content {\n    margin-top: 100px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#board-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 3px solid #121212;\n    border-radius: 20px;\n    width: -webkit-fill-available;\n    min-height: 80vh;\n    padding: 10px;\n    margin: 10px;\n}\n@-moz-document url-prefix() {\n    #board-container {\n        width: -moz-available;\n    }\n}\n.instructions {\n    font-size: 20px;\n    font-weight: bold;\n    margin: 5px;\n}\n.sub-instructions {\n    font-size: 18px;\n    margin: 5px;\n}\n.choice-container {\n    display: flex;\n    gap: 25px;\n    margin: 10px;\n}\nbutton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #121212;\n    border-radius: 15px;\n    background-color: #f5f5f5;\n    color: #121212;\n    transition: 0.5s;\n}\n\n.difficulty-button {\n    width: 110px;\n    font-size: 18px;\n    padding: 5px 0px;\n}\n\n#start-game {\n    padding: 5px 8px;\n    margin: 10px;\n    font-size: 20px;\n    font-weight: bold;\n}\n.active {\n    background-color: #121212;\n    color: #f5f5f5;\n}\n\n.piece-button {\n    height: 50px;\n    width: 50px;\n    font-size: 24px;\n    font-weight: bold;\n}\n.x-piece {\n    color: #f05454;\n}\n.x-piece.active {\n    color: #f5f5f5;\n    background-color: #f05454;\n}\n.o-piece {\n    color: #30475e;\n}\n.o-piece.active {\n    color: #f5f5f5;\n    background-color: #30475e;\n}\n\n#board {\n    margin: 15px;\n    display: grid;\n    grid-template-columns: 33% 33% 33%;\n}\n.board-space {\n    height: 120px;\n    width: 120px;\n    padding: 0;\n    background-color: #f5f5f5;\n    border: none;\n    border-top: 4px solid #121212;\n    border-left: 4px solid #121212;\n    border-radius: 0;\n    font-size: 50px;\n}\n.no-top-border {\n    border-top: none;\n}\n.no-left-border {\n    border-left: none;\n}\n\n#winner {\n    font-size: 20px;\n}\n#new-game-button {\n    font-size: 18px;\n    padding: 5px 8px;\n    margin: 10px;\n}\n#new-game-button:hover {\n    color: #f5f5f5;\n    background-color: #121212;\n}\n"],"sourceRoot":""}]);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_Footer_js-src_Header_js"], () => (__webpack_require__("./src/tic-tac-toe/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDeEQsS0FBSyxDQUFDLENBQUQsQ0FBTixFQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUFoQixFQUFxQkEsS0FBSyxDQUFDLENBQUQsQ0FBMUIsQ0FBWixHQUNSQSxLQUFLLENBQUMsQ0FBRCxDQURHLEdBRVJ3RCxZQUFZLENBQUN4RCxLQUFLLENBQUMsQ0FBRCxDQUFOLEVBQVdBLEtBQUssQ0FBQyxDQUFELENBQWhCLEVBQXFCQSxLQUFLLENBQUMsQ0FBRCxDQUExQixDQUFaLEdBQ0FBLEtBQUssQ0FBQyxDQUFELENBREwsR0FFQXdELFlBQVksQ0FBQ3hELEtBQUssQ0FBQyxDQUFELENBQU4sRUFBV0EsS0FBSyxDQUFDLENBQUQsQ0FBaEIsRUFBcUJBLEtBQUssQ0FBQyxDQUFELENBQTFCLENBQVosR0FDQUEsS0FBSyxDQUFDLENBQUQsQ0FETCxHQUVBd0QsWUFBWSxDQUFDeEQsS0FBSyxDQUFDLENBQUQsQ0FBTixFQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUFoQixFQUFxQkEsS0FBSyxDQUFDLENBQUQsQ0FBMUIsQ0FBWixHQUNBQSxLQUFLLENBQUMsQ0FBRCxDQURMLEdBRUF3RCxZQUFZLENBQUN4RCxLQUFLLENBQUMsQ0FBRCxDQUFOLEVBQVdBLEtBQUssQ0FBQyxDQUFELENBQWhCLEVBQXFCQSxLQUFLLENBQUMsQ0FBRCxDQUExQixDQUFaLEdBQ0FBLEtBQUssQ0FBQyxDQUFELENBREwsR0FFQXdELFlBQVksQ0FBQ3hELEtBQUssQ0FBQyxDQUFELENBQU4sRUFBV0EsS0FBSyxDQUFDLENBQUQsQ0FBaEIsRUFBcUJBLEtBQUssQ0FBQyxDQUFELENBQTFCLENBQVosR0FDQUEsS0FBSyxDQUFDLENBQUQsQ0FETCxHQUVBd0QsWUFBWSxDQUFDeEQsS0FBSyxDQUFDLENBQUQsQ0FBTixFQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUFoQixFQUFxQkEsS0FBSyxDQUFDLENBQUQsQ0FBMUIsQ0FBWixHQUNBQSxLQUFLLENBQUMsQ0FBRCxDQURMLEdBRUF3RCxZQUFZLENBQUN4RCxLQUFLLENBQUMsQ0FBRCxDQUFO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O1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy90aWMtdGFjLXRvZS9ET01NYW5pcC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvdGljLXRhYy10b2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3RpYy10YWMtdG9lL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy90aWMtdGFjLXRvZS9zdHlsZS5jc3M/MDE1MyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBET01NYW5pcCA9ICgoKSA9PiB7XG4gICAgLy9zaG9ydGhhbmQgdG8gZ2V0IGVsZW1lbnRzIGVhc2llclxuICAgIGNvbnN0IGdldEVsZW1lbnQgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBjb25zdCBnZXRFbGVtZW50cyA9IHNlbGVjdG9yID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgLy9zaG9ydGhhbmQgdG8gbWFrZSBhIG5ldyBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlcyB0byBpdFxuICAgIGNvbnN0IG1ha2VOZXdFbGVtZW50ID0gKHR5cGUsIGlkID0gXCJcIiwgSFRNTENsYXNzID0gXCJcIiwgdGV4dCA9IFwiXCIsIC4uLmF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGlmIChpZCAhPSBcIlwiKSB7XG4gICAgICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSFRNTENsYXNzICE9IFwiXCIpIHtcbiAgICAgICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgSFRNTENsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGF0dCA9PiBuZXdFbGVtLnNldEF0dHJpYnV0ZShPYmplY3Qua2V5cyhhdHQpWzBdLCBhdHRbT2JqZWN0LmtleXMoYXR0KV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdFbGVtO1xuICAgIH07XG5cbiAgICAvL2FkZHMgYWxsIG9mIHRoZSBET00gZWxlbWVudHMgdG8gYSBwYXJlbnRcbiAgICBjb25zdCBhcHBlbmRDaGlsZHJlbiA9IChwYXJlbnQsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgfTtcblxuICAgIC8vaW5zZXJ0cyBhIERPTSBlbGVtZW50IGFmdGVyIGFub3RoZXIgZWxlbWVudFxuICAgIGNvbnN0IGluc2VydEFmdGVyID0gKG5ld05vZGUsIGV4aXN0aW5nTm9kZSkgPT4ge1xuICAgICAgICBleGlzdGluZ05vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgZXhpc3RpbmdOb2RlLm5leHRTaWJsaW5nKTtcbiAgICB9O1xuXG4gICAgLy9jbGVhcnMgb3V0IGFsbCBjaGlsZCBub2RlcyBvZiBhbiBlbGVtZW50LCBza2lwcyBhcyBtYW55IGVsZW1lbnRzIGFzIHJlcXVlc3RlZFxuICAgIGNvbnN0IHJlbW92ZUFsbENoaWxkcmVuID0gKGVsZW1lbnQsIHNraXAgPSAwKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpID4gc2tpcDsgaS0tKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbaSAtIDFdLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldEVsZW1lbnQsIGdldEVsZW1lbnRzLCBtYWtlTmV3RWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4sIGluc2VydEFmdGVyLCByZW1vdmVBbGxDaGlsZHJlbiB9O1xufSkoKTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuLi9IZWFkZXJcIjtcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuXG5jb25zdCBQbGF5ZXIgPSB0eXBlID0+IHtcbiAgICBjb25zdCBnZXRUeXBlID0gKCkgPT4gdHlwZTtcbiAgICByZXR1cm4geyBnZXRUeXBlIH07XG59O1xuXG5jb25zdCBBSVBsYXllciA9ICh0eXBlLCBkaWZmaWN1bHR5KSA9PiB7XG4gICAgY29uc3QgeyBnZXRUeXBlIH0gPSBQbGF5ZXIodHlwZSk7XG5cbiAgICAvL2lmIHNvbWVib2R5IGNhbiB3aW4sIGdvIHRoZXJlLlxuICAgIGNvbnN0IF9kZWZlbmRPckF0dGFjayA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBfZHVtbXlCb2FyZCA9IGJvYXJkLmdldEJvYXJkKCkubWFwKGVsZSA9PiBlbGUpO1xuICAgICAgICAgICAgaWYgKF9kdW1teUJvYXJkW2ldID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBfZHVtbXlCb2FyZFtpXSA9IHBsYXllci5nZXRUeXBlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLmNoZWNrSWZXb24oX2R1bW15Qm9hcmQpID09IHBsYXllci5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5wbGF5UGllY2UoaSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvL3BpY2tzIGEgcmFuZG9tIGVtcHR5IHNwb3RcbiAgICBjb25zdCBfcGlja1JhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IF9yYW5kU3RhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5nZXRCb2FyZCgpLmxlbmd0aCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGlmIChib2FyZC5nZXRCb2FyZCgpW19yYW5kU3RhcnRdID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnBsYXlQaWVjZShfcmFuZFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9yYW5kU3RhcnQrKztcbiAgICAgICAgICAgICAgICBpZiAoX3JhbmRTdGFydCA9PSBib2FyZC5nZXRCb2FyZCgpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBfcmFuZFN0YXJ0ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgX2Nob29zZU1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBfcGxheU1hZGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IF9vcHBQbGF5cyA9IGJvYXJkXG4gICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4gKGIgPT0gZGlzcGxheS5nZXRQbGF5ZXIxKCkuZ2V0VHlwZSgpID8gYSArIDEgOiBhKSwgMCk7XG5cbiAgICAgICAgLy9jaGVjayBpZiB0aGUgQUkgY2FuIHdpblxuICAgICAgICBfcGxheU1hZGUgPSBfZGVmZW5kT3JBdHRhY2suY2FsbCh0aGlzLCB0aGlzKTtcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgUGxheWVyIGNhbiB3aW5cbiAgICAgICAgaWYgKCFfcGxheU1hZGUpIHtcbiAgICAgICAgICAgIF9wbGF5TWFkZSA9IF9kZWZlbmRPckF0dGFjay5jYWxsKHRoaXMsIGRpc3BsYXkuZ2V0UGxheWVyMSgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV9wbGF5TWFkZSkge1xuICAgICAgICAgICAgaWYgKF9vcHBQbGF5cyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5wbGF5UGllY2UoMCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfb3BwUGxheXMgPT0gMSAmJiB0eXBlID09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLmdldEJvYXJkKClbOF0gPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LnBsYXlQaWVjZSg4LCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX29wcFBsYXlzID09IDIpIHtcbiAgICAgICAgICAgICAgICAvL0lmIHRoZSBvcHBvbmVudCBwbGF5ZWQgb24gdHdvIGNvcm5lcnMsIHBsYXkgb24gYSBzaWRlLlxuICAgICAgICAgICAgICAgIGxldCBfc2lkZVBpZWNlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYm9hcmQuZ2V0Qm9hcmQoKS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICBfc2lkZVBpZWNlcy5wdXNoKGJvYXJkLmdldEJvYXJkKClbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIV9zaWRlUGllY2VzLmluY2x1ZGVzKGRpc3BsYXkuZ2V0UGxheWVyMSgpLmdldFR5cGUoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5wbGF5UGllY2UoMSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vZ28gdG8gdGhlIG1pZGRsZSBpZiBpdCdzIGF2YWlsYWJsZVxuICAgICAgICAgICAgaWYgKGJvYXJkLmdldEJvYXJkKClbNF0gPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGRpc3BsYXkucGxheVBpZWNlKDQsIHRoaXMpO1xuICAgICAgICAgICAgICAgIC8vZ28gdG8gdGhlIGNvcm5lciBpZiB0aGUgbWlkZGxlIGlzIHRha2VuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkLmdldEJvYXJkKClbMF0gPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGRpc3BsYXkucGxheVBpZWNlKDAsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9vciBlbHNlIHBpY2sgYSByYW5kb20gc3BvdC5cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9waWNrUmFuZG9tLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZU1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vZGVjaWRlZCB3aGV0aGVyIHRvIG1ha2UgdGhlIGNvcnJlY3QgbW92ZSBvciByYW5kb20gbW92ZSBiYXNlZCBvbiBkaWZmaWN1bHR5XG4gICAgICAgIGlmIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaWZmaWN1bHR5KSA9PSAwKSB7XG4gICAgICAgICAgICBfY2hvb3NlTW92ZS5jYWxsKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3BpY2tSYW5kb20uY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRUeXBlLCBtYWtlTW92ZSB9O1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5jb25zdCBfbWFrZURpc3BsYXkgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcihcIlRpYy1UYWMtVG9lXCIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRlbnRcIik7XG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImJvYXJkLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwaWVjZVNlbGVjdGlvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcInBpZWNlLXNlbGVjdGlvblwiLFxuICAgICAgICBcImluc3RydWN0aW9uc1wiLFxuICAgICAgICBcIlBsZWFzZSBTZWxlY3QgWW91ciBQaWVjZTpcIlxuICAgICk7XG4gICAgY29uc3QgcGllY2VTZWxlY3Rpb25IZWxwZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJwaWVjZS1zZWxlY3Rpb24taGVscGVyXCIsXG4gICAgICAgIFwic3ViLWluc3RydWN0aW9uc1wiLFxuICAgICAgICBcIlggZ29lcyBmaXJzdCwgTyBnb2VzIHNlY29uZFwiXG4gICAgKTtcbiAgICBjb25zdCBwaWVjZUNvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwicGllY2UtY29udGFpbmVyXCIsIFwiY2hvaWNlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB4UGllY2UgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIngtcGllY2VcIiwgXCJwaWVjZS1idXR0b24geC1waWVjZSBhY3RpdmVcIiwgXCJ4XCIsIHtcbiAgICAgICAgdmFsdWU6IFwieFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IG9QaWVjZSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiby1waWVjZVwiLCBcInBpZWNlLWJ1dHRvbiBvLXBpZWNlXCIsIFwib1wiLCB7XG4gICAgICAgIHZhbHVlOiBcIm9cIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGFpU2VsZWN0aW9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiYWktc2VsZWN0aW9uXCIsXG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25zXCIsXG4gICAgICAgIFwiUGxlYXNlIFNlbGVjdCBUaGUgRGlmZmljdWx0eVwiXG4gICAgKTtcbiAgICBjb25zdCBkaWZmaWN1bHR5Q29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJkaWZmaWN1bHR5LWNvbnRhaW5lclwiLCBcImNob2ljZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgZWFzeUJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiZWFzeS1idXR0b25cIiwgXCJkaWZmaWN1bHR5LWJ1dHRvbiBhY3RpdmVcIiwgXCJFYXN5XCIsIHtcbiAgICAgICAgdmFsdWU6IFwiM1wiLFxuICAgIH0pO1xuICAgIGNvbnN0IG1lZGl1bUJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwibWVkaXVtLWJ1dHRvblwiLCBcImRpZmZpY3VsdHktYnV0dG9uXCIsIFwiTWVkaXVtXCIsIHtcbiAgICAgICAgdmFsdWU6IFwiMlwiLFxuICAgIH0pO1xuICAgIGNvbnN0IGltcG9zc2libGVCdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgXCJpbXBvc3NpYmxlLWJ1dHRvblwiLFxuICAgICAgICBcImRpZmZpY3VsdHktYnV0dG9uXCIsXG4gICAgICAgIFwiSW1wb3NzaWJsZVwiLFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogXCIxXCIsXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJzdGFydC1nYW1lXCIsIFwiXCIsIFwiU3RhcnQgR2FtZVwiKTtcblxuICAgIGNvbnN0IGJvYXJkID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJib2FyZFwiKTtcbiAgICBjb25zdCBib2FyZFNwYWNlMSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcImJvYXJkLXNwYWNlIG5vLXRvcC1ib3JkZXIgbm8tbGVmdC1ib3JkZXJcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgeyBcImRhdGEtc3BhY2VcIjogMCB9XG4gICAgKTtcbiAgICBjb25zdCBib2FyZFNwYWNlMiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiXCIsIFwiYm9hcmQtc3BhY2Ugbm8tdG9wLWJvcmRlclwiLCBcIlwiLCB7XG4gICAgICAgIFwiZGF0YS1zcGFjZVwiOiAxLFxuICAgIH0pO1xuICAgIGNvbnN0IGJvYXJkU3BhY2UzID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJcIiwgXCJib2FyZC1zcGFjZSBuby10b3AtYm9yZGVyXCIsIFwiXCIsIHtcbiAgICAgICAgXCJkYXRhLXNwYWNlXCI6IDIsXG4gICAgfSk7XG4gICAgY29uc3QgYm9hcmRTcGFjZTQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlIG5vLWxlZnQtYm9yZGVyXCIsIFwiXCIsIHtcbiAgICAgICAgXCJkYXRhLXNwYWNlXCI6IDMsXG4gICAgfSk7XG4gICAgY29uc3QgYm9hcmRTcGFjZTUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlXCIsIFwiXCIsIHsgXCJkYXRhLXNwYWNlXCI6IDQgfSk7XG4gICAgY29uc3QgYm9hcmRTcGFjZTYgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlXCIsIFwiXCIsIHsgXCJkYXRhLXNwYWNlXCI6IDUgfSk7XG4gICAgY29uc3QgYm9hcmRTcGFjZTcgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlIG5vLWxlZnQtYm9yZGVyXCIsIFwiXCIsIHtcbiAgICAgICAgXCJkYXRhLXNwYWNlXCI6IDYsXG4gICAgfSk7XG4gICAgY29uc3QgYm9hcmRTcGFjZTggPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlXCIsIFwiXCIsIHsgXCJkYXRhLXNwYWNlXCI6IDcgfSk7XG4gICAgY29uc3QgYm9hcmRTcGFjZTkgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlXCIsIFwiXCIsIHsgXCJkYXRhLXNwYWNlXCI6IDggfSk7XG5cbiAgICBjb25zdCB3aW5uZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIndpbm5lclwiKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihwaWVjZUNvbnRhaW5lciwgeFBpZWNlLCBvUGllY2UpO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGRpZmZpY3VsdHlDb250YWluZXIsIGVhc3lCdXR0b24sIG1lZGl1bUJ1dHRvbiwgaW1wb3NzaWJsZUJ1dHRvbik7XG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oXG4gICAgICAgIGJvYXJkLFxuICAgICAgICBib2FyZFNwYWNlMSxcbiAgICAgICAgYm9hcmRTcGFjZTIsXG4gICAgICAgIGJvYXJkU3BhY2UzLFxuICAgICAgICBib2FyZFNwYWNlNCxcbiAgICAgICAgYm9hcmRTcGFjZTUsXG4gICAgICAgIGJvYXJkU3BhY2U2LFxuICAgICAgICBib2FyZFNwYWNlNyxcbiAgICAgICAgYm9hcmRTcGFjZTgsXG4gICAgICAgIGJvYXJkU3BhY2U5XG4gICAgKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihcbiAgICAgICAgYm9hcmRDb250YWluZXIsXG4gICAgICAgIHBpZWNlU2VsZWN0aW9uLFxuICAgICAgICBwaWVjZVNlbGVjdGlvbkhlbHBlcixcbiAgICAgICAgcGllY2VDb250YWluZXIsXG4gICAgICAgIGFpU2VsZWN0aW9uLFxuICAgICAgICBkaWZmaWN1bHR5Q29udGFpbmVyLFxuICAgICAgICBzdGFydEdhbWUsXG4gICAgICAgIGJvYXJkLFxuICAgICAgICB3aW5uZXJcbiAgICApO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGRvY3VtZW50LmJvZHksIGhlYWRlciwgY29udGVudCwgZm9vdGVyKTtcbn0pKCk7XG5cbmNvbnN0IGJvYXJkID0gKCgpID0+IHtcbiAgICBsZXQgX2dhbWVCb2FyZCA9IFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXTtcbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IF9nYW1lQm9hcmQ7XG5cbiAgICBjb25zdCB1cGRhdGUgPSAoaW5kZXgsIHBsYXllcikgPT4ge1xuICAgICAgICBfZ2FtZUJvYXJkW2luZGV4XSA9IHBsYXllci5nZXRUeXBlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyQm9hcmQgPSAoKSA9PiAoX2dhbWVCb2FyZCA9IFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSk7XG4gICAgLy9pZiBhbGwgdGhyZWUgZW50cmllcyBhcmUgdGhlIHNhbWUsIHJldHVybiB0cnVlXG4gICAgY29uc3QgX2NoZWNrV2luQ29uID0gKGEsIGIsIGMpID0+IChhID09IGIgJiYgYSA9PSBjICYmIGEgIT0gXCJcIiA/IDEgOiAwKTtcblxuICAgIC8vY2hlY2sgYWxsIHJvd3MsIGNvbHVtbnMgYW5kIGRpYWdvbmFscyBmb3Igd2luc1xuICAgIGNvbnN0IGNoZWNrSWZXb24gPSBib2FyZCA9PiB7XG4gICAgICAgIGxldCBfd2lubmVyID0gX2NoZWNrV2luQ29uKGJvYXJkWzBdLCBib2FyZFsxXSwgYm9hcmRbMl0pXG4gICAgICAgICAgICA/IGJvYXJkWzBdXG4gICAgICAgICAgICA6IF9jaGVja1dpbkNvbihib2FyZFszXSwgYm9hcmRbNF0sIGJvYXJkWzVdKVxuICAgICAgICAgICAgPyBib2FyZFszXVxuICAgICAgICAgICAgOiBfY2hlY2tXaW5Db24oYm9hcmRbNl0sIGJvYXJkWzddLCBib2FyZFs4XSlcbiAgICAgICAgICAgID8gYm9hcmRbNl1cbiAgICAgICAgICAgIDogX2NoZWNrV2luQ29uKGJvYXJkWzBdLCBib2FyZFszXSwgYm9hcmRbNl0pXG4gICAgICAgICAgICA/IGJvYXJkWzBdXG4gICAgICAgICAgICA6IF9jaGVja1dpbkNvbihib2FyZFsxXSwgYm9hcmRbNF0sIGJvYXJkWzddKVxuICAgICAgICAgICAgPyBib2FyZFsxXVxuICAgICAgICAgICAgOiBfY2hlY2tXaW5Db24oYm9hcmRbMl0sIGJvYXJkWzVdLCBib2FyZFs4XSlcbiAgICAgICAgICAgID8gYm9hcmRbMl1cbiAgICAgICAgICAgIDogX2NoZWNrV2luQ29uKGJvYXJkWzBdLCBib2FyZFs0XSwgYm9hcmRbOF0pXG4gICAgICAgICAgICA/IGJvYXJkWzBdXG4gICAgICAgICAgICA6IF9jaGVja1dpbkNvbihib2FyZFsyXSwgYm9hcmRbNF0sIGJvYXJkWzZdKVxuICAgICAgICAgICAgPyBib2FyZFs2XVxuICAgICAgICAgICAgOiAwO1xuXG4gICAgICAgIGlmIChfd2lubmVyID09IDAgJiYgIWJvYXJkLmluY2x1ZGVzKFwiXCIpKSB7XG4gICAgICAgICAgICBfd2lubmVyID0gXCJkcmF3XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3dpbm5lcjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgdXBkYXRlLCBnZXRCb2FyZCwgY2hlY2tJZldvbiwgY2xlYXJCb2FyZCB9O1xufSkoKTtcblxuLy90aGlzIHNlY3Rpb24gcmVnYXJkcyB0aGUgcGxheWVyIHNlbGVjdGlvbiBidXR0b25zXG5jb25zdCBwbGF5ZXJTZWwgPSAoKCkgPT4ge1xuICAgIC8vZGVmYXVsdCBwbGF5ZXIgc2VsZWN0aW9uIGlzIHhcbiAgICBsZXQgX3BsYXllclNlbGVjdGlvbiA9IFwieFwiO1xuICAgIGNvbnN0IF9wbGF5ZXJQaWVjZVNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGllY2UtYnV0dG9uXCIpO1xuICAgIGNvbnN0IF9nZXRQbGF5ZXJDaG9pY2UgPSBlID0+IHtcbiAgICAgICAgLy9nZXRzIHRoZSB2YWx1ZSBvZiB3aGF0IGlzIHNlbGVjdGVkIGFuZCBtYWtlcyBvbmx5IG9uY2UgY2hvaWNlIGFjdGl2ZSBhdCBhIHRpbWVcbiAgICAgICAgX3BsYXllclNlbGVjdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBfcGxheWVyUGllY2VTZWxlY3RvcnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgaWYgKGJ1dHRvbiAhPSBlLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy9hZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzZWxlY3Rpb24gYnV0dG9uc1xuICAgIGNvbnN0IF9hY3RpdmF0ZVBsYXllcnMgPSAoKSA9PlxuICAgICAgICBfcGxheWVyUGllY2VTZWxlY3RvcnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfZ2V0UGxheWVyQ2hvaWNlKSk7XG4gICAgX2FjdGl2YXRlUGxheWVycygpO1xuXG4gICAgLy9hIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyB0aGUgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIGJ1dHRvbnMuXG4gICAgY29uc3QgZGVhY3RpdmF0ZVBsYXllcnMgPSAoKSA9PlxuICAgICAgICBfcGxheWVyUGllY2VTZWxlY3RvcnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfZ2V0UGxheWVyQ2hvaWNlKSk7XG5cbiAgICBjb25zdCByZXNldFBsYXllciA9ICgpID0+IHtcbiAgICAgICAgX3BsYXllclNlbGVjdGlvbiA9IFwieFwiO1xuICAgICAgICBfcGxheWVyUGllY2VTZWxlY3RvcnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgICAgICBfcGxheWVyUGllY2VTZWxlY3RvcnNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgX2FjdGl2YXRlUGxheWVycygpO1xuICAgIH07XG5cbiAgICAvL2Z1bmN0aW9uIHRoYXQgcmV0dXJucyB3aGF0IHRoZSBwbGF5ZXIgY2hvc2VcbiAgICBjb25zdCBnZXRQbGF5ZXJTZWxlY3Rpb24gPSAoKSA9PiBfcGxheWVyU2VsZWN0aW9uO1xuXG4gICAgcmV0dXJuIHsgZ2V0UGxheWVyU2VsZWN0aW9uLCBkZWFjdGl2YXRlUGxheWVycywgcmVzZXRQbGF5ZXIgfTtcbn0pKCk7XG5cbi8vdGhpcyBzZWN0aW9uIHJlZ2FyZHMgdGhlIGRpZmZpY3VsdHkgc2VsZWN0aW9uIGJ1dHRvbnNcbmNvbnN0IGRpZmZpY3VsdHlTZWwgPSAoKCkgPT4ge1xuICAgIC8vZGVmYXVsdCBkaWZmaWN1bHR5IHNlbGVjdGlvbiBpcyBFYXN5XG4gICAgbGV0IF9kaWZTZWxlY3Rpb24gPSAzO1xuICAgIGNvbnN0IF9kaWZmaWN1bHR5U2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kaWZmaWN1bHR5LWJ1dHRvblwiKTtcbiAgICBjb25zdCBfZ2V0RGlmQ2hvaWNlID0gZSA9PiB7XG4gICAgICAgIC8vZ2V0cyB0aGUgdmFsdWUgb2Ygd2hhdCBpcyBzZWxlY3RlZCBhbmQgbWFrZXMgb25seSBvbmNlIGNob2ljZSBhY3RpdmUgYXQgYSB0aW1lXG4gICAgICAgIF9kaWZTZWxlY3Rpb24gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgX2RpZmZpY3VsdHlTZWxlY3RvcnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgaWYgKGJ1dHRvbiAhPSBlLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy9hZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzZWxlY3Rpb24gYnV0dG9uc1xuICAgIGNvbnN0IF9hY3RpdmF0ZURpZmZpY3VsdHkgPSAoKSA9PlxuICAgICAgICBfZGlmZmljdWx0eVNlbGVjdG9ycy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9nZXREaWZDaG9pY2UpKTtcbiAgICBfYWN0aXZhdGVEaWZmaWN1bHR5KCk7XG5cbiAgICAvL2EgZnVuY3Rpb24gdGhhdCByZW1vdmVzIHRoZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgYnV0dG9ucy5cbiAgICBjb25zdCBkZWFjdGl2YXRlRGlmZmljdWx0eSA9ICgpID0+XG4gICAgICAgIF9kaWZmaWN1bHR5U2VsZWN0b3JzLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2dldERpZkNob2ljZSkpO1xuXG4gICAgLy9yZXNldHMgdG8gZGVmYXVsdFxuICAgIGNvbnN0IHJlc2V0RGlmZmljdWx0eSA9ICgpID0+IHtcbiAgICAgICAgX2RpZlNlbGVjdGlvbiA9IDM7XG4gICAgICAgIF9kaWZmaWN1bHR5U2VsZWN0b3JzLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgX2RpZmZpY3VsdHlTZWxlY3RvcnNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgX2FjdGl2YXRlRGlmZmljdWx0eSgpO1xuICAgIH07XG5cbiAgICAvL2Z1bmN0aW9uIHRoYXQgcmV0dXJucyB3aGF0IHRoZSBwbGF5ZXIgY2hvc2VcbiAgICBjb25zdCBnZXREaWZmaWN1bHR5U2VsZWN0aW9uID0gKCkgPT4gX2RpZlNlbGVjdGlvbjtcblxuICAgIHJldHVybiB7IGdldERpZmZpY3VsdHlTZWxlY3Rpb24sIGRlYWN0aXZhdGVEaWZmaWN1bHR5LCByZXNldERpZmZpY3VsdHkgfTtcbn0pKCk7XG5cbmNvbnN0IGRpc3BsYXkgPSAoKCkgPT4ge1xuICAgIGxldCBfcGxheWVyMTtcbiAgICBsZXQgX3BsYXllcjI7XG4gICAgbGV0IF9jdXJyZW50UGxheWVyO1xuICAgIGxldCBfZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICBsZXQgX2dhbWVCb2FyZFBpZWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmQtc3BhY2VcIik7XG4gICAgY29uc3QgX3N0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnQtZ2FtZVwiKTtcbiAgICBjb25zdCBfd2lubmVyRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2lubmVyXCIpO1xuXG4gICAgY29uc3QgX25ld0dhbWUgPSAoKSA9PiB7XG4gICAgICAgIF9nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICBib2FyZC5jbGVhckJvYXJkKCk7XG4gICAgICAgIF9nYW1lQm9hcmRQaWVjZXMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwieC1waWVjZVwiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiby1waWVjZVwiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsbGVkXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcGxheWVyU2VsLnJlc2V0UGxheWVyKCk7XG4gICAgICAgIGRpZmZpY3VsdHlTZWwucmVzZXREaWZmaWN1bHR5KCk7XG4gICAgICAgIF9zdGFydEdhbWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgX3N0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3N0YXJ0R2FtZSk7XG4gICAgICAgIF93aW5uZXJEaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgX3dpbm5lckRpc3BsYXkucGFyZW50RWxlbWVudC5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfTtcblxuICAgIC8vY3JlYXRlcyB0aGUgdHdvIHBsYXllcnMsIGRlYWN0aXZhdGVzIHNldHRpbmdzIGJ1dHRvbnMsIGFuZCBhY3RpdmF0ZXMgYm9hcmRcbiAgICBjb25zdCBfc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgICAgICBfc3RhcnRHYW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIF9zdGFydEdhbWVCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9zdGFydEdhbWUpO1xuICAgICAgICBfcGxheWVyMSA9IFBsYXllcihwbGF5ZXJTZWwuZ2V0UGxheWVyU2VsZWN0aW9uKCkpO1xuICAgICAgICBwbGF5ZXJTZWwuZGVhY3RpdmF0ZVBsYXllcnMoKTtcbiAgICAgICAgX3BsYXllcjEuZ2V0VHlwZSgpID09IFwieFwiXG4gICAgICAgICAgICA/IChfcGxheWVyMiA9IEFJUGxheWVyKFwib1wiLCBkaWZmaWN1bHR5U2VsLmdldERpZmZpY3VsdHlTZWxlY3Rpb24oKSkpXG4gICAgICAgICAgICA6IChfcGxheWVyMiA9IEFJUGxheWVyKFwieFwiLCBkaWZmaWN1bHR5U2VsLmdldERpZmZpY3VsdHlTZWxlY3Rpb24oKSkpO1xuICAgICAgICBkaWZmaWN1bHR5U2VsLmRlYWN0aXZhdGVEaWZmaWN1bHR5KCk7XG4gICAgICAgIGlmIChfcGxheWVyMS5nZXRUeXBlKCkgPT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIF9jdXJyZW50UGxheWVyID0gX3BsYXllcjE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfY3VycmVudFBsYXllciA9IF9wbGF5ZXIyO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBfcGxheWVyMi5tYWtlTW92ZSgpLCA1MDApO1xuICAgICAgICB9XG4gICAgICAgIF9nYW1lQm9hcmRQaWVjZXMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfcGxheVBsYXllcjEpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgX3VwZGF0ZUJvYXJkUGllY2UgPSAoaW5kZXgsIHBsYXllcikgPT4ge1xuICAgICAgICBfZ2FtZUJvYXJkUGllY2VzW2luZGV4XS50ZXh0Q29udGVudCA9IHBsYXllci5nZXRUeXBlKCk7XG4gICAgICAgIF9nYW1lQm9hcmRQaWVjZXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoYCR7cGxheWVyLmdldFR5cGUoKX0tcGllY2VgKTtcbiAgICAgICAgX2dhbWVCb2FyZFBpZWNlc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcImZpbGxlZFwiKTtcbiAgICAgICAgX2dhbWVCb2FyZFBpZWNlc1tpbmRleF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9wbGF5UGxheWVyMSk7XG4gICAgICAgIGJvYXJkLnVwZGF0ZShpbmRleCwgcGxheWVyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgX3BhdXNlQ29tcFBsYXkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwKSk7XG4gICAgfTtcbiAgICAvL2lmIHRoZSBjdXJyZW50IHBsYXllciBpcyB0aGUgY29tcHV0ZXIsIHRoZXkgbWFrZSB0aGVpciBtb3ZlXG4gICAgY29uc3QgX25leHRNb3ZlID0gKCkgPT4ge1xuICAgICAgICBpZiAoX2N1cnJlbnRQbGF5ZXIgPT0gX3BsYXllcjEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfY3VycmVudFBsYXllciA9PSBfcGxheWVyMikge1xuICAgICAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoXCIuYm9hcmQtc3BhY2U6bm90KC5maWxsZWQpXCIpLmZvckVhY2goYnV0dG9uID0+XG4gICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfcGxheVBsYXllcjEpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgX3BhdXNlQ29tcFBsYXkoKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IF9wbGF5ZXIyLm1ha2VNb3ZlKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV9nYW1lT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoXCIuYm9hcmQtc3BhY2U6bm90KC5maWxsZWQpXCIpLmZvckVhY2goYnV0dG9uID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfcGxheVBsYXllcjEpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9wbGF5cyBhIHBpZWNlIGFuZCBjaGVja3MgaWYgdGhlIGdhbWUgaXMgb3ZlclxuICAgIGNvbnN0IHBsYXlQaWVjZSA9IChpbmRleCwgcGxheWVyKSA9PiB7XG4gICAgICAgIF91cGRhdGVCb2FyZFBpZWNlKGluZGV4LCBwbGF5ZXIpO1xuICAgICAgICBpZiAoYm9hcmQuY2hlY2tJZldvbihib2FyZC5nZXRCb2FyZCgpKSkge1xuICAgICAgICAgICAgaWYgKGJvYXJkLmNoZWNrSWZXb24oYm9hcmQuZ2V0Qm9hcmQoKSkgPT0gXCJ4XCIgfHwgYm9hcmQuY2hlY2tJZldvbihib2FyZC5nZXRCb2FyZCgpKSA9PSBcIm9cIikge1xuICAgICAgICAgICAgICAgIF93aW5uZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7cGxheWVyLmdldFR5cGUoKS50b1VwcGVyQ2FzZSgpfSBXaW5zIWA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkLmNoZWNrSWZXb24oYm9hcmQuZ2V0Qm9hcmQoKSkgPT0gXCJkcmF3XCIpIHtcbiAgICAgICAgICAgICAgICBfd2lubmVyRGlzcGxheS50ZXh0Q29udGVudCA9IFwiSXQncyBhIERyYXdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9nYW1lQm9hcmRQaWVjZXMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLnJlcGxhY2VXaXRoKGJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSkpKTtcbiAgICAgICAgICAgIC8vbmVlZCB0byB1cGRhdGUgd2hhdCB0aGUgZ2FtZWJvYXJkIHBpZWNlcyBhcmUgYWZ0ZXIgdGhleSd2ZSBiZWVuIGNsb25lZCB0byByZW1vdmVcbiAgICAgICAgICAgIC8vdGhlIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICAgICAgX2dhbWVCb2FyZFBpZWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmQtc3BhY2VcIik7XG4gICAgICAgICAgICBfZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgX2N1cnJlbnRQbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IF9uZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIF9uZXdHYW1lQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LWdhbWUtYnV0dG9uXCIpO1xuICAgICAgICAgICAgX25ld0dhbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIk5ldyBHYW1lP1wiO1xuICAgICAgICAgICAgX3dpbm5lckRpc3BsYXkucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChfbmV3R2FtZUJ1dHRvbik7XG4gICAgICAgICAgICBfbmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX25ld0dhbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghX2dhbWVPdmVyKSB7XG4gICAgICAgICAgICBfY3VycmVudFBsYXllciA9PSBfcGxheWVyMSA/IChfY3VycmVudFBsYXllciA9IF9wbGF5ZXIyKSA6IChfY3VycmVudFBsYXllciA9IF9wbGF5ZXIxKTtcbiAgICAgICAgICAgIF9uZXh0TW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IF9wbGF5UGxheWVyMSA9IGUgPT4ge1xuICAgICAgICBwbGF5UGllY2UoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc3BhY2UsIF9wbGF5ZXIxKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGxheWVyMSA9ICgpID0+IF9wbGF5ZXIxO1xuXG4gICAgX3N0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3N0YXJ0R2FtZSk7XG5cbiAgICByZXR1cm4geyBwbGF5UGllY2UsIGdldFBsYXllcjEgfTtcbn0pKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMTIxMjEyO1xcbn1cXG4jaGVhZGVyLFxcbiNmb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG59XFxuI2NvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2JvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxMjEyMTI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbkAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XFxuICAgICNib2FyZC1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IC1tb3otYXZhaWxhYmxlO1xcbiAgICB9XFxufVxcbi5pbnN0cnVjdGlvbnMge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuLnN1Yi1pbnN0cnVjdGlvbnMge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG4uY2hvaWNlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEyMTIxMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gICAgY29sb3I6ICMxMjEyMTI7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5kaWZmaWN1bHR5LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcbn1cXG5cXG4jc3RhcnQtZ2FtZSB7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbn1cXG5cXG4ucGllY2UtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLngtcGllY2Uge1xcbiAgICBjb2xvcjogI2YwNTQ1NDtcXG59XFxuLngtcGllY2UuYWN0aXZlIHtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDU0NTQ7XFxufVxcbi5vLXBpZWNlIHtcXG4gICAgY29sb3I6ICMzMDQ3NWU7XFxufVxcbi5vLXBpZWNlLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0NzVlO1xcbn1cXG5cXG4jYm9hcmQge1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDMzJSAzMyU7XFxufVxcbi5ib2FyZC1zcGFjZSB7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzEyMTIxMjtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMTIxMjEyO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcbi5uby10b3AtYm9yZGVyIHtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuLm5vLWxlZnQtYm9yZGVyIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbiN3aW5uZXIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbiNuZXctZ2FtZS1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuI25ldy1nYW1lLWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdGljLXRhYy10b2Uvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNERBQTREO0lBQzVELGNBQWM7QUFDbEI7QUFDQTs7SUFFSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJO1FBQ0kscUJBQXFCO0lBQ3pCO0FBQ0o7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzEyMTIxMjtcXG59XFxuI2hlYWRlcixcXG4jZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxufVxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMTIxMjEyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgbWluLWhlaWdodDogODB2aDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xcbiAgICAjYm9hcmQtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcXG4gICAgfVxcbn1cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcbi5zdWItaW5zdHJ1Y3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuLmNob2ljZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjEyMTI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICAgIGNvbG9yOiAjMTIxMjEyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uZGlmZmljdWx0eS1idXR0b24ge1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4IDBweDtcXG59XFxuXFxuI3N0YXJ0LWdhbWUge1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG59XFxuXFxuLnBpZWNlLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi54LXBpZWNlIHtcXG4gICAgY29sb3I6ICNmMDU0NTQ7XFxufVxcbi54LXBpZWNlLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA1NDU0O1xcbn1cXG4uby1waWVjZSB7XFxuICAgIGNvbG9yOiAjMzA0NzVlO1xcbn1cXG4uby1waWVjZS5hY3RpdmUge1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNDc1ZTtcXG59XFxuXFxuI2JvYXJkIHtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAzMyUgMzMlO1xcbn1cXG4uYm9hcmQtc3BhY2Uge1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMxMjEyMTI7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzEyMTIxMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG4ubm8tdG9wLWJvcmRlciB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxufVxcbi5uby1sZWZ0LWJvcmRlciB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4jd2lubmVyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4jbmV3LWdhbWUtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbiNuZXctZ2FtZS1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi4vdGljLXRhYy10b2UvaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3JjX0Zvb3Rlcl9qcy1zcmNfSGVhZGVyX2pzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RpYy10YWMtdG9lL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiRE9NTWFuaXAiLCJnZXRFbGVtZW50Iiwic2VsZWN0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYWtlTmV3RWxlbWVudCIsInR5cGUiLCJpZCIsIkhUTUxDbGFzcyIsInRleHQiLCJuZXdFbGVtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiYXR0cmlidXRlcyIsImxlbmd0aCIsImZvckVhY2giLCJhdHQiLCJPYmplY3QiLCJrZXlzIiwiYXBwZW5kQ2hpbGRyZW4iLCJwYXJlbnQiLCJjaGlsZHJlbiIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRBZnRlciIsIm5ld05vZGUiLCJleGlzdGluZ05vZGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJyZW1vdmVBbGxDaGlsZHJlbiIsImVsZW1lbnQiLCJza2lwIiwiaSIsImNoaWxkTm9kZXMiLCJyZW1vdmUiLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVGb290ZXIiLCJQbGF5ZXIiLCJnZXRUeXBlIiwiQUlQbGF5ZXIiLCJkaWZmaWN1bHR5IiwiX2RlZmVuZE9yQXR0YWNrIiwicGxheWVyIiwiX2R1bW15Qm9hcmQiLCJib2FyZCIsImdldEJvYXJkIiwibWFwIiwiZWxlIiwiY2hlY2tJZldvbiIsImRpc3BsYXkiLCJwbGF5UGllY2UiLCJfcGlja1JhbmRvbSIsIl9yYW5kU3RhcnQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJfY2hvb3NlTW92ZSIsIl9wbGF5TWFkZSIsIl9vcHBQbGF5cyIsInJlZHVjZSIsImEiLCJiIiwiZ2V0UGxheWVyMSIsImNhbGwiLCJfc2lkZVBpZWNlcyIsInB1c2giLCJpbmNsdWRlcyIsIm1ha2VNb3ZlIiwiX21ha2VEaXNwbGF5IiwiaGVhZGVyIiwiY29udGVudCIsImZvb3RlciIsImJvYXJkQ29udGFpbmVyIiwicGllY2VTZWxlY3Rpb24iLCJwaWVjZVNlbGVjdGlvbkhlbHBlciIsInBpZWNlQ29udGFpbmVyIiwieFBpZWNlIiwidmFsdWUiLCJvUGllY2UiLCJhaVNlbGVjdGlvbiIsImRpZmZpY3VsdHlDb250YWluZXIiLCJlYXN5QnV0dG9uIiwibWVkaXVtQnV0dG9uIiwiaW1wb3NzaWJsZUJ1dHRvbiIsInN0YXJ0R2FtZSIsImJvYXJkU3BhY2UxIiwiYm9hcmRTcGFjZTIiLCJib2FyZFNwYWNlMyIsImJvYXJkU3BhY2U0IiwiYm9hcmRTcGFjZTUiLCJib2FyZFNwYWNlNiIsImJvYXJkU3BhY2U3IiwiYm9hcmRTcGFjZTgiLCJib2FyZFNwYWNlOSIsIndpbm5lciIsImJvZHkiLCJfZ2FtZUJvYXJkIiwidXBkYXRlIiwiaW5kZXgiLCJjbGVhckJvYXJkIiwiX2NoZWNrV2luQ29uIiwiYyIsIl93aW5uZXIiLCJwbGF5ZXJTZWwiLCJfcGxheWVyU2VsZWN0aW9uIiwiX3BsYXllclBpZWNlU2VsZWN0b3JzIiwiX2dldFBsYXllckNob2ljZSIsImUiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJidXR0b24iLCJfYWN0aXZhdGVQbGF5ZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYWN0aXZhdGVQbGF5ZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc2V0UGxheWVyIiwiZ2V0UGxheWVyU2VsZWN0aW9uIiwiZGlmZmljdWx0eVNlbCIsIl9kaWZTZWxlY3Rpb24iLCJfZGlmZmljdWx0eVNlbGVjdG9ycyIsIl9nZXREaWZDaG9pY2UiLCJfYWN0aXZhdGVEaWZmaWN1bHR5IiwiZGVhY3RpdmF0ZURpZmZpY3VsdHkiLCJyZXNldERpZmZpY3VsdHkiLCJnZXREaWZmaWN1bHR5U2VsZWN0aW9uIiwiX3BsYXllcjEiLCJfcGxheWVyMiIsIl9jdXJyZW50UGxheWVyIiwiX2dhbWVPdmVyIiwiX2dhbWVCb2FyZFBpZWNlcyIsIl9zdGFydEdhbWVCdXR0b24iLCJfd2lubmVyRGlzcGxheSIsIl9uZXdHYW1lIiwiX3N0YXJ0R2FtZSIsInBhcmVudEVsZW1lbnQiLCJsYXN0Q2hpbGQiLCJzZXRUaW1lb3V0IiwiX3BsYXlQbGF5ZXIxIiwiX3VwZGF0ZUJvYXJkUGllY2UiLCJfcGF1c2VDb21wUGxheSIsIlByb21pc2UiLCJyZXNvbHZlIiwiX25leHRNb3ZlIiwidGhlbiIsInRvVXBwZXJDYXNlIiwicmVwbGFjZVdpdGgiLCJjbG9uZU5vZGUiLCJfbmV3R2FtZUJ1dHRvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic3BhY2UiXSwic291cmNlUm9vdCI6IiJ9