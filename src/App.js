import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem/ListItem.js';
import todosData from './todosData.js';

class App extends Component {

  constructor() {
    super();
    this.state = {todosData: todosData}
  }



  render() {
    const listItems = this.state.todosData.map(item=> <ListItem  handleChange={this.handleChange} key={item.id} item={item} />);
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
