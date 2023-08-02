import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { constants } from 'buffer';

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
    contacts: [
      { 
        id: 1, 
        name: "Janet Doe", 
        image: "images/black-phone.png", 
        online: true,
        unReadMsgCount: 1, 
        readMsgCount: 1,
        messages: [
          { id: 1, 
            status: "sent", 
            time: "12:55 am", 
            content: "Hello, I want to make enquiries about your product", 
            receiver: "Customer care", 
            sender: "Me", 
            msgRead: true,
          },
          { id: 2, 
            status: "received", 
            time: "12:58 am", 
            content: "Hello Janet, thank you for reaching out", 
            receiver: "Me", 
            sender: "Customer care",
            msgRead: true,
          },
          { id: 2, 
            status: "received", 
            time: "01:00 pm", 
            content: "Hello Janet, thank you for reaching out", 
            receiver: "Me", 
            sender: "Customer care", 
            msgRead: true,
          },
          { id: 3, 
            status: "sent", 
            time: "01:02 9m", 
            content: "What do you need to know?", 
            receiver: "Customer care", 
            sender: "Me", 
            msgRead: true,
          },
        ]        
      },
      {
        id: 1, 
        name: "Janet Adebayo", 
        image: "images/black-phone.png", 
        online: true, 
        unReadMsgCount: 1, 
        readMsgCount: 0,
        messages: [
          { id: 1, 
            status: "sent", 
            time: "12:55 am", 
            content: "Hello, I want to make enquiries about your product", 
            receiver: "Customer care", 
            sender: "Me",             
            msgRead: false, 
          },
        ] 
      },
      {
        id: 1, 
        name: "Kunle Adekunle", 
        image: "images/black-phone.png", 
        online: false, 
        unReadMsgCount: 0, 
        readMsgCount: 0,
        messages: [
          { id: 1, 
            status: "sent", 
            time: "12:55 am", 
            content: "Hello, I want to make enquiries about your product", 
            receiver: "Customer care", 
            sender: "Me",             
            msgRead: false, 
          },
        ] 
      },
    ],
  }

  const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
      sendMessage: (state, action: PayloadAction<any>) => {
        state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return {
              ...contact, 
              messages: [
                ...contact.messages, 
                {
                  id: action.payload.message.id, 
                  status: "sent", 
                  time: action.payload.message.time, 
                  content: action.payload.message, 
                  receiver: "Customer care", 
                  sender: "Me", 
                  msgRead: false,
                }
              ]
            }
          }
        });
      }
    }
  });

  export default contactsSlice.reducer;



  