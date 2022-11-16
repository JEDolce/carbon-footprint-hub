import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Buttons({ props }) {
    const { page, setPage, compList } = props;

    const navigate = useNavigate();

    const handleClick = () => {
        alert("You've successfully submitted this form");
        navigate("/results")
    };

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
                <button onClick={handleClick}>Submit</button>
            }
        </div>
    )
}
