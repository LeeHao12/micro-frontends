import { HashRouter, Switch, Route, Link } from "react-router-dom";

import { List } from "./pages/List";
import { Detail } from "./pages/Detail";

import "./App.css";

function App() {
  return (
    <HashRouter basename="car">
      <div>
        <Link to="/detail">Car Detail</Link>
        <span> | - |</span>
        <Link to="/list">Car List</Link>
      </div>

      <Switch>
        <Route path="/list">
          <List />
        </Route>

        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
