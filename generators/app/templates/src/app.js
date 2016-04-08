import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { connect,Provider } from 'react-redux';
import configureStore from 'config/store';
import Routes from 'config/routes';

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}> 
            <Routes />
        </Provider>
    )
}

ReactDom.render(<App/>, document.getElementById('app'));