import React from 'react';
import { Link } from 'react-router-dom';

export default function Buttons({ props }) {
    const { page, setPage, compList, scopeState } = props;

    return (
        <div className='button-area'>
            {
                page > 0 &&
                <button onClick={() => setPage(page - 1)}>Back</button>
            }
            {
                page < compList.length - 1 &&
                <button onClick={() => setPage(page + 1)}>Next</button>
            }
            {
                page === compList.length - 1 &&
                <div className='link'>
                    <Link to="/results" state={{ scopeState }} style={{ textDecoration: "none", color: "white" }}>
                        Calcular Huella
                    </Link>
                </div>
            }
        </div>
    )
}
