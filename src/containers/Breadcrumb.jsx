/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

const Breadcrumb = props => (
  <Fragment>
    <div>{props.currentMenuTerm}</div>
  </Fragment>
);

const mapStateToProps = state => ({ currentMenuTerm: state.currentMenuTerm });

export default connect(mapStateToProps)(Breadcrumb);
