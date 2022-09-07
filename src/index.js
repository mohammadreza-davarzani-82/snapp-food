import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Provider } from 'react-redux';
import allReducers   from './reducer';
import { createStore} from 'redux';
import React from 'react';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
const myStor = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
root.render(
    <Provider store={myStor}>
        <App />
    </Provider>
);

