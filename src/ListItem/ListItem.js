import React from 'react';
import './ListItem.css';

function ListItem(props){

    const completedStyle = {color: "gray", textDecoration: "line-through", fontStyle: "italic" };
    return(
        <div className="list-item">
            <input
            onChange={function(){return props.handleChange(props.item.id)}}
            type="checkbox"
            checked={props.item.completed}>
            </input>
            <p onClick={function(){return props.handleChange(props.item.id)}} style={props.item.completed ? completedStyle : null}> {props.item.text} </p>
        </div>
    )
}

export default ListItem;