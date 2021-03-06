import React from 'react';
import { Link } from 'react-router-dom';

const GlobalMenu = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/deliveryman">Cadastro de Entregador</Link>
            <Link to="/deliverymenList">Lista de Entregadores</Link>
            <Link to="/assignOrder">Encaminhamento de pedidos</Link>
        </nav>
    );
};

export default GlobalMenu;