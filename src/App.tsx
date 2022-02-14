import React from 'react'
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const Bg = styled.body`
background-color: #08AEEA;
background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);

`

import { Home } from './pages/Home'

const App: React.FC = () => {
  return (
    <Bg>
      <Switch>
       <Route path='/' component={()=><Home/>} />
     </Switch>    
    </Bg>
  )
}

export default App


