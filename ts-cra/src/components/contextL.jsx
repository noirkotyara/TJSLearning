import React, { useContext, useState } from 'react'
import { AlertProvider, useAlert } from './alertContext'
const MessageV = React.createContext()

export const MessageVisualization = () => {
    return (
       
        <div style={{ textAlign: 'center' }}>
             <AlertProvider>
                <Alert />
                <Main /> 
             </AlertProvider>
        </div>
    )
}
//////////////
const Main = () => {
    const {toggle} = useAlert()
    return (
        <div>
            <div>Show Alert</div>
            <button onClick={() => toggle('hello I`m here? your text from state')}> Click </button>
        </div>
    )
}
//////////////////
const Alert = () => {
    const {visible, text} = useAlert()
   if(!visible) return null
    return (
        <div style={{border: '2px solid green', width: '50%', margin: '0 auto'}}>
            {text}
        </div>
    )
}