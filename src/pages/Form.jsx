import React, { useState } from 'react';
import ScopeOne from '../components/ScopeOne';
import ScopeTwo from '../components/ScopeTwo';
import ScopeThree from '../components/ScopeThree';
import Buttons from '../components/Buttons';
import { scopeData } from '../data';

export const Form = () => {
    const [page, setPage] = useState(0);
    const [scopeState, setScopeState] = useState(scopeData);

    const compList = [
        <ScopeOne scopeState={scopeState} setScopeState={setScopeState} />,
        <ScopeTwo scopeState={scopeState} setScopeState={setScopeState} />,
        <ScopeThree scopeState={scopeState} setScopeState={setScopeState} />
    ];

    return (
        <div className='App'>
            <div className='container'>
                {<div>{compList[page]}</div>}

                <Buttons props={{ page, setPage, compList, scopeState }} />
            </div>
        </div>
    )
}
