import { styled, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';

import { StyledNavItem } from './Style';


interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  handleChange?: (event: React.ChangeEvent<{ value: unknown }>) => void;
  shop?: string;
  navItem?: string;
  handleDrawerOpen?: () => void;
  drawerWidth?: number;
  theme?: Theme;
}



const NavBar = ({handleChange, shop, open, navItem, handleDrawerOpen, drawerWidth, theme }: AppBarProps) => {
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  return (
    <AppBar position="fixed" open={open} sx={{backgroundColor: "white"}}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 2,
            ...(open && { display: 'none' }),
            // backgroundColor: "#6528f7",
          }}
        >
          {/* <MenuIcon /> */}
          <img src="images/metrix-logo.png" alt="logo" style={{width: '3rem'}} />
        </IconButton>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <StyledNavItem>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
              {navItem}
            </Typography>
          </StyledNavItem>

          <Box sx={{display:"flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginLeft: "1rem"}}>
            <Box sx={{ minWidth: 120 }}>
              <form>
                <select
                  id="shop"
                  aria-label='shop name'
                  value={shop}
                  onChange={handleChange}
                  style={{backgroundColor: "#f2ee9d", border: "1px #eeeeee solid", borderRadius: "5px", padding: "3px", fontSize: "1rem"}}
                >              
                  <option selected value="Nanny\'s Shop">Nanny's Shop</option>
                  <option value="Ella\'s Shop">Ella's Shop</option>
                </select>
              </form>
            </Box>

            <Badge badgeContent={2} color="success">
              <NotificationsIcon sx={{color: "#6528f7"}} />
            </Badge>

            <Box>
              <Avatar 
                alt="photo" src="https://material-ui.com/static/images/avatar/1.jpg"               
                variant="rounded"
              />
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;