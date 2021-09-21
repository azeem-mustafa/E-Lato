import React, {useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import { useRequests } from '../../Contexts/RequestProvider';

export default function NewRequestsModal({ closeModal}) {

    const idRef = useRef()
    const nameRef = useRef()
    const { createRequest } = useRequests()

    function handleSubmit(e) {
        e.preventDefault()

        createRequest( idRef.current.value, nameRef.current.value)
        closeModal()
    }

    return (
        <>
        <Modal.Header closeButton>Requests</Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>ID</Form.Label>
                <Form.Control type='text' ref={idRef} required/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' ref={nameRef} required/>
            </Form.Group>

            <Button type='submit'>Send Request</Button>

        </Form>
        </Modal.Body>
        </>
    )
}
