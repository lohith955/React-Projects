import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const startHandler = () => {
        setIsRunning(true);
    };

    const stopHandler = () => {
        setIsRunning(false);
    };

    const resetHandler = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    return (
        <div className="stopwatch-container">
            <div className="clock"></div>
            <div className="stopwatch">
                <h1>Stopwatch</h1>
                <div className="time">{formatTime(seconds)}</div>
                <div className="controls">
                    <button onClick={startHandler} className="start" >
                        Start
                    </button>
                    <button onClick={stopHandler} className="stop">
                        Stop
                    </button>
                    <button onClick={resetHandler} className="reset">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Stopwatch;
