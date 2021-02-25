import React, { useCallback, useRef, useState } from 'react'

const useInput = (placeholder) => {
    const [value, setValue] = useState('')
    const onChange = event => setValue(event.target.value)
    const clear = () => setValue('')
    const ref = useRef(null)
    const focusf = () => {
        ref.current.focus()
    }
    return {
        bind: { value, onChange, ref, placeholder },
        value,
        clear,
        focusf
    }
}

export const MyForm = () => {

    const arrayOfPlaceholders = ['fistName', 'LastName', 'age']

    const arrayOfInputs = arrayOfPlaceholders
        .map(placeholder => {
            const Element = () => {
                const input = useInput(placeholder)
                return (
                    <div>
                        <div><input type="text" {...input.bind} /></div>
                        <div><button onClick={input.clear}>Clear</button></div>
                        <div><button onClick={input.focusf}>Focus</button></div>
                        <div>{input.value}</div>
                    </div>
                )
            }
            return <Element />
        })
    return (
        <div>
            {arrayOfInputs}
        </div>
    )
}