export const getApi = (url, method) => {
  return fetch(url, 
    {
      method: method,
      headers: new Headers({
        authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTk0ZGI0YzI4NWRkMThjMTJmNjVhOTU3M2NlZDNjYSIsInN1YiI6IjVkMWQ5ZGQ2OTRkOGE4MjkzYjNlMzFlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3jn-WLni_jh9632uXs8GZVzS40KoL9x1uyfq3ycotY',
        'Content-Type': 'application/json',
      }),
      credentials: 'same-origin', 
    })
	.then((response) => response && response.json())
	.then((response) => Promise.resolve(response))
  .catch((error) => Promise.reject(error));
}

export const callApi = (url, method, data = {}) => {
    return fetch(url, 
      {
        method: method,
        headers: new Headers({
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTk0ZGI0YzI4NWRkMThjMTJmNjVhOTU3M2NlZDNjYSIsInN1YiI6IjVkMWQ5ZGQ2OTRkOGE4MjkzYjNlMzFlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3jn-WLni_jh9632uXs8GZVzS40KoL9x1uyfq3ycotY',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(data),
        credentials: 'same-origin', 
      })
  	.then((response) => response && response.json())
  	.then((response) => Promise.resolve(response))
    .catch((error) => Promise.reject(error));
  }

const MOVIE_DB_API_KEY = 'e194db4c285dd18c12f65a9573ced3ca';
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/4';

const createMovieDbUrl = (relativeUrl, queryParams) => {
  let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
  if (queryParams) {
    Object.keys(queryParams)
      .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
  }
  return baseUrl;
}

export const searchMovies = async ({ page, term}) => {
  const fullUrl = createMovieDbUrl('/search/movie', {
    page,
    query: term
  });
  return getApi(fullUrl);
}

export const getAccountDetails = async () => {
  let result = await getApi(`${MOVIE_DB_BASE_URL}/auth/request_token`, 'POST');
  window.open(`https://www.themoviedb.org/auth/access?request_token=${result.request_token}`);
  return result.request_token;
}

export const addToWatchList = async (requestToken) => { 
  let result = await callApi(`${MOVIE_DB_BASE_URL}/auth/access_token`, 'POST', {
    "request_token": requestToken
  });
  return getApi(`https://api.themoviedb.org/3/account/${result.account_id}/watchlist?api_key=${MOVIE_DB_API_KEY}`);
}

