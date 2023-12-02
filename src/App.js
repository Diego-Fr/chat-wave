import './App.scss';
import Router from './router/router';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './store/store';
import { Provider } from 'react-redux';
import i18n from './l18n/l18j';
import { I18nextProvider } from 'react-i18next';

function App() {

  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
  
  return (
    <>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <Router/>
          </Provider>
        </I18nextProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
