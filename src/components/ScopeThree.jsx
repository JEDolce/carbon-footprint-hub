import React from 'react';
import { scopeData } from '../data';

const ScopeThree = ({ scopeState, setScopeState }) => {

    return (
        <div className="card" style={{ minWidth: "72rem" }}>
            <div className="step-title">Alcance 3</div>
            <div className="cardContainer" style={{ display: "flex" }}>
                <div className="cardLeft" style={{ flex: 2, lineHeight: "1.5rem" }}>
                    <b>Otras Emisiones indirectas de GEI</b>
                    <p>Emisiones que ocurren debido a las actividades de la organización, pero que se generan a partir de fuentes que no son de su propiedad ni control, por ejemplo, viajes aéreos.</p>
                    <p style={{ margin: 0, alignSelf: "start" }}>Incluye:</p>
                    <ul>
                        <li>Transporte</li>
                        <li>Trabajo remoto / Home Office</li>
                        <li>Viajes</li>
                        <li>Estadias de hotel</li>
                        <li>Fletes</li>
                        <li>Tratamiento de agua</li>
                        <li>Residuos</li>
                    </ul>
                </div>
                <div className="cardCenter">
                    <div className="line" />
                </div>
                <div className="cardRight" style={{ flex: 3 }}>
                    {scopeData.map((item) => (
                        item.id > 12 && item.id < 19 &&
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
                <div className="cardCenter">
                    <div className="line" />
                </div>
                <div className="cardRight" style={{ flex: 3 }}>
                    {scopeData.map((item) => (
                        item.id > 18 &&
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

export default ScopeThree;
