import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import Order from "./Order";
import OrderForm from './OrderForm';
import axios from "axios";

const initialFormValues = {   
  name: "",
  special: "",    
  size: "",
  anchovies: false,
  nutsAndBolts: false,
  spaghetti: false,
  cosmicDust: false,
}

// const initialFormErrors = {
//   name: "",
//   special: "",    
//   size: "",
// }

const initialOrders = [];
const initialDisabled = true

const App = () => {
  
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues); //setting SoS for orders parameters
  const [formError, setFormError] = useState("");
  // const [disabled, setDisabled] = useState(initialDisabled)

  
  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      special: formValues.special.trim(),
      size: formValues.size,
      toppings: ['anchovies', 'nutsAndBolts', 'spaghetti', 'cosmicDust'].filter(topping => !!formValues[topping])
    }
    // *** commenting out to see if I will need axios or not to submit the data ***
    if (!newOrder.name) {
        setFormError("You must enter in your name boss");
        setFormValues(initialFormValues);
        return}
      else if (newOrder.name.length < 2) {
        setFormError("name must be at least 2 characters");
        setFormValues(initialFormValues);
        return;}
      else if (newOrder.size === '') {
        setFormError("Come on boss, you gotta choose a size");
        setFormValues(initialFormValues);
        return;}
        else {setFormError('')
    } 
    axios.post("https://reqres.in/api/orders", newOrder)
    .then(res => {
      console.log(res.data);
      setOrders([ res.data, ...orders ]);
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }
    // *** commenting out to see if I will need axios or not to submit the data ***
    // useEffect(() => {
    //   axios.get("https://reqres.in/api/orders")
    //   .then(res => {
    //     setOrders(res.data)
    //   })
   
    //  }, [])

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
          {formError}
          <OrderForm
            values={formValues}
            change={inputChange}
            submit={submitForm} />
          <h2>--- Submitted Orders ---</h2>
            {
            orders.map(order => {
            return (
            <Order key={order.id} details={order} />
                  )
                })
              }
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      

    </>
  );
};
export default App;
