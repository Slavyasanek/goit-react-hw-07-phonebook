import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/constants';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store} from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
