import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { List } from "./pages/List";
import { Detail } from "./pages/Detail";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename="car">
      <div>
        <Link to="/detail">Detail</Link>
        <Link to="/list">List</Link>
      </div>

      <Switch>
        <Route path="/list">
          <List />
        </Route>

        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
