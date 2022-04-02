import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import OrderForm from './OrderForm'

const App = () => {
  return (
    <>
      <header>
        <h1>Maximilian's Slice House</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/pizza" id="order-pizza"> Order Pizza?</Link>
        </nav>
      </header>
      <Switch>
        <Route path="/pizza">
          <OrderForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      

    </>
  );
};
export default App;
