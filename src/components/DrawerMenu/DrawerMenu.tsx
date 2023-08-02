import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import {
  List, 
  Box, 
  Typography, 
  Divider, 
  IconButton, 
  ListItem, 
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@mui/material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


interface DrawerMenuProps {
  open: boolean;
  handleDrawerClose: () => void;
  drawerWidth: number;
  theme: Theme;
  setNavItem: React.Dispatch<React.SetStateAction<string>>;
}



const DrawerMenu = ({open, handleDrawerClose, theme, setNavItem, drawerWidth}: DrawerMenuProps) => {
  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "flex-end", mr: 2}}>
          <img src="images/metrix-logo.png" alt="logo" style={{width: '3rem'}} />
          <Typography variant="h6" noWrap component="div" sx={{ ml: 1 }}>
            Metrix
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerClose}>          
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {/* <Box sx={{display: "flex", flexDirection: "column", jusifyContent: "space-between", alignItems: "center"}}> */}

        <List sx={{mb: "10rem"}}>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                '&:hover': {  
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
                '&:focus': {
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
                '&:active': {
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                }
              }}
              onClick={() => setNavItem("Dashboard")}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <DashboardOutlinedIcon /> 
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                '&:hover': {  
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
                '&:focus': {
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
                '&:active': {
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
              }}
              // onClick={() => setNavItem("Orders")}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <ShoppingBagOutlinedIcon /> 
              </ListItemIcon>
              
              <ListItemText primary="Orders" sx={{ opacity: open ? 1 : 0 }} />
              <Avatar sx={{ bgcolor: theme.palette.secondary.variant, color:"black", fontSize: "0.8rem", width: "1.2rem", height: "1.2rem"}}>3</Avatar>
              
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                '&:hover': {  
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
                '&:focus': {
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
                '&:active': {
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
              }}
              // onClick={() => setNavItem("Customers")}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <PeopleAltOutlinedIcon /> 
              </ListItemIcon>
              <ListItemText primary="Customers" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                '&:hover': {  
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
                '&:focus': {
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
                '&:active': {
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
              }}
              // onClick={() => setNavItem("Inventory")}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Inventory2OutlinedIcon /> 
              </ListItemIcon>
              <ListItemText primary="Inventory" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                '&:hover': {  
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
                '&:focus': {
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
                '&:active': {
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
              }}
              onClick={() => setNavItem("Conversations")}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <TextsmsOutlinedIcon /> 
              </ListItemIcon>
              
              <ListItemText primary="Conversations" sx={{ opacity: open ? 1 : 0 }} />
              <Avatar sx={{ bgcolor: "#deb841", color:"black", fontSize: "0.8rem", width: "1.2rem", height: "1.2rem"}}>16</Avatar>
              
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                '&:hover': {  
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
                '&:focus': {
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
                '&:active': {
                  backgroundColor: theme.palette.primary.dark,
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  margin: "0 0.2rem",
                },
              }}
              
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <SettingsOutlinedIcon /> 
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          
        </List>
        {/* <Divider /> */}
        <List>        
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: open ? 2.5 : "auto",
                backgroundColor: "#ccc", 
                border: "1px solid white",
                borderRadius: "1rem",
                color: "black", 
                margin: "1rem 0.5rem",           
              }}
              // onClick={() => setNavItem("Settings")}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <SupportAgentOutlinedIcon />
                
              </ListItemIcon>
              <ListItemText secondary="Customer Support" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                backgroundColor: theme.palette.secondary.variant, 
                border: "1px solid white",
                borderRadius: "1rem",
                color: "black", 
                flexWrap: "wrap",  
                margin: "1rem 0.5rem",            
              }}
            >
            
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <CardGiftcardOutlinedIcon />
                
              </ListItemIcon>
              
              <ListItemText secondary="Free Gift Awaits You!" sx={{ opacity: open ? 1 : 0 }} />
            
              <ListItemText secondary="Upgrade your account" sx={{ opacity: open ? 1 : 0 }} />
              <ListItemText secondary={<ChevronRightIcon />} sx={{ opacity: open ? 1 : 0 }} />  
          
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,               
                border: "1px solid white",
                borderRadius: "5px",
                color: "red",
                margin: "1rem 0.5rem",
              }}
            >
              
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <LogoutOutlinedIcon sx={{color:"red"}} />
                
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
              
            </ListItemButton>
          </ListItem>
        
        </List>
      {/* </Box> */}
    </Drawer>
  )
}

export default DrawerMenu