/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

const Wrapper = styled.div`
  position: absolute;
  z-index: 11;
`;

const TextContainer = styled.div`
  color: #fff;
  text-shadow: 0 0 15px #000;
  font-weight: 600;
`;

const Title = styled.h1`
  font-size: 80px;
`;

const Tagline = styled.h2`
  font-size: 30px;
`;

class HeroCover extends Component {
  render() {
    const { title, tagline } = this.props.movieFullView;
    return (
      <Wrapper>
        <TextContainer>
          <Title> {title} </Title>
          <Tagline>{tagline}</Tagline>
        </TextContainer>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  movieFullView: state.movieFullView.details
});

export default connect(mapStateToProps)(HeroCover);
