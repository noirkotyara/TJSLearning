import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
const About = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Todo App</h1>
                <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                </p>
            </Container>
        </Jumbotron>
    )
}

export default About