import styled from 'styled-components';

const CartList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CartListItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 8px 0;
    &:last-child {
      border-bottom: 1px solid lightgrey;
      border-top: 1px solid lightgrey;
    }
`;

const CartListHeader = styled(CartListItem)`
  font-weight: 700
`;

const cartStyles = { CartList, CartListHeader, CartListItem };

export default cartStyles;
