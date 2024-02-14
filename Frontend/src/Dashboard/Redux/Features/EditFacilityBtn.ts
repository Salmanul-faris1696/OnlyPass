import { createSlice } from '@reduxjs/toolkit';

export interface editBtnState{
    basicEditBtn : boolean
    locationEditBtn : boolean
    membershipEditbtn:boolean

}
const initialState :editBtnState ={

    basicEditBtn :false,
    locationEditBtn :false,
    membershipEditbtn:false
    
}

 export const editFacilityBtnSlice  =  createSlice(
    {
        name: 'editFacilities',
        initialState ,
        reducers :{
            setBasicEditBtn : (state , action) => {
                
                state.basicEditBtn = action.payload

            },
            setLocationEditBtn : (state , action) => {
                
                state.locationEditBtn = action.payload

            },
            setMembershipEditBtn : (state , action) => {
                
                state.membershipEditbtn = action.payload

            }

        }

    }
 )

 export const {setBasicEditBtn,setLocationEditBtn,setMembershipEditBtn } = editFacilityBtnSlice.actions;

export default editFacilityBtnSlice.reducer;