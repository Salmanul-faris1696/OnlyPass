import { configureStore } from '@reduxjs/toolkit'
import buttonReducer from '../Redux/Features/ButtonSlice';
import facilityReducer from '../Redux/Features/FacilityFeature/FacilititySlice';
import editBtnReducer from "../Redux/Features/EditFacilityBtn"


export const store = configureStore({
  reducer: {
    button: buttonReducer,
    facility: facilityReducer,
    editFacilities:editBtnReducer
    
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch