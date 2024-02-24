// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
//start
//succes
//error

export const userSlice = createSlice({
  name: 'name-quelconque',
  initialState: {
    userData:{
      name: "",
      email: "",
    },
    loading:null,
    erro:false
  },
  reducers: {
    addUser: (state, action) => {
  
      state.userData.name = action.payload.name;
      state.userData.email = action.payload.email;

    },
    startUser: (sate)=>{
      sate.loading=true;
    },
    succesUser:(state,action)=>{
     state.userData.name=action.payload.name
     state.userData.email=action.payload.email
     state.loading=false
    }
  },
  errorUser:(state)=>{
    state.loading=false;
    state.error=true
  }
});

export const { addUser,startUser,succesUser,errorUser } = userSlice.actions;
export default userSlice.reducer;
