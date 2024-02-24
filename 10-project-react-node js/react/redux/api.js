import axios from "axios"
import { errorUser, startUser, succesUser } from "./userSlice.js"
export  const addUser= async (user,dispatch)=>{
    dispatch(startUser())
    try{
   const res=await axios.post("http://localhost:5000/api/users",user)
   dispatch(succesUser(res.data))
    }catch(err){
        dispatch(errorUser())
    }
}