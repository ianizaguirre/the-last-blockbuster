/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import Details from './Details';

const Wrapper = styled.div`
  // width: 100%;
`;

const TextContainer = styled.div`
  color: #fff;
  text-shadow: 0 0 15px #000;
  font-weight: 600;

  padding-top: 150px;
  text-align: center;

  // position: relative;
`;

const Title = styled.h1`
  font-size: 80px;
`;

const Tagline = styled.h2`
  font-size: 30px;

  margin: 25px 0 25px 0;
`;

const DetailsContainer = styled.div`
  margin-top: 100px;
`;

const Gutter = styled.div`
  width: 95%;
  margin: 0 auto;
`;

// HERO Cover is the JS Util Container
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
