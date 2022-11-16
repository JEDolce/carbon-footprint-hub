import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className='navbar'>
            <div className="navContainer">
                <div className="logoContainer">
                    <img src="http://hub2030.com/wp-content/uploads/2022/09/HUB_Logo_azul.png" alt="logo" />
                </div>
                <h1>Calculadora de Huella de CO<span style={{ fontSize: "1rem" }}>2</span></h1>
                <div className="linksContainer">
                    <span className='navItem' onClick={() => navigate("/")}>Información</span>
                    <span className='navItem'>Login</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;



