import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;
const Li = styled.li`
  display: block;
`;

const Sidebar = () => (
  <Ul>
    <Li> In Theaters </Li>
    <Li> Popular </Li>
    <Li> New Releases</Li>
  </Ul>
);

export default Sidebar;
