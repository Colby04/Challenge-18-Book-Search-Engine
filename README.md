# Challenge-18-Book-Search-Engine

## Table of Contents
- [Description](#Description)
- [Technologies Used](#technologiesused)
- [Installation](#installation)
- [Usage](#usage)
- [Acceptance Criteria](#Acceptance)
- [File Structure](#FileStructure)
- [Back-End Details](#Back-EndDetails)
- [Front-End Details](#Front-EndDetails)
- [Apollo Server and GraphQL](#ApolloServerandGraphQL)
- [Deployment](#Deployment)
- [License](#license)
- [Links](#Links)

## Description
The Book Search Engine is a web application that allows users to search for books and manage their personal book collection. This application is built using the MERN stack (MongoDB, Express, React, Node.js) and incorporates GraphQL for API queries and mutations. Users can search for books using the Google Books API, log in or sign up, save books to their account, and remove books from their saved collection.

## Technologies Used
Node.js: Runtime environment for server-side JavaScript.
Express.js: Web application framework for building RESTful and GraphQL APIs.
MongoDB: NoSQL database for storing user and book data.
React.js: Front-end library for creating a responsive user interface.
GraphQL: Query language for APIs and server-side runtime.
Apollo Server: Middleware for GraphQL integration with Express.
JWT (JSON Web Token): Authentication and authorization.
Google Books API: External API for fetching book data.

## Installation
- Follow these steps to install and run the application locally:

     - Clone the repository:
     - git clone https://github.com/your-username/book-search-engine.git
     - cd book-search-engine

     - Install dependencies:
        - Navigate to the server and client directories, and install dependencies for both:

     - Install back-end dependencies
     - cd server
     - npm install

     - Install front-end dependencies
     - cd ../client
     - npm install

     - Set up environment variables:
     - In the server directory, create a .env file and add the following variables:
        - env
        - Copy code
        - MONGODB_URI=mongodb://localhost:27017/book-search-engine
        - JWT_SECRET=yourSecretKey

     - Run the application:
        - Use the following commands to start the application:

     - Start the server
        - cd server
        - npm run start 

     - Start the client
        - cd ../client
        - npm start
        - Open in Browser: Navigate to http://localhost:3000 to view the application.

## Usage
- Search for Books: Enter keywords in the search bar to find books using the Google Books API.
- Sign Up/Login: Create an account or log in to manage your saved books.
- Save Books: Save books to your account for future reference.
- View Saved Books: Access your personal library of saved books.
- Remove Books: Delete books from your saved collection.
- Logout: Log out to secure your account.

## Acceptance Criteria
The following functionality is implemented:

When the app loads, users see a menu with Search for Books and Login/Signup, an input field, and a submit button.
Unauthenticated users can search for books and view results (title, author, description, image, and link).
Users can log in or sign up through a modal with toggle functionality.
Authenticated users can save books to their account and view them in their personal library.
Authenticated users can remove books from their library.
The UI dynamically updates based on login status (e.g., menu options change).
File Structure
plaintext
Copy code

## File Structure
book-search-engine
│
├── client/              # Front-end React application
│   ├── public/
│   ├── src/
│       ├── components/  # Reusable React components
│       ├── pages/       # Pages for Search and Saved Books
│       ├── utils/
│           ├── [mutations.ts](http://_vscodecontentref_/1)   # GraphQL mutations
│           ├── queries.ts     # GraphQL queries
│   ├── [package.json](http://_vscodecontentref_/2)
│
├── server/              # Back-end Node.js server
│   ├── dist/            # Compiled TypeScript files (output)
│   ├── src/
│       ├── models/      # Mongoose models for User and Book
│       ├── schemas/     # GraphQL typeDefs and resolvers
│           ├── [index.ts](http://_vscodecontentref_/3)
│           ├── resolvers.ts
│           ├── typeDefs.ts
│       ├── utils/
│           ├── auth.ts  # Middleware for JWT
│       ├── server.ts    # Entry point for the server
│   ├── [package.json](http://_vscodecontentref_/4)
│
├── [tsconfig.json](http://_vscodecontentref_/5)        # TypeScript configuration
├── [README.md](http://_vscodecontentref_/6)            # Project documentation 

## Back-End Details
The server has been refactored to use GraphQL instead of REST. Key features include:

**GraphQL Schemas:**
- Queries: me
- Mutations: login, addUser, saveBook, removeBook
- Custom Types: User, Book, Auth

**Mongoose Models:**
- User: Stores user information and saved books.
- Book: Schema embedded in the User model.

**JWT Authentication:**
- Users are authenticated with JSON Web Tokens.

## Front-End Details
The front end was updated to integrate with the GraphQL API using Apollo Client. Key changes include:

**Mutations:**
- LOGIN_USER, ADD_USER, SAVE_BOOK, REMOVE_BOOK

**Queries:**
- GET_ME

### Components:

- SearchBooks.tsx: 
- Refactored to use useMutation for saving books.
- SavedBooks.tsx: Refactored to use useQuery and useMutation for fetching and removing books.
- LoginForm.tsx and SignupForm.tsx: Refactored to use GraphQL mutations.
- Apollo Server and GraphQL
- Apollo Server is set up in the server.ts file to handle GraphQL queries and mutations.
- The GraphQL Playground is available in development mode for testing queries and mutations.

## Deployment
 - Build Front-End:
 - cd client
 - npm run build

- Deploy to Render:
  - Connect your repository to RENDER.
  - Add the MONGODB_URI and JWT_SECRET environment variables.

## License
This project is licensed under the MIT License.

## GitHub Link and URL
- GitHub: Colby04
- Email: cjcodes2024@gmail.com
- Repo Link: https://github.com/Colby04/Challenge-18-Book-Search-Engine.git
- Render URL: Haven't attempted to launch yet due to existing errors. 






