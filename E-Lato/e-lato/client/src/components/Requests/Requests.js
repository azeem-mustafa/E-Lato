import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { AiFillContacts } from 'react-icons/ai';
import { useRequests } from '../Contexts/RequestProvider';

export default function Requests() {

    const { requests } = useRequests()


    return (
        <ListGroup variant="flush">
            {requests.map(requests => (
                <ListGroup.Item key={AiFillContacts.id}>
                    {requests.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
