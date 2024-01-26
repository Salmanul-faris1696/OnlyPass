import { createSlice } from '@reduxjs/toolkit';

interface ButtonState {
  currentStep: number;
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
  },
});

export const { setCurrentStep, nextButton, prevButton } = buttonSlice.actions;

export default buttonSlice.reducer;
