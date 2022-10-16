import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { UserContextProvider } from './context/UserContext.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContextProvider>
        <App />
    </UserContextProvider>
)

