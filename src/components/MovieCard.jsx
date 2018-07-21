/* eslint-disable */

import React, { Component } from 'react';
import Services from '../services';
import styled from 'styled-components';

// const MovieCard = props => (
//   <div>
//     <h1>TITLE</h1>
//     <p>{this.props.nowplaying}</p>
//   </div>
// );
//  const data = this.props.nowplaying[1].title;

// margin: 0 auto;
// width: 200px;
// height: auto;
// padding: 5px;
// const FlexContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: start;
  background: rgba(184, 182, 182, 0.18);
  max-width: 218px;
`;

const Image = styled.img`
  margin: 0 auto;
  width: 100%;
`;
const Title = styled.h4`
  font-size: ${props => props.theme.h4Size};
  font-weight: ${props => props.theme.semiBold};
  font-family: ${props => props.theme.secondaryFontFamily};
  letter-spacing: 0.5px;
`;

class MovieCard extends Component {
  render() {
    const { title, poster_path } = this.props;
    return (
      <GridContainer>
        <Image alt="logo" src={`${Services.imageUrl}w500${poster_path}`} />
        <Title>{title}</Title>
      </GridContainer>
    );
  }
}

export default MovieCard;
