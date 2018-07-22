import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  padding: 0;
  margin: 0;

  display: grid;
`;

// grid-template-columns: 1fr minmax(120px,1fr) 1fr; */
// background: red;
const Li = styled.li`
  font-weight: ${props => props.theme.semiBold};
  font-family: ${props => props.theme.secondaryFontFamily};
`;

const Wrap = styled(Link)`
  text-decoration: none;
  padding: 15px 0;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  &:hover {
    background: #f1b318;
    color: #f6f6f6;
  }
`;

const Title = styled.div`
  text-decoration: none;
  grid-column: 2 / -1;
`;

const Sidebar = () => (
  <Ul>
    <Li>
      <Wrap to={`/`}>
        <Title>Home</Title>
      </Wrap>
    </Li>
    <Li>
      <Wrap to={`/moo`}>
        <Title>In Theaters</Title>
      </Wrap>
    </Li>
    <Li>
      <Wrap to={`/example`}>
        <Title>Example</Title>
      </Wrap>
    </Li>
    <Li>
      <Wrap to={`/`}>
        <Title>Popular</Title>
      </Wrap>
    </Li>
    <Li>
      <Wrap to={`/`}>
        <Title>New Releases</Title>
      </Wrap>
    </Li>
  </Ul>
);

export default Sidebar;
