import "./intervalo.css";
import React from "react";
import Card from "./card";
import { connect } from "react-redux";
import { alterarNumeroMinimo,alterarNumeroMaximo } from "../store/actions/numeros";

function Intervalo(props) {
    const {min,max} = props;
    
    return (
        <Card title="Intervalo de Números" Red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)}></input>
                </span>
                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)}></input>
                </span>
            </div>
        </Card>
    )
}
function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    };
}

function mapDispatchToProp(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action);
        },
    };
}
export default connect(mapStateToProps,mapDispatchToProp)(Intervalo);