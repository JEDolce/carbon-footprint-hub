import React from 'react';

export default function Buttons({ props }) {
    const { page, setPage, compList, handleClick } = props;

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
