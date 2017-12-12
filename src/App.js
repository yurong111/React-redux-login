import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Home from './component/Home';
import {BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

    render() {
        console.log('props', this.props);

        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>


                    <Route path="/login" component={Login}/>
                    <Route exact path="/" component={Home}/>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
