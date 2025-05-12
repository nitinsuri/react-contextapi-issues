import React from "react";
import SubscriptionsStyles from './SubscriptionsStyles'

export default function SubscriptionItem(props) {
    const {name, category} = props.item;
    const {CategoryItem} = SubscriptionsStyles

    return (
        <CategoryItem key={Math.random()}>
            <h3>{name}</h3>
            <span>{category}</span>
        </CategoryItem>
    )
}