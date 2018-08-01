/* eslint-disable */

import React, { Component, Fragment } from 'react';
// import Services from './../services';

import { connect } from 'react-redux';
import { getMovieDetails } from './../redux/actionCreators/search.js';

// const Details = props => (
//   <div>
//     <p> Hi Ian !!!!!!!!!!!!!! </p>
//     <pre>
//       <code>{JSON.stringify(props, null, 4)}</code>
//     </pre>
//   </div>
// );

// class Details extends Component {
//   state = {
//     movieDetails: {}
//   };

//   componentDidMount() {
//     Services.getMovieDetails(this.props.selectedShow).then(response => {
//       this.setState({ movieDetails: response });
//       console.log('=============== Movie DETAILS ===>');
//       console.log(response);
//     });
//   }
//   render() {
//     const { title, tagline, overview, release_date } = this.state.movieDetails;
//     return (
//       <Fragment>
//         <p>Title</p>
//         {title}

//         <p>Tagline</p>
//         {tagline}

//         <p>Overview</p>
//         {overview}

//         <p>Release Date</p>
//         {release_date}
//       </Fragment>
//     );
//   }
// }

// export default Details;

class Details extends Component {
  componentDidMount() {
    this.props.getAPIData();
  }

  render() {
    const { title, tagline, overview, release_date } = this.props.movieDetailsFullView;
    return (
      <Fragment>
        <p>Title</p>
        {title}

        <p>Tagline</p>
        {tagline}

        <p>Overview</p>
        {overview}

        <p>Release Date</p>
        {release_date}
      </Fragment>
    );
  }
}

// const mapStateToProps = state => {
//   const apiData = state.movieDetails ? state.movieDetails : {};

//   return {
//     rating: movieDetailsFullView.rating
//   };
// };

// movieDetails: state.movieDetailsFullView;

const mapStateToProps = state => ({
  movieDetailsFullView: state.movieDetailsFullView.movieDetails
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAPIData() {
    dispatch(getMovieDetails(ownProps.selectedShow));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
