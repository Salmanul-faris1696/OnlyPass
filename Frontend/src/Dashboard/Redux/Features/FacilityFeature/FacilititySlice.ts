import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';


enum GENDER  {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}

interface FacilitiesState {
  facility_type: string;
  gender?: GENDER;
  basicInfo: {
    facilityName: string;
    contactPerson:string;
    emailAddress:string;
    phoneNumber:number;
    websiteURL:string;
    logo:string;
    description:string;
    images:string[]
  };
 
}

const initialState: FacilitiesState = {
  facility_type: "",
  gender: GENDER.MALE,
  basicInfo: {
    facilityName: "",
    contactPerson:"",
    emailAddress:"",
    phoneNumber:0,
    websiteURL:"",
    logo:"",
    description:"",
    images:[""]
  },
  
}

export const FacilitySlice = createSlice({
  name: 'facility',
  initialState,
  reducers: {
      addData :(state,action) => {
        state.facility_type = action.payload,
        state.basicInfo.images = action.payload;



        // console.log({paylod: action.payload});
        // state = action.payload
        console.log("playload image : " , state.basicInfo.images);
        
       },
     
  },
  

})




export const {addData} = FacilitySlice.actions
export default FacilitySlice.reducer