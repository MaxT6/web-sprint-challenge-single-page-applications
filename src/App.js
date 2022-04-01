import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';

const App = () => {
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
        <nav id="order-pizza">
          <Link to="/">Home</Link>
          <Link tp="/pizza">Pizza?</Link>
        </nav>
      </header>
      <Switch>
      <Route path="/pizza">
          {/* <Order /> */}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      

    </>
  );
};
export default App;
