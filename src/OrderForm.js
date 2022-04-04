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
        //     name: formValues.name.trim(),
        //     special: formValues.special.trim(),
        // }
        // setOrders(orders.concat(newOrder));
        // setFormValues({name: "", size: "", special: "" })
    }

    return (
     <div> 
        <h2>Pizza Order Form</h2>
        {/* {orders.map((order, idx)=> {
            return <div onSubmit={submit} key={idx}>
                {order.name} your order has been received! Prepare for some pizza!!
                </div>
        })} */}
        <form onSubmit={OnSubmit} id='pizza-form'>
            <label> Your Name, Boss
                <input
                    value={values.name}
                    type='text'
                    name='name'
                    placeholder='Your name goes here'
                    // minLength='2'
                    id='name-input'
                    onChange={change}
                />
            </label>
            <label> Pizza Size
                <select value={values.size} name="size" id="size-dropdown" onChange={change}>
                    <option value="">-- Select size--</option>
                    <option value="small">18"</option>
                    <option value="medium">20"</option>
                    <option value="large">22"</option>
                    <option value="behemoth">25"</option>
                </select>
            </label>
            <label> Special Instructions
                <input
                    value={values.special}
                    type='text'
                    name='special'
                    id='special-text'
                    onChange={change}
                />
            </label>
            <label> Anchovies
                <input 
                checked={values.anchovies}
                type="checkbox"
                name="anchovies"
                id="checklist"
                onChange={change}
                />
            </label>
             <label> Nuts and Bolts
                <input 
                checked={values.nutsAndBolts}
                type="checkbox"
                name="nutsAndBolts"
                id="checklist"
                onChange={change}
                />
            </label>
            <label> Spaghetti
                <input 
                checked={values.spaghetti}
                type="checkbox"
                name="spaghetti"
                id="checklist"
                onChange={change}
                />
            </label>
            <label> Cosmic Dust
                <input 
                checked={values.cosmicDust}
                type="checkbox"
                name="cosmicDust"
                id="checklist"
                onChange={change}
                />
            </label>
            <label>
                <input type="submit" value="submit" />
            </label> 
        </form>
    </div>  
    )
  }