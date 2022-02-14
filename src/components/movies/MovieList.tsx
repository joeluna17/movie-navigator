import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import { fetchPopularMediaAsync } from '../../features/movies/movieService';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MovieCard from './movie/MovieCard';

const MoviesListWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  width:100%;
`

const MovieList: React.FC = () => {
    const dispatch = useDispatch();
    const { movies } = useSelector( (state: any) => state.movies)

    React.useEffect(()=>{
        //dispatch(fetchMoviesAsync());
        dispatch(fetchPopularMediaAsync());
    },[])

        return (
        <MoviesListWrapper>
            <Box sx={{ flexGrow: 1 }} style={{margin:'0 auto'}}>
            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {movies && movies.results.map((movie:any, index:number) => {
                return (
                <Grid item key={index}>
                    <Link to={`/needurl/${movie.id}`}>
                     <MovieCard title={movie.title || movie.name} overview={movie.overview} imgUrl={movie.backdrop_path} votes={movie.vote_average} />
                    </Link>
                </Grid>
                )
                })}
           </Grid>
           </Box>
        </MoviesListWrapper>)
} 


export default MovieList;

