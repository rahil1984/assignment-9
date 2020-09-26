import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const {value2} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email || loggedInUser.name ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/signUp",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;