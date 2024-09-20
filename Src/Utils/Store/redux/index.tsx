import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    loggedin:false,
    accesstoken:null as string | null
};

const auth = createSlice({
    name:'Authentication',
    initialState,
    reducers:{
        logedIn:(state,action:PayloadAction<{accesstoken:string}>) =>{
                state.loggedin=true
                state.accesstoken=action.payload.accesstoken;
        },
        logedOut:(state)=>{
                state.loggedin=false
                state.accesstoken=null
        }         
    }
})



 export const { logedIn, logedOut } = auth.actions;
 export default auth.reducer
