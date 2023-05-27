import {
    createBrowserRouter,
} from 'react-router-dom';

import Layout from './components/layout';

import LoginPage from './components/pages/auth/login';

import UserPage from './components/pages/users';

const getLayoutedComponent = (children) => {
    return (
        <Layout>
            {children}
        </Layout>
    );
};

const routes = createBrowserRouter([
    {
        path: '/',
        element: getLayoutedComponent(<div>Fuck you</div>),
    },
    {
        path: '/auth',
        // element: <>Auth page</>,
        children: [
            {
                path: 'login',
                element: getLayoutedComponent(<LoginPage />),
            },
        ],
    },
    {
        path: '/users',
        element: getLayoutedComponent(<UserPage />),
    },
]);

export default routes;
