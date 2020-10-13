import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
        .then(users => this.setState({monsters: users}));
  };
  
  render() {
    // derender something, const { values } = item being rerendered
    // this is equivilent to writing const monsters = this.state.monsters and etc.
    const {monsters, searchField} = this.state;

    // Filter the monsters array using the searchField the user inputs
    // This is updated every time the user changes the searchfield because it
    // is re-rendered every time the state updates
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange = {e => this.setState({searchField: e.target.value})}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;