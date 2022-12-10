import React from 'react';
import { useLocation } from 'react-router-dom';
import { scopeData } from '../data';
import { dataConst, getResults, totalResult } from '../helpers';
import { Link } from 'react-router-dom';
import ChartPie from '../components/ChartPie';
import ChartBar from '../components/ChartBar';

export const Results = () => {
    // Con use location y link me traigo el estado
    const location = useLocation();
    const newState = location.state.scopeState;

    // Estados con la data del usuario
    const states = [
        newState.gas,
        newState.gasoil,
        newState.nafta,
        newState.fueloil,
        newState.lpg,
        newState.r22,
        newState.r134,
        newState.r407c,
        newState.r410a,
        newState.r141b,
        newState.electricidad,
        newState.vapor,
        newState.home,
        newState.traslados,
        newState.publico,
        newState.cabotaje,
        newState.internacional,
        newState.alojamiento,
        newState.terrestre,
        newState.maritimo,
        newState.agua,
        newState.tratamiento,
        newState.residuos,
    ];

    // Resultados para cada gas (inicializar en [])
    const results = {
        gasResult: [],
        gasoilResult: [],
        naftaResult: [],
        fueloilResult: [],
        lpgResult: [],
        r22Result: [],
        r134Result: [],
        r407cResult: [],
        r410aResult: [],
        r141bResult: [],
        electricResult: [],
        vaporResult: [],
        homeResult: [],
        trasladosResult: [],
        publicoResult: [],
        cabotajeResult: [],
        interResult: [],
        hotelResult: [],
        terrestreResult: [],
        maritimoResult: [],
        aguaResult: [],
        tratResult: [],
        residuosResult: [],
    };

    // Resultado total (inicializar en 0) e indice de iteracion
    const totals = [];
    let scope1 = 0;
    let scope2 = 0;
    let scope3 = 0;
    let index = 0

    // Itero sobre los factores de emision y los multiplico por los estados
    // Luego los agrego a los objetos
    dataConst.forEach((i) => {
        getResults(i, results, states, index)
        totals[index] = totalResult(index, results)
        index++
    });

    // Transformo la array totals en un objeto
    const totalsObj = {
        "Gas": totals[0],
        "Gasoil": totals[1],
        "Nafta": totals[2],
        "Fueloil": totals[3],
        "Lpg": totals[4],
        "R22": totals[5],
        "R134": totals[6],
        "R407c": totals[7],
        "R410a": totals[8],
        "R141b": totals[9],
        "Electricidad": totals[10],
        "Vapor": totals[11],
        "Home Office": totals[12],
        "Traslados": totals[13],
        "Transp. Publico": totals[14],
        "Cabotaje": totals[15],
        "Vuelos Internac.": totals[16],
        "Hotel": totals[17],
        "F. Terrestre": totals[18],
        "F. Maritimo": totals[19],
        "Agua": totals[20],
        "Efluentes": totals[21],
        "Residuos": totals[22],
    }

    // Calcular scopes por separado
    for (let i = 0; i < 10; i++) {
        scope1 += totals[i]
    }
    for (let i = 10; i < 12; i++) {
        scope2 += totals[i]
    }
    for (let i = 12; i < totals.length - 1; i++) {
        scope3 += totals[i]
    }

    const scopes = [scope1, scope2, scope3]

    // Ordenar totals de mayor a menor
    // The sort() method casts elements to strings and compares the strings to determine the orders.
    // If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first.
    // https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
    const sortedTotals = [...totals]
    sortedTotals.sort((a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    });

    const sortedObj = Object.entries(totalsObj)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});


    return (
        <div style={{ display: "flex" }}>
            <div className='left'>
                <div className='resultContainer'>
                    <div style={{ padding: "1rem 1rem 1rem 2rem" }}>
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
                                {Math.round(scope1 * 100) / 100} kg CO<span style={{ fontSize: "0.6rem" }}>2e</span>
                            </li>
                            <li>Alcance 2: &nbsp;
                                {Math.round(scope2 * 100) / 100} kg CO<span style={{ fontSize: "0.6rem" }}>2e</span>
                            </li>
                            <li>Alcance 3: &nbsp;
                                {Math.round(scope3 * 100) / 100} kg CO<span style={{ fontSize: "0.6rem" }}>2e</span>
                            </li>
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
                    <ChartPie style={{ flex: 1 }} scopes={scopes} />
                    <ChartBar style={{ flex: 1 }} sortedObj={sortedObj} />
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
                                    a.id < 8 &&
                                    <tr key={a.id}>
                                        <td style={{ textAlign: "left" }}>{a.label}</td>
                                        <td style={{ fontWeight: "bold" }}>{Object.values(totals)[a.id - 1]}</td>
                                        <td>{Object.values(results)[a.id - 1][0]}</td>
                                        <td>{Object.values(results)[a.id - 1][1]}</td>
                                        <td>{Object.values(results)[a.id - 1][2]}</td>
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
