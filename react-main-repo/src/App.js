import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function Container() {
  return (
    <Switch>
      <Route path="/main">
        <div>main</div>
      </Route>

      <Route>
        <section id="frame"></section>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="root">
        <div className="tab">
          <Link className="tabItem" to="/main">
            main
          </Link>
          <Link className="tabItem" to="/car">
            car
          </Link>
          <Link className="tabItem" to="/user">
            user
          </Link>
        </div>

        <Container />
      </div>
    </BrowserRouter>
  );
}

export default App;
