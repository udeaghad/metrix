import { Box, Typography } from "@mui/material";
interface MarketingChartProps {
  Doughnut: any;
  chartData: any;
  reportRange: string;
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const MarketingChart = ({chartData, Doughnut, reportRange, handleChange}: MarketingChartProps) => {

  return (
    <Box sx={{backgroundColor: "white", border: "1px solid white", p: 1, borderRadius: "1rem", mb: 2 }}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 5}}>
        <Typography variant="h6" sx={{color: "black"}}>
          Marketing
        </Typography>

        <Box sx={{ minWidth: 80, top: 0, right: 0, position: "relative" }}>
          <form>
            <select
              id="shop"
              aria-label='shop name'
              value={reportRange}
              onChange={handleChange}
              style={{backgroundColor: "inherit", border: "1px white solid", borderRadius: "5px", padding: "3px", fontSize: "0.8rem"}}
            >              
              <option selected value="This Week">This Week</option>
              <option value="This Month">This Month</option>
            </select>
          </form>
        </Box>
      </Box>

      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Box sx={{width: "15rem"}}>
          <Doughnut data={chartData} />
        </Box>    

      </Box>


    </Box>
  )
}

export default MarketingChart;