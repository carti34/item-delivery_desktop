import React, { useState, useCallback, useEffect } from 'react';
import { remote } from 'electron';
import path from 'path';
import fs from 'fs';
import GlobalMenu from '../../components/GlobalMenu';
import api from '../../services/api';

const DeliverymenList = () => {
    const [deliverymen, setDeliverymen] = useState([]);
    const [perPage, setPerPage] = useState(5);

    const loadingDeliverymen = useCallback(async () => {
        try {
            const response = await api.get(`/users?per_page=${perPage}`);

            if (response.data) {
                setDeliverymen(response.data);
            } else {
                alert("Não foi encontrado nenhum entregador.");
            }
        } catch (error) {
            alert(`Ocorreu uma falha ao retornar a lista de entregadores. ${error}`);
        }
    }, [perPage]);

    useEffect(() => {
        loadingDeliverymen();
    }, [loadingDeliverymen]);

    const showNotification = (title, msg) => {
        const notification = {
            title: title,
            body: msg,
            icon: path.join(__dirname, '../../assets/logo.png'),
        }
        new remote.Notification(notification).show();
    }

    const savePdf = async () => {
        const filePath = path.join(__dirname, `../../assets/lista-de-entregadores_${new Date().toISOString()}.pdf`);
        const win = remote.BrowserWindow.getFocusedWindow();
        const options = {
            marginsType: 0,
            pageSize: 'A4',
            printBackground: true,
            landscape: false,
        }

        try {
            const pdf = await win.webContents.printToPDF(options);
            fs.writeFile(filePath, pdf, (error) => {
                if (error) {
                    showNotification('Erro', `Erro ao salvar o arquivo. ${error}`);
                } else {
                    showNotification('PDF Exportado', `PDF exportado com sucesso.`);
                }
            });
        } catch (error) {
            showNotification('Erro', `Erro ao gerar arquivo. ${error}`);
        }
    };

    return (
        <>
            <GlobalMenu />
            <h1>Lista de Entregadores</h1>
            <div>
                <label htmlFor="per_page">Quantidade por página: </label>
                <input
                    type="number"
                    id="per_page"
                    name="per_name"
                    min="1"
                    max="100"
                    value={perPage}
                    onChange={e => setPerPage(e.target.value)}
                />
            </div>
            <div>
                <button
                    id="pdf"
                    type="button"
                    onClick={() => savePdf()}
                >
                    Exportar PDF
                </button>
            </div>
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