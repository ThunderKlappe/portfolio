import "./style.css";
import { DOMManip } from "./DOMManip";

const Player = type => {
    const getType = () => type;
    return { getType };
};

const AIPlayer = (type, difficulty) => {
    const { getType } = Player(type);

    //if somebody can win, go there.
    const _defendOrAttack = function (player) {
        for (let i = 0; i < 9; i++) {
            let _dummyBoard = board.getBoard().map(ele => ele);
            if (_dummyBoard[i] == "") {
                _dummyBoard[i] = player.getType();
                if (board.checkIfWon(_dummyBoard) == player.getType()) {
                    display.playPiece(i, this);
                    return true;
                }
            }
        }
        return false;
    };
    //picks a random empty spot
    const _pickRandom = function () {
        let _randStart = Math.floor(Math.random() * board.getBoard().length);
        // eslint-disable-next-line no-constant-condition
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

    const _chooseMove = function () {
        let _playMade = false;
        let _oppPlays = board
            .getBoard()
            .reduce((a, b) => (b == display.getPlayer1().getType() ? a + 1 : a), 0);

        //check if the AI can win
        _playMade = _defendOrAttack.call(this, this);
        //check if the Player can win
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
                let _sidePieces = [];
                for (let i = 1; i < board.getBoard().length; i += 2) {
                    _sidePieces.push(board.getBoard()[i]);
                }
                if (!_sidePieces.includes(display.getPlayer1().getType())) {
                    display.playPiece(1, this);
                    return;
                }
            }

            //go to the middle if it's available
            if (board.getBoard()[4] == "") {
                display.playPiece(4, this);
                //go to the corner if the middle is taken
            } else if (board.getBoard()[0] == "") {
                display.playPiece(0, this);
            }
            //or else pick a random spot.
            else {
                _pickRandom.call(this);
            }
        }
    };

    const makeMove = function () {
        //decided whether to make the correct move or random move based on difficulty
        if (Math.floor(Math.random() * difficulty) == 0) {
            _chooseMove.call(this);
        } else {
            _pickRandom.call(this);
        }
    };

    return { getType, makeMove };
};

// eslint-disable-next-line no-unused-vars
const _makeDisplay = (() => {
    const header = DOMManip.makeNewElement("div", "header", "", "Tic-Tac-Toe");
    const content = DOMManip.makeNewElement("div", "content");
    const boardContainer = DOMManip.makeNewElement("div", "board-container");
    const pieceSelection = DOMManip.makeNewElement(
        "div",
        "piece-selection",
        "instructions",
        "Please Select Your Piece:"
    );
    const pieceSelectionHelper = DOMManip.makeNewElement(
        "div",
        "piece-selection-helper",
        "sub-instructions",
        "X goes first, O goes second"
    );
    const pieceContainer = DOMManip.makeNewElement("div", "piece-container", "choice-container");
    const xPiece = DOMManip.makeNewElement("button", "x-piece", "piece-button x-piece active", "x", {
        value: "x",
    });
    const oPiece = DOMManip.makeNewElement("button", "o-piece", "piece-button o-piece", "o", {
        value: "o",
    });

    const aiSelection = DOMManip.makeNewElement(
        "div",
        "ai-selection",
        "instructions",
        "Please Select The Difficulty"
    );
    const difficultyContainer = DOMManip.makeNewElement("div", "difficulty-container", "choice-container");
    const easyButton = DOMManip.makeNewElement("button", "easy-button", "difficulty-button active", "Easy", {
        value: "3",
    });
    const mediumButton = DOMManip.makeNewElement("button", "medium-button", "difficulty-button", "Medium", {
        value: "2",
    });
    const impossibleButton = DOMManip.makeNewElement(
        "button",
        "impossible-button",
        "difficulty-button",
        "Impossible",
        {
            value: "1",
        }
    );

    const startGame = DOMManip.makeNewElement("button", "start-game", "", "Start Game");

    const board = DOMManip.makeNewElement("div", "board");
    const boardSpace1 = DOMManip.makeNewElement(
        "button",
        "",
        "board-space no-top-border no-left-border",
        "",
        { "data-space": 0 }
    );
    const boardSpace2 = DOMManip.makeNewElement("button", "", "board-space no-top-border", "", {
        "data-space": 1,
    });
    const boardSpace3 = DOMManip.makeNewElement("button", "", "board-space no-top-border", "", {
        "data-space": 2,
    });
    const boardSpace4 = DOMManip.makeNewElement("button", "", "board-space no-left-border", "", {
        "data-space": 3,
    });
    const boardSpace5 = DOMManip.makeNewElement("button", "", "board-space", "", { "data-space": 4 });
    const boardSpace6 = DOMManip.makeNewElement("button", "", "board-space", "", { "data-space": 5 });
    const boardSpace7 = DOMManip.makeNewElement("button", "", "board-space no-left-border", "", {
        "data-space": 6,
    });
    const boardSpace8 = DOMManip.makeNewElement("button", "", "board-space", "", { "data-space": 7 });
    const boardSpace9 = DOMManip.makeNewElement("button", "", "board-space", "", { "data-space": 8 });

    const winner = DOMManip.makeNewElement("div", "winner");
    DOMManip.appendChildren(pieceContainer, xPiece, oPiece);
    DOMManip.appendChildren(difficultyContainer, easyButton, mediumButton, impossibleButton);
    DOMManip.appendChildren(
        board,
        boardSpace1,
        boardSpace2,
        boardSpace3,
        boardSpace4,
        boardSpace5,
        boardSpace6,
        boardSpace7,
        boardSpace8,
        boardSpace9
    );
    DOMManip.appendChildren(
        boardContainer,
        pieceSelection,
        pieceSelectionHelper,
        pieceContainer,
        aiSelection,
        difficultyContainer,
        startGame,
        board,
        winner
    );
    content.appendChild(boardContainer);
    DOMManip.appendChildren(document.body, header, content);
})();

const board = (() => {
    let _gameBoard = ["", "", "", "", "", "", "", "", ""];
    const getBoard = () => _gameBoard;

    const update = (index, player) => {
        _gameBoard[index] = player.getType();
    };

    const clearBoard = () => (_gameBoard = ["", "", "", "", "", "", "", "", ""]);
    //if all three entries are the same, return true
    const _checkWinCon = (a, b, c) => (a == b && a == c && a != "" ? 1 : 0);

    //check all rows, columns and diagonals for wins
    const checkIfWon = board => {
        let _winner = _checkWinCon(board[0], board[1], board[2])
            ? board[0]
            : _checkWinCon(board[3], board[4], board[5])
            ? board[3]
            : _checkWinCon(board[6], board[7], board[8])
            ? board[6]
            : _checkWinCon(board[0], board[3], board[6])
            ? board[0]
            : _checkWinCon(board[1], board[4], board[7])
            ? board[1]
            : _checkWinCon(board[2], board[5], board[8])
            ? board[2]
            : _checkWinCon(board[0], board[4], board[8])
            ? board[0]
            : _checkWinCon(board[2], board[4], board[6])
            ? board[6]
            : 0;

        if (_winner == 0 && !board.includes("")) {
            _winner = "draw";
        }

        return _winner;
    };

    return { update, getBoard, checkIfWon, clearBoard };
})();

//this section regards the player selection buttons
const playerSel = (() => {
    //default player selection is x
    let _playerSelection = "x";
    const _playerPieceSelectors = document.querySelectorAll(".piece-button");
    const _getPlayerChoice = e => {
        //gets the value of what is selected and makes only once choice active at a time
        _playerSelection = e.target.value;
        e.target.classList.add("active");
        _playerPieceSelectors.forEach(button => {
            if (button != e.target) {
                button.classList.remove("active");
            }
        });
    };

    //add event listeners to the selection buttons
    const _activatePlayers = () =>
        _playerPieceSelectors.forEach(button => button.addEventListener("click", _getPlayerChoice));
    _activatePlayers();

    //a function that removes the event listeners from the buttons.
    const deactivatePlayers = () =>
        _playerPieceSelectors.forEach(button => button.removeEventListener("click", _getPlayerChoice));

    const resetPlayer = () => {
        _playerSelection = "x";
        _playerPieceSelectors.forEach(button => button.classList.remove("active"));
        _playerPieceSelectors[0].classList.add("active");
        _activatePlayers();
    };

    //function that returns what the player chose
    const getPlayerSelection = () => _playerSelection;

    return { getPlayerSelection, deactivatePlayers, resetPlayer };
})();

//this section regards the difficulty selection buttons
const difficultySel = (() => {
    //default difficulty selection is Easy
    let _difSelection = 3;
    const _difficultySelectors = document.querySelectorAll(".difficulty-button");
    const _getDifChoice = e => {
        //gets the value of what is selected and makes only once choice active at a time
        _difSelection = e.target.value;
        e.target.classList.add("active");
        _difficultySelectors.forEach(button => {
            if (button != e.target) {
                button.classList.remove("active");
            }
        });
    };

    //add event listeners to the selection buttons
    const _activateDifficulty = () =>
        _difficultySelectors.forEach(button => button.addEventListener("click", _getDifChoice));
    _activateDifficulty();

    //a function that removes the event listeners from the buttons.
    const deactivateDifficulty = () =>
        _difficultySelectors.forEach(button => button.removeEventListener("click", _getDifChoice));

    //resets to default
    const resetDifficulty = () => {
        _difSelection = 3;
        _difficultySelectors.forEach(button => button.classList.remove("active"));
        _difficultySelectors[0].classList.add("active");
        _activateDifficulty();
    };

    //function that returns what the player chose
    const getDifficultySelection = () => _difSelection;

    return { getDifficultySelection, deactivateDifficulty, resetDifficulty };
})();

const display = (() => {
    let _player1;
    let _player2;
    let _currentPlayer;
    let _gameOver = false;
    let _gameBoardPieces = document.querySelectorAll(".board-space");
    const _startGameButton = document.querySelector("#start-game");
    const _winnerDisplay = document.querySelector("#winner");

    const _newGame = () => {
        _gameOver = false;
        board.clearBoard();
        _gameBoardPieces.forEach(button => {
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
    };

    //creates the two players, deactivates settings buttons, and activates board
    const _startGame = () => {
        _startGameButton.classList.add("active");
        _startGameButton.removeEventListener("click", _startGame);
        _player1 = Player(playerSel.getPlayerSelection());
        playerSel.deactivatePlayers();
        _player1.getType() == "x"
            ? (_player2 = AIPlayer("o", difficultySel.getDifficultySelection()))
            : (_player2 = AIPlayer("x", difficultySel.getDifficultySelection()));
        difficultySel.deactivateDifficulty();
        if (_player1.getType() == "x") {
            _currentPlayer = _player1;
        } else {
            _currentPlayer = _player2;
            setTimeout(() => _player2.makeMove(), 500);
        }
        _gameBoardPieces.forEach(button => button.addEventListener("click", _playPlayer1));
    };

    const _updateBoardPiece = (index, player) => {
        _gameBoardPieces[index].textContent = player.getType();
        _gameBoardPieces[index].classList.add(`${player.getType()}-piece`);
        _gameBoardPieces[index].classList.add("filled");
        _gameBoardPieces[index].removeEventListener("click", _playPlayer1);
        board.update(index, player);
    };

    const _pauseCompPlay = () => {
        return new Promise(resolve => setTimeout(resolve, 500));
    };
    //if the current player is the computer, they make their move
    const _nextMove = () => {
        if (_currentPlayer == _player1) {
            return;
        } else if (_currentPlayer == _player2) {
            DOMManip.getElements(".board-space:not(.filled)").forEach(button =>
                button.removeEventListener("click", _playPlayer1)
            );
            _pauseCompPlay()
                .then(() => _player2.makeMove())
                .then(() => {
                    if (!_gameOver) {
                        DOMManip.getElements(".board-space:not(.filled)").forEach(button =>
                            button.addEventListener("click", _playPlayer1)
                        );
                    }
                });
        }
    };

    //plays a piece and checks if the game is over
    const playPiece = (index, player) => {
        _updateBoardPiece(index, player);
        if (board.checkIfWon(board.getBoard())) {
            if (board.checkIfWon(board.getBoard()) == "x" || board.checkIfWon(board.getBoard()) == "o") {
                _winnerDisplay.textContent = `${player.getType().toUpperCase()} Wins!`;
            } else if (board.checkIfWon(board.getBoard()) == "draw") {
                _winnerDisplay.textContent = "It's a Draw";
            }
            _gameBoardPieces.forEach(button => button.replaceWith(button.cloneNode(true)));
            //need to update what the gameboard pieces are after they've been cloned to remove
            //the event listeners
            _gameBoardPieces = document.querySelectorAll(".board-space");
            _gameOver = true;
            _currentPlayer = false;
            const _newGameButton = document.createElement("button");
            _newGameButton.setAttribute("id", "new-game-button");
            _newGameButton.textContent = "New Game?";
            _winnerDisplay.parentElement.appendChild(_newGameButton);
            _newGameButton.addEventListener("click", _newGame);
        }
        if (!_gameOver) {
            _currentPlayer == _player1 ? (_currentPlayer = _player2) : (_currentPlayer = _player1);
            _nextMove();
        }
    };

    const _playPlayer1 = e => {
        playPiece(e.currentTarget.dataset.space, _player1);
    };

    const getPlayer1 = () => _player1;

    _startGameButton.addEventListener("click", _startGame);

    return { playPiece, getPlayer1 };
})();
