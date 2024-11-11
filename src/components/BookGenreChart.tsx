import { Card, CardContent, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { BarChart } from "@mui/x-charts"
import { useEffect, useState } from "react"

const bookGenres = [
  'Ficção Científica',
  'Fantasia',
  'Romance',
  'Mistério',
  'Suspense',
  'Biografia',
  'História',
  'Aventura',
  'Terror',
  'Autoajuda',
];

function generateGenreRating() {
  return Array.from({ length: 6 }, () => Math.floor(Math.random() * (601 - 300)) + 300);
}

export const BookGenreChart = () => {
  const [bookGenre, setBookGenre] = useState(bookGenres[0])
  const [data, setData] = useState(generateGenreRating())

  useEffect(() => {
    if (bookGenre) {
      setData(generateGenreRating())
    }
  }, [bookGenre])

  return (
    <Card>
      <CardContent>
        <FormControl fullWidth>
          <InputLabel id="book-genre-label">Gênero do livro</InputLabel>
          <Select
            labelId="book-genre-label"
            id="book-genre"
            value={bookGenre}
            label="Gênero do livro"
            onChange={(e) => setBookGenre(e.target.value)}
          >
            {bookGenres.map(genre => <MenuItem key={genre} value={genre}>{genre}</MenuItem>)}
          </Select>
        </FormControl>
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['0', '1', '2', '3', '4', '5'], label: 'Nota da avaliação' }]}
          series={[{ data, label: 'Total de avaliações' }]}
          height={300}
        />
      </CardContent>
    </Card>
  )
}