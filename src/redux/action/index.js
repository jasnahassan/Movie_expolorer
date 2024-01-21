// export const setApiData = value => ({
//   type: 'SET_API',
//   payload: value,
// });

// actions.js
export const setMovies = (movies) => ({ type: 'SET_MOVIES', payload: movies });
export const setSelectedMovie = (movie) => ({ type: 'SET_SELECTED_MOVIE', payload: movie });
export const setLoading = (loading) => ({ type: 'SET_LOADING', payload: loading });
export const setError = (error) => ({ type: 'SET_ERROR', payload: error });
