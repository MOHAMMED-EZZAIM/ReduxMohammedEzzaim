import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    count:0
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmout:(state,action)=>{
     state.count+=Number(action.payload)
    // console.log(action)
    //  console.log(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,incrementByAmout } = counterSlice.actions
export default counterSlice.reducer