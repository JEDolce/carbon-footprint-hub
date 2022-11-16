import React from 'react';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';

export const Results = () => {
    return (
        <div style={{ display: "flex" }}>
            <div className='left'>
                <div style={{ padding: "1rem" }}>
                    <h3>Resultados</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi mollitia quibusdam ducimus, a ullam eum ipsum aliquid veniam architecto placeat animi eos nemo tempore debitis quae adipisci. Numquam, magnam distinctio.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi mollitia quibusdam ducimus, a ullam eum ipsum aliquid veniam architecto placeat animi eos nemo tempore debitis quae adipisci. Numquam, magnam distinctio.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi mollitia quibusdam ducimus, a ullam eum ipsum aliquid veniam architecto placeat animi eos nemo tempore debitis quae adipisci. Numquam, magnam distinctio.</p>
                </div>
            </div>
            <div className='right'>
                <div className='up' style={{ display: "flex" }}>
                    <PieChart style={{ flex: 1 }} />
                    <BarChart style={{ flex: 1 }} />

                </div>
                <div className='down'>

                </div>
            </div>
        </div>
    )
}
