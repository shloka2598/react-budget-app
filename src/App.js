import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import MainComponent from "./main/Main";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import Typewriter from "typewriter-effect";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/app">
            <Header />
            {user ? (
              <>
                <br />
                <MainComponent />
              </>
            ) : (
              <>
                <div className="jumbotron text-info h1 font-weight-bold text-center">
                  <Typewriter
                    options={{
                      strings: "Please Sign-in to get access to this page",
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </>
            )}
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
