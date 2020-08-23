import React from 'react';
import styles from './style.module.css';
import { Container, Card, Form, Button } from 'react-bootstrap';
const Login = () => {

    return (
        <div>
            <Container>
                <Card className={styles.card}>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Login</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Login;