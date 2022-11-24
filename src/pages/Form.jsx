import React, { useState } from 'react';
import ScopeOne from '../components/ScopeOne';
import ScopeTwo from '../components/ScopeTwo';
import ScopeThree from '../components/ScopeThree';
import Buttons from '../components/Buttons';

export const Form = () => {
    const [page, setPage] = useState(0);
    const [scopeOneState, setScopeOneState] = useState({
        gas: "",
        gasoil: "",
        nafta: "",
        fueloil: "",
        lpg: ""
    });

    const [scopeTwoState, setScopeTwoState] = useState({
        electricidad: "",
        vapor: ""
    });

    const [scopeThreeState, setScopeThreeState] = useState({
        home: "",
        traslados: "",
        publico: "",
        cabotaje: "",
        internacional: "",
        alojamiento: "",
        terrestre: "",
        maritimo: "",
        agua: "",
        tratamiento: "",
        residuos: "",
    });

    const compList = [
        <ScopeOne scopeOneState={scopeOneState} setScopeOneState={setScopeOneState} />,
        <ScopeTwo scopeTwoState={scopeTwoState} setScopeTwoState={setScopeTwoState} />,
        <ScopeThree scopeThreeState={scopeThreeState} setScopeThreeState={setScopeThreeState} />
    ];

    return (
        <div className='App'>
            <div className='container'>
                {<div>{compList[page]}</div>}

                <Buttons props={{ page, setPage, compList }} />
            </div>
        </div>
    )
}
