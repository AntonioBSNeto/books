import { Box, Card, CardContent, CardMedia, Chip, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Book } from "../types/book"

interface BookcardProps {
  book: Book;
}

export const BookCard = ({ book }: BookcardProps) => {
  const navigate = useNavigate()


  const renderPrice = () => {
    const isForSale = book.saleInfo.saleability === 'FOR_SALE';
    if (isForSale) {
      return (
        <>
          <Typography variant="body2">Preço</Typography>
          <Typography variant="h6" fontWeight="600">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(book?.saleInfo?.listPrice?.amount)}
          </Typography>
        </>
      )
    } else {
      return (
        <Typography variant="h6" fontWeight="600">
          Indisponível para venda
        </Typography>
      )
    }
  }

  const renderCategories = () => {
    return book?.volumeInfo?.categories?.map(category => (
      <Chip
        key={category}
        label={category}
        sx={{ mt: 2, mb: 2, borderColor: '#999', backgroundColor: 'grey.300', py: 0.5, px: 1.5, fontSize: '0.75rem', fontWeight: '600', color: 'text.primary' }}
        variant="outlined"
      />
    ))
  }

  return (
    <Card
      sx={{
        p: { xs: 3, md: 4, lg: 7 },
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: 2,
        backgroundColor: 'background.paper',
        maxWidth: 384,
        width: '100%',
      }}
    >
      <CardMedia
        component="img"
        height="288"
        image={book?.volumeInfo?.imageLinks?.smallThumbnail}
        alt="book image"
        sx={{ borderRadius: 1, mb: 2, cursor: 'pointer', objectFit: 'contain', minHeight: 208 }}
        onClick={() => navigate(`/book/${book.id}`, { state: book })}
      />
      <CardContent>
        <Typography variant="h6" component="p" fontWeight="600" gutterBottom noWrap title={book?.volumeInfo?.title}>
          {book?.volumeInfo?.title}
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" component="span" sx={{ maxWidth: 128, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={book?.volumeInfo?.description}>
            {book?.volumeInfo?.description}
          </Typography>
          <Typography
            variant="body2"
            component="span"
            fontWeight="600"
            sx={{ ml: 1, cursor: 'pointer' }}
            onClick={() => navigate(`/book/${book.id}`, { state: book })}
          >
            Veja mais
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', columnGap: '8px' }}>
          {renderCategories()}
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            {renderPrice()}
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}