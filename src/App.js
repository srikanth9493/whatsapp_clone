import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SidebarChat from "./SidebarChat";
import { useState } from "react";
import Login from "./Login";
import { useStateValue } from "./StatePovider";

function App() {

  const [{user},dispatch]=useStateValue();
  // const [user, setuser] = useState(null);

  return (

    
    <div className="app">

         { !user ?
         
            <Login></Login>
         :
         (

              <div className="app__body">
                <Router>
                  <Sidebar></Sidebar>
                  <Switch>
                    <Route path="/rooms/:roomId">
                      <Chat></Chat>
                    </Route>
                    <Route path="/">
                      <Chat></Chat>
                    </Route>
                  </Switch>
                </Router>
              </div>

         )
        }
   </div>
  );
}

export default App;
