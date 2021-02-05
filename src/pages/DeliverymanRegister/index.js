import React from 'react';
import GlobalMenu from '../../components/GlobalMenu';
import DeliverymanForm from '../../components/DeliverymanForm';

const DeliverymanRegister = () => {
    return (
        <>
            <GlobalMenu />
            <h1>Cadastro de Entregadores</h1>
            <DeliverymanForm />
        </>
    );
};

export default DeliverymanRegister;
