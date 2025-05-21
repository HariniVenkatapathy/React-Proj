import React, {useState} from 'react';

function colorpc(){
    const [color,setColor] = useState("#FFFFFF");
    function handlecolor(event){
        setColor(event.target.value);
    }
    return(
        <div className="color-picker">
            <h1>Color Picker</h1>
            <div className="disp" style={{background: color}}>
                <p>Selected color: {color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handlecolor}></input>
        </div>
    );
}
export default colorpc