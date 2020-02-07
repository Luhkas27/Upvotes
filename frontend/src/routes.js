import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import Posts from './pages/posts';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </BrowserRouter>
  );
}
