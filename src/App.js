import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import OrderForm from './OrderForm'

const App = () => {
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
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
