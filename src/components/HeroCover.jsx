/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import Details from './Details';

const Wrapper = styled.div`
  // position: absolute;
  // z-index: 11;
`;

const TextContainer = styled.div`
  color: #fff;
  text-shadow: 0 0 15px #000;
  font-weight: 600;
  // padding-top: 150px;
  position: absolute;
`;

const Title = styled.h1`
  font-size: 80px;
`;

const Tagline = styled.h2`
  font-size: 30px;
`;

const DetailsContainer = styled.div`
  // padding-top: 150px;
  position: absolute;
  top: 84%;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Gutter = styled.div`
  width: 95%;
  margin: 0 auto;
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
        <DetailsContainer>
          <Gutter>
            <Details selectedShow={this.props.selectedShow} />
          </Gutter>
        </DetailsContainer>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  movieFullView: state.movieFullView.details
});

export default connect(mapStateToProps)(HeroCover);
