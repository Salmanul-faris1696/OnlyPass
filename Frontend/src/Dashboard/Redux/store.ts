import { configureStore } from '@reduxjs/toolkit'
import buttonReducer from '../Redux/Features/ButtonSlice';
import facilityReducer from '../Redux/Features/FacilityFeature/FacilititySlice';


export const store = configureStore({
  reducer: {
    button: buttonReducer,
    facility: facilityReducer
    
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch