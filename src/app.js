// router: https://medium.com/folkdevelopers/the-ultimate-guide-to-electron-with-react-8df8d73f4c97
import React from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Deliveryman from './pages/Deliveryman';
import DeliverymenList from './pages/DeliverymenList';
import PersonCard from './components/PersonCard';
import { Students } from './students';

const App = () => {
    const Stand = () => {
        return (
            <h1>Stand</h1>
        )
    }

    const Sit = () => {
        return (
            <h1>Sit</h1>
        )
    }

    /* const Home = ()=>{
        return(
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
        )
    } */
    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/one" component={Stand} />
                    <Route exact path="/two" component={Sit} />
                    <Route exact path="/deliveryman" component={Deliveryman} />
                    <Route exact path="/deliverymenList" component={DeliverymenList} />
                </Switch>
            </HashRouter>
        </>
    );
}
export default App;
