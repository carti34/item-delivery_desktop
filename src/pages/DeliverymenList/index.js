import React, { useState, useCallback, useEffect } from 'react';
import api from '../../services/api';

const DeliverymenList = () => {
    const [deliverymen, setDeliverymen] = useState([]);
    const [perPage, setPerPage] = useState(5);

    const loadingDeliverymen = useCallback(async () => {
        try {
            const response = await api.get(`/users?per_page=${perPage}`);
            if (response.data) {
                setDeliverymen(response.data);
            }
        } catch (error) {
            alert(`Ocorreu uma falha durante a recuperação dos dados dos entregadores. ${error}`);
        }
    }, [perPage]);

    useEffect(() => {
        loadingDeliverymen();
    }, [loadingDeliverymen]);

    return (
        <>
            <h1>Lista de entregadores</h1>
            <div>
                <label htmlFor="perPage">Quantidade de Entregadores: </label>
                <input
                    type="number"
                    id="perPage"
                    name="perPage"
                    min={1}
                    max={100}
                    value={perPage}
                    onChange={(e) => setPerPage(e.target.value)}
                />
            </div>
            <ul>
                {deliverymen.map((deliveryman) => {
                    return (
                        <li>
                            <img src={deliveryman.avatar_url} />
                            <span>{deliveryman.login}</span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default DeliverymenList;