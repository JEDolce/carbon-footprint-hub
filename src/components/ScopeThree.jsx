import React from 'react';

const ScopeThree = ({ formData, setFormData }) => {
    return (
        <div className="card">
            <div className="step-title">Scope 3</div>
            <p>Emisiones por Transporte</p>
            <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <input
                type="text"
                placeholder="Nationality"
                value={formData.nationality}
                onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
            />
            <input
                type="text"
                placeholder="Zipcode"
                value={formData.zipcode}
                onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })}
            />
        </div>
    )
}

export default ScopeThree;
