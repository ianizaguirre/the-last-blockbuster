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

// ===== Maybe this is just for the intro text?
export const P = styled.p`
  color: ${props => props.theme.greyText1};
  font-size: 1.125rem; /* 18px */
  line-height: 1.6;
`;
