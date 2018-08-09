/* eslint-disable */

const api_key = process.env.API_KEY;
const base_url = 'https://api.themoviedb.org/3';

// https://www.themoviedb.org/talk/5717eea0c3a3686cb70022ff
// https://developers.themoviedb.org/3/getting-started/search-and-query-for-details

export default {
  imageUrl: 'https://image.tmdb.org/t/p/',

  apiCall(endpoint, method = 'GET', payload = '') {
    const url = `${base_url}/${endpoint}?api_key=${api_key}${payload}`;

    console.log(url);

    return fetch(url, { method })
      .then(response => response.json())
      .catch(e => console.log(e));
  },

  // getUpcomingMovies() {
  //   return this.apiCall('movie/upcoming');
  // },

  // === Movies Now Playing IN Theaters ===
  getNowPlaying() {
    return this.apiCall('movie/now_playing');
  },

  getMovieDetails(movieId) {
    return this.apiCall(`movie/${movieId}`);
  },

  // Can this be Appended to to above Details Function??? to save an extra call
  // pg-13, R, etc.
  getMovieCertification(movieId) {
    return this.apiCall(`movie/${movieId}/release_dates`);
  }

  // getPopularMovies() {
  //   return this.apiCall('movie/popular');
  // },

  // getSearchResults(searchParam) {
  //   return this.apiCall('search/movie', 'GET', `&query=${searchParam}`);
  // }
};
