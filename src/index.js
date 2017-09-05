import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'

// invoke createStore with the imported reducer to create the Redux store
// second parameter is required to use the Redux Devtools Extension
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  // we wrap the app component in the Provider component and pass the store to Provider
  // so that components can access the store with out having to pass it down as props through the component chain
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))

registerServiceWorker()
