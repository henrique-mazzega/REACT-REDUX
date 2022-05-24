import React from 'react'
import Card from './card'
import { connect } from 'react-redux'

function Soma(props) {
    const {min,max} = props
    return (
        <Card title="Soma dos Números" Blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{max + min}</strong>
                </span>
            </div>
        </Card>
    )
}
function mapStateToProp(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}
export default connect(mapStateToProp)(Soma)