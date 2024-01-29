import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import axios from 'axios';


// enum GENDER  {
//     MALE = "MALE",
//     FEMALE = "FEMALE",
//     OTHER = "OTHER"
// }

export interface FacilitiesState {
  facility_type: string;
  gender:string
  tier:string
    facilityName: string;
    contactPerson:string;
    emailAddress:string;
    phoneNumber:number;
    websiteURL:string;
    logoUrl:string;
    description:string;
    images:string[]
 
}

const initialState: FacilitiesState = {
  facility_type: "",
  gender:"",
  tier:"",
    facilityName: "",
    contactPerson:"",
    emailAddress:"",
    phoneNumber:0,
    websiteURL:"",
    logoUrl:"",
    description:"",
    images:[]
  
}

export const FacilitySlice = createSlice({
  name: 'facility',
  initialState,
  reducers: {
      addData :(state,action) => {
        console.log("redux data" ,action.payload);
        // // console.log("redux ddd" ,action.payload.facility_Type);
        // // if(action.payload[action.payload.facility_type])
        // // state = action.
        // state.facility_type = action.payload.facility_type,
        // state.gender = action.payload.gender,
        // state.tier =action.payload.tier,
        // state.basicInfo.facilityName = action.payload.facility_Name;
        // state.basicInfo.contactPerson = action.payload.contact_person;
        // state.basicInfo.emailAddress = action.payload.email;
        // state.basicInfo.phoneNumber = action.payload.phone_number;
        // state.basicInfo.websiteURL = action.payload.webLink;
        // state.basicInfo.logo =action.payload.logo;
        // state.basicInfo.description =action.payload.desc;
        // state.basicInfo.images = action.payload.images;

        // console.log("data22" , {...state});
        Object.keys(action.payload).forEach((key) => {
          const value = action.payload[key];
          console.log({key},{value});
          
      
          // Use type casting to handle the type mismatch
          console.log("keyof :",key as keyof FacilitiesState);
          
          console.log("hasownpro :",state.hasOwnProperty(key as keyof FacilitiesState));
          if (state.hasOwnProperty(key as keyof FacilitiesState)) {
            
            if (typeof value === 'object' && !Array.isArray(value)) {
              // If the value is an object, handle it appropriately (nested structure)
              console.log("existing state");
              
              state[key as keyof FacilitiesState] = {
                ...(state[key as keyof FacilitiesState] as Record<string, unknow>),
                ...value,
              };
            } else {
              console.log("new state");
              // Otherwise, update the field with the new value
              state[key as keyof FacilitiesState] = value;
            }
          }
        });
        
       },
     
  },
  

})




export const {addData} = FacilitySlice.actions
export default FacilitySlice.reducer