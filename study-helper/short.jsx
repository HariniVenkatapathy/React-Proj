import React, { useState, useEffect, useRef } from 'react';

function Short() {
    const STUDY_TIME = 25 * 60 * 1000; // 25 minutes
    const BREAK_TIME = 5 * 60 * 1000;  // 5 minutes

    const [isRunning, setIsRunning] = useState(false);
    const [remainingTime, setRemainingTime] = useState(STUDY_TIME);
    const [isBreak, setIsBreak] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const intervalRef = useRef(null);
    const endTimeRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            endTimeRef.current = Date.now() + remainingTime;

            intervalRef.current = setInterval(() => {
                const timeLeft = endTimeRef.current - Date.now();
                if (timeLeft <= 0) {
                    clearInterval(intervalRef.current);

                    if (!isBreak) {
                        // Switch to break
                        setIsBreak(true);
                        setRemainingTime(BREAK_TIME);
                        setIsRunning(true); // Auto start break
                    } else {
                        // Break finished, cycle complete
                        setIsRunning(false);
                        setIsBreak(false);
                        setIsComplete(true);
                        setRemainingTime(STUDY_TIME); // Reset to start if needed
                    }

                } else {
                    setRemainingTime(timeLeft);
                }
            }, 100);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    function startTimer() {
        if (!isRunning && !isComplete) {
            setIsRunning(true);
        }
    }

    function pauseTimer() {
        setIsRunning(false);
    }

    function resetTimer() {
        setIsRunning(false);
        setIsBreak(false);
        setIsComplete(false);
        setRemainingTime(STUDY_TIME);
    }

    function formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const milliseconds = Math.floor((ms % 1000) / 10);

        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    }

    const titleText = isComplete
        ? "Pomodoro Complete!"
        : isBreak
        ? "Break Time"
        : "Study Time";

    return (
        <div className="pomodoro-timer">
            <h1>{titleText}</h1>
            <div className="displaytime">{formatTime(remainingTime)}</div>
            <div className="controls">
                {!isComplete && (
                    <>
                        <button onClick={startTimer} className="start-button">Start</button>
                        <button onClick={pauseTimer} className="stop-button">Pause</button>
                    </>
                )}
                <button onClick={resetTimer} className="reset-button">Reset</button>
            </div>
        </div>
    );
}

export default Short;
