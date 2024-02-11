import {createSlice} from '@reduxjs/toolkit'
export const userSlice=createSlice({
    name:"user",
    initialState:{value:{email:"",nom:"",prenom:"",Adress:""}},
    reducers:{
        login:(donner,action)=>{
            donner.value=action.payload
        },
        desLogin:(donner)=>{
            donner.value={email:"",nom:"",prenom:"",Adress:""}
        }
    },
});
export const {login}=userSlice.actions
export const {desLogin}=userSlice.actions
export default userSlice.reducer
