import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import SignupPage from "./components/Layout/auth/SignUp";
import LoginPage from "./components/Layout/auth/Login"

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
