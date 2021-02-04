import React from 'react';
import { Link } from 'react-router-dom';

const GlobalMenu = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/deliveryman">Cadastro de Entregadores</Link>
        </nav>
    );
};

export default GlobalMenu;