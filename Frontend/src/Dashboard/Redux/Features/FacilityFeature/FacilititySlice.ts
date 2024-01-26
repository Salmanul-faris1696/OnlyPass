import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';


enum GENDER  {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}

interface FacilitiesState {
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
    images:string[]
  };
 
}

const initialState: FacilitiesState = {
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
      addData :(state,action) => {
        console.log({paylod: action.payload});
        // state = action.payload
       },
     
  },
})

export const {addData} = FacilitySlice.actions
export default FacilitySlice.reducer