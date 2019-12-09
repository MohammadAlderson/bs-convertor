import React from "react";
import "./styles/App.css";
import Cols from './components/cols'
import Webkits from './components/webkits'
import Home from './components/home'
import Navbar from "./components/navbar";
import {BorderRadius} from './components/borders/borderRadius'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


class App extends React.Component {
   render() {
      return (
         <Router>
            <Navbar />
            <main>
               <Switch>
                  <Route path="/cols">
                     <Cols />
                  </Route>
                  <Route path="/webkits/border-radius">
                     <BorderRadius />
                  </Route>
                  <Route path="/webkits">
                     <Webkits />
                  </Route>
                  <Route path="/">
                     <Home />
                  </Route>
               </Switch>
            </main>
         </Router>
      );
   }
}

export default App;
