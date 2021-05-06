import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Theme from './theme/Theme';
import store from './reducers/store';

import GlobalStyle from './theme/GlobalStyle';
import Routes from './routes/Routes';
import history from './utils/history';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router';

ReactDOM.render(
  <Theme>
      <Provider store={store}>
        <GlobalStyle />
         <Router history={history}>
           <Routes store={store}/>
         </Router>
      </Provider>
    </Theme>,
  document.getElementById('root')
);
reportWebVitals();
