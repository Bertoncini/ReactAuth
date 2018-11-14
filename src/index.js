import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Auth from './components/auth';
import App from './App';
import Protected from './pages/protected';
import Public from './pages/public';
import Login from './components/login';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';

ReactDOM.render(
<Router>
    <div>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/public" component={Public} />
        <PrivateRoute path="/protected" component={Protected} />        
    </div>
</Router>
    , document.getElementById('root'));

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Auth.fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
