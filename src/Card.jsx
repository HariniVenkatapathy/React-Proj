import React from 'react';

function Card(props){
    return(
        <>
        <div className="card">
                <img className="cardimg" src={props.image} alt="niyachan"></img>
                <p className="cardtitle">Name: {props.name}</p>
                <p className="cardtext">Age: {props.age}</p>
        </div>
        </>
    );
}
export default Card