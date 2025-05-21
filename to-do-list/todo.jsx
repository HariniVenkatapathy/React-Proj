
import React, {useState} from 'react';
function todo(){
    const [tasks, setTasks] = useState(["Eat breakfast","Bath the dogs","Study React"]);
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

    return(
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
    );
}
export default todo