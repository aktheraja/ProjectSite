import React,{Component} from 'react';
import './App.css';
import Nav from './Nav/Nav'
import Home from './Carousels/Jumbotron'
import Services from './Services/services';

class App extends Component{
  render() {
    return (
        <div className="App">
       <Nav />
       <Home />
       <Services/>
        </div>
    );
  }


}

export default App;
