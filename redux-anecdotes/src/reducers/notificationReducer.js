import { createSlice } from "@reduxjs/toolkit"
const notificationSlice=createSlice({
  name:'notification',
  initialState:'',
  reducers:{
    startNotification(state,action){
      state=action.payload
      return state
    },
    resetNotification(){
      return ''
    }
  }
})
export const { startNotification,resetNotification }=notificationSlice.actions
export const setNotification=(content,time)=>{
  return dispatch=>{
    dispatch(startNotification(content))
    setTimeout(()=>{dispatch(resetNotification())},time)
  }
}
export default notificationSlice.reducer