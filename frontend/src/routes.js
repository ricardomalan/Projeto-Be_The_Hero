import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //Switch faz com que seja chamada apenas uma rota por vez

import Logon from './pages/Logon'
import Register from './pages/Register'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact component={Logon} /> {/** exact faz com que o caminho tenha que ser exatamente ele*/}
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}