// import Examples from './examples/page.react';
import App from './app/app.react';
import Home from './home/index.react';
import Login from './auth/index.react';
import Me from './me/index.react';
import Students from './students/index.react';
import Calendar from './calendar/index.react';
import Lessons from './lessons/index.react';
import NotFound from './components/notfound.react';
import React from 'react';
import Todos from './todos/index.react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} name="home" />
    <NotFoundRoute handler={NotFound} name="not-found" />
    {/*<Route handler={Examples} name="examples" />*/}
    <Route handler={Login} name="login" />
    <Route handler={Me} name="me" />
    <Route handler={Students} name="students" />
    <Route handler={Todos} name="todos" />
    <Route handler={Calendar} name="calendar" />
    <Route handler={Lessons} name="lessons" />
  </Route>
);
