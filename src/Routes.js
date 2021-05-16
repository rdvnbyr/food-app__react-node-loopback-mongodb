import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
}

export default Routes;
