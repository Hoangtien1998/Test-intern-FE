import React from 'react'
import { Route } from "react-router-dom";
import Home from '../module/home';

const routers = [
    {
        path: "/",
        exact: true,
        main: ({ match, history }) => <Home match={match} history={history} />,
    },
];
export default routers;
