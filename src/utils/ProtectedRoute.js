import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const ProtectedRoute = ({auth, ...props}) => 
    auth ? <Route {...props}/> : <Redirect to="/login"/>;

export { ProtectedRoute };
