import Login from '../Login/Login';
import useLocalStorage from '../hooks/useLocalStorage'
import Dashboard from '../Dashboard/Dashboard';
import { RequestsProvider } from '../Contexts/RequestProvider';
import { ConversationsProvider } from '../Contexts/ConversationsProvider';
import { SocketProvider } from '../Contexts/SocketProvider';


function MessagingMain() {
    const [id, setId] = useLocalStorage('id')

    const dashboard = (
      <SocketProvider id={id}>
      <RequestsProvider>
        <ConversationsProvider id={id}>
        <Dashboard id={id}/>
        </ConversationsProvider>
      </RequestsProvider>
      </SocketProvider>
    )

  return (

      id ? dashboard : <Login onIdSubmit={setId}/> 
 


  );
}

export default MessagingMain;