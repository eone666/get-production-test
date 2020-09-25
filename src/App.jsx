import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/auth";
// import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const setUserData = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ user, setUser: setUserData }}>
        <Router>
          <Switch>
            {/* <PrivateRoute  path="/" exact component={Home} /> */}
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
