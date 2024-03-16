import React, { useState } from 'react';
import './App.css';

const Timer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<number>(0); 
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        if (!timerId) {
            const id = setInterval(() => {
                setTimeLeft((prevTimeLeft) => prevTimeLeft + 1);
            }, 1000);
            setTimerId(id as NodeJS.Timeout); 
        }
    };

    const stopTimer = () => {
        if (timerId) {
            clearInterval(timerId);
            setTimerId(null);
        }
    };

    const resetTimer = () => {
        stopTimer();
        setTimeLeft(0); 
    };

   
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div>
            <p>Czas: {minutes}:{seconds.toString().padStart(2, '0')}</p>
            <button className="first-btn" onClick={startTimer}>Start</button>
            <button className="second-btn" onClick={stopTimer}>Stop</button>
            <button className="third-btn" onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default Timer;
