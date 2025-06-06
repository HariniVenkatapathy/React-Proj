
import React, {useState, useEffect, useRef} from 'react';
function Stop(){
    const [isrun,setIsrun] = useState(false);
    const [elasped,setElasped] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if(isrun){
            intervalIdRef.current = setInterval(()=>{
                setElasped(Date.now()-startTimeRef.current);
            },10);
        }
        return()=>{
            clearInterval(intervalIdRef.current);
        }
    },[isrun]);

    function start(){
        setIsrun(true);
        startTimeRef.current = Date.now() - elasped;
    }
    function stop(){
        setIsrun(false);
    }
    function reset(){
        setElasped(0);
        setIsrun(false);
    }
    function formatTime(){

        let hours = Math.floor(elasped / (1000*60*60));
        let minutes = Math.floor(elasped / (1000*60)%60);
        let seconds = Math.floor(elasped / (1000)%60); 
        let milliseconds = Math.floor((elasped %1000) /10);

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        milliseconds = String(milliseconds).padStart(2,"0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }
    return(
        <div className="stopwatch">
            <div className="displaytime">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>

        </div>
    );
}
export default Stop