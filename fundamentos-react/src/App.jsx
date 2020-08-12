import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'

export default _ =>

    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#05 - Componente com Filhos" color="#FFC300">
                <Familia sobrenome="Simão"/>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#080">
                <Aleatorio min={0} max={10} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#FF5733">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#581845">
                <ComParametro
                    titulo="Segundo Componente"
                    subtitulo="Muito Legal!"
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#1934FD">
                <Primeiro> </Primeiro>
            </Card>

        </div>

    </div>


