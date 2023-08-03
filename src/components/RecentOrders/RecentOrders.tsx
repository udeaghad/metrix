import { Box, Typography, Divider } from "@mui/material";
import { Theme } from '@mui/material/styles';

interface RecentOrdersProps {
  theme: Theme;
  orders: {
    id: number;
    name: string;
    price: string;
    status: string;
    date: string;
    image: string;
    quantity: number;
  }[];
}

const RecentOrders = ({theme, orders}: RecentOrdersProps) => {
  return (
    <Box sx={{backgroundColor: "white", border: "1px solid white", p: 1, borderRadius: "1rem", mb: 2 }}>
      <Typography variant="h6" sx={{color: "black", textAlign: "left"}}>
        Recent Orders
      </Typography>

      <Box sx={{display: "flex", flexDirection: "column", width: "100%", gap: 2 }}>
        {orders.map((order) => (
          <Box key={order.id} sx={{display: "flex", justifyContent: "flex-start", width: "100%", borderBottom: "1px solid #e0e0e0"}}>
            
            <img src={order.image} alt={order.name} style={{width: "4rem", border: "1px solid inherit", borderRadius: "10px" }}/>            

            <Box sx={{display: "flex", flexDirection: "column", width: "100%", justifyContent: "space-between", alignItems: "center", mb: 2}}>
              <Box sx={{display: "flex", flexDirection: "row", width: "100%",justifyContent: "space-between", alignItems: "center", mb: 2, mt:1}}>
                <Typography variant="body2" sx={{color: "black"}}>
                  {order.name}
                </Typography>
                <Typography variant="caption" sx={{color: "gray"}}>
                  {order.date}
                </Typography>
              </Box>

              <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
                <Typography variant="subtitle2" sx={{color: "black", fontWeight: "bold"}}>
                  {order.price} x 1
                </Typography>
                <Box 
                  sx={{backgroundColor: order.status === "Pending" ? "#ffcdd2" : order.status === "Completed" ? "#c8e6c9" : null,
                    border: "1px inherit solid", 
                    borderRadius: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: "2px 5px",
                   }}>
                    <Typography variant="caption" sx={{color: order.status === "Pending" ? "#f44336" : order.status === "Completed" ? "#4caf50" : null}}>
                      {order.status}
                    </Typography>
                </Box>
              </Box>
            </Box>

            <Divider />

          </Box>
        ))}
        

      </Box>
    </Box>
  )

}

export default RecentOrders;