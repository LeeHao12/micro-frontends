import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/main">main</Link>
        <br />
        <Link to="/car">car</Link>
        <br />
        <Link to="/user">user</Link>
      </div>

      <Switch>
        <Route path="/main">
          <div>main</div>
        </Route>

        <Route>
          <section id="frame"></section>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
