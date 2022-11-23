import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <p className='copyright'>
                ©&nbsp;
                <span id="date" style={{ fontSize: "0.75rem" }}>
                    {new Date().getFullYear()}&nbsp;
                </span>
                JEDolce para HUB 2030 S.R.L - Todos los derechos reservados
            </p>
        </div>
    )
}

export default Footer;