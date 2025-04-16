import React from "react";
import SubscriptionItem from '../../Components/Subscription/SubscriptionItem';
import SubscriptionsStyles from './SubscriptionsStyles';

export default function SubscriptionList(props) {
    const { items, title } = props;
    const categoryItems = SubscriptionsStyles
    return (
        <div className="category-wrapper">
            <h2>{title}</h2>
            <categoryItems>
                {items.map((item) => <SubscriptionItem item={item} /> )}
            </categoryItems>
        </div>
    )
}