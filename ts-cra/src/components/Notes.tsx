import React, { useContext, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import { Preloader } from './Preloader'

type NoteType = {
    id: string,
    text: string,
    date: string
}
const Notes = () => {
    const { getNotes, isLoading, notes, deleteNote } = useContext(FirebaseContext)
    const { showAlert, alert } = useContext(AlertContext)

    const onDeleteHandler = (id: string) => {
        deleteNote(id)
        showAlert('Deletion is successfull', 'success')
    }

    useEffect(() => {
        getNotes()
    }, [])

    if (isLoading) return <Preloader />
    if (!notes || notes.length === 0) {
        return <div className="alert alert-info message" role="alert">
            There is an empty list
  </div>
    }
    return (
        <div className='list-group'>
            <ListGroup style={{ marginBottom: '1rem' }}>
                <TransitionGroup>
                    {notes && notes.map((note: NoteType, i: number) => {
                        const newDate = new Date(note.date)
                        return (
                            <CSSTransition
                                key={note.id}
                                timeout={500}
                                classNames='item'
                            >
                                <ListGroup.Item className='note'>
                                    <div>
                                        {note.text}
                                        <small>{newDate.toUTCString()}</small>
                                    </div>
                                    <button
                                        onClick={() => onDeleteHandler(note.id)}
                                        className='btn btn-outline-danger'>&times;</button>
                                </ListGroup.Item>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </ListGroup>

        </div>
    )
}

export default Notes