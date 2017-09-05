import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers'

// invoke createStore with the imported reducer to create the Redux store
const store = createStore(reducer)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
