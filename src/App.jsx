import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from './components/layout';

import LoginPage from './components/pages/auth/login';
import UsersPage from './components/pages/users';

import RequiredAuthRoute from './protectedRoutes/RequiredAuthRoute';
import RequiredNotAuthRoute from './protectedRoutes/RequiredNotAuthRoute';

import store from './redux/store';

import './App.css';

function App () {
    return (
        <Provider store={store}>
            <div className="App">
                <Layout>
                    <Routes>
                        <Route
                            exact
                            path='/auth/login'
                            element={<RequiredNotAuthRoute component={<LoginPage />} />}
                        />
                        <Route
                            exact
                            path='/users'
                            element={ <RequiredAuthRoute component={<UsersPage />} />}
                        />
                    </Routes>
                </Layout>
            </div>
        </Provider>
    );
}

export default App;
