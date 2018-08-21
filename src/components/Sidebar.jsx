/* eslint-disable */
import React, { Fragment } from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
// import { getCurrentMenuTerm } from './../redux/actionCreators/menu.js';
//  getCurrentMenuTerm is a default export so no {} around it
import getCurrentMenuTerm from './../redux/actionCreators/menu.js';

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

const Item = styled.div`
  text-decoration: none;
  grid-column: 2 / -1;
`;

const Title = styled.span`
  margin-left: 11px;
`;

const IconType = styled(Icon)`
  font-size: 1.33333em;
  line-height: 0.75em;

  color: #ffeeb0;
  stroke: #d7a33f;
  stroke-width: 55px;
`;
// stroke-width: 65px;
// size = 'lg';

// <div onClick={props.handleCurrentMenuTerm}>YOOOOO</div>

const Sidebar = props => {
  return (
    <Fragment>
      <Ul>
        <Li onClick={props.handleCurrentMenuTerm}>
          <Wrap to={`/`}>
            <Item>
              <IconType icon="heart" />
              <Title>Home</Title>
            </Item>
          </Wrap>
        </Li>
        <Li onClick={props.handleCurrentMenuTerm}>
          <Wrap to={`/in-theaters`}>
            <Item>
              <IconType icon="ticket" />
              <Title>In Theaters</Title>
            </Item>
          </Wrap>
        </Li>
        <Li onClick={props.handleCurrentMenuTerm}>
          <Wrap to={`/example`}>
            <Item>
              <IconType icon="eye" />
              <Title>Watchlist</Title>
            </Item>
          </Wrap>
        </Li>
        <Li onClick={props.handleCurrentMenuTerm}>
          <Wrap to={`/`}>
            <Item>
              <IconType icon="thumbs-up" />
              <Title>Popular</Title>
            </Item>
          </Wrap>
        </Li>
        <Li onClick={props.handleCurrentMenuTerm}>
          <Wrap to={`/`}>
            <Item>
              <IconType icon="cog" />
              <Title>Settings</Title>
            </Item>
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
