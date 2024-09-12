import './App.css';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvier';


function App() {
  const clientId = '908266448320-4s9lhu84jjpdr4cc7dg0oinfngip5nnq.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>

      <AccountProvider clientId={clientId} >
      <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
