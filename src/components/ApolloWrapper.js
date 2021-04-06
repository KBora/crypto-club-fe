import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import TotalBalance from './TotalBalance';

const createApolloClient = (authToken) => {
    return new ApolloClient({
      link: new HttpLink({
        uri: 'https://known-marmot-30.hasura.app/v1/graphql',
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }),
      cache: new InMemoryCache(),
    });
};

const ApolloWrapper = ({ accessToken }) => {
  const { loading } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  const client = createApolloClient(accessToken);
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <p>
            Here we go
          </p>
          <LoginButton></LoginButton>
          <LogoutButton></LogoutButton>
        </header>
        <h3>Profile information</h3>
        <Profile></Profile>
        <h3>Total Balance</h3>
        <TotalBalance></TotalBalance>
        <h6>Token: {accessToken}</h6>
      </div>
    </ApolloProvider>
  );
}

export default ApolloWrapper;
