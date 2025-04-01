import React from "react";

export default function SubscriptionItem(props) {
    const {name, category, description} = props.item;
    return (
        <li>
            <div>{name}</div>
            <div>
                <span>{category}</span>
                <br />
                <span>{description}</span>
            </div>
        </li>
    )
}