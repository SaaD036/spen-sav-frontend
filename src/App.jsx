import { Provider } from 'react-redux';

import store from './redux/store';

import Layout from './components/layout';
import UserPage from './components/pages/users';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Layout>
                    <UserPage />
                </Layout>
            </div>
        </Provider>
    );
}

export default App;
