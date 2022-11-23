import React from 'react';
import { scopeOneData } from '../data';

const ScopeOne = ({ scopeOneState, setScopeOneState }) => {

    return (
        <div className="card">
            <div className="step-title">Alcance 1</div>
            <div className="cardContainer" style={{ display: "flex" }}>
                <div className="cardLeft" style={{ flex: 2, lineHeight: "1.5rem", margin: "1rem 1.5rem 1rem 0" }}>
                    <b>Emisiones directas de GEI</b>
                    <p>Emisiones provenientes de fuentes que son propiedad o están controladas por la empresa (es decir, dentro de los límites de la organización). Por ejemplo, las emisiones generadas por la quema de combustibles en vehículos propiedad de la organización.</p>
                </div>
                <div className="cardCenter">
                    <div className="line" />
                </div>
                <div className="cardRight" style={{ flex: 3, margin: "1rem 0 1rem 1.5rem" }}>
                    {scopeOneData.map((item) => (
                        <div className="inputsContainer" key={item.id}>
                            <label>{item.label}</label>
                            <input
                                {...item}
                                type={item.type}
                                placeholder={item.placeholder}
                                value={scopeOneState[item.name]}
                                onChange={(e) => setScopeOneState({ ...scopeOneState, [e.target.name]: e.target.value })}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default ScopeOne;
