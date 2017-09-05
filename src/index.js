import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers'

// invoke createStore with the imported reducer to create the Redux store
// second parameter is required to use the Redux Devtools Extension
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
