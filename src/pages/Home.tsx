import { Box, SxProps, Theme } from "@mui/material"
import { Searchbar } from "../components/SearchBar"
import { useEffect, useState } from "react";
import { Book } from "../types/book";
import { getBooks } from "../services/booksService";
import { BookCard } from "../components/BookCard";
import InfiniteScroll from "react-infinite-scroll-component";

import '../styles/home.css';

const homeContainerStyle: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 14,
  paddingX: 4,
  paddingTop: 4,
  backgroundColor: '#f3f3f3',
  flexGrow: 1,
  boxSizing: 'border-box'
};

const homeContentSyle: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  mx: 'auto',
  boxSizing: 'border-box',
  maxWidth: '80rem',
}

export const Home = () => {
  const [authorTerm, setAuthorTerm] = useState("");
  const [bookTerm, setBookTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [hasMore, setHasMore] = useState(true); // define se a mais dados a serem carregados no infinte scroll
  const [currentPage, setCurrentPage] = useState(1); // define a paginacao para buscar nos dados no infinte scroll

  const getAllBooks = async (term: string = 'a', offset: number = 0, limit: number = 12) => {
    return await getBooks(term, offset, limit)
  }

  useEffect(() => {
    try {
      getAllBooks()
        .then(books => {
          setBooks(books?.items)
        })
    } catch (error) { }

  }, []);

  useEffect(() => {
    if (searchTerm) {
      setCurrentPage(1);
      setHasMore(true);
      try {
        getAllBooks(searchTerm)
          .then(books => {
            setBooks(books?.items)
          })
      } catch (error) {

      }
    }
  }, [searchTerm])

  // funcao para buscar mais dadso para exibir no infinte scroll
  const fetchMoreBooks = async () => {
    if (!searchTerm) {
      return
    }
    const itemsQuantity = 12;
    await getBooks(searchTerm, currentPage, itemsQuantity)
      .then(books => {
        setBooks(prevBooks => [...prevBooks, ...(books?.items)])
        books?.items?.length > 0 ? setHasMore(true) : setHasMore(false)
      })
      .catch((err) => console.log(err));

    setCurrentPage(prevCurrentPage => prevCurrentPage + 1)
  }

  const renderBooks = () => {
    return (
      books
        .map((book, index) => <BookCard key={`${book.id} + ${index}`} book={book} />)
    )
  }

  return (
    <Box sx={homeContainerStyle}>
      <Box sx={{
        display: "flex",
        gap: "16px",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 4
      }}>
        <Searchbar onSearchChange={setBookTerm} searchTerm={bookTerm} placeholder={'Buscar livro'} onSearchSubmit={() => { setSearchTerm(bookTerm); setAuthorTerm(""); }} />
        <Searchbar onSearchChange={setAuthorTerm} searchTerm={authorTerm} placeholder={'Buscar autor'} onSearchSubmit={() => { setSearchTerm(authorTerm); setBookTerm("") }} />
      </Box>
      <Box sx={homeContentSyle}>
        <InfiniteScroll
          className="infinite-scroll-container"
          dataLength={books.length}
          next={fetchMoreBooks}
          hasMore={hasMore}
          loader={<></>}
          scrollThreshold={0.9}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Não há mais itens</b>
            </p>
          }
        >
          {books.length > 0 && renderBooks()}
        </InfiniteScroll>
      </Box>
    </Box>
  )
}