import * as MovieActions  from './actionTypes'

interface FetchMoviesStartAction {
    type: typeof MovieActions.FETCH_MOVIES_START
}

interface FetchMoviesSuccessAction {
    type: typeof MovieActions.FETCH_MOVIES_SUCCESS,
    payload: any
}

interface FetchMoviesFailureAction {
    type: typeof MovieActions.FETCH_MOVIE_FAILURE,
    payload: any
}

export type MoviesActionTypes = 
FetchMoviesStartAction |
FetchMoviesSuccessAction |
FetchMoviesFailureAction 
