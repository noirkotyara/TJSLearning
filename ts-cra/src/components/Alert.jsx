import React, { useContext } from 'react'
import { Alert } from "react-bootstrap";
import { AlertContext } from '../context/alert/alertContext';
import { CSSTransition } from 'react-transition-group'

const AlertComp = () => {
  const { alert, hideAlert } = useContext(AlertContext)
  // if (!alert.visible) return null
  return (
    <CSSTransition
      in={alert.visible}
      timeout={500}
      classNames="alert"
      unmountOnExit>
      <Alert
        variant={alert.variant}
        dismissible
        onClose={hideAlert}
      >
        <Alert.Heading> Yeeeeaaaapppppp </Alert.Heading>
        <p> {alert.text} </p>
      </Alert>

    </CSSTransition>
  );
}

export default AlertComp