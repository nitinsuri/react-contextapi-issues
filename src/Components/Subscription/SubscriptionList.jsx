import React from "react";
import SubscriptionItem from '../../Components/Subscription/SubscriptionItem'

export default function SubscriptionList(props) {
    const { items, title } = props;
    return (
        <div className="category-wrapper">
            <h2>{title}</h2>
            <ul>
                {items.map((item) => <SubscriptionItem item={item} /> )}
            </ul>
        </div>
    )
}