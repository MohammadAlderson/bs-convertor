import React from 'react'
import { Link } from "react-router-dom";
export default class Navbar extends React.Component {
    render() {
            return (
               <nav className="navbar">
                  <ul className="navbar-list">
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/cols">Cols</Link>
                     </li>
                     <li>
                        <Link to="/">Webkits</Link>
                     </li>
                  </ul>
               </nav>
            );
    }
}