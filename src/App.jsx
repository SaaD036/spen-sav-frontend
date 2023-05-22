import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import store from './redux/store';

import routes from './routes';

import './App.css';

function App () {
    return (
        <Provider store={store}>
            <div className="App">
                <RouterProvider router={routes}/>
            </div>
        </Provider>
    );
}

export default App;
