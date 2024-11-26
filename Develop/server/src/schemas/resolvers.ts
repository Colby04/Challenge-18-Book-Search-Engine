import User from '../models/User';
import { Book } from '../models/Book';  // assuming you have Mongoose models set up
import { createToken } from '../services/auth';

export const resolvers = {
  Query: {
    me: async (_: any, context: { user: { _id: string } }) => {
      return await User.findById(context.user._id);  // assuming JWT-based auth
    },
  },

  Mutation: {
    login: async (_: any, { email, password }: { email: string; password: string }) => {
      // Use email and password for login logic
      const user = await User.findOne({ email });
      if (!user || !(await user.isCorrectPassword(password))) {
        throw new Error('Incorrect credentials');
      }
      // Assuming you have a function to create a token
      const token = createToken(user);
      return { token, user };
    },
    addUser: async (_: any, { username, email, password }: { username: string; email: string; password: string }) => {
      const user = await User.create({ username, email, password });
      const token = createToken(user);
      return { token, user };
    },
    saveBook: async (_: any, { bookId, authors, description, title, image, link }: { bookId: string; authors: string[]; description: string; title: string; image: string; link: string }, context: { user: { _id: string } }) => {
      const user = await User.findById(context.user._id);
      if (!user) {
        throw new Error('User not found');
      }
      const newBook = new Book({
        bookId,
        title,
        authors,
        description,
        image,
        link,
      });

      user.savedBooks.push(newBook as any);
      await user.save();
        return user;
      },

    removeBook: async (_: any, { bookId }: { bookId: string }, context: { user: { _id: string } }) => {
      const user = await User.findById(context.user._id);
      if (!user) {
        throw new Error('User not found');
      }
      user.savedBooks = user.savedBooks.filter(book => book.bookId !== bookId);
      await user.save();
      return user;
    },
  },
};
