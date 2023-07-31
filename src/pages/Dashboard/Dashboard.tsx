import React, {useState} from 'react'
import { Box } from '@mui/system'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';

import { useTheme } from '@mui/material/styles';

import {DrawerHeader} from './Style';
import ReportCard from '../../components/ReportCard/ReportCard';

const Dashboard = () => {
  const theme = useTheme();
  const [reportRange, setReportRange] = useState("This Week");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setReportRange(event.target.value as string)
  }

  const salesData = {
    title: "Sales", 
    value: "N4,000,000.00",
    percentageChange: "",
    property1: "Volume",
    property1Value: "450",
    property1PercentageChange: "+20%",
  }
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 2, backgroundColor: "#e0e0e0"}}>
      <DrawerHeader /> 
      <ReportCard 
        theme={theme}
        Icon={PieChartOutlineOutlinedIcon} 
        iconColor={theme.palette.primary.main}
        iconBgColor={theme.palette.primary.variant} 
        cardBgColor="white" 
        reportRange={reportRange}
        handleChange={handleChange} 
        showRangeSelector={true} 
        data={salesData}
        titleColor="gray"
        
      />
    </Box>
  )
}

export default Dashboard