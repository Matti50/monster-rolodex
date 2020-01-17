import React from 'react';
import './App.css';

import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: ""
    }
  }

  handleChange = e => {
    this.setState({searchField: e.target.value},() => (console.log(this.state.searchField)));
  }
  
  componentDidMount(){
    {/*Life cycle method
    Son llamados en las dierentes etapas de los componentes.
  
  */}

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => (response.json()))
    .then(users => (this.setState({monsters: users})))
  }


  render(){

    {/*Object destructuring*/ }

    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        
        <SearchBox
          placeholder="search..."
          handleChange={this.handleChange}
        />

         
        <CardList monsters= {filteredMonsters}/>
        
        
        {/*Hay que asignar el key único a cada elemento cuando usamos la función map
            react lo usa para cuando se produce set state, comparar el estaado nuevo con el viejo
            y si hay algún cambio, react actualiza solo la parte del cambio y no rendereiza todo el DOM nuevamente*/}
        
      </div>
    );
  }
}

export default App;
