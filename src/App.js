import React from "react";
import { Route, Link } from "react-router-dom"

const App = () => {
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
        <nav id="order-pizza">
          <Link to="/">Home</Link>
        </nav>
      </header>
      

    </>
  );
};
export default App;
