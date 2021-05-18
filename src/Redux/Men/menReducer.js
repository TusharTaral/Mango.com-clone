import { GETDATA_SUCCESS } from "./actionType"

const initState={
    data:[]
}
export const menReducer=(state=initState,action)=>
{
    const {type,payload}=action

    switch(type){
        case GETDATA_SUCCESS:
            return{
                ...state,
                data:payload
            }
            default:
                return state

        }
}
