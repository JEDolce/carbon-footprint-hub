import React from 'react';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
import { useLocation } from 'react-router-dom';
import { scopeData } from '../data';

export const Results = () => {
    const location = useLocation();
    const newState = location.state.scopeState;

    // Gas
    const gasState = newState.gas;
    const gasEf = scopeData[0];
    const gasConst = [gasEf.co2, gasEf.ch4, gasEf.n2o];
    const gasResult = [];

    gasConst.map((item) => {
        return gasResult.push(Math.round((item * gasState) * 1000) / 1000)
    });

    const gasTotal = gasResult.reduce((acc, val) => {
        return acc + val
    }, 0);

    console.log(gasResult);
    console.log(gasTotal);

    // Gasoil
    const gasoilEf = scopeData[1];
    const gasoilConst = [gasoilEf.co2, gasoilEf.ch4, gasoilEf.n2o];
    const gasoilState = newState.gasoil;
    const gasoilResult = [];

    gasoilConst.map((item) => {
        return gasoilResult.push(Math.round((item * gasoilState) * 1000) / 1000)
    });

    const gasoilTotal = gasoilResult.reduce((acc, val) => {
        return acc + val
    }, 0);

    console.log(gasoilResult);
    console.log(gasoilTotal);

    // Nafta
    const naftaEf = scopeData[2];
    const naftaConst = [naftaEf.co2, naftaEf.ch4, naftaEf.n2o];
    const naftaState = newState.nafta;
    const naftaResult = [];

    naftaConst.map((item) => {
        return naftaResult.push(Math.round((item * naftaState) * 1000) / 1000)
    });

    const naftaTotal = naftaResult.reduce((acc, val) => {
        return acc + val
    }, 0);

    console.log(naftaResult);
    console.log(naftaTotal);

    // Fueloil
    const fueloilEf = scopeData[3];
    const fueloilConst = [fueloilEf.co2, fueloilEf.ch4, fueloilEf.n2o];
    const fueloilState = newState.fueloil;
    const fueloilResult = [];

    fueloilConst.map((item) => {
        return fueloilResult.push(Math.round((item * fueloilState) * 1000) / 1000)
    });

    const fueloilTotal = fueloilResult.reduce((acc, val) => {
        return acc + val
    }, 0);

    console.log(fueloilResult);
    console.log(fueloilTotal);

    // LPG
    const lpgEf = scopeData[4];
    const lpgConst = [lpgEf.co2, lpgEf.ch4, lpgEf.n2o];
    const lpgState = newState.lpg;
    const lpgResult = [];

    lpgConst.map((item) => {
        return lpgResult.push(Math.round((item * lpgState) * 1000) / 1000)
    });

    const lpgTotal = lpgResult.reduce((acc, val) => {
        return acc + val
    }, 0);

    console.log(lpgResult);
    console.log(lpgTotal);


    // Resultado Scope 1 
    const scope1 = Math.round((gasTotal + gasoilTotal + naftaTotal + fueloilTotal + lpgTotal) * 100) / 100;
    console.log(`Scope 1 = ${scope1} kg CO2e`);


    return (
        <div style={{ display: "flex" }}>
            <div className='left'>
                <div style={{ padding: "1rem" }}>
                    <h3>Resultados</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi mollitia quibusdam ducimus, a ullam eum ipsum aliquid veniam architecto placeat animi eos nemo tempore debitis quae adipisci. Numquam, magnam distinctio.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi mollitia quibusdam ducimus, a ullam eum ipsum aliquid veniam architecto placeat animi eos nemo tempore debitis quae adipisci. Numquam, magnam distinctio.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi mollitia quibusdam ducimus, a ullam eum ipsum aliquid veniam architecto placeat animi eos nemo tempore debitis quae adipisci. Numquam, magnam distinctio.</p>
                </div>
            </div>
            <div className='right'>
                <div className='up' style={{ display: "flex" }}>
                    <PieChart style={{ flex: 1 }} />
                    <BarChart style={{ flex: 1 }} />

                </div>
                <div className='down'>
                    <p>Scope 1 = {scope1} Kg CO2e </p>
                </div>
            </div>
        </div>
    )
}
