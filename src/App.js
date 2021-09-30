import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import {Browse, Favourite, Home, SignIn, SignUp} from "./pages";
import {IsUserRedirect, ProtectedRoute} from './helpes/routes'
import { useAuthListener } from "./hooks";

function App() {
    const { user } = useAuthListener();

    return (
        <Router>
            <Switch>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                    <SignIn />
                </IsUserRedirect>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                    <SignUp />
                </IsUserRedirect>
                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                    <Browse user={user} />
                </ProtectedRoute>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                    <Home />
                </IsUserRedirect>
            </Switch>
        </Router>
    )
}

export default App;
