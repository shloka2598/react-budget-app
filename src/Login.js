import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user]);

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/app");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          alert("Signup success!");
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="container mt-5">
      <h1 className="h5">Sign-in / Sign-up</h1>
      <br />

      <form>
        <label className="lead">E-mail</label>
        <input
          type="text"
          value={email}
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="lead">Password</label>
        <input
          type="password"
          value={password}
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit" onClick={signIn} className="btn btn-primary mr-5">
          Sign In
        </button>
        <button onClick={register} className="btn btn-secondary">
          Create a new Account
        </button>
      </form>

      <br />
      <p className="lead">
        By signing-in you agree to the Budget App Conditions of Use & Sale.
        Please see our Privacy Notice, our Cookies Notice and our Interest-Based
        Ads Notice.
      </p>
    </div>
  );
}

export default Login;
