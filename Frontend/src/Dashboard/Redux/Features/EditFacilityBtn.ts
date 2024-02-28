import { createSlice } from '@reduxjs/toolkit';

export interface editBtnState {
  basicEditBtn: boolean;
  locationEditBtn: boolean;
  membershipEditbtn: boolean;
  timeEditbtn: boolean;
  amenitiesEditBtn: boolean;
  EquipmentEditBtn: boolean;
}
const initialState: editBtnState = {
  basicEditBtn: false,
  locationEditBtn: false,
  membershipEditbtn: false,
  timeEditbtn: false,
  amenitiesEditBtn: false,
  EquipmentEditBtn: false
};

export const editFacilityBtnSlice = createSlice({
  name: 'editFacilities',
  initialState,
  reducers: {
    setBasicEditBtn: (state, action) => {
      state.basicEditBtn = action.payload;
    },
    setLocationEditBtn: (state, action) => {
      state.locationEditBtn = action.payload;
    },
    setMembershipEditBtn: (state, action) => {
      state.membershipEditbtn = action.payload;
    },
    setTimeEditbtn: (state, action) => {
      state.timeEditbtn = action.payload;
    },
    setAmenitiesEditBtn: (state, action) => {
      state.amenitiesEditBtn = action.payload;
    },
    setEquipmentEditBtn: (state, action) => {
      state.EquipmentEditBtn = action.payload;
    }
  }
});

export const {
  setBasicEditBtn,
  setLocationEditBtn,
  setMembershipEditBtn,
  setTimeEditbtn,
  setAmenitiesEditBtn,
  setEquipmentEditBtn
} = editFacilityBtnSlice.actions;

export default editFacilityBtnSlice.reducer;
