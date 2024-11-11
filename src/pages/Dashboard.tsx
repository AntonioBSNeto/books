import { Box, SxProps, Theme } from "@mui/material"
import { LineChart } from "../components/LineChart"
import { BookGenreChart } from "../components/BookGenreChart";

const booksChart = () => Array.from({ length: 30 }, () => (Math.floor(Math.random() * 100) + 1) * 100);

const dashboardContainerStyle: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 14,
  paddingX: 4,
  paddingTop: 4,
  backgroundColor: '#f3f3f3',
  flexGrow: 1,
  boxSizing: 'border-box',
};

const dasboardContentSyle: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  mx: 'auto',
  boxSizing: 'border-box',
  maxWidth: '80rem',
  gap: 4
}

export const Dashboard = () => {
  return (
    <Box sx={dashboardContainerStyle}>
      <Box sx={dasboardContentSyle}>
        <Box sx={{ display: 'grid', gap:4, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' } }}>
          <Box>
            <LineChart data={booksChart()} title='Livros adicionados' />
          </Box>
          <Box>
            <LineChart data={booksChart()} title='Novas avaliações' color="#099E5F" />
          </Box>
        </Box>
        <Box>
          <BookGenreChart />
        </Box>
      </Box>
    </Box>
  )
}