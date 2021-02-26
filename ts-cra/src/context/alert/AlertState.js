import { AlertContext } from "./alertContext"
import React, { useReducer } from 'react'
import { alertReducer } from "./alertReducer"
import { ALERT_TOGGLE } from "../types"

export const AlertState = ({ children }) => {
    const [state, dispatch] = useReducer(alertReducer, {
        visible: false,
        text: '',
        variant: null
    })
    const showAlert = (text, variant) => dispatch({ 
        type: ALERT_TOGGLE, 
        payload: { visible: true, text, variant } })
    const hideAlert = () => dispatch({ 
        type: ALERT_TOGGLE, 
        payload: { visible: false }})
    return (
        <AlertContext.Provider value={{showAlert, hideAlert, alert: state}}>
            {children}
        </AlertContext.Provider>
    )
    }