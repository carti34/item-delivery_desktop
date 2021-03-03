import React from 'react';
import { remote } from 'electron';
import path from 'path';
import GlobalMenu from '../../components/GlobalMenu';
import DeliverymanForm from '../../components/DeliverymanForm';

const DeliverymanRegister = () => {
    const showNotification = (title, msg) => {
        const notification = {
            title: title,
            body: msg,
            icon: path.join(__dirname, '../../assets/logo.png'),
        }
        new remote.Notification(notification).show();
    }

    return (
        <>
            <GlobalMenu />
            <h1>Cadastro de Entregadores</h1>
            <DeliverymanForm notification={showNotification} />
        </>
    );
};

export default DeliverymanRegister;
