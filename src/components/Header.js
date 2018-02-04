import React from 'react';
import { Link } from 'react-router-dom';

// images can be imported in the same way as JS code
import nike from '../img/nike.png';

export default class Header extends React.Component {
  render() {
    return <React.Fragment>
        <img className="logo" src={nike}/>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </React.Fragment>
  }
}