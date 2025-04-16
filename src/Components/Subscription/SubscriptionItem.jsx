import React from "react";

export default function SubscriptionItem(props) {
    const {name, category, description} = props.item;
    return (
        <li key={Math.random()}>
            <h3>{name}</h3>
            <span>{category}</span>
            <p>{description}</p>
        </li>
    )
}