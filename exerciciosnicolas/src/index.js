import React from 'react'
import ReactDOM from 'react-dom'

//import BomDia from './componentes/bomdia'

import Saudacao from './componentes/Saudacao'
//pode se passar o elemento como uma variavel diretamente no render

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Joao"/>
    </div>
    , document.getElementById('root'))//render renderiza para aparecer no html




//ReactDOM.render(<Primeiro/>, document.getElementById('root'))
//ReactDOM.render(<BomDia nome="Guilherme" idade={10} />, document.getElementById('root'))
