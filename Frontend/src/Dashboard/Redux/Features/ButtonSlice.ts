import { createSlice } from '@reduxjs/toolkit';

interface ButtonState {
  currentStep: number;
  formData: any;
}



export const buttonSlice = createSlice({
  name: 'FormButton',
  initialState: {
    currentStep: 0,
  } as ButtonState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    nextButton: (state) => {
      state.currentStep ++;
    },
    prevButton: (state) => {
      state.currentStep --;
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },


   
  },
});

export const { setCurrentStep, nextButton, prevButton,updateFormData} = buttonSlice.actions;

export default buttonSlice.reducer;
