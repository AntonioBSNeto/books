import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TextField, InputAdornment } from "@mui/material";

interface SearchbarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const Searchbar = ({ searchTerm, onSearchChange }: SearchbarProps) => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Buscar livro"
      slotProps={{
        input: {
          sx: { borderRadius: '16px' },
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon sx={{ color: '#3358ff' }} />
            </InputAdornment>
          )
        }
      }}
      sx={{
        backgroundColor: 'white',
        borderRadius: '16px',
        marginX: 'auto',
        maxWidth: '80rem',
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