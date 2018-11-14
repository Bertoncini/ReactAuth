import React, {  Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >
            <ul>
              <li>
                <Link to="/public">Public Page</Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
            </ul>
      </div>
    );
  }
}

export default App;
