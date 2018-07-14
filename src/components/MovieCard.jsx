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

const Wrapper = styled.div`
  background: red;
`;
// margin: 0 auto;
// width: 200px;
// height: auto;
// padding: 5px;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 150px;
  float: left;
  margin-right: 10px;
`;
const Title = styled.h4`
  width: 150px;
`;

class MovieCard extends Component {
  render() {
    const { title, poster_path } = this.props;
    return (
      <Wrapper>
        <FlexContainer>
          <Image alt="logo" src={`${Services.imageUrl}w500${poster_path}`} />
          <Title>{title}</Title>
        </FlexContainer>
      </Wrapper>
    );
  }
}

export default MovieCard;
