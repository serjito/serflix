const Key = "0adad822bec06a1c87d5523f96c1e6f2";

// ENDPOINTS

const request = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=2`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=en-US&page=1`,
  requestAnimationFrame: `https://api.themoviedb.org/3/trending/all/week?api_key=${Key}&language=en-US`,
  requestOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${Key}&with_networks=123`,
  requestDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${Key}&with_genres=99`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${Key}&with_genres=27`,
  requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${Key}&with_genres=35`,
};

export default request;
