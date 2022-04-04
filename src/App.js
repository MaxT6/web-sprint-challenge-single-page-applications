import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import Order from "./Order";
import OrderForm from './OrderForm';
import axios from "axios";

const initialFormValues = {   
      customer: "",
      specInst: "",    
      pizzaSize: "",
  }


const App = () => {
  
  const [orders, setOrders] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues); //setting SoS for orders parameters
  const [formError, setFormError] = useState("");
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newOrder = {
      customer: formValues.customer.trim(),
      specInst: formValues.specInst.trim(),
      pizzaSize: formValues.pizzaSize,
    }
    // *** commenting out to see if I will need axios or not to submit the data ***
    if (!newOrder.customer) {
        setFormError("You must enter in your name boss");
        setFormValues(initialFormValues);
        return}
      else if (newOrder.customer.length < 2) {
        setFormError("name must be at least 2 characters");
        setFormValues(initialFormValues);
        return;}
      else if (newOrder.pizzaSize === '') {
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
          {formError && <p className="error">{formError}</p> }
          <OrderForm
            values={formValues}
            update={updateForm}
            submit={submitForm} />

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
