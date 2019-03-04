import React from 'react';
import './ListItem.css';

function ListItem(props){
    return(
        <div className="list-item">
            <input type="checkbox"></input>
            <p>{props.item.text}</p>
        </div>
    )
}

export default ListItem;