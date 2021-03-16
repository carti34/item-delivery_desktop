import React, { useState, useCallback, useEffect } from 'react';
import Board from '@lourenci/react-kanban';
import api from '../../services/api';
import GlobalMenu from '../../components/GlobalMenu';

const AssignOrder = () => {
    const [newBoard, setNewBoard] = useState(null);
    const [printBoard, setPrintBoard] = useState(false);
    const [deliverymen, setDeliverymen] = useState([]);
    const [board, setBoard] = useState();

    const loadingDeliverymen = useCallback(async () => {
        try {
            const response = await api.get('/users?per_page=4');

            if (response.data) {
                setDeliverymen(response.data);
            } else {
                alert("Não foi encontrado nenhum entregador.");
            }
            createBoard(response.data);
        } catch (error) {
            alert(`Ocorreu uma falha ao retornar a lista de entregadores. ${error}`);
        }
    }, []);

    const createBoard = useCallback((deliverymen) => {
        const boardUpdate = {
            columns: [
                {
                    id: 1,
                    title: '# Pedidos #',
                    cards: [
                        {
                            id: 1,
                            title: 'pedido #1',
                            description: 'Vila Prado [ 19:00 ]',
                        },
                        {
                            id: 2,
                            title: 'pedido #2',
                            description: 'Pacaembu [ 20:15 ]',
                        },
                        {
                            id: 3,
                            title: 'pedido #3',
                            description: 'Vila São José [ 20:40 ]',
                        },
                        {
                            id: 4,
                            title: 'pedido #4',
                            description: 'Aracy [ 21:00 ]',
                        },
                        {
                            id: 5,
                            title: 'pedido #5',
                            description: 'Boa Vista [ 21:10 ]',
                        },
                        {
                            id: 6,
                            title: 'pedido #6',
                            description: 'Antenor Garcia [ 21:23 ]',
                        },
                        {
                            id: 7,
                            title: 'pedido #7',
                            description: 'São Rafael [ 21:30 ]',
                        },
                        {
                            id: 8,
                            title: 'pedido #8',
                            description: 'Douradinho [ 22:00 ]',
                        },
                    ],
                },
            ]
        };
        const de = deliverymen.map((d, index) => {
            return (
                {
                    id: index + 2,
                    title: d.login,
                    cards: [],
                }
            );
        });
        boardUpdate.columns = [...boardUpdate.columns, ...de];
        setBoard(boardUpdate);
    }, [deliverymen]);

    useEffect(() => {
        loadingDeliverymen();
    }, []);

    return (
        <>
            <GlobalMenu />
            <h1>Encaminhamento de Pedidos</h1>
            {board ?
                <Board
                    initialBoard={board}
                    onCardDragEnd={(board) => {
                        setPrintBoard(false);
                        setNewBoard(board);
                    }}
                /> : null}

            <button
                type="button"
                onClick={newBoard ?
                    () => setPrintBoard(true)
                    : () => alert('Realize a configuração desejada antes de confirmar.')
                }
            >
                Confirmar
            </button>
            {printBoard && newBoard ? (
                newBoard.columns.map((col) => {
                    if (col.id > 1) {
                        return (
                            <div key={col.id}>
                                <h2>{col.title}</h2>
                                <ul>
                                    {col.cards.map((c) => {
                                        return (
                                            <li key={c.id}>
                                                <h3>{c.title}</h3>
                                                <p>{c.description}</p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })
            ) : null}
        </>
    );
}

export default AssignOrder;