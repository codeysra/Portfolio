import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from "../components/homepage/Homepage";
import Nav from "../components/common/Nav";
import NotFoundPage from "../components/common/NotFoundPage";
import ProjectItem from "../components/projects/ProjectItem";

const AppRouter = ()=>(
    <BrowserRouter>
        <div>
            
            <Switch>
                <Route path="/" component={Homepage} exact={true}/>
                <Route path="/project/:id" component={ProjectItem}/>
                <Route component={NotFoundPage}/>

            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
