import { styled } from '@mui/material/styles';


export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const StyledResponsiveConversation = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: 15,    
  },
}));

export const StyledResponsiveContactCard = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    gridColumn: '1 / 2',    
  },
}));

export const StyledResponsiveChatBox = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    gridColumn: '2 / 3',    
  },
}));