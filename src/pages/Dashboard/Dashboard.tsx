import React, {useState} from 'react'
import { Box } from '@mui/system'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



import { useTheme } from '@mui/material/styles';

import {DrawerHeader} from './Style';
import ReportCard from '../../components/ReportCard/ReportCard';
import MarketingChart from '../../components/MarketingChart/MarketingChart';

const Dashboard = () => {
  const theme = useTheme();
  const [reportRange, setReportRange] = useState("This Week");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setReportRange(event.target.value as string)
  }

  const data = {
    salesData: {
      title: "Sales", 
      value: "N4,000,000.00",
      percentageChange: "",
      property1: "Volume",
      property1Value: "450",
      property1PercentageChange: "+20%",
    },

    customerData: {
      title: "Customers",
      value: "1,250",
      percentageChange: "+15.80%",
      property1: "Active",
      property1Value: "1,180",
      property1PercentageChange: "85%",

    },

    productData: {
      title: "All Products",
      value: "45",
      percentageChange: "",
      property1: "Active",
      property1Value: "32",
      property1PercentageChange: "+24%",
    },

    orderData: {
      title: "All Orders",
      value: "450",
      percentageChange: "",
      property1: "Pending",
      property1Value: "5",
      property1PercentageChange: "",
      property2: "Completed",
      property2Value: "445",
      property2PercentageChange: "",
    },

    abandonedCartData: {
      title: "Abandoned Cart",
      value: "20%",
      percentageChange: "+0.00",
      property1: "Customers",
      property1Value: "30"
    }

  }

  ChartJS.register(ArcElement, Legend);

  const chartData = {
    labels: ["Acquisition", "Purchase", "Retention"],
    datasets: [
      {
        label: "Marketing",
        data: [ 1250, 450, 900],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.primary.variant,
          theme.palette.secondary.main,
        ],
        borderColor: [
          theme.palette.primary.main,
          theme.palette.primary.variant,
          theme.palette.secondary.main,
        ],
        borderWidth: 1,
        backdropColor: "#e0e0e0",        
      },
    ]
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
        data={data.salesData}
        titleColor="gray"
        
      />
      <ReportCard 
        theme={theme}
        Icon={PeopleAltOutlinedIcon} 
        iconColor={theme.palette.primary.main}
        iconBgColor={theme.palette.secondary.variant} 
        cardBgColor="white" 
        reportRange={reportRange}
        handleChange={handleChange} 
        showRangeSelector={true} 
        data={data.customerData}
        titleColor="gray"
        
      />
      <ReportCard 
        theme={theme}
        Icon={Inventory2OutlinedIcon} 
        iconColor={theme.palette.primary.main}
        iconBgColor={theme.palette.primary.variant} 
        cardBgColor={theme.palette.primary.main}
        reportRange={reportRange}
        handleChange={handleChange} 
        showRangeSelector={false} 
        data={data.productData}
        titleColor="white"
        
      />

      <ReportCard 
        theme={theme}
        Icon={ShoppingCartOutlinedIcon} 
        iconColor={theme.palette.primary.main}
        iconBgColor={theme.palette.secondary.variant} 
        cardBgColor="white" 
        reportRange={reportRange}
        handleChange={handleChange} 
        showRangeSelector={true} 
        data={data.abandonedCartData}
        titleColor="red"
        
      />
      <ReportCard 
        theme={theme}
        Icon={ShoppingBagOutlinedIcon} 
        iconColor={theme.palette.primary.main}
        iconBgColor={theme.palette.secondary.variant} 
        cardBgColor="white" 
        reportRange={reportRange}
        handleChange={handleChange} 
        showRangeSelector={true} 
        data={data.orderData}
        titleColor="gray"
        
      />

      <MarketingChart
        Doughnut={Doughnut}
        chartData={chartData}
        handleChange={handleChange}
        reportRange={reportRange}
      />
    </Box>
  )
}

export default Dashboard