import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
// necessário retornar apenas um component *obrigatoriamente ter uma tag que envolva todo o component
<Family lastName="Dionizio">
  <Member name="Leonardo" />
  <Member name="José" />
  <Member name="Irene" />
</Family>
//
, document.getElementById('app'))
