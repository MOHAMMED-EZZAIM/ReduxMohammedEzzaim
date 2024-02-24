// userSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
//start
//succes
//error
//createAsyncThunk hadi raha deyale redux toolkit ou mohima bezaffl b5iti te3yti 3eliha
//5ask darori dispatch
export const addUser=createAsyncThunk("user/addUser",async (user)=>{
  const res=await axios.post('http://localhost:5000/api/users',user)
  console.log(res.data)
  return res.data
})
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData:{
      name: "",
      email: "",
    },
    loading:null,
    error:false
  },
  reducers: {
    succesUser:(state,action)=>{
    state.userData=action.payload
     state.loading=false
    },
    extreReducer:{
      [addUser.pending]:(state)=>{
        state.loading=true
      },
      [addUser.fulfilled]:(state,action)=>{
              state.userData=action.payload;
              state.error=true
              state.loading=false
                 }
    }
  },

});

export const { startUser,succesUser,errorUser } = userSlice.actions;
export default userSlice.reducer;

