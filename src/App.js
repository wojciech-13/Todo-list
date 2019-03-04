import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem/ListItem.js';
import todosData from './todosData.js';

class App extends Component {

  constructor() {
    super();
    this.state = {listData: todosData};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id){
    this.setState(function(prevState){
      const updatedListItems = prevState.listData.map(item => {
        if(item.id === id){
          item.completed = !item.completed;
        }
        return item;
      })
      return {
        listData: updatedListItems
      }

    })

  }

  render() {
    const listItems = this.state.listData.map(item=> <ListItem  handleChange={this.handleChange} key={item.id} item={item} />);
    return (

      <div className="App">
        <header className="App-header">
          <div className="todo-list">
            {listItems}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
