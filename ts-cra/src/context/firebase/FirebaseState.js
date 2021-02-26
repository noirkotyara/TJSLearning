import axios from 'axios'
import { config } from 'process'
import React, { useReducer } from 'react'
import { ADD_NOTE, FETCH_NOTES, ISLOADING, REMOVE_NOTE } from '../types'
import { FirebaseContext } from "./firebaseContext"
import { firebaseReducer } from './firebaseReducer'


const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({ children }) => {
    const [state, dispatch] = useReducer(firebaseReducer, {
        isLoading: false,
        notes: []
    })

    const getNotes = async () => {
        try {
            dispatch({ type: ISLOADING, payload: { isLoading: true } })
            //get data from firebase
            const result = await axios.get(`${url}/notes.json`)
            //set data to the "redux-state" with hooks
            const notes = Object
                .keys(result.data)
                .map(_key => ({
                    ...result.data[_key],
                    id: _key
                }))
                .reverse()
            dispatch({ type: FETCH_NOTES, payload: { notes } })
            console.log(state.notes)
            dispatch({ type: ISLOADING, payload: { isLoading: false } })
        } catch (e) {

        }

    }

    const addNote = async (text) => {
        try {
           
            const result = await axios.post(`${url}/notes.json`, {
                text, date: new Date().toJSON()
            })
            const noteData = JSON.parse(result.config.data)
            dispatch({
                type: ADD_NOTE, payload: {
                    note: {
                        ...noteData,
                        id: result.data.name
                    }
                }
            })
            console.log(result)
           
        } catch (e) {

        }
    }
    const deleteNote = async (id) => {
            try{
                const result = await axios.delete(`${url}/notes/${id}.json`)
                console.log(result)
                dispatch({type: REMOVE_NOTE, payload: {id} })
            } catch(e) {
                     
            }
    }

    return (
        <FirebaseContext.Provider value={{
            isLoading: state.isLoading,
            notes: state.notes,
            getNotes,
            addNote,
            deleteNote
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}
