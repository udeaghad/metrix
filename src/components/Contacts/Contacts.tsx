import { Box, Typography, Avatar } from "@mui/material";
import { Theme } from "@mui/material/styles";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
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
}

const Contacts = ({contacts, setContactSearchTerm, theme}: ContactsProps) => {
  return (
    <Box sx={{backgroundColor: "white", border: "1px solid white", p: 1, borderRadius: "1rem", mb: 2 }}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Typography variant="h6">
          Contacts
        </Typography>

        <Typography variant="body2">
          {contacts.length}
        </Typography>
      </Box>

      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", border: "1px gray solid", borderRadius: 3}}>
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search" onChange={(e) => setContactSearchTerm(e.target.value)} />
      </Box>

      <Box sx={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems: "center", gap: 2}}>
        {contacts.map((contact) => (
          <Box key={contact.id} 
            sx={{
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
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
          >
            <img src={contact.image} alt={contact.name} style={{width: "1rem", border: "1px solid inherit", borderRadius: "10px"}}/>

            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} >
              <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Typography variant="body1" sx={{color: "black"}}>
                  {contact.name}
                </Typography>
                <Box>
                  {contact.unReadMsgCount === 1 && 
                    <Box sx={{backgroundColor: theme.palette.secondary.variant, border: "1px solid inherit", borderRadius:5, p: 2}}>
                      <Typography variant="body2">
                        New
                      </Typography>
                    </Box>
                  }  

                  {contact.unReadMsgCount > 1 &&
                    <Avatar sx={{ bgcolor: theme.palette.secondary.variant, color:"black", fontSize: "0.8rem", width: "1.3rem", height: "1.3rem"}}>
                      {contact.unReadMsgCount}
                    </Avatar>                  
                  }       
                </Box>
              </Box>

              <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                {contact.messages[contact.messages.length - 1].content.length > 32 ?
                  <Typography variant="body2" sx={{color: "gray"}}>
                    {contact.messages[contact.messages.length - 1].content.split("").slice(0, 32).join("") + "..."}
                  </Typography>
                  :
                  <Typography variant="body2" sx={{color: "gray"}}>
                    {contact.messages[contact.messages.length - 1].content}
                  </Typography>
                }
                <Typography variant="body2" sx={{color: "gray"}}>
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