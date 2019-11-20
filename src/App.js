import React,{Component} from 'react';
import './App.css';
import Nav from './Nav/Nav'
import Home from './Jumbotron/Jumbotron'
import Services from './Services/Services';
import About from './About/about';
class App extends Component{
  render() {
    return (
        <div className="App">
       <Nav />
       <Home />
       <Services/>
       <About/>
        </div>
    );
  }


}

export default App;
