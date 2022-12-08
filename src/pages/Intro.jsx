import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Intro = () => {
    const navigate = useNavigate();

    return (
        <div className='App'>
            <div className='container'>
                <div className="card" style={{ alignItems: "center", padding: "2rem", minWidth: "40rem", lineHeight: "1.5rem" }}>
                    <h2>Información sobre el cálculo de Huella</h2>
                    <p>
                        La huella de carbono es un indicador que mide la cantidad total
                        de gases de efecto invernadero (GEI) que son generados por ciertas
                        actividades. Estos gases incluyen dioxido de carbono (CO<span style={{ fontSize: "0.6rem" }}>2</span>),
                        metano (CH<span style={{ fontSize: "0.6rem" }}>4</span>) y óxido nitroso
                        (N<span style={{ fontSize: "0.6rem" }}>2</span>O), entre otros.
                        Conociendo el tamaño de la huella, es posible diseñar e implementar
                        una estrategia adecuada de reducción o compensación de emisiones, que
                        permita descarbonizar operaciones y mitigar el impacto ambiental de
                        una organización.
                    </p>
                    <p>
                        Los estándares más utilizados para medir la huella de carbono de
                        una organización son el <b>GHG Protocol</b> y la norma <b>ISO 14064-1</b>.
                    </p>
                    <p>
                        Esta calculadora tiene por objetivo proporcionar una estimación de la huella
                        de carbono, a través de la aplicación de los conceptos fundamentales
                        establecidos en los estándares mencionados anteriormente.
                    </p>
                    <button onClick={() => navigate("/form")} style={{ marginTop: "1.5rem" }}>Comenzar</button>
                </div>
            </div>
        </div>
    )
}
