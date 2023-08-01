import { Box, Typography, Theme } from "@mui/material";

interface SummaryChartProps {
  handleSelectCategoryChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  category: string;
  dateRange: string;
  handleDateRangeChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  theme: Theme;
  Bar: any;
  barData: any;
  barChartOptions: any;
}

const SummaryChart = ({handleSelectCategoryChange, category, dateRange, handleDateRangeChange, theme, Bar, barData, barChartOptions}: SummaryChartProps) => {
  return (
    <Box sx={{backgroundColor: "white", border: "1px solid white", p: 1, borderRadius: "1rem", mb: 2 }}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 5}}>
        <Box sx={{display:"flex", justifyContent: "center", alignItems: "center"}}>
          <Typography variant="h6" sx={{color: "black"}}>
            Summary
          </Typography>

          <Box sx={{ minWidth: 80}}>
          <form>
            <select
              id="category"
              aria-label='category name'
              value={category}
              onChange={handleSelectCategoryChange}
              style={{backgroundColor: theme.palette.primary.variant, border: "1px white solid", borderRadius: "5px", padding: "3px", fontSize: "0.8rem",color: theme.palette.primary.main}}
            >              
              <option selected value="Sales">Sales</option>
              <option value="Order">Order</option>
            </select>
          </form>
        </Box>

        </Box>

        <Box sx={{ minWidth: 80, top: 0, right: 0, position: "relative" }}>
          <form>
            <select
              id="shop"
              aria-label='shop name'
              value={dateRange}
              onChange={handleDateRangeChange}
              style={{backgroundColor: "inherit", border: "1px white solid", borderRadius: "5px", padding: "3px", fontSize: "0.8rem"}}
            >              
              <option selected value="Last 7 Days">Last 7 Days</option>
              <option value="Last Month">Last Month</option>
            </select>
          </form>
        </Box>
      </Box>

      <Box sx={{width: "100%", overflowX:"scroll"}}>
        <Bar data={barData} />
      </Box> 
    </Box>
  )
}

export default SummaryChart;