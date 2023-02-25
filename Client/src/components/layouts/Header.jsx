import React from 'react';
import { Link } from "react-router-dom";
import Header2 from "./Header2";
const Header = (props) => {
  return (
    <>
    <Header2 appName = {props.appName}></Header2>
        <nav class="navbar bg-dark">
          <h1>
            <a href="/">
              <i class="fas fa-code"></i> 
            KHConnector
            </a>
          </h1>
          <ul>
            <li>
              <a href="profiles.html">Developers</a>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <a href="login.html">Login</a>
            </li>
          </ul>
        </nav>
      </>
    
  );
};

export default Header;