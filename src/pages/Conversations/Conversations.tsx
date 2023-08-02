import React from 'react';
import { Box } from '@mui/material';
import {DrawerHeader} from './Style';

const Conversations = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 2, backgroundColor: "#e0e0e0"}}>
      <DrawerHeader /> 

      <Typography variant="h4" component="h1" gutterBottom>
        Conversations with Customers
      </Typography>
    <Box>
  )
}

export default Conversations