import React, { useState } from 'react';

const pizzaOrderData = [
    {   customer: "",
        pizzaSize: "",
        specInst: "",
    }
]

export default function OrderForm() {
    const [formValues, setFormValues] = useState({ customer: "", pizzaSize: "", specInst: "" }); //setting SoS for orders parameters
    const [orders, setOrders] = useState(pizzaOrderData);

    const change = (evt) => { //replaces value of key with input value
        //console.log("change", evt.target);
        const { name, value } = evt.target;
        setFormValues({...formValues, [name]: value})
    }

    const submit =(evt) => { //prevents the page from refreshing when form is submitted
        evt.preventDefault();
        //console.log("Submitting the form")
        const newOrder = {
            customer: formValues.customer.trim(),
            specInst: formValues.specInst.trim(),
        }
        setOrders(orders.concat(newOrder));
        setFormValues({customer: "", pizzaSize: "", specInst: "" })
    }

    return (
     <div> 
        <h2>Pizza Order Form</h2>
        {/* {orders.map((order, idx)=> {
            return <div onSubmit={submit} key={idx}>
                {order.customer} your order has been received! Prepare for some pizza!!
                </div>
        })} */}
        <form onSubmit={submit} id='pizza-form'>
            <label> Your Name Boss
                <input
                    value={formValues.customer}
                    type='text'
                    name='customer'
                    id='name-input'
                    onChange={change}
                />
            </label>
            <label> Pizza Size
                <select name="pizzaSize" id="size-dropdown" onChange={change}>
                    <option value="">-- Select size--</option>
                    <option value="small">18"</option>
                    <option value="medium">20"</option>
                    <option value="large">22"</option>
                    <option value="behemoth">25"</option>
                </select>
            </label>
            <label> Special Instructions
                <input
                    value={formValues.specInst}
                    type='text'
                    name='specInst'
                    id='special-text'
                    onChange={change}
                />
                <input type="submit" value="submit" />
            </label> 
        </form>
    </div>  
    )
  }