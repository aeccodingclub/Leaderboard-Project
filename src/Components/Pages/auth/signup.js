import React from 'react';
import styles from './style.module.css';
import { Container, Card, Form, Button } from 'react-bootstrap';
const Signup = () => {


    return (
        <div className={styles.main}>
            <Container>
                <Card className={styles.card}>
                    <Card.Body>
                        <Card.Title>Signup</Card.Title>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                            </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Signup;