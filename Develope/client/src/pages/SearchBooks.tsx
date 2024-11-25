import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_BOOK } from './mutations';
type Book = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    infoLink: string;
  };
};

const SearchBooks = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Book[]>([]);

  const [saveBook] = useMutation(SAVE_BOOK);

  const handleSearch = async () => {
    // Call the Google Books API to get books
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await res.json();
    setSearchResults(data.items);
  };

  const handleSaveBook = async (book: Book) => {
    try {
      await saveBook({
        variables: { 
          bookId: book.id,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          title: book.volumeInfo.title,
          image: book.volumeInfo.imageLinks.thumbnail,
          link: book.volumeInfo.infoLink
        },
      });
      // Update state after saving
    } catch (error) {
      console.error('Error saving book:', error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search for books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchResults.map((book) => (
          <div key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(', ')}</p>
            <p>{book.volumeInfo.description}</p>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">View on Google Books</a>
            <button onClick={() => handleSaveBook(book)}>Save</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;
