import { createSlice } from "@reduxjs/toolkit"
const notificationSlice=createSlice({
  name:'notification',
  initialState:'test',
  reducers:{
    setNotification(state,action){
      state=action.payload
      return state
    },
    resetNotification(){
      return ''
    }
  }
})
export const { setNotification,resetNotification }=notificationSlice.actions
export default notificationSlice.reducer