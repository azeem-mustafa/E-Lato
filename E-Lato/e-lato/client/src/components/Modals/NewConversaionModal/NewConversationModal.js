import React, {useState} from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import Requests from '../../Requests/Requests';
import { useRequests } from '../../Contexts/RequestProvider';
import { useConversations } from '../../Contexts/ConversationsProvider';

export default function NewConversationModal({ closeModal }) {

    const [selectedRequestIds, setSelectedRequestIds] = useState([])
    const { requests } = useRequests()
    const { createConversations } = useConversations()

    function handleSubmit (e) {
        e.preventDefault()

        createConversations(selectedRequestIds)

        closeModal()
    }

    function handleCheckboxChange(requestsId) {
        setSelectedRequestIds(prevSelectedRequestIds => {
            if (prevSelectedRequestIds.includes(requestsId)) {
                return prevSelectedRequestIds.filter(prevId => {
                    return requestsId !== prevId
                })
            } else {
                return [...prevSelectedRequestIds, requestsId]
            }
        })
    }

    return (
        <>
        <Modal.Header closeButton>Active Conversations</Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            
            {requests.map(requests => (
                <Form.Group controlId={requests.id} key={requests.id}>
                    <Form.Check
                    type='checkbox'
                    value={selectedRequestIds.includes(requests.id)}
                    label={requests.name}
                    onChange={() => handleCheckboxChange(requests.id)}
                    />
                </Form.Group>

            ))}
            <Button type='submit'>Send Request</Button>

        </Form>
        </Modal.Body>
        </>
    )
}
