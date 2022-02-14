import React, { Fragment } from 'react'
import styled from 'styled-components'

import Movies from '../components/movies/Movies'


const HomeWrapper =  styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  width:100%;
`

export const Home: React.FC = () => {
  return (
    <Fragment>
      <HomeWrapper>
        <h2>Welcome to the Movie Navigator</h2>
            <Movies />
        </HomeWrapper>
    </Fragment>
  )
}



