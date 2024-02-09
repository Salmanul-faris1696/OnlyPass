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
  equipments: any[];
  amenities:any[],
  facilityTimes: {
    day: string
    morning: {
      start: string,
      end: string,
    },
    evening: {
      start: string,
      end: string,
    },
    holiday: boolean,
    fullDay: boolean,
  }[]
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
  state: "India",
  country: "Kerala",
  latitude_longitude: "",
  admission_fee: "",
  daily_pass: "",
  monthly_pass: "",
  threeMonth_pass: "",
  sixMonth_pass: "",
  annual_pass: "",
  other:"",
  equipments: [],
  amenities:[],
  facilityTimes:[
    {
      day:"Monday",
      morning: {
        start:"",
        end:""
      },
      evening: {
        start:"",
        end:""
      },
      holiday: false,
      fullDay: false

    },
    {
      day:"Tuesday",
      morning: {
        start:"",
        end:""
      },
      evening: {
        start:"",
        end:""
      },
      holiday: false,
      fullDay: false

    },
    {
      day:"Wednesday",
      morning: {
        start:"",
        end:""
      },
      evening: {
        start:"",
        end:""
      },
      holiday: false,
      fullDay: false

    },
    {
      day:"Thursday",
      morning: {
        start:"",
        end:""
      },
      evening: {
        start:"",
        end:""
      },
      holiday: false,
      fullDay: false

    },
    {
      day:"Friday",
      morning: {
        start:"",
        end:""
      },
      evening: {
        start:"",
        end:""
      },
      holiday: false,
      fullDay: false

    },
    {
      day:"Saturday",
      morning: {
        start:"",
        end:""
      },
      evening: {
        start:"",
        end:""
      },
      holiday: false,
      fullDay: false

    },
    {
      day:"Sunday",
      morning: {
        start:"",
        end:""
      },
      evening: {
        start:"",
        end:""
      },
      holiday: false,
      fullDay: false

    },
  ]
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
        if (key !== "images" ) {
          state[key] = action.payload[key]!;
        }
      });
      if (action.payload.images) {
        state.images = state.images.concat(action.payload.images);
      }
  },
  setTier :(state ,action) => {
    console.log(action.payload);
    
    state.tier = action.payload
  },
  setAmenties: (state, action) => {
    if (action.payload && action.payload.amenities_name) {
      const existingIndex = state.amenities.findIndex(
        (item:any) => item.amenities_name === action.payload.amenities_name
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
  },

  setEquipments: (state, action) => {
    const { equipment_id, equipment_name, equipment_img } = action.payload;

    // Check if the equipment with the given ID already exists
    const existingEquipmentIndex = state.equipments.findIndex(
      (equipment) => equipment.equipment_id === equipment_id
    );

    if (existingEquipmentIndex !== -1) {
      // If exists, remove it
      state.equipments = state.equipments.filter(
        (equipment) => equipment.equipment_id !== equipment_id
      );
    } else {
      // If not exists, add it
      state.equipments.push({
        equipment_id,
        equipment_name,
        equipment_img,
      });
    }

    console.log("Equipments", state.equipments);
  },
 },
});

export const { addData,setTier,setAmenties,setEquipments } = FacilitySlice.actions;
export default FacilitySlice.reducer;
