import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Layout from 'containers/layout/Layout';

import Post from 'containers/post/Post';
import Home from 'containers/home/Home';



class Routes extends Component {
    render() {
        return <Router history={hashHistory} >
            <Route path="/" component={Layout}>
                <Route path="post/:id" component={Post}/>
                <IndexRoute component={Home} />
            </Route>
        </Router> 
    }
}

export default Routes;