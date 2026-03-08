import { createSlice } from "@reduxjs/toolkit";

 export const CounterSlice = createSlice({
    name : 'counter',
    initialState :{
        value: 0
    },
    reducers : {
        incriment : (state)=> {
            state.value += 1
        },
        decreament :(state)=> {
             state.value -= 1
        },
        multiple : (state)=> {
            state.value *= 2
        }
    }
})

export const {incriment, decreament, multiple} = CounterSlice.actions
export default CounterSlice.reducer


