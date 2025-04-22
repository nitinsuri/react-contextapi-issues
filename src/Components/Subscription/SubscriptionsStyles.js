import styled from 'styled-components';

const CategoryWrapper = styled.div`
  border: 1px solid ${props => props.highlightColor};;
  border-top: 10px solid ${props => props.highlightColor};
  padding: 1rem;
  margin-bottom: 2rem;
  h2 {
    margin-top: 0.5rem;
    position: relative;
    &::first-letter {
      display: inline-block;
      margin-right: 1rem;
    }
    &::before {
      background-color: ${props => props.highlightColor};
      border-radius: 100%;
      content: " ";
      display: inline-block;
      height: 40px;
      left: -12px;
      position: absolute;
      top: -5px;
      width: 40px;
      z-index: -1;
    }
  }
  
`;

const CategoryItems = styled.ul`
  display: flex;
  gap: 1rem;
  list-style-type: none;
  margin: 0;
  padding:0;
`;

const CategoryItem = styled.li`
  h3 {
    margin-top: 0;
  }
`;

const SubscriptionsStyles = {CategoryWrapper, CategoryItems, CategoryItem}

export default SubscriptionsStyles