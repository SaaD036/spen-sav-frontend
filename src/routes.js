import {
    createBrowserRouter,
} from 'react-router-dom';

import Layout from './components/layout';
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
        path: '/users',
        element: getLayoutedComponent(<UserPage />),
    },
]);

export default routes;
