import { Theme } from "@mui/material/styles";
import { Box, Typography, Button, Drawer, IconButton } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddLinkIcon from '@mui/icons-material/AddLink';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import SendIcon from '@mui/icons-material/Send';
import React from "react";

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

  interface Order {
    orders: {
      id: number;
      name: string;
      price: string;
      status: string;
      date: string;
      image: string;
      quantity: number;
  
    }[]
  }


interface ChatProps {
  theme: Theme;
  chatContact: Contact["contacts"][0];
  orders: Order["orders"][0];
  handleSendMessage: () => void;
  handleMessageInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Chat = ({theme, chatContact, orders, handleSendMessage, handleMessageInput}: ChatProps) => {
  return (
    <Box sx={{backgroundColor: "white", border: "1px solid white", p: 1, borderRadius: "1rem", mb: 2 }}>
      <Box>
        <img src={chatContact.image} alt={chatContact.name} style={{width: "1rem", border: "1px solid inherit", borderRadius: "10px"}}/>
      </Box>

      <Box>
        <Box>
          <Typography variant="body1" sx={{color: "black"}}>
            {chatContact.name}
          </Typography>

          <Box>
            <Box sx={{backgroundColor: theme.palette.secondary.main, border: "1px inherit solid", borderRadius: 2, p:2}}>
              {chatContact.messages.length === 1 &&
                <Typography variant="body2">
                  New Customer
                </Typography>
              }
            </Box>            
            <Button variant="outlined" sx={{color: theme.palette.primary.main}} >
              View Profile
            </Button>
          </Box>

        </Box>

        <Box>
          <Box>
            {chatContact.online ? 
              <Box>
                <CircleIcon sx={{color: theme.palette.primary.main}} />
                <Typography variant="caption" sx={{color: "gray"}}>
                  Online
                </Typography>              
              </Box> 
            : 
            <Box>
              <CircleIcon sx={{color: theme.palette.secondary.main}} />
              <Typography variant="caption" sx={{color: "gray"}}>
                Offline
              </Typography>
            </Box>
            }

            <Box>
              <Typography variant="caption" sx={{color: "gray"}}>
                {chatContact.messages[chatContact.messages.length - 1].time}
              </Typography>
            </Box>
          </Box>

          <Box sx={{display: "flex", justifyContent: "center",alignItems: "center", gap: 1}}>
            <ShoppingBagOutlinedIcon />
            <Typography variant="caption" sx={{color: "gray"}}>
              0 Orders
            </Typography>

          </Box>
        </Box>

      </Box>

      <Drawer />

      <Box>
        <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "center", width: "70%", borderBottom: "1px gray solid", }}>
          <img src={orders.image} alt={orders.name} style={{width: "1rem", border: "1px solid inherit", borderRadius: "10px"}}/>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
            <Typography variant="body1" sx={{color: "black"}}>
              {orders.name}
            </Typography>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", gap:5}}>
              <Typography variant="caption" sx={{color: "gray"}}>
                {orders.price}
              </Typography>
              <Typography variant="caption" sx={{color: "gray"}}>
                <span style={{color: theme.palette.primary.main}}>12</span> in Stock
              </Typography>
            </Box>
            
          </Box>
        </Box>

        <Box>
          {chatContact.messages.map((message) => (
            <Box 
              key={message.id}
              sx={{                
                display: "flex",
                flexDirection: "column",
                justifyContent: message.status === "sent" ? "flex-start" : message.status === "received" ? "flex-end" : null,
                alignItems: "center"
              }}
            >
              <Box
                sx={{
                  backgroundColor: message.status === "sent" ? theme.palette.primary.main : message.status === "received" ? theme.palette.secondary.main : null,
                  border: "1px solid inherit",
                  borderRadius: message.status === "sent" ? "1rem 1rem 0 1rem" : message.status === "received" ? "1rem  0 1rem 1rem 1rem" : null,
                  p: 2,
                }}
              
              >
                <Typography variant="body2" 
                  sx={{
                    color: message.status === "sent" ? "white": message.status === "received" ? "black" : null
                    }}
                  >
                  {message.content}
                </Typography> 
              </Box>
              <Box sx={{display: "flex"}}>
                <Typography variant="caption" sx={{color: "gray"}}>
                  {message.time}
                </Typography>
                {
                  message.status === "received" &&                  
                  <CheckCircleIcon sx={{color: theme.palette.secondary.main}} />
                }               
              </Box>
            </Box>
          ))}

        </Box>

        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Button sx={{backgroundColor: theme.palette.secondary.main, border: "1px inherit solid", borderRadius: 5, width: "10%"}}>
            <AddOutlinedIcon />            
          </Button>

          <input type="text" placeholder="Your message"  style={{width: "60%"}} onChange={handleMessageInput}/>

          <IconButton>
            < EmojiEmotionsOutlinedIcon sx={{color: theme.palette.primary.main}}/>
          </IconButton>

          <Button 
            sx={{
              backgroundColor: theme.palette.secondary.main, 
              border: "1px inherit solid", 
              borderRadius: 5, 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              gap: 1,
              p: 1,
              width: "30%"
            }}
            onClick={handleSendMessage}
          >
            Send 
            <SendIcon />
          </Button>

        </Box>

      </Box>


    </Box>
  )
}
export default Chat;
