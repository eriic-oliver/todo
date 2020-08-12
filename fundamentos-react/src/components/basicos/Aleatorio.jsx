import React from "react"


export default (props) =>{
return(
   
    <>
    <h2>Número gerado aleatoriamente</h2>
    <p> Valor minimo: {props.min}</p>
    <p>Valor máximo: {props.max}</p>
    <p>O número gerado foi: {(Math.random()*(props.min + props.max) +props.min).toFixed()}</p>
    </>
)
}