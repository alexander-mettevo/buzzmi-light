import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    phone: '',
    identifier: '',
  },

  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.identifier = action.payload.identifier;
    }
  }
})

export default userSlice.reducer;
export const {setUser} = userSlice.actions;