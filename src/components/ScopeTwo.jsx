import React from 'react';
import { scopeData } from '../data';

const ScopeTwo = ({ scopeState, setScopeState }) => {

    return (
        <div className="card" style={{ minWidth: "40rem" }}>
            <div className="step-title">Alcance 2</div>
            <div className="cardContainer" style={{ display: "flex" }}>
                <div className="cardLeft" style={{ flex: 2, lineHeight: "1.5rem", margin: "1rem 1.5rem 1rem 0" }}>
                    <b>Emisiones indirectas de GEI</b>
                    <p>Emisiones provenientes de la generación de energía comprada, en forma de electricidad, calor o vapor; que es utiliza por la organización.</p>
                </div>
                <div className="cardCenter">
                    <div className="line" />
                </div>
                <div className="cardRight" style={{ flex: 3, margin: "1rem 0 1rem 1.5rem" }}>
                    {scopeData.map((item) => (
                        item.id > 10 && item.id < 13 &&
                        <div className="inputsContainer" key={item.id}>
                            <label>{item.label}</label>
                            <input
                                {...item}
                                type={item.type}
                                placeholder={item.placeholder}
                                value={scopeState[item.name]}
                                onChange={(e) => setScopeState({ ...scopeState, [e.target.name]: e.target.value })}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ScopeTwo;