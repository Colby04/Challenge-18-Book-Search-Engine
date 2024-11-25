"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@apollo/client");
var SearchBooks_1 = require("./pages/SearchBooks"); // The component for searching books
var SavedBooks_1 = require("./pages/SavedBooks"); // The component for viewing saved books
var LoginForm_1 = require("./components/LoginForm"); // The login/signup form
var client = new client_1.ApolloClient({
    uri: 'http://localhost:3001/graphql', // Your backend GraphQL endpoint
    cache: new client_1.InMemoryCache(),
});
function App() {
    return (<client_1.ApolloProvider client={client}>
      <div className="App">
        {/* Conditionally render components based on authentication */}
        <SearchBooks_1.default />
        <SavedBooks_1.default />
        <LoginForm_1.default handleModalClose={function () { }}/>
      </div>
    </client_1.ApolloProvider>);
}
exports.default = App;
