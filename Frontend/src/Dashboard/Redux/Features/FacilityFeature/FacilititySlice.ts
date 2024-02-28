import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  other: string;
  equipments: any[];
  amenities: any[];
  facilityTiming: {
    day: string;
    morning: {
      start: string;
      end: string;
      holiday: boolean;
    };
    evening: {
      start: string;
      end: string;
      holiday: boolean;
    };
    // fullDay: boolean;
  }[];
}

const initialState: FacilitiesState = {
  facility_type: 'access',
  gender: '',
  tier: '',
  facilityName: '',
  contactPerson: '',
  emailAddress: '',
  phoneNumber: '',
  websiteURL: '',
  logoUrl: '',
  description: '',
  images: [],
  address: '',
  pin_code: '',
  state: 'India',
  country: 'Kerala',
  latitude_longitude: '',
  admission_fee: '',
  daily_pass: '',
  monthly_pass: '',
  threeMonth_pass: '',
  sixMonth_pass: '',
  annual_pass: '',
  other: '',
  equipments: [],
  amenities: [],
  facilityTiming: [
    {
      day: 'Monday',
      morning: {
        start: '6:00 am',
        end: '11:00 am',
        holiday: false
      },
      evening: {
        start: '4:00 pm',
        end: '11:30 pm',
        holiday: false
      }
      // fullDay: false,
    },
    {
      day: 'Tuesday',
      morning: {
        start: '6:00 am',
        end: '11:00 am',
        holiday: false
      },
      evening: {
        start: '4:00 pm',
        end: '11:30 pm',
        holiday: false
      }
      // fullDay: false,
    },
    {
      day: 'Wednesday',
      morning: {
        start: '6:00 am',
        end: '11:00 am',
        holiday: false
      },
      evening: {
        start: '4:00 pm',
        end: '11:30 pm',
        holiday: false
      }
      // fullDay: false,
    },
    {
      day: 'Thursday',
      morning: {
        start: '6:00 am',
        end: '11:00 am',
        holiday: false
      },
      evening: {
        start: '4:00 pm',
        end: '11:30 pm',
        holiday: false
      }
      // fullDay: false,
    },
    {
      day: 'Friday',
      morning: {
        start: '6:00 am',
        end: '11:00 am',
        holiday: false
      },
      evening: {
        start: '4:00 pm',
        end: '11:30 pm',
        holiday: false
      }
      // fullDay: false,
    },
    {
      day: 'Saturday',
      morning: {
        start: '6:00 am',
        end: '11:00 am',
        holiday: false
      },
      evening: {
        start: '4:00 pm',
        end: '11:30 pm',
        holiday: false
      }
      // fullDay: false,
    },
    {
      day: 'Sunday',
      morning: {
        start: '',
        end: '',
        holiday: true
      },
      evening: {
        start: '',
        end: '',
        holiday: true
      }
      // fullDay: false,
    }
  ]
};

export const FacilitySlice = createSlice({
  name: 'facility',
  initialState,
  reducers: {
    addData: (
      state,
      // action: PayloadAction<Partial<FacilitiesState>>
      action: PayloadAction<Partial<any>>
    ) => {
      console.log('niyad', action.payload);

      const payloadKeys = Object.keys(action.payload) as Array<keyof FacilitiesState>; // Type assertion
      payloadKeys.forEach((key) => {
        if (key !== 'images') {
          state[key] = action.payload[key]!;
        }
      });
      if (action.payload.images) {
        // state.images = state.images.concat(action.payload.images);
        state.images = action.payload.images;
      }
    },
    setTier: (state, action) => {
      console.log(action.payload);

      state.tier = action.payload;
    },
    setAmenties: (state, action) => {
      if (action.payload && action.payload.amenities_name) {
        const existingIndex = state.amenities.findIndex(
          (item: any) => item.amenities_name === action.payload.amenities_name
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
          equipment_img
        });
      }

      console.log('Equipments', state.equipments);
    },
    setfacilityTiming: (state, action) => {
      // console.log(action.payload);
      const updatedFacilityTiming = state.facilityTiming.map((timing) => {
        if (timing.day === action.payload.day) {
          return {
            ...timing,
            morning: {
              ...timing.morning,
              start: action.payload.morning.start,
              end: action.payload.morning.end,
              holiday: action.payload.morning.holiday
            },
            evening: {
              ...timing.evening,
              start: action.payload.evening.start,
              end: action.payload.evening.end,
              holiday: action.payload.evening.holiday
            }
            // fullDay: action.payload.fullDay,
          };
        }
        return timing;
      });

      return {
        ...state,
        facilityTiming: updatedFacilityTiming
      };
    },
    setAllTimingField: (state, action) => {
      console.log('hello', action.payload);
      // Extract Monday's timing from the payload
      const mondayTiming = action.payload.find((item: any) => item.day === 'Monday');

      // If Monday's timing is found
      if (mondayTiming) {
        // Update all days' timing with Monday's timing
        const updatedFacilityTiming = state.facilityTiming.map((timing) => ({
          ...timing,
          morning: { ...mondayTiming.morning },
          evening: { ...mondayTiming.evening }
        }));

        return {
          ...state,
          facilityTiming: updatedFacilityTiming
        };
      }

      // If Monday's timing is not found, return the current state
      return state;
    },

    reset: (state) => {
      Object.assign(state, initialState);
    }
  }
});

export const {
  addData,
  setTier,
  setAmenties,
  setEquipments,
  setfacilityTiming,
  setAllTimingField
} = FacilitySlice.actions;

export default FacilitySlice.reducer;

export const resetFacility = () => {
  return {
    type: 'facility/reset'
  };
};
