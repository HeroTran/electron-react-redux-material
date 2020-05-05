import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { I18nextProvider } from 'react-i18next';
import configureStore, { history } from './functionals/store';
import App from './app';
import i18n from './i18n';
import './styles/styles.scss';

const META_API = process.env.REACT_APP_API_URL;
console.warn(META_API);
const store = configureStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ConnectedRouter history={history}>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </ConnectedRouter>
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
  );
};
render();
if (module.hot) {
  module.hot.accept(['./i18n', './components/App/App'], () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    render();
  });
}
