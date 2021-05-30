import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Auth from "./components/pages/Auth";
import Logout from "./components/Layout/auth/Logout";

function Routes() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      {!isLogin ? (
        <Route path="/auth/:form" component={Auth} />
      ) : (
        <Route path="/logout" component={Logout} />
      )}
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
