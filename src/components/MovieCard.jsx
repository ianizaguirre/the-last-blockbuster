/* eslint-disable */

import React, { Component } from 'react';
import APIConnect from './../services/api-connect';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WrapperLink = styled(Link)`
  color: ${props => props.theme.greyText1};
  text-decoration: none;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: start;
  /* background: rgba(184, 182, 182, 0.18); */
  max-width: 218px;
`;

const FogWrapper = styled.div`
  position: relative;
  overflow: hidden;

  ${GridContainer}:hover & {
    &:before {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5));
      // transition: transform 0.2s ease-out;
      // transform: rotateZ(60deg) translate(-5em, 7.5em);
    }
  }
`;

// Translation of reffering to another Styled-Component -->
// When I hover over ${GridContainer} I want this (opacity: 0.5) to happen to Image
const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;


  // ${GridContainer}:hover & {
  //   opacity: 0.5;
  // }
`;

const MetaWrapper = styled.div`
  margin: 1em 0 1em 0;
`;

const Title = styled.h4`
  font-size: ${props => props.theme.h4Size};
  font-weight: ${props => props.theme.semiBold};
  font-family: ${props => props.theme.secondaryFontFamily};
  letter-spacing: 0.5px;
`;

class MovieCard extends Component {
  render() {
    const { title, poster_path, id } = this.props;
    return (
      <GridContainer>
        <WrapperLink to={`/details/${id}`}>
          <FogWrapper>
            <Image alt="logo" src={`${APIConnect.imageUrl}w500${poster_path}`} />
          </FogWrapper>

          <MetaWrapper>
            <Title>{title}</Title>
          </MetaWrapper>
        </WrapperLink>
      </GridContainer>
    );
  }
}

export default MovieCard;
