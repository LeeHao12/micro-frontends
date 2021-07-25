import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { List } from "./pages/List";
import { Detail } from "./pages/Detail";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename="user">
      <div>
        <Link to="/detail">User Detail</Link>
        <Link to="/list">User List</Link>
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
