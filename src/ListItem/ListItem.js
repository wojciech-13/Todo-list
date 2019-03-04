import React from 'react';
import './ListItem.css';

function ListItem(props){
    return(
        <div className="list-item">
            <input
            onChange={function(){return props.handleChange(props.item.id)}}
            type="checkbox"
            checked={props.item.completed}></input>
            <p>{props.item.text}</p>
        </div>
    )
}

export default ListItem;