import React, { useContext } from 'react'
import { Alert } from "react-bootstrap";
import { AlertContext } from '../context/alert/alertContext';


const AlertComp = () => {
    const {alert, hideAlert} = useContext(AlertContext)
    if(!alert.visible) return null
    return (
        <Alert variant={alert.variant} onClose={() => hideAlert()} dismissible>
          <Alert.Heading>Yeeeeaaaapppppp</Alert.Heading>
          <p>{alert.text}</p>
        </Alert>
      );
}

export default AlertComp