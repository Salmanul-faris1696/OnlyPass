import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'


enum GENDER  {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}

interface FacilitiesSatate {
  facility: boolean;
  gender?: GENDER;
  basicInfo: {
    gymName: string;
    ownerName:string;
    emailAddress:string;
    phoneNumber:number;
    websiteURL:string;
    logo:string;
    description:string;
    images:[string]
  };
 
}

const initialState: FacilitiesSatate = {
  facility: false,
  gender: GENDER.MALE,
  basicInfo: {
    gymName: "",
    ownerName:"",
    emailAddress:"",
    phoneNumber:0,
    websiteURL:"",
    logo:"",
    description:"",
    images:[""]
  },
  
}

export const FacilitySlice = createSlice({
  name: 'Facility',
  initialState,
  reducers: {

  },
})

export const {} = FacilitySlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default FacilitySlice.reducer