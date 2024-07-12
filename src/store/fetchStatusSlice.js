import {createSlice} from "@reduxjs/toolkit";


const fatchStatusSlice = createSlice({
     name:"fetchstatus",
     initialState: {
        fetchDone:false,
        currentlyFetching:false,
     },    
     reducers:{
        markFetchDone:(state)=>{
            return state.fetchDone=true;
        },
        markFetchingStarted:(state)=>{
            return state.currentlyFetching=true;
        },
        markFetchingFinished:(state)=>{
            return state.currentlyFetching=false ;
        }
     }
});  

export const fatchStatusAction = fatchStatusSlice.actions;

export default fatchStatusSlice;

