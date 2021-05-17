import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Theme from './theme/Theme';
import store from './reducers/store';
import Routes from './routes/Routes';
import history from './utils/history';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Theme>
    <Provider store={store}>
      <Router history={history}>
        <Routes store={store} />
      </Router>
    </Provider>
  </Theme>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit .ly/CRA-PWA
reportWebVitals();
