import React from 'react'
import { useConversations } from '../Contexts/ConversationsProvider';
import MessagingSidebar from '../MessagingSidebard/MessagingSidebar'
import OpenConversation from '../OpenConversation/OpenConversation';
import './_dashboard.scss';

export default function Dashboard({ id }) {

    const {selectedConversation } = useConversations()

    return (
        <div className="d-flex" style={{ height: '100vh' }}>
            <MessagingSidebar id={id}/>
            {selectedConversation && <OpenConversation />}
        </div>
    )
}
