/* eslint-disable @typescript-eslint/default-param-last */

import * as MovieActions from './actionTypes';
import { MoviesActionTypes } from './types';

export interface IMovieState {
    fetching: boolean,
    error: string | null,
    movies: Array<any> | null
}

const initState: IMovieState  = {
    fetching: false,
    error: null,
    movies: null
}

export default (state = initState, action: MoviesActionTypes ) => {

    switch (action.type) {
        case MovieActions.FETCH_MOVIES_START : 
            return {
                ...state,
                fetching: true
            }

        case MovieActions.FETCH_MOVIES_SUCCESS : 
            return {
                ...state,
                fetching: false,
                movies: action.payload
            }

        case MovieActions.FETCH_MOVIE_FAILURE : 
            return {
                ...state,
                fetching: false,
                error: action.payload
            }

        default: return { ...state };
    }

}