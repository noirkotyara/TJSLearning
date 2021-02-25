import React, { useContext, useReducer, useState } from 'react'

const AlertContext = React.createContext()

//буде вертати значення провайдера
export const useAlert = () => {
    return useContext(AlertContext)
}

export const AlertProvider = ({children}) => {
    // const [visible, setVisibility] = useState(false)

    // const toggle = () => setVisibility(prev => !prev)
    /////reducer
    const initialValues = {
        visible: false,
        text: ''
    }
    const reducer = (state, action) => {
        switch (action.type){
            case 'changeAlert':
                return {
                    ...state,
                    visible: !state.visible,
                    text: action.text
                }
            default: return state
        }
    }
    

    /////
    
    const [state, dispatch] = useReducer(reducer, initialValues)
    const toggle = text => dispatch({type: 'changeAlert', text})
    return (
        <AlertContext.Provider value={
            {
                visible: state.visible, toggle, text: state.text
            }
        }>
            {children}
        </AlertContext.Provider>
    )
}