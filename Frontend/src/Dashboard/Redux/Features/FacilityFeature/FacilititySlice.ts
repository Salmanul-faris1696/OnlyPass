// import { createSlice } from '@reduxjs/toolkit';
// import type { RootState } from '../../store';

// // enum GENDER  {
// //     MALE = "MALE",
// //     FEMALE = "FEMALE",
// //     OTHER = "OTHER"
// // }

// export interface FacilitiesState {
//   facility_type: string;
//   gender:string
//   tier:string
//     facilityName: string;
//     contactPerson:string;
//     emailAddress:string;
//     phoneNumber:number;
//     websiteURL:string;
//     logoUrl:string;
//     description:string;
//     images:string[]

// }

// const initialState: FacilitiesState = {
//   facility_type: "",
//   gender:"",
//   tier:"",
//     facilityName: "",
//     contactPerson:"",
//     emailAddress:"",
//     phoneNumber:0,
//     websiteURL:"",
//     logoUrl:"",
//     description:"",
//     images:[]

// }

// export const FacilitySlice = createSlice({
//   name: 'facility',
//   initialState,
//   reducers: {
//       addData :(state,action) => {
//         console.log("redux data" ,action.payload);

//         // console.log("data22" , {...state});
//         Object.keys(action.payload).forEach((key) => {
//           const value = action.payload[key];
//           console.log({key},{value});

//           // Use type casting to handle the type mismatch
//           console.log("keyof :",key as keyof FacilitiesState);

//           console.log("hasownpro :",state.hasOwnProperty(key as keyof FacilitiesState));
//           if (state.hasOwnProperty(key as keyof FacilitiesState)) {

//             if (typeof value === 'object' && !Array.isArray(value)) {
//               // If the value is an object, handle it appropriately (nested structure)
//               console.log("existing state");

//               state[key as keyof FacilitiesState] = {
//                 ...(state[key as keyof FacilitiesState] as Record<string, unknow>),
//                 ...value,
//               };
//               if(value === state.images ){
//                 state.images.push(action.payload.images)
//               }
//             } else {
//               console.log("new state");
//               // Otherwise, update the field with the new value
//               state[key as keyof FacilitiesState] = value;
//             }
//           }
//         });

//        },

//   },

// })

// export const {addData} = FacilitySlice.actions
// export default FacilitySlice.reducer

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";


export interface FacilitiesState {
  facility_type: string;
  gender: string;
  tier: string;
  facilityName: string;
  contactPerson: string;
  emailAddress: string;
  phoneNumber: string;
  websiteURL: string;
  logoUrl: string;
  description: string;
  images: string[];
  address: string;
  pin_code: string;
  country: string;
  state: string;
  latitude_longitude: string;
  admission_fee: string;
  daily_pass: string;
  monthly_pass: string;
  threeMonth_pass: string;
  sixMonth_pass: string;
  annual_pass: string;
  other:string
  equipments_id: any[];
  amenities:any[]
}

const initialState: FacilitiesState = {
  facility_type: "",
  gender: "",
  tier: "",
  facilityName: "",
  contactPerson: "",
  emailAddress: "",
  phoneNumber: "",
  websiteURL: "",
  logoUrl: "",
  description: "",
  images: [],
  address: "",
  pin_code: "",
  state: "",
  country: "",
  latitude_longitude: "",
  admission_fee: "",
  daily_pass: "",
  monthly_pass: "",
  threeMonth_pass: "",
  sixMonth_pass: "",
  annual_pass: "",
  other:"",
  equipments_id: [],
  amenities:[]
};

export const FacilitySlice = createSlice({
  name: "facility",
  initialState,
  reducers: {
    addData: (
      state,
      // action: PayloadAction<Partial<FacilitiesState>>
      action: PayloadAction<Partial<any>>
    ) => {
      console.log("niyad" , action.payload);
      
      const payloadKeys = Object.keys(action.payload) as Array<
        keyof FacilitiesState
      >; // Type assertion
      payloadKeys.forEach((key) => {
        if (key !== "images" && key !== "equipments_id") {
          state[key] = action.payload[key]!;
        }
      });
      if (action.payload.images) {
        state.images = state.images.concat(action.payload.images);
      }

      if(action.payload.equipments_id) {
      if (!state.equipments_id.includes(action.payload.equipments_id)) {
        // console.log(action.payload.equipments_id);
        // console.log("not include");

        state.equipments_id.push(action.payload.equipments_id);
      } else {
        console.log("include");
        const index = state.equipments_id.indexOf(action.payload.equipments_id);
        state.equipments_id.splice(index, 1);
      }
    }
  },
  setTier :(state ,action) => {
    console.log(action.payload);
    
    state.tier = action.payload
  },
  setAmenties: (state, action) => {
    if (action.payload && action.payload.amenities_id) {
      const existingIndex = state.amenities.findIndex(
        (item:any) => item.amenities_id === action.payload.amenities_id
      );
  
      if (existingIndex === -1 && action.payload.Paid !== false) {
        // If amenity not present and Paid is not false, add it to the array
        state.amenities.push(action.payload);
      } else if (existingIndex !== -1 && action.payload.Paid !== false) {
        // If amenity already present and Paid is not false, replace the existing data
        state.amenities[existingIndex] = action.payload;
      } else if (existingIndex !== -1 && action.payload.Paid === false) {
        // If amenity already present and Paid is false, remove the existing data
        state.amenities.splice(existingIndex, 1);
      }
    }
  }
 },
});

export const { addData,setTier,setAmenties } = FacilitySlice.actions;
export default FacilitySlice.reducer;
