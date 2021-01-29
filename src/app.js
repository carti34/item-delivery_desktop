import React from 'react';
import PersonCard from './components/PersonCard';
import { Students } from './students';

const App = () => {
    return (
        <>
            <h1>Lista de Estudantes</h1>
            <ul>
                {Students.map((student, index) => {
                    return(
                        <li key={index.toString()}>
                            <PersonCard name={student.name} email={student.email} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
export default App;
