import { createSlice } from '@reduxjs/toolkit'
export const TokenSlice = createSlice({
  name: 'Tok',
  initialState: {
    tokenSet: "",
  },
  reducers: {
   tokenData: (state,action) =>{
    state.tokenSet = action.payload.access
   }
   
  }
})
// Action creators are generated for each case reducer function
export const { tokenData} = TokenSlice.actions
export default TokenSlice.reducer