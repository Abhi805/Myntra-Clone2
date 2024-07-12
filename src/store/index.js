import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice.js"


const myntraStore = configureStore({
    reducer:{
items:itemsSlice.reducer,
fetchStatus:fetchStatusSlice.reducer,
    }
});

export default myntraStore;