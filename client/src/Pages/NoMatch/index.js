import React from 'react'
import Img404 from '../../Images/404-error.png'
import {Container404 , Img404Conatainer} from './style'

function NoMatch() {
  return (
    <Container404>
      <Img404Conatainer src={Img404}/>
      <label>Page not found!</label>
    </Container404>
  )
}

export default NoMatch