import { DECREMENT, INCREMENT, INC_BY_VALUE, IncrementBy5NV } from "../action/types.js"
const counterReducer=(state={count:0},action={
    value:3
})=>{
    switch(action.type){
        case INCREMENT:
           return {count:state.count +1}
        case DECREMENT: 
        return {count:state.count -1}

        case "IncrementBy5":
            return {count:state.count+5}

        case IncrementBy5NV:return {count:state.count+5}
        
        case INC_BY_VALUE:
            return {
      count:state.count+ Number(action.value) 
        }
        default :
          return state
    }
}
export default counterReducer