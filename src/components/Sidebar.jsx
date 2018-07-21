import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

// background: red;
const Li = styled.li`
  display: block;
  font-weight: ${props => props.theme.semiBold};
  font-family: ${props => props.theme.secondaryFontFamily};
  padding: 15px 0;
  cursor: pointer;

  &:hover {
    background: #f1b318;
    color: #f6f6f6;
  }
`;

const Wrap = styled(Link)`
  text-decoration: none;
  display: inherit;
  max-width: 50%;
  margin: 0 auto;
`;

const Sidebar = () => (
  <Router>
    <Ul>
      <Li>
        <Wrap to={`/moo`}>In Theaters</Wrap>
      </Li>
      <Li>
        <Wrap to={`/example`}>Example</Wrap>
      </Li>
      <Li>
        <Wrap to={`/`}>Popular</Wrap>
      </Li>
      <Li>
        <Wrap to={`/`}>New Releases</Wrap>
      </Li>
    </Ul>
  </Router>
);

export default Sidebar;
