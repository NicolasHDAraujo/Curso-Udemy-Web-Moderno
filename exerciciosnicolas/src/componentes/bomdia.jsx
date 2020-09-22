import React from 'react'
//pode se importar {Fragment diretamente no import}

export default props => [
    <h1>Bom dia {props.nome}!</h1>,
    <h2>Ate Breve!</h2>

]

//export default props =>
/*<React.Fragment>
    <h1>Bom dia {props.nome}!</h1>
    <h2>Ate Breve!</h2>

</React.Fragment>*/
//props é padrao de uso
//pode se utilizar div ou fragment

//indicado envolver em div ou fragment
//fragment serve para não envolver o elemento em tag no html