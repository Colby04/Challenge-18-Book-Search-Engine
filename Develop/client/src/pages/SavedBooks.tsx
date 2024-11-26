import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from './mutations';

const SavedBooks = () => {
  const { loading, error, data } = useQuery(GET_ME);
  const [removeBook] = useMutation(REMOVE_BOOK);

  const handleDeleteBook = async (bookId: string) => {
    try {
      await removeBook({ variables: { bookId } });
    } catch (error) {
      console.error('Error removing book:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading saved books</div>;

  return (
    <div>
      <h2>Saved Books</h2>
      {data.me.savedBooks.map((book: { bookId: string; title: string; authors: string[] }) => (
        <div key={book.bookId}>
          <h3>{book.title}</h3>
          <p>{book.authors.join(', ')}</p>
          <button onClick={() => handleDeleteBook(book.bookId)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default SavedBooks;
