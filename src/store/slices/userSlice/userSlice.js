import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    phone: '',
    identifier: '',
    registration: {
      role: '',
      creators: [],
    }
  },

  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.identifier = action.payload.identifier;
    },
    setRegistrationData: (state, action) => {
      state.registration.role = action.payload.role;
    }
  }
})

export default userSlice.reducer;
export const {setUser, setRegistrationData} = userSlice.actions;