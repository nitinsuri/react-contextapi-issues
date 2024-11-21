import styled, { css } from 'styled-components';

const Span = styled.span``;

const strong = css`
  font-weight: 700;
`;
const rightAlign = css`
  text-align: right
`;

export const TextRA = styled(Span)`
  ${rightAlign}
`;

export const TextStrong = styled(Span)`
  ${strong}
`;

export const TextStrongRA = styled(Span)`
  ${strong}
  ${rightAlign}
`;
