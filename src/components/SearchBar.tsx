import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TextField, InputAdornment, Button } from "@mui/material";

interface SearchbarProps {
  searchTerm: string;
  placeholder: string;
  onSearchChange: (term: string) => void;
  onSearchSubmit: () => void;
}

export const Searchbar = ({ searchTerm, onSearchChange, placeholder, onSearchSubmit }: SearchbarProps) => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder={placeholder}
      slotProps={{
        input: {
          sx: { borderRadius: '16px' },
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon sx={{ color: '#3358ff' }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              <Button variant='contained' sx={{ borderRadius: '12px', fontSize: { xs: '12px', lg: '14px' } }} onClick={onSearchSubmit}>
                Pesquisar
              </Button>
            </InputAdornment>
          )
        }
      }}
      sx={{
        fontSize: { xs: '12px', lg: '14px' },
        backgroundColor: 'white',
        borderRadius: '16px',
        maxWidth: '40rem',
        boxSizing: 'border-box',
        borderColor: '#3358ff',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#3358ff',
          },
          '&:hover fieldset': {
            borderColor: 'blue.dark',
          },
        },
      }}
    />
  );
};