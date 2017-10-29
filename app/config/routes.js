// core
import React from 'react';
import { ReactRouter } from 'react-router';
import { Router } from 'react-router';
import { Route } from 'react-router';
import { hashHistory } from 'react-router';
import { IndexRoute } from 'react-router';
import { IndexRedirect } from 'react-router';

// components
import HomeContainer from '../containers/home/HomeContainer';

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={HomeContainer}>
    </Route>
  </Router>
);

export default routes;
