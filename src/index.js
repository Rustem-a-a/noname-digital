import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import './firebase';
import {Provider} from 'react-redux'
import store from './store/index'
import {Auth0Provider} from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain='dev-qik4mc5c5tm3xcn3.us.auth0.com'
        clientId='ZP9wtBYYqDKROlrzG6RhbDAxwvWRZcYm'
        authorizationParams={{
            redirect_uri: window.location.origin
        }}>
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    </Auth0Provider>
);
