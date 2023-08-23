const Key = "0adad822bec06a1c87d5523f96c1e6f2";

// ENDPOINTS

const request = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rapted?api_key=${Key}&language=en-US&page=2`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=2`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=en-US&page=1`,
  requestActionMovies: `https://api.themoviedb.org/3/movie?api_key=${Key}&with_genres=28`,
  requestAnimationFrame: `https://api.themoviedb.org/3/genre/movie/list?language=en`,
};

export default request;
