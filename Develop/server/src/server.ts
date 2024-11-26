import express, { Application } from 'express';
import path from 'node:path';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema';
import db from './config/connection';
import routes from './routes';
import { authenticateGraphQL } from './services/auth';

const app: Application = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ user: authenticateGraphQL({ req }), req }),
});

server.start().then(() => {
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
});