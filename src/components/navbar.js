import React from 'react'

export default class Navbar extends React.Component {
    render() {
            return (
               <nav className="navbar">
                  <ul className="navbar-list">
                     <li>
                        <a href="#">Home</a>
                     </li>
                     <li>
                        <a href="#">Cols</a>
                     </li>
                     <li>
                        <a href="#">Webkits</a>
                     </li>
                  </ul>
               </nav>
            );
    }
}