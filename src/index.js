import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import boardDisplay from './reducers/Reducers';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(boardDisplay);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
