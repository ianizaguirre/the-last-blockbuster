/* eslint-disable */
import React, { Fragment } from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getCurrentMenuTerm } from './../redux/actionCreators/menu.js';

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

// <div onClick={props.handleCurrentMenuTerm}>YOOOOO</div>

const Sidebar = props => {
  return (
    <Fragment>
      <Ul>
        <Li onClick={props.handleCurrentMenuTerm}>
          <Wrap to={`/`}>
            <Title>Home</Title>
          </Wrap>
        </Li>
        <Li onClick={props.handleCurrentMenuTerm}>
          <Wrap to={`/in-theaters`}>
            <Title>In Theaters</Title>
          </Wrap>
        </Li>
        <Li onClick={props.handleCurrentMenuTerm}>
          <Wrap to={`/example`}>
            <Title>Example</Title>
          </Wrap>
        </Li>
        <Li onClick={props.handleCurrentMenuTerm}>
          <Wrap to={`/`}>
            <Title>Popular</Title>
          </Wrap>
        </Li>
        <Li onClick={props.handleCurrentMenuTerm}>
          <Wrap to={`/`}>
            <Title>New Releases</Title>
          </Wrap>
        </Li>
      </Ul>
    </Fragment>
  );
};

const mapStateToProps = state => ({ currentMenuTerm: state.currentMenuTerm });

const mapDispatchToProps = dispatch => ({
  handleCurrentMenuTerm(event) {
    event.preventDefault();
    dispatch(getCurrentMenuTerm(event.target.textContent));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
