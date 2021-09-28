import React from 'react'
import Sidebar from '../Sidebar/SideBar';
import OpenConversation from '../OpenConversation/OpenConversation';
import { useConversations } from '../Contexts/ConversationsProvider';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  )
}