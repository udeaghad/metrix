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

      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", gap: 1 }}>
        {orders.map((order) => (
          <Box key={order.id}>
            <Box>
              <img src={order.image} alt={order.name} />
            </Box>

            <Box>
              <Box>
                <Typography variant="body1" sx={{color: "black"}}>
                  {order.name}
                </Typography>
                <Typography variant="body2" sx={{color: "gray"}}>
                  {order.date}
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" sx={{color: "black"}}>
                  {order.price}
                </Typography>
                <Box sx={{backgroundColor: order.status === "Pending" ? "#ffcdd2" : order.status === "Completed" ? "#c8e6c9" : null, border: "1px inherit solid", borderRadius: 5 }}>
                  <Typography variant="body2" sx={{color: order.status === "Pending" ? "#f44336" : order.status === "Completed" ? "#4caf50" : null}}>
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