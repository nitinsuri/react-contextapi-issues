import styled from 'styled-components';

const CategoryWrapper = styled.div`
  border: 1px solid ${props => props.highlightColor};;
  border-top: 10px solid ${props => props.highlightColor};
  padding: 1rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-top: 0.5rem;
  position: relative;
  &::before {
    background-color: ${props => props.highlightColor};
    border-radius: 100%;
    content: " ";
    display: inline-block;
    height: 30px;
    position: absolute;
    width: 30px;
    z-index: -1;
  }
`

const CategoryItems = styled.ul`
  list-style-type: none;
  margin: 0;
  padding:0;
`;

const CategoryItem = styled.li`

`;

const SubscriptionsNav = styled.nav`
  button {
    margin: 0;
  }
`;

const SubscriptionsStyles = {CategoryWrapper, CategoryItems, SectionTitle, CategoryItem, SubscriptionsNav}

export default SubscriptionsStyles