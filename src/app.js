import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import DeliverymanRegister from './pages/DeliverymanRegister';
import DeliverymenList from './pages/DeliverymenList';
import PersonCard from './components/PersonCard';
import { Students } from './students';

const App = () => {
    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/deliveryman" component={DeliverymanRegister} />
                    <Route path="/deliverymenList" component={DeliverymenList} />
                </Switch>
            </HashRouter>
            {/* <h1>Lista de Estudantes</h1>
            <ul>
                {Students.map((student, index) => {
                    return(
                        <li key={index.toString()}>
                            <PersonCard name={student.name} email={student.email} />
                        </li>
                    );
                })}
            </ul> */}
        </>
    );
}
export default App;
