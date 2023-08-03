import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  DrawerHeader,
  StyledResponsiveConversation,
  StyledResponsiveContactCard,
  StyledResponsiveChatBox
} from './Style';
import { useAppSelector, useAppDispatch } from '../../Hooks/storeHooks';
import { sendMessage } from '../../features/contacts/contacts';
import Contacts from '../../components/Contacts/Contacts';
import Chat from '../../components/Chat/Chat';
import {ulid} from 'ulid';

const Conversations = () => {
  const dispatch = useAppDispatch();
  const { contacts: {contacts}, orders: {orders} } = useAppSelector(state => state);
  const theme = useTheme();

  const [contactSearchTerm, setContactSearchTerm] = useState("");

  const contactSearchResults = contacts.filter((contact) =>{
    if (!contactSearchTerm.length) return contact;
    return contact.name.toLowerCase().includes(contactSearchTerm.toLowerCase());
  })

  const [chatContact, setChatContact] = useState(contacts[0]);

  const [chatMessage, setChatMessage] = useState<any[]>([]);

  useEffect(() => {    
    if (!chatContact) return;
    const chat = contacts.find(contact => contact.id === chatContact.id);
    if (!chat) return;
    setChatMessage(chat.messages);    
  }, [chatContact, contacts] )

  const [messageInput, setMessageInput] = useState("")

  const handleMessageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setMessageInput(e.target.value);
  }

  const handleSendMessage = () => { 
    if (!messageInput) return;  
    const message = {
     id: ulid(),
     content: messageInput,
     time: "2.00 pm",
    }
    dispatch(sendMessage({id: chatContact.id, message}))  
    setMessageInput("")  
  }

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 2, backgroundColor: "#e0e0e0"}}>
      <DrawerHeader /> 

      <Typography variant="subtitle1" gutterBottom>
        Conversations with Customers
      </Typography>

      <StyledResponsiveConversation>

      <StyledResponsiveContactCard>
        <Contacts 
          contacts={contactSearchResults} 
          setContactSearchTerm={setContactSearchTerm}
          theme={theme}
          setChatContact={setChatContact}
        />
      </StyledResponsiveContactCard>

      <StyledResponsiveChatBox>
        <Chat
          theme={theme}
          chatContact={chatContact}
          orders={orders[0]}
          handleMessageInput={handleMessageInput}
          handleSendMessage={handleSendMessage}
          messageInput={messageInput}
          chatMessage={chatMessage}
        />
      </StyledResponsiveChatBox>

      </StyledResponsiveConversation>
    </Box>


  )
}

export default Conversations;