import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import useLocalStorage from './components/hooks/useLocalStorage';
import Dashboard from './components/Dashboard/Dashboard';
import { RequestsProvider } from './components/Contexts/RequestProvider';
import { ConversationsProvider } from './components/Contexts/ConversationsProvider';

function App() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <RequestsProvider>
      <ConversationsProvider id={id}>
      <Dashboard id={id}/>
      </ConversationsProvider>
    </RequestsProvider>
  )

  return (
    // <BrowserRouter>
    //   <Header />
      id ? dashboard : <Login onIdSubmit={setId}/>

      

    //   <Switch>
    //   <Route exact path="/" component={Home}></Route>
    
    //   {/* <Route exact path="/login" component={Login} onIdSubmit={setId}></Route> */}
    
    //   </Switch>

    // </BrowserRouter>
  );
}

export default App;
