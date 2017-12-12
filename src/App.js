import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Home from './component/Home';

// import { renderRouters } from './routes';
import cookie from 'js-cookie';
import {BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {

    render() {
        console.log('props', this.props);
        let isLogin = cookie.get('x-token');

        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>


                    <Switch>
                        {/*{
                            renderRouters().map((route, i) => {
                                return (
                                    <Route exact path={route.path} render={(props)=>{
                                        return isLogin
                                            ?
                                                <Bundle load={route.component}>
                                                    {(Comp) => <Comp {...props}/>}
                                                </Bundle>
                                            :
                                            <Redirect to="/login"/>
                                    }}/>
                                )
                            })
                        }*/}

                        <Route exact path="/" render={(props)=>{
                            return isLogin ? <Home/> : <Redirect to="/login"/>
                        }}/>

                        <Route path="/login" render={(props)=>{
                            return !isLogin ? <Login/> : <Redirect to="/"/>
                        }}/>
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
