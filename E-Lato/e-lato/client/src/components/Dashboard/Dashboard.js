import React from 'react'
import Sidebar from '../Sidebar/SideBar';
import OpenConversation from '../OpenConversation/OpenConversation';
import { useConversations } from '../Contexts/ConversationsProvider';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()

  return (
    <div className="d-flex" style={{ height: '81vh', margin: '0.5rem 0' }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  )
}