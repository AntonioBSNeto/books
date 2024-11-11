import { Box, Button, Card, CardContent, CardMedia, Chip, Rating, Typography, Link } from "@mui/material"
import { Book } from "../types/book"

interface BookcardProps {
  book: Book;
}

export const BookCard = ({ book }: BookcardProps) => {
  const renderPrice = () => {
    const isForSale = book.saleInfo.saleability === 'FOR_SALE';
    if (isForSale) {
      return (
        <>
          <Button variant="contained" sx={{ borderRadius: '8px', color: 'white' }}>
            <Link variant="h6" href={book.saleInfo.buyLink} rel="noopener" target="_blank" sx={{ color: 'white', textDecoration: 'none' }}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(book?.saleInfo?.listPrice?.amount)}
            </Link>
          </Button>
        </>
      )
    } else {
      return (
        <Typography variant="body1" sx={{ lineHeight: '44px'}}>
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
        p: 3,
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: 2,
        backgroundColor: 'background.paper',
        maxWidth: 384,
        width: '100%',
        boxSizing: 'border-box',
        mx: 'auto'
      }}
    >
      <Link variant="h6" href={book.volumeInfo.infoLink} rel="noopener" target="_blank" fontWeight="600">
        <CardMedia
          component="img"
          height="288"
          image={book?.volumeInfo?.imageLinks?.smallThumbnail}
          alt="book image"
          sx={{ borderRadius: 1, mb: 2, cursor: 'pointer', objectFit: 'contain', minHeight: 208 }}
        />
      </Link>
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" component="p" fontWeight="600" gutterBottom noWrap title={book?.volumeInfo?.title}>
          {book?.volumeInfo?.title}
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" component="span" sx={{ maxWidth: 258, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={book?.volumeInfo?.authors?.toString()}>
            Autor: {book?.volumeInfo?.authors ? book?.volumeInfo?.authors?.toString() : 'Não informado'}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', columnGap: '8px', height: '64px' }}>
          {renderCategories()}
        </Box>
        <Rating name="read-only" value={book?.volumeInfo?.averageRating || 0} precision={0.5} readOnly />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
            {renderPrice()}
            <Button variant="outlined" sx={{ borderRadius: '8px' }}>
              <Link variant="h6" href={book.volumeInfo.previewLink} rel="noopener" target="_blank" sx={{ textDecoration: 'none', textTransform: 'capitalize' }}>Amostra Gratuita</Link>
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}