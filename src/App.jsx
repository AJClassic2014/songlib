import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Index from "./pages/index";
import MyHeader from "./pages/header";
import Now from "./pages/now";
import Play from "./components/Play";

function App() {
  return (
    <Router>
      <MyHeader></MyHeader>

      <Switch>
        <Route path="/" exact>
          <Index></Index>
        </Route>
        <Route path="/now" exact>
          <Now></Now>
        </Route>
      </Switch>

      <Play />
    </Router>
  );
}

export default App;
