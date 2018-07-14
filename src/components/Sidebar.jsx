import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

// background: red;
const Li = styled.li`
  display: block;
  font-family: 'Montserrat', sans-serif;
  padding: 15px 0;
  cursor: pointer;

  &:hover {
    background: #f1b318;
  }
`;

const Wrap = styled.div`
  display: inherit;
  max-width: 50%;
  margin: 0 auto;
`;
const Sidebar = () => (
  <Ul>
    <Li>
      <Wrap>In Theaters</Wrap>
    </Li>
    <Li>
      <Wrap>Popular</Wrap>
    </Li>
    <Li>
      <Wrap>New Releases</Wrap>
    </Li>
  </Ul>
);

export default Sidebar;
