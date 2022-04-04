import React from 'react';


export default function OrderForm(props) {
    const { values, update, submit } = props

    const change = (evt) => { //replaces value of key with input value
        const name = evt.target.name;
        const {value} = evt.target;
        update(name, value);
        // *** Commenting out below to see if migration worked ***
        //console.log("change", evt.target);
        // const { name, value } = evt.target;
        // setFormValues({...formValues, [name]: value})
    }

    const OnSubmit =(evt) => { //prevents the page from refreshing when form is submitted
        evt.preventDefault();
        submit()
        //console.log("Submitting the form")
        // *** Commenting out below to see if migration worked ***
        // const newOrder = {
        //     customer: formValues.customer.trim(),
        //     specInst: formValues.specInst.trim(),
        // }
        // setOrders(orders.concat(newOrder));
        // setFormValues({customer: "", pizzaSize: "", specInst: "" })
    }

    return (
     <div> 
        <h2>Pizza Order Form</h2>
        {/* {orders.map((order, idx)=> {
            return <div onSubmit={submit} key={idx}>
                {order.customer} your order has been received! Prepare for some pizza!!
                </div>
        })} */}
        <form onSubmit={OnSubmit} id='pizza-form'>
            <label> Your Name, Boss
                <input
                    value={values.customer}
                    type='text'
                    name='customer'
                    placeholder='Your name goes here'
                    // minLength='2'
                    id='name-input'
                    onChange={change}
                />
            </label>
            <label> Pizza Size
                <select value={values.pizzaSize} name="pizzaSize" id="size-dropdown" onChange={change}>
                    <option value="">-- Select size--</option>
                    <option value="small">18"</option>
                    <option value="medium">20"</option>
                    <option value="large">22"</option>
                    <option value="behemoth">25"</option>
                </select>
            </label>
            <label> Special Instructions
                <input
                    value={values.specInst}
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