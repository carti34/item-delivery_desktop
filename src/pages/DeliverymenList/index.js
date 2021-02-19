import React, { useState, useCallback, useEffect } from 'react';
import { remote } from 'electron';
import path from 'path';
import fs from 'fs';
import api from '../../services/api';

const DeliverymenList = () => {
    const [deliverymen, setDeliverymen] = useState([]);
    const [perPage, setPerPage] = useState(5);

    const showNotification = (title, msg) => {
        const notification = {
            title: title,
            body: msg,
            icon: path.join(__dirname, '../../assets/logo.png'),
            silent: false,
        }
        new remote.Notification(notification).show();
    };

    const savePdf = async () => {
        const filepath1 = path.join(__dirname, `../../assets/Lista-de-entregadores_${new Date().toISOString()}.pdf`);
        const options = {
            marginsType: 0,
            pageSize: 'A4',
            printBackground: true,
            landscape: false,
        }

        const win = remote.BrowserWindow.getFocusedWindow();
        try {
            const pdf = await win.webContents.printToPDF(options);
            fs.writeFile(filepath1, pdf, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    showNotification('Arquivo Exportado', 'PDF Exportado com sucesso.');
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

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
            <div>
                <button id="pdf" type="button" onClick={() => savePdf()}>Convert to PDF</button>
            </div>
            <ul>
                {deliverymen.map((deliveryman) => {
                    return (
                        <li key={deliveryman.id}>
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