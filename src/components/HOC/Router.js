import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Info} from "../containers/Info/Info";
import {About} from "../containers/About/About";
import Shop from "../containers/Shop/Shop";

export const Router = () => {
    return (
        <Switch>
            <Route path={'/'} exact>
                <Shop />
            </Route>
            <Route path={'/info'}>
                <Info />
            </Route>
            <Route path={'/about'}>
                <About />
            </Route>
        </Switch>
    )
};