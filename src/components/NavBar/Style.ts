import { styled } from '@mui/material/styles';
import { Box} from '@mui/material';

export const StyledNavItem = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('tablet')]: {
    display: 'block',
  },
}));

export const StyledMobileNavItem = styled(Box)(({ theme }) => ({
  display: "flex", 
  justifyContent: "space-between", 
  alignItems: "center",
  [theme.breakpoints.up('tablet')]: {
    width: "100%",
  }
}))
  