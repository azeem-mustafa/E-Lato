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
import { SocketProvider } from './components/Contexts/SocketProvider';
import HeroMain from './components/HeroMain/HeroMain';
import LowerContent from './components/LowerContent/LowerContent';
import Footer from './components/Footer/Footer';


function App() {
//   const [id, setId] = useLocalStorage('id')

//   const dashboard = (
//     <SocketProvider id={id}>
//     <RequestsProvider>
//       <ConversationsProvider id={id}>
//       <Dashboard id={id}/>
//       </ConversationsProvider>
//     </RequestsProvider>
//     </SocketProvider>
//   )

  return (

  <>
    {/* // <BrowserRouter> */}
      {/* <Header /> */}
    {/* //   id ? dashboard : <Login onIdSubmit={setId}/> */}
      {/* <HeroMain />
      <LowerContent/> */}
      

      {/* // <Switch> */}
      {/* // <Route exact path="/" component={Home}></Route> */}
    
       {/* <Route exact path="/login" component={Login} onIdSubmit={setId}></Route> */}
{/*     
      //  </Switch> */}
       
       {/* <Footer /> */}
    {/* //  </BrowserRouter> */}

    </>
  );
}

export default App;
