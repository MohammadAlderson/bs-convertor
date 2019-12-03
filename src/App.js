import React from "react";
import "./styles/App.css";
import Cols from './components/cols'
import Navbar from "./components/navbar";
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
                  <Route path="/">
                     <div>
                        <h1>Hello</h1>
                     </div>
                  </Route>
               </Switch>
            </main>
         </Router>
      );
   }
}

export default App;
