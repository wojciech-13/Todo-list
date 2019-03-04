import React, { Component } from 'react';
import './App.css';
import ListItem from './components/ListItem.js';
import todosData from './todosData.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="todo-list">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
