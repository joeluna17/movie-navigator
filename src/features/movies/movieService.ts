import * as MovieActions from './actionTypes';
import axios from 'axios';

import { EMediaType } from './models/EMediaType';
import { EPeriod } from './models/EPeriod';


const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDhjNjI5YWFjNTliMDhlMGRlMDcyYWFlMDAyZGYwZiIsInN1YiI6IjYyMDk3YjcyMjk3MzM4MDBiOTU0YjQ1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RK5xK8-l5nSEAf3TneiyCuFHz_mII4stX_TXmdLEsaM'
const headers = {headers:{ 'Authorization': `Bearer ${token}` }};

export const fetchMoviesAsync = () => (dispatch: any) => {
    dispatch({type: MovieActions.FETCH_MOVIES_START});
    axios.get('https://api.themoviedb.org/3/movie/13', headers)
    .then(response => {
        dispatch({type: MovieActions.FETCH_MOVIES_SUCCESS, payload: response.data})
    })
    .catch(error => {
        dispatch({type:MovieActions.FETCH_MOVIE_FAILURE, payload: error.message})
    })
}

export const fetchPopularMediaAsync = (mediaType=EMediaType.All, period=EPeriod.Week) => (dispatch: any) => {
    dispatch({type: MovieActions.FETCH_MOVIES_START});
    axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/${period}`, headers)
    .then(response => {
        dispatch({type: MovieActions.FETCH_MOVIES_SUCCESS, payload: response.data})
        console.log(response.data)
    })
    .catch(error => {
        dispatch({type:MovieActions.FETCH_MOVIE_FAILURE, payload: error.message})
    })
}



