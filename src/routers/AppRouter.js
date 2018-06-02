import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from "../components/homepage/Homepage";
import Header from "../components/common/Header";
import NotFoundPage from "../components/common/NotFoundPage";


const AppRouter = ()=>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Homepage} exact={true}/>
                <Route component={NotFoundPage}/>

            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
