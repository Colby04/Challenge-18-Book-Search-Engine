import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import SearchBooks from './pages/SearchBooks';  // The component for searching books
import SavedBooks from './pages/SavedBooks';  // The component for viewing saved books
import LoginForm from './components/LoginForm';  // The login/signup form

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',  // Your backend GraphQL endpoint
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* Conditionally render components based on authentication */}
        <SearchBooks />
        <SavedBooks />
        <LoginForm handleModalClose={() => { /* Add your modal close logic here */ }} />
      </div>
    </ApolloProvider>
  );
}

export default App;
