import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Contact {
  contacts: {
    id: number;
    name: string;  
    image: string;
    online: boolean; 
    unReadMsgCount: number;
    readMsgCount: number;   
    messages: {
        id: number;                
        status: "sent" | "received",
        time: string;        
        content: string;
        receiver: string;
        sender: string;        
        msgRead: boolean;   
      }[]
      
    }[] 
  } 

  const initialState: Contact = {
    contacts: []
  }

  const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
      addContacts: (state, action: PayloadAction<any>) => ({...state, contacts: action.payload}),
      sendMessage: (state, action: PayloadAction<any>) => ({
        ...state, 
        contacts: state.contacts.map((contact: any) => {
          if(contact.id === action.payload.id) {
            return {
              ...contact,
              unreadMsgCount: contact.unreadMsgCount + 1,
              messages: [
                ...contact.messages,
                {
                  id: action.payload.message.id,
                  status: "received",
                  time: action.payload.message.time,
                  content: action.payload.message.content,
                  receiver: "Me",
                  msgRead: false,
                  sender: "Customer care",
                }
              ]
            }
          }
          return contact;
      }), 
    }),   
  }});

  export const { addContacts, sendMessage } = contactsSlice.actions;

  export default contactsSlice.reducer;



  