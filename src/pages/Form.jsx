import React, { useState } from 'react';
import ScopeOne from '../components/ScopeOne';
import ScopeTwo from '../components/ScopeTwo';
import ScopeThree from '../components/ScopeThree';
import Buttons from '../components/Buttons';

export const Form = () => {
    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        password: "",
        nickname: "",
        email: "",
        address: "",
        nationality: "",
        zipcode: "",
        highestQualification: "",
        occupation: "",
        about: "",
    });

    const compList = [
        <ScopeOne formData={formData} setFormData={setFormData} />,
        <ScopeTwo formData={formData} setFormData={setFormData} />,
        <ScopeThree formData={formData} setFormData={setFormData} />
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
