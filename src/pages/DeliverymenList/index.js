import React, { useState, useCallback, useEffect } from 'react';
import GlobalMenu from '../../components/GlobalMenu';
import api from '../../services/api';

const DeliverymenList = () => {
    const [deliverymen, setDeliverymen] = useState([]);

    const loadingDeliverymen = useCallback(async () => {
        try {
            const response = await api.get('/users');

            if (response.data) {
                setDeliverymen(response.data);
            } else {
                alert("Não foi encontrado nenhum entregador.");
            }
        } catch (error) {
            alert(`Ocorreu uma falha ao retornar a lista de entregadores. ${error}`);
        }
    }, []);

    useEffect(() => {
        loadingDeliverymen();
    }, [loadingDeliverymen]);

    return (
        <>
            <GlobalMenu />
            <h1>Lista de Entregadores</h1>
            <ul>
                {deliverymen.map((d) => {
                    return (
                        <li key={d.id}>
                            <img src={d.avatar_url} />
                            <span>{d.login}</span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default DeliverymenList;