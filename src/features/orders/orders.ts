import { createSlice } from '@reduxjs/toolkit';

interface Order {
  orders: {
    id: number;
    name: string;
    price: string;
    status: string;
    date: string;
    image: string;
    quantity: number;

  }[]
}


const initialState: Order = {
  orders: [
    { id: 1, name: "Iphone 13", price: "N730,000.00 x 1", status: "Pending", date: "12 Sept 2022", image: "images/black-phone.png", quantity: 1,},
    { id: 2, name: "Iphone 13", price: "N730,000.00 x 1", status: "Completed", date: "12 Sept 2022", image: "images/gold-phone.png", quantity: 1,},
  ],
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {}
});

export default ordersSlice.reducer;