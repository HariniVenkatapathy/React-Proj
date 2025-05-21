import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function Home(){
    const navigate = useNavigate();
    const [time,setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        },1000);

        return()=>{
            clearInterval(intervalId);
        }
    },[]);
    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours>=12 ? "PM" : "AM";

        hours = hours%12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }
    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }
    const [tasks, setTasks] = useState([]);
    const [newtask, setNewtask] = useState("");

    function handleip(event){
        setNewtask(event.target.value)
    }
    function addtask(){
        if(newtask.trim() !== ""){
           setTasks(t=>[...t,newtask]);
           setNewtask(""); 
        }    
    }
    function deletetask(index){
        const updatedTasks = tasks.filter((_, i)=> i!==index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    function moveTaskdown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    const handleStopwatchClick = () => {
        navigate('/stopwatch'); // Redirect to the stopwatch page
    };
    const handlePomoClick = () => {
        navigate('/pomo'); // Redirect to the stopwatch page
    };
    return(
        <>
        
            <div className="clock-container">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>

            </div>
            <div className='pomo'>
                <button className='but1'onClick={handlePomoClick}>Pomodoro Timer</button>
            </div>
            <div className='stop'>
                <button className='but2' onClick={handleStopwatchClick}>Stop Watch</button>
            </div>
            <div className="todo-container">
            <div className="todo">
            <h1>To-Do List</h1>
            <div>
                <input type="text" placeholder='Enter a Task...' value={newtask} onChange={handleip}/>
                <button className="add-button" onClick={addtask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="deletebutton" onClick={()=>deletetask(index)}>
                        Delete
                    </button>
                    <button className="upbutton" onClick={()=>moveTaskUp(index)}>
                        👆
                    </button>
                    <button className="downbutton" onClick={()=>moveTaskdown(index)}>
                        👇
                    </button>
                </li>
                )}
            </ol>
        </div>
     </div>
    </>
    );
}
export default Home