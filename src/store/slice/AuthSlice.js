import { createSlice } from '@reduxjs/toolkit'
export const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    usersName: "",
    usersEmail:"",
    isLoggedIn:false,
  },
  reducers: {
   login: (state,action) =>{
    state.usersName= action.payload.user_name
    state.usersEmail= action.payload.email
    state.isLoggedIn=action.payload.is_verified
   },
   logout :(state)=>{
    state.usersName= ""
    state.usersEmail= "" 
    state.isLoggedIn=false 
   }
  }
})
// Action creators are generated for each case reducer function
export const { login,logout} = AuthSlice.actions

export default AuthSlice.reducer