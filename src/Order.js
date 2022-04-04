import React from "react";

export default function Order(props) {
    const { details } = props

    if (!details) {
        return <h3>Grabbing the order</h3>
    }

    return (
        <div>
            <h2>{details.name}</h2>
            <p>Pizza Size: {details.size}</p>
            <p>Special Instructions: {details.special}</p>
            <p>Toppings: {details.toppings}</p>
        </div>
    )

}