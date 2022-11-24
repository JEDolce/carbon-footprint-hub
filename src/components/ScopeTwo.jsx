import React from 'react';
import { scopeTwoData } from '../data';

const ScopeTwo = ({ scopeTwoState, setScopeTwoState }) => {

    return (
        <div className="card" style={{ minWidth: "40rem" }}>
            <div className="step-title">Alcance 2</div>
            <div className="cardContainer" style={{ display: "flex" }}>
                <div className="cardLeft" style={{ flex: 2, lineHeight: "1.5rem", margin: "1rem 1.5rem 1rem 0" }}>
                    <b>Emisiones indirectas de GEI</b>
                    <p>Emisiones provenientes de la generación de energía comprada (en forma de electricidad, calor o vapor) que utiliza la organización.</p>
                </div>
                <div className="cardCenter">
                    <div className="line" />
                </div>
                <div className="cardRight" style={{ flex: 3, margin: "1rem 0 1rem 1.5rem" }}>
                    {scopeTwoData.map((item) => (
                        <div className="inputsContainer" key={item.id}>
                            <label>{item.label}</label>
                            <input
                                {...item}
                                type={item.type}
                                placeholder={item.placeholder}
                                value={scopeTwoState[item.name]}
                                onChange={(e) => setScopeTwoState({ ...scopeTwoState, [e.target.name]: e.target.value })}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ScopeTwo;