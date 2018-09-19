import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Link } from 'react-router-dom'
import promiseMiddleware from 'redux-promise';


import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';

import reducers from './reducers';
import App from './components/app';
import Home from './containers/home';
import Phone from './containers/phone';


const createStoreWithMiddleware =  applyMiddleware(promiseMiddleware)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
        <div>
        <header>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a className="navbar-brand" href="#">Mobile Phone Wiki</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/phone'} className="nav-link">Phone</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">Add Cars</Link>
                    </li> 
                    </ul>
                </div> 
        </nav>
                
                
                
            </header>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/phone/:name" component={Phone}></Route>
                <Route exact path="/phone" component={App}></Route>
            </div>
        </div>
        </BrowserRouter>
    </Provider>
    
    , document.getElementById('root'));
