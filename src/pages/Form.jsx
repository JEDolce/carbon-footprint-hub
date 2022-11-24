import React, { useState } from 'react';
import ScopeOne from '../components/ScopeOne';
import ScopeTwo from '../components/ScopeTwo';
import ScopeThree from '../components/ScopeThree';
import Buttons from '../components/Buttons';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const [page, setPage] = useState(0);
    const [scopeOneState, setScopeOneState] = useState({
        gas: "",
        gasoil: "",
        nafta: "",
        fueloil: "",
        lpg: "",
        r22: "",
        r134: "",
        r407c: "",
        r410a: "",
        r141b: ""
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

    const navigate = useNavigate();

    const handleClick = (e) => {
        alert("You've successfully submitted this form");

        setScopeOneState(e.target.value)
        setScopeTwoState(e.target.value)
        setScopeThreeState(e.target.value)
        console.log(scopeOneState)
        console.log(scopeTwoState)
        console.log(Number(scopeTwoState.electricidad))

        navigate("/results")
    };

    return (
        <div className='App'>
            <div className='container'>
                {<div>{compList[page]}</div>}

                <Buttons props={{ page, setPage, compList, handleClick }} />
            </div>
        </div>
    )
}
