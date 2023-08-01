import { Box, Typography } from "@mui/material";

const RecentOrders = () => {
  return (
    <Box sx={{backgroundColor: "white", border: "1px solid white", p: 1, borderRadius: "1rem", mb: 2 }}>
      <Typography variant="h6" sx={{color: "black"}}>
        Recent Orders
      </Typography>
    </Box>
  )

}

export default RecentOrders;