import './App.css';
import Router from './router/router';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {

  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
  
  return (
    <>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Provider store={store}>
          <Router/>
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
