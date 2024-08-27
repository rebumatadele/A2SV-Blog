import {createSlice,PayloadAction } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count : 0,
    },
    reducers: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
    }   
})

export const counterActions = counterSlice.actions

export {counterSlice}