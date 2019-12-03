import React from "react";
import "./styles/App.css";
import Cols from './components/cols'
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends React.Component {
   render() {
      return (
         <Router>
            <Navbar />
            <main>
               <Cols />
            </main>
         </Router>
      );
   }
}

export default App;
