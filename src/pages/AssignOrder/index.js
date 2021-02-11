import React, { useState } from 'react';
import Board from '@lourenci/react-kanban';

const board = {
    columns: [
        {
            id: 1,
            title: 'Mario',
            cards: []
        },
        {
            id: 2,
            title: 'João',
            cards: []
        },
        {
            id: 3,
            title: 'Ricardo',
            cards: []
        },
        {
            id: 4,
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
                    description: 'Vila Marina [ 21:00 ]',
                },
                {
                    id: 5,
                    title: 'pedido #5',
                    description: 'Boa Vista [ 21:10 ]',
                },
                {
                    id: 6,
                    title: 'pedido #6',
                    description: 'Jardim Paulistano [ 21:23 ]',
                },
                {
                    id: 7,
                    title: 'pedido #7',
                    description: 'São Rafael [ 21:30 ]',
                },
                {
                    id: 8,
                    title: 'pedido #8',
                    description: 'Douradinho [ 21:47 ]',
                },
                {
                    id: 9,
                    title: 'pedido #9',
                    description: 'Jockey Club [ 22:00 ]',
                },
            ]
        }
    ]
};

const AssignOrder = () => {
    const [newBoard, setNewBoard] = useState({});
    const [printBoard, setPrintBoard] = useState(false);

    console.log(newBoard);
    return (
        <>
            <Board
                initialBoard={board}
                onCardDragEnd={(board) => {
                    setPrintBoard(false);
                    setNewBoard(board);
                }
                }
            />
            <button
                type="button"
                onClick={() => setPrintBoard(true)}
            >
                Confirmar
            </button>
            {printBoard ? (
                newBoard.columns.map((column) => {
                    return (
                        <div key={column.id}>
                            <h2>{column.title}</h2>
                            <ul>
                                {column.cards.map((card) => {
                                    return (
                                        <li key={card.id}>
                                            <h3>{card.title}</h3>
                                            <p>{card.description}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })
            ) : null}
        </>
    );
}

export default AssignOrder;

// https://www.npmjs.com/package/@lourenci/react-kanban
// https://github.com/lourenci/react-kanban
// https://codesandbox.io/s/react-kanban-demo-nvjp3?file=/src/styles.css:212-281