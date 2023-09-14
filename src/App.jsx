import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from './components/layout';

import LoginPage from './pages/auth/login';
import UsersPage from './pages/users';
import EntryPage from './pages/entry';

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
                        <Route
                            exact
                            path='/entry'
                            element={ <RequiredAuthRoute component={<EntryPage />} />}
                        />
                    </Routes>
                </Layout>
            </div>
        </Provider>
    );
}

export default App;
