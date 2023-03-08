import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalName: '',
    modalProps: {},
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalName = action.payload.modalName;
      state.modalProps = action.payload.modalProps;
    },
    closeModal: (state) => {
      window.localStorage.removeItem('dataToModal');
      state.isOpen = false;
      state.modalName = '';
      state.modalProps = {};
    },
  },
});

export default modalSlice.reducer;
export const {openModal, closeModal} = modalSlice.actions;