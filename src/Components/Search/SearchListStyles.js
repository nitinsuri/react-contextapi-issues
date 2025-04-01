import styled from 'styled-components';

const ListWrapper = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
  &:first-letter {
    text-transform: uppercase
  }
  &:last-child {
    margin-bottom: 0;
}
`;

const listStyles = { ListWrapper, ListItem };

export default listStyles;
