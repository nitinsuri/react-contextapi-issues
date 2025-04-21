import React from "react";
import SubscriptionItem from '../../Components/Subscription/SubscriptionItem';
import SubscriptionsStyles from './SubscriptionsStyles';

export default function SubscriptionList(props) {
    const { items, title, highlightColor } = props;
    const {CategoryWrapper, CategoryItems} = SubscriptionsStyles;
    return (
        <CategoryWrapper highlightColor={highlightColor ? highlightColor : null}>
            <h2>{title}</h2>
            <CategoryItems>
                {items.map((item) => <SubscriptionItem item={item} /> )}
            </CategoryItems>
        </CategoryWrapper>
    )
}