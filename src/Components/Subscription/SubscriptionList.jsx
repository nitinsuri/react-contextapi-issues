import React from "react";
import SubscriptionItem from "./SubscriptionItem";

export default function SubscriptionList(props) {
    const { items, title } = props;
    return (
        <section className="category-wrapper">
            <h2>{title}</h2>
            <ul>
                {items.map((item) => <SubscriptionItem item={item} /> )}
            </ul>
        </section>
    )
}