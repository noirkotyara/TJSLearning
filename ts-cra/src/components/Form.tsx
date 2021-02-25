import React, { useContext, useState } from 'react'
import { Form, FormControl, InputGroup } from 'react-bootstrap'
import { AlertContext } from '../context/alert/alertContext'
const FormComp = () => {
    const [value, setValue] = useState<string>('')
    const { showAlert, alert } = useContext(AlertContext)

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if(value.trim()){
            //...
            showAlert(`Your note-->${value} is successfully created`, 'success')
        }else{
            showAlert('Write your note`s title', 'danger')
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