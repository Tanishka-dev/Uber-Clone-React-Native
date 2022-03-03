import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin: null,
  destination:null,
  travelTimeInformation:null,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducer: {
      setOrigin: (state, action)=> {
          state.origin= action.payload;
      },
      setDestination: (state, action)=> {
        state.destination= action.payload;
    },
      setTimeTravelInformation: (state, action)=> {
        state.travelTimeInformation= action.payload;
    },
  },
});
export const {setOrigin, setDestination, setTimeTravelInformation}= navSlice.actions;


//Selectors
export const selectOrigin=(state)=> state.origin;
export const selectDestination=(state)=> state.destination;
export const selectTimeTravelInformation=()=> state.travelTimeInformation;

export default navSlice.reducer;