import React from 'react';

const ScopeOne = ({ formData, setFormData }) => {
    return (

        <div className="card">
            <div className="step-title">Scope 1</div>
            <p>Emisiones directas de GEI</p>
            <input
                type="text"
                placeholder="Full Name"
                className="form-group"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            <input
                type="text"
                className="form-group"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            <input
                type="text"
                className="form-group"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
        </div>

    )
}

export default ScopeOne;
