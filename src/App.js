import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'
import {SearchField } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      cartoons: [],
      searchField:''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ cartoons: users}));
  }
  render(){
    const { cartoons, searchField } = this.state;
    const filteredCartoons = cartoons.filter(cartoon => cartoon.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1> Cartoons Photodeck</h1>
        <SearchField
        placeholder='search cartoons'
        handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList cartoons = {filteredCartoons}/>       
      </div>
    );
  } 
  
}

export default App;
