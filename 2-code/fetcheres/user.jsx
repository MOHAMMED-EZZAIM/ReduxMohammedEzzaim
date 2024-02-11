import {createSlice} from '@reduxjs/toolkit'
const  userSlice=createSlice({
    name:"souSotck1",
    initialState:{
        value:{
            Nom:"",
            Prenom:"",
            Prenom:""}},
    reducers:{
       enterValue:(donner,action)=>{
            donner.value=action.payload
        },
        suprimervalue:(state)=>{
                state.value={Nom:"",Prenom:"",Email:""}
        }
        }
    })
    export const {enterValue,suprimervalue}=userSlice.actions
    export default userSlice.reducer 