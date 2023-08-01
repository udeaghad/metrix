import React from 'react'
import {Box, Typography} from '@mui/material';
import { Theme } from '@mui/material/styles';

interface ReportcardProps {
  Icon:  any;
  theme: Theme;
  iconColor: string;
  iconBgColor: string;
  cardBgColor: string;
  reportRange: string;
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  showRangeSelector: boolean;
  titleColor: string;
  data: {
    title: string;
    value: string;
    percentageChange?: string;
    property1?: string;
    property1Value?: string;
    property1PercentageChange?: string;
    property2?: string;
    property2Value?: string;
    property2PercentageChange?: string;
  }
}

const ReportCard = ({Icon, iconColor, iconBgColor, cardBgColor, reportRange, handleChange, showRangeSelector, data, titleColor}: ReportcardProps) => {

  return (
    <Box sx={{backgroundColor: cardBgColor, border: "1px solid white", p: 1, borderRadius: "1rem", mb: 2 }}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 5}}>

        <Box 
          sx={{
            backgroundColor: iconBgColor, 
            border: "1px solid white", 
            borderRadius: "0.5rem", 
            width: "2rem", 
            placeItem: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: 0,
            left: 0,
            padding: 1
          }}>
         <Icon sx={{color: iconColor, fontSize: "1rem" }}/>
        </Box>
  
        {showRangeSelector &&
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
        }
      </Box>

      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Box sx={{width: "50%"}}>          
          <Typography variant="caption" sx={{ flexGrow: 1, color: titleColor }}>{data.title}</Typography>
          <Box sx={{display: "flex", gap: "2px", justifyContent: "center", alignItems: "center"}}>
            <Typography variant="subtitle1" sx={{ flexGrow: 1, color: cardBgColor === "white" ? "black" : "white"}}>{data.value}</Typography>
            <Typography variant="caption" sx={{ flexGrow: 1, color: cardBgColor === "white" ? "green" : "white" }}>{data.percentageChange}</Typography>
          </Box>         
          
        </Box>

        <Box sx={{width: "23%"}}>
          <Typography variant="caption" sx={{ flexGrow: 1, color: cardBgColor === "white" ? "gray" : "white" }}>{data.property1}</Typography>
          <Box sx={{display: "flex", gap: "2px", justifyContent: "center", alignItems: "center"}}>
            <Typography variant="subtitle1" sx={{ flexGrow: 1, color: cardBgColor === "white" ? "black" : "white"}}>{data.property1Value}</Typography>
            <Typography variant="caption" sx={{ flexGrow: 1, color: cardBgColor === "white" ? "green" : "white" }}>{data.property1PercentageChange}</Typography>
          </Box> 
        </Box>

        <Box sx={{width: "22%"}}>
          <Typography variant="caption" sx={{ flexGrow: 1, color: titleColor }}>{data.property2}</Typography>
          <Box sx={{display: "flex", gap: "2px", justifyContent: "center", alignItems: "center"}}>
            <Typography variant="subtitle1" sx={{ flexGrow: 1, color: cardBgColor === "white" ? "black" : "white"}}>{data.property2Value}</Typography>
            <Typography variant="caption" sx={{ flexGrow: 1, color: cardBgColor === "white" ? "green" : "white" }}>{data.property2PercentageChange}</Typography>
          </Box> 
        </Box>
      </Box>

    </Box>
  )
}

export default ReportCard