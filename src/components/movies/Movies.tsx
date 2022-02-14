import React from 'react';
import styled from 'styled-components';
import MovieList from './MovieList';

const MoviesWrapper = styled.div`
  display:flex;
  justify-content:flex-start;
  flex-direction: column;
  width:90%;
`

const Movies: React.FC = () => {
        return (
        <MoviesWrapper>
          <h3>Popular Movies</h3>
           <MovieList/>
        </MoviesWrapper>
        )
} 



export default Movies;

