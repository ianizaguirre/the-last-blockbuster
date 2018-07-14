import styled, { css } from 'styled-components';

export const Gutter = styled.div`
  width: 95%;
  margin: 0 auto;
`;

// export const TestJunk = styled.div`
//   margin: 0 auto;
// `;

// flex-direction: ${props => (props.small ? '0.25em 1em' : '0.5em 2em')};

export const FlexContainer = styled.div`
  display: flex;

  ${props =>
    props.column &&
    css`
      flex-direction: column;
      height: 100%;
    `};
`;
