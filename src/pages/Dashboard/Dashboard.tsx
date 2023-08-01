import React, {useState} from 'react'
import { Box } from '@mui/system'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Chart as ChartJS, ArcElement, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';



import { useTheme } from '@mui/material/styles';

import {DrawerHeader} from './Style';
import ReportCard from '../../components/ReportCard/ReportCard';
import MarketingChart from '../../components/MarketingChart/MarketingChart';
import SummaryChart from '../../components/SummaryChart/SummaryChart';

const Dashboard = () => {
  const theme = useTheme();
  const [reportRange, setReportRange] = useState("This Week");
  const [category, setCategory] = useState("Sales");
  const [dateRange, setDateRange] = useState("Last 7 days");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setReportRange(event.target.value as string)
  }

  const handleSelectCategoryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string)
  }

  const handleDateRangeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDateRange(event.target.value as string)
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

  ChartJS.register(ArcElement, Legend, CategoryScale, LinearScale, BarElement);

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

  const barChartOptions = {
    responsive: true,
  };

  const barData = {
    labels: ["Sept 10", "Sept 11", "Sept 12", "Sept 13", "Sept 14", "Sept 15", "Sept 16"],
    datasets: [
      {
        label: '',
        data: [ 90, 40, 70, 20, 80, 50, 80],
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        borderWidth: 1,
        barThickness: 7,
        borderRadius: 5,
        maxBarThickness: 7,
        backdropColor: "#e0e0e0"
      },
    ],
  };
  

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

      <SummaryChart 
        theme={theme}
        handleSelectCategoryChange={handleSelectCategoryChange}
        category={category}
        handleDateRangeChange={handleDateRangeChange}
        dateRange={dateRange}
        Bar={Bar}
        barData={barData}
        barChartOptions={barChartOptions}
      
      />
    </Box>
  )
}

export default Dashboard