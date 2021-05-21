import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { Provider } from 'react-redux';
import Theme from './theme/Theme';
import store, { persistor } from './reducers/store';
import Routes from './routes/Routes';
import history from './utils/history';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Theme>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  </Theme>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
