import React from 'react'
import Login from '../Login/Login';
import useLocalStorage from '../hooks/UseLocalStorage';
import Dashboard from '../Dashboard/Dashboard';
import { ContactsProvider } from '../Contexts/ContactsProvider';
import { ConversationsProvider } from '../Contexts/ConversationsProvider';
import { SocketProvider } from '../Contexts/SocketProvider';

function MessagingMain() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  )
}

export default MessagingMain;