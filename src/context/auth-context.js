import React from 'react';

const AuthContext = React.createContext({
    authenticated: false,
    login: () => {

    }
});

export default AuthContext;

//use for talking to compent in different levels, sharing data/ functions without using props