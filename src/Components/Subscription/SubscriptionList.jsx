import React from "react";
import SubscriptionItem from '../../Components/Subscription/SubscriptionItem';
import SubscriptionsStyles from './SubscriptionsStyles';

export default function SubscriptionList(props) {
    const { items, title, highlightColor } = props;
    const {CategoryWrapper, SectionTitle, CategoryItems} = SubscriptionsStyles;

    return (
        <CategoryWrapper highlightColor={highlightColor ? highlightColor : null}>
            <SectionTitle highlightColor={highlightColor ? highlightColor : null}>{title}</SectionTitle>
            <CategoryItems>
                {items.map((item) => <SubscriptionItem item={item} /> )}
            </CategoryItems>
        </CategoryWrapper>
    )
}