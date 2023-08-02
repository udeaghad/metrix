import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {DrawerHeader} from './Style';
import { useAppSelector, useAppDispatch } from '../../Hooks/storeHooks';
import { sendMessage } from '../../features/contacts/contacts';
import Contacts from '../../components/Contacts/Contacts';

const Conversations = () => {
  const dispatch = useAppDispatch();
  const { contacts } = useAppSelector(state => state.contacts);
  const theme = useTheme();

  const [contactSearchTerm, setContactSearchTerm] = useState("");

  const contactSearchResults = contacts.filter((contact) =>{
    if (!contactSearchTerm.length) return contact;
    return contact.name.toLowerCase().includes(contactSearchTerm.toLowerCase());
  })

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 2, backgroundColor: "#e0e0e0"}}>
      <DrawerHeader /> 

      <Typography variant="h4" component="h1" gutterBottom>
        Conversations with Customers
      </Typography>


      <Contacts 
        contacts={contactSearchResults} 
        setContactSearchTerm={setContactSearchTerm}
        theme={theme}
      />
    </Box>

  )
}

export default Conversations;