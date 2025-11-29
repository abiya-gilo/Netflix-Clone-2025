const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  // Language filter for global categories
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  // Popular & Upcoming → no language, no page
  fetchPopular: `/movie/popular?api_key=${API_KEY}`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}`,

  // Netflix Originals → network filter
  fetchNetflixOriginals: `/discover/tv?with_networks=213&api_key=${API_KEY}`,

  // TV Shows → add page=1 for consistency
  fetchTVShows: `/tv/popular?api_key=${API_KEY}&page=1`,

  // Genres → no language, no page
  fetchDocumentaries: `/discover/movie?with_genres=99&api_key=${API_KEY}`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749&api_key=${API_KEY}`,
  fetchHorrorMovies: `/discover/movie?with_genres=27&api_key=${API_KEY}`,
  fetchComedyMovies: `/discover/movie?with_genres=35&api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?with_genres=28&api_key=${API_KEY}`,
};
export default requests;