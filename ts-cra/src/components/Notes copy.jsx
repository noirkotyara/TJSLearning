import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  ListGroup,
  Button,
} from 'react-bootstrap';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import {v1 as uuid} from 'uuid';


export function TodoList() {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Buy eggs' },
    { id: uuid(), text: 'Pay bills' },
    { id: uuid(), text: 'Invite friends over' },
    { id: uuid(), text: 'Fix the TV' },
  ]);
  return (
    <div style={{ marginTop: '2rem' }}>
      <ListGroup style={{ marginBottom: '1rem' }}>
        <TransitionGroup >
          {items.map(({ id, text }) => (
            <CSSTransition
              key={id}
              timeout={500}
              classNames="item"
            >
              <ListGroup.Item>
                <Button
                  className="remove-btn"
                  variant="danger"
                  size="sm"
                  onClick={() =>
                    setItems(items =>
                      items.filter(item => item.id !== id)
                    )
                  }
                >
                  &times;
                </Button>
                {text}
              </ListGroup.Item>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </div>
  );
}
