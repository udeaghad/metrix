import React, { useState } from 'react';
import { useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from './components/NavBar/NavBar';

const App = () => {

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const [navItem, setNavItem] = useState("Dashboard");

  const drawerWidth = 200;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [shop, setShop] = useState("Nanny's Shop");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setShop(event.target.value as string)
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <NavBar 
        handleChange={handleChange}
        shop={shop}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        navItem={navItem}
        drawerWidth={drawerWidth}
        theme={theme}

      />

    </Box>
  );
}

export default App;
