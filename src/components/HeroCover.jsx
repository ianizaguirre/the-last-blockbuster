/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

// const Wrapper = styled.div`
//   background: inherit;
// `;

const TextContainer = styled.div`
  color: #fff;
  text-shadow: 0 0 15px #000;
  font-weight: 600;

  padding-top: 237px;

  // padding-top: 150px;
  // text-align: center;

  width: 90%;
  margin: 0 auto;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 80px;

  width: 55%;
`;

const Tagline = styled.h2`
  font-size: 30px;

  margin: 25px 0 25px 0;

  width: 55%;
`;

// HERO Cover is the JS Util Container
class HeroCover extends Component {
  render() {
    const { title, tagline } = this.props.movieFullView;
    return (
      <Fragment>
        <TextContainer>
          <Title> {title} </Title>
          <Tagline>{tagline}</Tagline>
        </TextContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movieFullView: state.movieFullView.details
});

export default connect(mapStateToProps)(HeroCover);
