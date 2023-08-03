import { styled} from '@mui/material/styles';

// const theme = useTheme();

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const StyledResponsiveDashboard = styled('div')(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  [theme.breakpoints.up('tablet')]: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 15,
    rowGap: 0,
    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  },
  [theme.breakpoints.up('laptop')]: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 50px',
    columnGap: 15,
    rowGap: 0,
    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
  }
}));

export const StyledResponsiveSalesCard = styled('div')(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up('tablet')]: {
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
  },
  [theme.breakpoints.up('laptop')]: {
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
  }
}));

export const StyledResponsiveCustomerCard = styled('div')(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up('tablet')]: {
    gridColumn: '2 / 3',
    gridRow: '1 / 2',
  },
  [theme.breakpoints.up('laptop')]: {
    gridColumn: '2 / 3',
    gridRow: '1 / 2',
  }
}));

export const StyledResponsiveMarketingCard = styled('div')(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up('tablet')]: {
    gridColumn: '1 / 2',
    gridRow: '2/ 4',
  },
  [theme.breakpoints.up('laptop')]: {
    gridColumn: '1 / 2',
    gridRow: '2/ 4',
  }
}));

export const StyledResponsiveProductCard = styled('div')(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up('tablet')]: {
    gridColumn: '2 / 3',
    gridRow: '2/ 3',
  },
  [theme.breakpoints.up('laptop')]: {
    gridColumn: '2 / 3',
    gridRow: '2/ 3',
  }
}));

export const StyledResponsiveAbandonedCard = styled('div')(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up('tablet')]: {
    gridColumn: '2 / 3',
    gridRow: '3/ 4',
  },
  [theme.breakpoints.up('laptop')]: {
    gridColumn: '2 / 3',
    gridRow: '3/ 4',
  }
}));

export const StyledResponsiveSummaryCard = styled('div')(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up('tablet')]: {
    gridColumn: '1 / 3',
    gridRow: '4/ 6',
  },
  [theme.breakpoints.up('laptop')]: {
    gridColumn: '1 / 3',
    gridRow: '4/ 6',
  }
}));

export const StyledResponsiveOrderCard = styled('div')(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up('tablet')]: {
    gridColumn: '1 / 2',
    gridRow: '6/ 7',
  },
  [theme.breakpoints.up('laptop')]: {
    gridColumn: '3 / 5',
    gridRow: '1/ 2',
  }
}));

export const StyledResponsiveRecentOrderCard = styled('div')(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up('tablet')]: {
    gridColumn: '2 / 3',
    gridRow: '6/ 7',
    overflow: 'scroll',
  },
  [theme.breakpoints.up('laptop')]: {
    gridColumn: '3 / 5',
    gridRow: '2/ 6',
    overflow: 'scroll',
  }
}));