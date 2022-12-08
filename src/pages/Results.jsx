import React from 'react';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
import { useLocation } from 'react-router-dom';
import { scopeData } from '../data';
import { getResults, totalResult } from '../helpers';
import { Link } from 'react-router-dom';

export const Results = () => {
    const location = useLocation();
    const newState = location.state.scopeState;

    const states = [
        newState.gas,
        newState.gasoil,
        newState.nafta,
        newState.fueloil,
        newState.lpg
    ];

    const dataConst = [
        [scopeData[0].co2, scopeData[0].ch4, scopeData[0].n2o],
        [scopeData[1].co2, scopeData[1].ch4, scopeData[1].n2o],
        [scopeData[2].co2, scopeData[2].ch4, scopeData[2].n2o],
        [scopeData[3].co2, scopeData[3].ch4, scopeData[3].n2o],
        [scopeData[4].co2, scopeData[4].ch4, scopeData[4].n2o],
    ];

    const fuelResults = {
        gasResult: [],
        gasoilResult: [],
        naftaResult: [],
        fueloilResult: [],
        lpgResult: [],
    };

    const totals = {
        totalGas: 0,
        totalGasoil: 0,
        totalNafta: 0,
        totalFueloil: 0,
        totalLpg: 0,
    };

    dataConst.forEach((i) => {
        switch (i) {
            case i = dataConst[0]:
                var index = 0
                getResults(i, fuelResults, states, index)
                totals.totalGas = totalResult(index, fuelResults)
                break

            case i = dataConst[1]:
                index = 1
                getResults(i, fuelResults, states, index)
                totals.totalGasoil = totalResult(index, fuelResults)
                break

            case i = dataConst[2]:
                index = 2
                getResults(i, fuelResults, states, index)
                totals.totalNafta = totalResult(index, fuelResults)
                break

            case i = dataConst[3]:
                index = 3
                getResults(i, fuelResults, states, index)
                totals.totalFueloil = totalResult(index, fuelResults)
                break

            case i = dataConst[4]:
                index = 4
                getResults(i, fuelResults, states, index)
                totals.totalLpg = totalResult(index, fuelResults)
                break

            default:
                console.log("lala");
        }
    });

    console.log(totals);

    return (
        <div style={{ display: "flex" }}>
            <div className='left'>
                <div className='resultContainer'>
                    <div style={{ padding: "1rem 2rem 1rem 2rem" }}>
                        <h2>Resultados</h2>
                        <p>Su huella de carbono es de:</p>
                        <h2 style={{ textAlign: "center", margin: "2rem" }}>
                            {Object.values(totals).reduce(
                                (x, y) => { return Math.round((x + y) * 100) / 100 }, 0)
                            } kg CO<span style={{ fontSize: "1rem" }}>2e</span>
                        </h2>
                        <p>Resultados por alcance:</p>
                        <ul>
                            <li>Alcance 1: &nbsp;
                                {Object.values(totals).reduce(
                                    (x, y) => { return Math.round((x + y) * 100) / 100 }, 0)
                                } kg CO<span style={{ fontSize: "0.6rem" }}>2e</span>
                            </li>
                            <li>Alcance 2: &nbsp; {0}</li>
                            <li>Alcance 3: &nbsp; {0}</li>
                        </ul>
                    </div>
                    <div className='link recalcBtn'>
                        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                            Calcular Nuevamente
                        </Link>
                    </div>
                </div>
            </div>

            <div className='right'>
                <div className='up' style={{ display: "flex" }}>
                    <PieChart style={{ flex: 1 }} />
                    <BarChart style={{ flex: 1 }} />
                </div>
                <div className='down'>
                    <div className='chart'>
                        <h3>Emisiones de GEI de sus actividades:</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Componente</th>
                                    <th>Emisiones CO<span style={{ fontSize: "0.75rem" }}>2e</span></th>
                                    <th>Emisiones CO<span style={{ fontSize: "0.75rem" }}>2</span></th>
                                    <th>Emisiones CH<span style={{ fontSize: "0.75rem" }}>4</span></th>
                                    <th>Emisiones N<span style={{ fontSize: "0.75rem" }}>2</span>O</th>
                                </tr>
                                {scopeData.map((a) =>
                                    a.id < 6 &&
                                    <tr key={a.id}>
                                        <td style={{ textAlign: "left" }}>{a.label}</td>
                                        <td style={{ fontWeight: "bold" }}>{Object.values(totals)[a.id - 1]}</td>
                                        <td>{Object.values(fuelResults)[a.id - 1][0]}</td>
                                        <td>{Object.values(fuelResults)[a.id - 1][1]}</td>
                                        <td>{Object.values(fuelResults)[a.id - 1][2]}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
