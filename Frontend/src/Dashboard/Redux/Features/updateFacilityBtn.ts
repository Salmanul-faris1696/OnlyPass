import { createSlice } from '@reduxjs/toolkit';

export interface UpdateBtnState {
  basicUpdateBtn: boolean;
  locationUpdateBtn: boolean;
  membershipUpdatebtn: boolean;
  timeUpdatebtn: boolean;
  amenitiesUpdateBtn: boolean;
  EquipmentUpdateBtn: boolean;
}
const initialState: UpdateBtnState = {
  basicUpdateBtn: false,
  locationUpdateBtn: false,
  membershipUpdatebtn: false,
  timeUpdatebtn: false,
  amenitiesUpdateBtn: false,
  EquipmentUpdateBtn: false
};

export const UpdateFacilityBtnSlice = createSlice({
  name: 'UpdateFacilities',
  initialState,
  reducers: {
    setBasicUpdateBtn: (state, action) => {
      state.basicUpdateBtn = action.payload;
    },
    setLocationUpdateBtn: (state, action) => {
      state.locationUpdateBtn = action.payload;
    },
    setMembershipUpdateBtn: (state, action) => {
      state.membershipUpdatebtn = action.payload;
    },
    setTimeUpdatebtn: (state, action) => {
      state.timeUpdatebtn = action.payload;
    },
    setAmenitiesUpdateBtn: (state, action) => {
      state.amenitiesUpdateBtn = action.payload;
    },
    setEquipmentUpdateBtn: (state, action) => {
      state.EquipmentUpdateBtn = action.payload;
    }
  }
});

export const {
  setBasicUpdateBtn,
  setLocationUpdateBtn,
  setMembershipUpdateBtn,
  setTimeUpdatebtn,
  setAmenitiesUpdateBtn,
  setEquipmentUpdateBtn
} = UpdateFacilityBtnSlice.actions;

export default UpdateFacilityBtnSlice.reducer;
