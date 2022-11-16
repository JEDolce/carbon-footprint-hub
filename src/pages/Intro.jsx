import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Intro = () => {
    const navigate = useNavigate();

    return (
        <div className='App'>
            <div className='container'>
                <div className="card" style={{ alignItems: "center" }}>
                    <h2>Información sobre el calculo de Huella</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi mollitia quibusdam ducimus, a ullam eum ipsum aliquid veniam architecto placeat animi eos nemo tempore debitis quae adipisci. Numquam, magnam distinctio.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi mollitia quibusdam ducimus, a ullam eum ipsum aliquid veniam architecto placeat animi eos nemo tempore debitis quae adipisci. Numquam, magnam distinctio.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi mollitia quibusdam ducimus, a ullam eum ipsum aliquid veniam architecto placeat animi eos nemo tempore debitis quae adipisci. Numquam, magnam distinctio.</p>
                    <button onClick={() => navigate("/form")} style={{ marginTop: "1.5rem" }}>Comenzar</button>
                </div>
            </div>
        </div>
    )
}
