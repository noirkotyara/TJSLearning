import React from 'react'

import { ADD_NOTE, FETCH_NOTES, ISLOADING, REMOVE_NOTE } from "../types"

const handlers = {
    [ISLOADING]: (state, {payload}) => ({
        ...state, 
        isLoading: payload.isLoading
    }),
    [FETCH_NOTES]: (state, {payload}) => ({
        ...state,
        notes: payload.notes
    }),
    [ADD_NOTE]: (state, {payload}) => ({
        ...state,
        notes: [payload.note, ...state.notes ]
    }),
    [REMOVE_NOTE]: (state, {payload}) => {
        const filteredArray = state.notes.filter(
            note => payload.id !== note.id 
        )
        return {
        ...state,
        notes: filteredArray
    }},
    DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
    const func = handlers[action.type] || handlers.DEFAULT
    return func(state, action)
}