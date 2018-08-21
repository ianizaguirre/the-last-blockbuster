import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

// background: lightblue;
// const Wrapper = styled.div`
//   height: 48px;
//   margin: 0 auto;
//   max-width: 50%;
//   display: flex;
//   align-items: center;
// `;

const Wrapper = styled.div`
  height: 48px;

  padding: 15px 0;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Item = styled.div`
  text-decoration: none;
  grid-column: 2 / -1;
`;

const Title = styled.span`
  color: #72727a;
  font-weight: bold;
  margin-left: 11px;
`;

const IconType = styled(Icon)`
  font-size: 1.33333em;
  line-height: 0.75em;

  color: #72727a;
`;

const LeftInfoBar = () => (
  <Wrapper>
    <Item>
      <IconType icon="bars" />
      <Title>Menu</Title>
    </Item>
  </Wrapper>
);

export default LeftInfoBar;
