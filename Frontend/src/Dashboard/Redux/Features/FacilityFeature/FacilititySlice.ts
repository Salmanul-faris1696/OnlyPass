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
  location : {

  }
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
  location
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
})

export const {} = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer