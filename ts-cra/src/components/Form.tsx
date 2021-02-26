import React, { useContext, useReducer, useState } from 'react'
import { Form } from 'react-bootstrap'
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'
const FormComp = () => {
    const [value, setValue] = useState<string>('')
    const { showAlert, alert } = useContext(AlertContext)
    const { addNote } = useContext(FirebaseContext)
    const onSubmitHandler = (event) => {
        event.preventDefault()
        try{
        if (value.trim()) {
            addNote(value)
            showAlert(`Your note-->${value} is successfully created`, 'success')
            setValue('')
        } else {
            throw new Error ('Write your note`s title')
        }

        } catch(e){
            showAlert(e.message, 'danger')
        }
         

    }
    return (
        <div>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control
                    type="text"
                    placeholder="write here ..."
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)} />
            </Form>
        </div>
    )
}

export default FormComp