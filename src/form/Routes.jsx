import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppForm from './AppForm';
import Card from './Card';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AppForm} />
        <Route path="/tarjeta-de-presentacion" component={Card} />
      </Switch>
    </Router>
  );
}

export default Routes;

