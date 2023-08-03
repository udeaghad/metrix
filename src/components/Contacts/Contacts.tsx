import { Box, Typography, Avatar, Drawer } from "@mui/material";
import { Theme } from "@mui/material/styles";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CircleIcon from '@mui/icons-material/Circle';
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

interface ContactsProps {
  contacts: Contact["contacts"];
  setContactSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  theme: Theme;
  setChatContact: React.Dispatch<React.SetStateAction<Contact["contacts"][0]>>
}

const Contacts = ({contacts, setContactSearchTerm, theme, setChatContact}: ContactsProps) => {
  return (
    <Box sx={{backgroundColor: "white", border: "1px solid white", borderRadius: "1rem", mb: 2 }}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", m: 2}}>
        <Typography variant="subtitle2">
          Contacts
        </Typography>

        <Typography variant="body2">
          {contacts.length}
        </Typography>
      </Box>

      <Box 
        sx={{
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          border: "1px gray solid", 
          borderRadius: 2, 
          height: "2.5rem", 
          m: 1,
          p:1
          }}
        >
        <SearchOutlinedIcon />
        <input 
          type="text" 
          placeholder="Search" 
          onChange={(e) => setContactSearchTerm(e.target.value)} 
          style={{border: "none", height: "100%", fontSize: "1rem", width: "100%", outline: "none"}}/>
      </Box>

      <Box sx={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems: "center", gap: 1}}>
        {contacts.map((contact) => (
          <Box key={contact.id} 
            sx={{
              display: "flex", 
              justifyContent: "flex-start", 
              p: 1,
              alignItems: "center", 
              gap: 1,
              width: "100%",
              "&:hover": {
                backgroundColor: "#eceff1", cursor: "pointer", borderRight: `2px solid ${theme.palette.primary.main}`
              },
              "&:focus": {
                backgroundColor: "#eceff1", cursor: "pointer", borderRight: `2px solid ${theme.palette.primary.main}`
              },
              "&:active": {
                backgroundColor: "#eceff1", cursor: "pointer", borderRight: `2px solid ${theme.palette.primary.main}`
              } 
            }}
            onClick={() => setChatContact(contact)}
          >
            <Box sx={{position: "relative", width: "5rem"}}>
              {contact.online ? 
                <CircleIcon sx={{color: theme.palette.primary.main, width: "0.8rem", height: "0.8rem", position: "absolute", top: 0, right: 0,  zIndex: 5}}/>
                :
                <CircleIcon sx={{color: theme.palette.secondary.variant, width: "0.8rem", height: "0.8rem", position: "absolute", top: 0, right: 0, zIndex: 5}}/>
              } 
              <img src={contact.image} alt={contact.name} style={{width: "100%", border: "1px solid inherit", borderRadius: 5, zIndex: 1}}/>
            </Box>

            <Box sx={{display: "flex", flexDirection: "column"}} >
              <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Typography variant="subtitle2" sx={{color: "black", fontWeight: "bold"}}>
                  {contact.name}
                </Typography>
                <Box>
                  {contact.unReadMsgCount === 1 && 
                    <Box sx={{backgroundColor: theme.palette.secondary.variant, border: "1px solid inherit", borderRadius:1, px: "5px"}}>
                      <Typography sx={{fontSize: "0.8rem"}}>
                        New
                      </Typography>
                    </Box>
                  }  

                  {contact.unReadMsgCount > 1 &&
                    <Avatar sx={{ bgcolor: theme.palette.secondary.main, color:"black", fontSize: "0.8rem", width: "1.3rem", height: "1.3rem"}}>
                      {contact.unReadMsgCount}
                    </Avatar>                  
                  }       
                </Box>
              </Box>

              <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                {contact.messages[contact.messages.length - 1].content.length > 32 ?
                  <Typography variant="body2" sx={{color: "gray", textAlign: "left"}}>
                    {contact.messages[contact.messages.length - 1].content.split("").slice(0, 32).join("") + "..."}
                  </Typography>
                  :
                  <Typography variant="body2" sx={{color: "gray", textAlign: "left"}}>
                    {contact.messages[contact.messages.length - 1].content}
                  </Typography>
                }
                <Typography variant="caption" sx={{color: "gray", width: "30%"}}>
                  {contact.messages[contact.messages.length - 1].time}
                </Typography>
              </Box>

            </Box>
          </Box>
        ))}
      </Box>


    </Box>
  )
}

export default Contacts