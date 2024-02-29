import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from '../Redux/Features/ButtonSlice';
import facilityReducer from '../Redux/Features/FacilityFeature/FacilititySlice';
import updateBtnReducer from './Features/updateFacilityBtn';

export const store = configureStore({
  reducer: {
    button: buttonReducer,
    facility: facilityReducer,
    updateFacilities: updateBtnReducer 
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
