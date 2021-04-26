import "./App.css";
import Chat from "./Components/Chat/Chat";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";

export const UserContext = createContext();
function App() {
  const [user, serUser] = useState({
    loggedIn: false,
    name: "",
    email: "",
    photo: "",
  });
  console.log("🚀App ~ user", user)
  return (
    <UserContext.Provider value={[user, serUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <div className="App">
              <div className="app_body">
                <Sidebar />
                <Chat />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
