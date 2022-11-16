import React from 'react';

const ScopeTwo = ({ formData, setFormData }) => {
    return (
        <div className="card">
            <div className="step-title">Scope 2</div>
            <p>Emisiones por Energía Importada</p>
            <input
                type="text"
                placeholder="Nickname"
                value={formData.nickname}
                onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
            />
            <input
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
        </div>
    )
}

export default ScopeTwo;