import React, { useState } from 'react'; 
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import './messagingsidebar.scss';
import Conversations from '../Conversations/Conversations';
import Requests from '../Requests/Requests';
import NewConversationModal from '../Modals/NewConversaionModal/NewConversationModal';
import NewRequestsModal from '../Modals/NewRequestsModal/NewRequestsModal';


const CONVERSATIONS_KEY = 'conversations';
const REQUESTS_KEY = 'requests'

export default function MessagingSidebar({ id }) {

    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY

    function closedModal() {
        setModalOpen(false)
    }

    return (

        <div style={{ width: '250px'}} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey={REQUESTS_KEY}>Requests</Nav.Link>
                    </Nav.Item>
                </Nav>
            <Tab.Content className='tab-content'>
                <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                    <Conversations/>
                </Tab.Pane>
                <Tab.Pane eventKey={REQUESTS_KEY}>
                    <Requests/>
                </Tab.Pane>
            </Tab.Content>
            <div className="p-2 border-top border-right small">
                Your ID: <span className='text-muted'>{id}</span>
            </div>
            <Button onClick={() => setModalOpen(true)} className="rounded-0">
                New {conversationsOpen ? 'Conversation' : 'Requests'}
            </Button>
            
            </Tab.Container>
            <Modal show={modalOpen} onHide={closedModal}>
                {conversationsOpen ?
                <NewConversationModal closeModal={closedModal}/> :
                <NewRequestsModal closeModal={closedModal}/>
                }
            </Modal>
        </div>
    )
}
