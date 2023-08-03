import { Theme } from "@mui/material/styles";
import { Box, Typography, Button, Drawer, IconButton } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
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
  messageInput: string;
  chatMessage: any[]
}

const Chat = ({theme, chatContact, orders, handleSendMessage, handleMessageInput, messageInput, chatMessage}: ChatProps) => {
  return (
    <Box sx={{backgroundColor: "white", border: "1px solid white", p: 1, borderRadius: "1rem", mb: 2 }}>
      <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 1, width: "100%", mb: 1}}>
        <Box sx={{width: "5rem"}}>
          <img src={chatContact.image} alt={chatContact.name} style={{width: "100%", border: "1px solid inherit", borderRadius: 5}}/>
        </Box>

        <Box sx={{display: "flex", flexDirection: "column", width: "100%", justifyContent: "space-between"}}>
          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Typography variant="body2" sx={{color: "black", fontWeight: "bold"}}>
              {chatContact.name}
            </Typography>

            <Box sx={{display: "flex", gap: "3px", justifyContent: "flex-start", alignItems: "center"}}>
              <Box>
                {chatContact.unReadMsgCount === 1 &&
                  <Box sx={{backgroundColor: theme.palette.secondary.variant, border: "1px solid inherit", borderRadius:1, px: "5px", width:"100%"}}>
                    <Typography sx={{fontSize: "0.7rem"}}>
                      New Customer
                    </Typography>
                </Box>
                }
              </Box>            
              <Button variant="text" sx={{color: theme.palette.primary.main, fontSize: "0.7rem", textTransform: "none"}} >
                View Profile
              </Button>
            </Box>

          </Box>

          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Box sx={{display: "flex", justifyContent: "flex-start", alignItmes: "center", gap: "5px"}}> 
              {chatContact.online ? 
                <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
                  <CircleIcon sx={{color: theme.palette.primary.main, fontSize: "0.5rem"}} />
                  <Typography variant="caption" sx={{color: "#bdbdbd"}}>
                    Online
                  </Typography>              
                </Box> 
              : 
              <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
                <CircleIcon sx={{color: theme.palette.secondary.main, fontSize: "0.5rem"}} />
                <Typography variant="caption" sx={{color: "#bdbdbd"}}>
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
              <ShoppingBagOutlinedIcon sx={{fontSize:"3px"}}/>
              <Typography variant="caption" sx={{color: "#bdbdbd"}}>
                0 Orders
              </Typography>

            </Box>
          </Box>

        </Box>

      </Box>

      <Drawer />

      <Box sx={{borderTop: "1px solid #bdbdbd",pt: 2}}>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <Typography variant="caption" sx={{backgroundColor: "#e0e0e0", border: "1px solid inherit", borderRadius: 2, p:1, mb: 2, textAlign:"center" }}>
            12 August 2022
          </Typography>
        </Box>
        <Box sx={{display: "flex", width: "70%", justifyContent: "flex-start", alignItems: "center", borderBottom: "1px gray solid", mb:2, pb:1 }}>
          <Box sx={{width: "3.4rem", border: "1px solid #bdbdbd", borderRadius: 2, mr: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img src={orders.image} alt={orders.name} style={{width: "3rem", border: "1px solid inherit", borderRadius: "10px"}}/>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
            <Box sx={{width: "100%", mb: 1}}>
              <Typography variant="body2" sx={{color: "black"}}>
                {orders.name}
              </Typography>
            </Box>

            <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "center", gap:1}}>
              <Typography variant="caption" sx={{color: "black", fontWeight: "bold"}}>
                {orders.price}
              </Typography>
              <Typography variant="caption" sx={{color: "gray", fontSize: "10px"}}>
                <span style={{color: theme.palette.primary.main}}>12</span> in Stock
              </Typography>
            </Box>
            
          </Box>
        </Box>

        <Box sx={{width: "100%"}}>
          {chatMessage.map((message) => (
            <Box 
              key={message.id}
              sx={{                
                display: "flex",
                flexDirection: "column",                
                justifyContent: "flex-start",                
                alignItems: message.status === "sent" ? "flex-start" : message.status === "received" ? "flex-end" : null
              }}
            >
              <Box
                sx={{
                  backgroundColor: message.status === "sent" ? theme.palette.primary.main : message.status === "received" ? theme.palette.secondary.main : null,
                  border: "1px solid inherit",
                  borderRadius: message.status === "sent" ? "1rem 1rem 1rem 0" : message.status === "received" ? "1rem 1rem 0 1rem" : null,
                  p: 2,
                  width: "60%",
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
                  <CheckCircleIcon sx={{color: theme.palette.secondary.main,fontSize: "1rem"}} />
                }               
              </Box>
            </Box>
          ))}

        </Box>

        <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "center", border: "1px solid #e0e0e0", borderRadius: 2, p: "5px", mt: 1}}>
          <Box 
            sx={{
              backgroundColor: theme.palette.secondary.variant, 
              width: "3rem", 
              border: "1px solid inherit", 
              borderRadius: 1, 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center",
              py: "5px",
              mr: "2px",
              }}
            >
            <AddOutlinedIcon sx={{fontSize: "1.5rem", color: "black"}}/>            
          </Box>

          <input 
            type="text" 
            placeholder="Your message" 
            onChange={handleMessageInput}
            value={messageInput}
            style={{height: "80%", border: "none", outline: "none", fontSize: "1rem", color: "black", width: "80%"}}
            />

          <IconButton>
            < EmojiEmotionsOutlinedIcon sx={{color: theme.palette.primary.main}}/>
          </IconButton>

          <Button 
            sx={{
              backgroundColor: theme.palette.secondary.variant, 
              border: "1px inherit solid", 
              borderRadius: 2, 
              display: "flex", 
              justifyContent: "flex-start", 
              alignItems: "center", 
              gap: "3px",
              p: 1,              
              color: "black",
              textTransform: "none",                           
            }}
            onClick={handleSendMessage}
          >
            Send 
            <SendIcon sx={{fontSize: "1rem"}} />
          </Button>

        </Box>

      </Box>


    </Box>
  )
}
export default Chat;
