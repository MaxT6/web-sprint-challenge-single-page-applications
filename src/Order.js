import React from "react";

export default function Order(props) {
    const { details } = props

    if (!details) {
        return <h3>Grabbing the order</h3>
    }

    return (
        <div>
            <h2>{details.customer}</h2>
            <p>Pizza Size: {details.pizzaSize}</p>
            <p>Special Instructions: {details.specInst}</p>
        </div>
    )

}