import { styled } from '@mui/material/styles';
import { Box} from '@mui/material';

export const StyledNavItem = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));