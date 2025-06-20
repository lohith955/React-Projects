import { useState, useEffect } from "react";
import { auth, db } from "./Firebase";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import "./snakeandladder.css";
import { Link } from "react-router-dom";
import snakeSound from "./snake.mp3";
import winSound from "./win.mp3";
import rollSound from "./rollsound.mp3"
const boardSize = 10;
const totalCells = boardSize * boardSize;
const snakes = { 98: 79, 95: 75, 93: 73, 87: 24, 64: 60, 62: 19, 54: 34, 17: 7 };
const ladders = { 1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 51: 67, 71: 91, 80: 100 };

function snakeladder() {
    const [players, setPlayers] = useState({ player1: 0, player2: 0 });
    const [playerNames, setPlayerNames] = useState({ player1: "", player2: "" });
    const [currentPlayer, setCurrentPlayer] = useState("player1");
    const [diceRoll, setDiceRoll] = useState(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [message, setMessage] = useState('');
    const [balance, setBalance] = useState(0);

    const updateBalance = async (Balance) => {
        try {
            const user = auth.currentUser;
            if (!user) {
                console.error("No user logged in!");
                return;
            }

            const userRef = doc(db, "Users", user.uid);
            await updateDoc(userRef, { balance: Balance });

            console.log("Balance updated in Firebase!");
            setBalance(Balance);
        } catch (error) {
            console.error("Error updating balance:", error);
        }
    };

    useEffect(() => {
        const fetchBalance = async (user) => {
            if (!user) {
                console.error("No user logged in!");
                return;
            }

            const userRef = doc(db, "Users", user.uid);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                setBalance(userSnap.data().balance);
            } else {
                console.error("User data not found!");
            }
        };

        auth.onAuthStateChanged(async (user) => {
            if (user) {
                fetchBalance(user);
            }
        });
    }, []);

    const rollDice = () => {
        const snake = new Audio(snakeSound);
        const win = new Audio(winSound);
        const rolldice = new Audio(rollSound);

        if (!gameStarted) {
            setMessage("Start the game first!");
            return;
        }

        let roll = Math.floor(Math.random() * 6) + 1;
        rolldice.play();
        setDiceRoll(null);
        setTimeout(() => setDiceRoll(roll), 100);

        let previousPosition = players[currentPlayer];
        let newPosition = previousPosition + roll;

        if (newPosition > totalCells) {
            setCurrentPlayer(currentPlayer === "player1" ? "player2" : "player1");
            return;
        }

        if (snakes[newPosition]) {
            newPosition = snakes[newPosition];
            snake.play();
        } else if (ladders[newPosition]) {
            newPosition = ladders[newPosition];

        }

        setPlayers(prev => ({
            ...prev,
            [currentPlayer]: newPosition,
        }));

        if (newPosition === totalCells) {
            setMessage(`${playerNames[currentPlayer]} wins!`);
            win.play();
            setTimeout(() => {
                resetGame();
            }, 2000);
        } else {
            if (roll !== 6) {
                setCurrentPlayer(currentPlayer === "player1" ? "player2" : "player1");
            }
        }
    };

    const startGame = (e) => {
        e.preventDefault();
        if (playerNames.player1 && playerNames.player2) {
            setGameStarted(true);
            setMessage('');
        } else {
            setMessage("Both players must enter their names to start!");
        }
    };

    const resetGame = () => {
        setPlayers({ player1: 0, player2: 0 });
        setCurrentPlayer("player1");
        setDiceRoll(null);
        setGameStarted(false);
        setMessage('');
    };

    return (
        <div className="snakeladder">
            <div className="gamestart">
                <p>Balance: {balance}</p>
                <h3 className="snakeplayer">Current Turn: {playerNames[currentPlayer] || currentPlayer}</h3>
                <h2 className="snakemessage">{message}</h2>

                <button className="snakebutton" onClick={rollDice} disabled={!gameStarted}>Roll Dice</button>
                <button className="snakebutton" onClick={resetGame}>Reset Game</button>
                {diceRoll && <img className="snakeimg" src={`./face${diceRoll}.png`} alt={`face ${diceRoll}`} />}
            </div>

            <div className="game">
                <div className="inputs">
                    <form className="playernames" onSubmit={startGame}>
                        <input
                            type="text"
                            placeholder="Enter Player 1 Name"
                            onChange={(e) => setPlayerNames(prev => ({ ...prev, player1: e.target.value }))}
                            id="playonename"
                            name="player1name"
                        />

                        <input
                            type="text"
                            placeholder="Enter Player 2 Name"
                            onChange={(e) => setPlayerNames(prev => ({ ...prev, player2: e.target.value }))}
                            id="playtwoname"
                            name="player2name"
                        />

                        <button className="snakebutton" type="submit">Start Game</button>
                    </form>
                </div>

                <div className="board">
                    {Array.from({ length: boardSize }, (_, rowIndex) => {
                        const startNumber = (boardSize - rowIndex - 1) * boardSize + 1;
                        const rowNumbers = Array.from({ length: boardSize }, (_, colIndex) =>
                            rowIndex % 2 !== 0 ? startNumber + colIndex : startNumber + (boardSize - 1 - colIndex)
                        );

                        return (
                            <div key={rowIndex} className="row">
                                {rowNumbers.map((num) => (
                                    <div
                                        key={num}
                                        className={`square ${players.player1 === num ? "player1" : ""} ${players.player2 === num ? "player2" : ""}`}
                                    >
                                        {num}
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="back">
                <Link to="/profile">
                    <i className="fa-solid fa-arrow-left"></i> Go Back
                </Link>
            </div>
        </div>
    );
}

export default snakeladder;
