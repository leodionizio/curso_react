import React from 'react'
import ReactDOM from 'react-dom'
import {Header, Body, Footer} from './component'

ReactDOM.render(
// necessário retornar apenas um component *obrigatoriamente ter uma tag que envolva todo o component
  <div>
    <Header/>
    <Body/>
    <Footer/>
  </div>
, document.getElementById('app'))
