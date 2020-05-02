import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './functionals/store';
import App from './app';
import LanguageContainer from './containers/Language/LanguageContainer';
import './styles/styles.scss';

const { translationMessages } = require('./i18n');

const META_API = process.env.REACT_APP_API_URL;
console.warn(META_API);
const store = configureStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});
const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageContainer messages={messages}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <App history={history} />
        </MuiThemeProvider>
      </LanguageContainer>
    </Provider>,
    document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./app');
    render(
      <AppContainer>
        <Provider store={store}>
          <LanguageContainer messages={translationMessages}>
            <MuiThemeProvider theme={theme}>
              <CssBaseline />
              <NextRoot history={history} />
            </MuiThemeProvider>
          </LanguageContainer>
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

if (module.hot) {
  module.hot.accept(['./i18n', './components/App/App'], () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    render(translationMessages);
  });
}

if (!window.Intl) {
  new Promise((resolve) => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        // eslint-disable-next-line global-require
        require('intl/locale-data/jsonp/en.js'),
        // eslint-disable-next-line global-require
        require('intl/locale-data/jsonp/de.js'),
      ])
    )
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}
