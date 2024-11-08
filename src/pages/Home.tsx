import { Box, SxProps, Theme } from "@mui/material"
import { Searchbar } from "../components/SearchBar"
import { useEffect, useState } from "react";
import { Book } from "../types/book";
import { getBooks } from "../services/booksService";
import { BookCard } from "../components/BookCard";

const homeContainerStyle: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 14,
  paddingX: 4,
  paddingTop: 7,
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
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    const getAllProducts = async () => {
      return await getBooks()
    }

    try {
      getAllProducts()
        .then(books => {
          setBooks(books?.items)
        })
    } catch (error) { }

  }, [])

  const renderBooks = () => {
    return (
      books
        .map((book, index) => <BookCard key={`${book.id} + ${index}`} book={book} />)
    )
  }

  return (
    <Box sx={homeContainerStyle}>
      <Searchbar onSearchChange={setSearchTerm} searchTerm={searchTerm} />
      <Box sx={homeContentSyle}>
        {books.length > 0 && renderBooks()}
      </Box>
    </Box>
  )
}