import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from 'react';
import ApolloWrapper from './components/ApolloWrapper';
import getConfig from './config';
import LoginButton from './components/LoginButton';

function App() {
  const config = getConfig();
  const { isLoading, error, getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [accessToken, setAccessToken] = useState("");

  useEffect( () => {
    const getAccessToken = async () => {
      const domain = config.domain;
      try {
        const access_token = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });  
        setAccessToken(access_token);
      } catch (e) {
        console.log(e.message);
      }      
    };
    
    if (!isAuthenticated) {
      getAccessToken();
    }
    
  }, [getAccessTokenSilently, isAuthenticated, config]);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  let page;
  if (isAuthenticated) {
    page = <ApolloWrapper accessToken={accessToken}/> 
  } else {
    page = <LoginButton></LoginButton>
  }    

  return (
    <div>
      {page}  
    </div>
  );
}

export default App;
