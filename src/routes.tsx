import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/study" component={TeacherList} exact />
                <Route path="/give-classes" component={TeacherForm} exact />

                <Route component={() => <h1>Erro 404</h1>} />
            </Switch>
        </BrowserRouter>
    );
}


export default Routes;