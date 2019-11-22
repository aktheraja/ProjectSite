import React,{Component} from 'react';
import './App.css';
import Nav from './nav/Nav'
import Home from './jumbotron/Jumbotron'
import Services from './services/Services';
import About from './about/about';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import {Provider} from "react-redux";
import store from "./store";
class App extends Component{
  render() {
    return (
        <Provider store={store}>
        <div className="App">
       <Nav />
       <Home />
       <Services/>
       <About/>
       <Contact/>
       <Footer/>
        </div>
            </Provider>
    );
  }


}

export default App;
