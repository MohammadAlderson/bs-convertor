import React from 'react'
import { Link } from "react-router-dom";
export default class Navbar extends React.Component {
    render() {
            return (
               <nav className="navbar">
                  <div className="navbar-logo-container">
                     <Link to="/" className="navbar-logo-link">
                        <span className="navbar-logo-spn">
                           <span>C-</span>
                           <span>EZ</span>
                        </span>
                     </Link>
                  </div>
                  <ul className="navbar-list">
                     <li>
                        <a target="_blank"
                        href="https://github.com/MohammadAlderson/bs-convertor">Project_Github</a>
                     </li>
                     <li>
                        <Link to="/cols">Cols</Link>
                     </li>
                     <li>
                        <Link to="/webkits">Webkits</Link>
                     </li>
                  </ul>
               </nav>
            );
    }
}