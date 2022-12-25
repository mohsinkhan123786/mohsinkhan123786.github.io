import { Component } from 'react';
import './App.css';

// User Defined Components
import { CardList } from './Components/card-list/card_lsit.component';
import { SearchBox } from './Components/search-box/search_box.component';

class App extends Component {

  constructor(){

    super();

    this.state = {
      kitties : [],
      searchField: '',
    }
  }

  componentDidMount(){
    let api = 'https://jsonplaceholder.typicode.com/users';
    fetch (api)
    .then (response => response.json())
    .then (users => this.setState({kitties : users}))
  }

  render(){

    // Obj Destructuring
    const { kitties, searchField } = this.state;
    const filteredkitties = kitties.filter(kittie => 
      kittie.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return(

      <div className='App'>

        <h1> Kitties Gang </h1>
        
        <SearchBox 
          placeholder = 'Search you fav Billa' 
          handleChange = { e => this.setState({ searchField : e.target.value }) }
        />
        
        <CardList kitties = { filteredkitties } />

      </div>

    )

  }

}

export default App;