// import './App.css';
// import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
// import Home from './components/Home/Home';
// import Login from './components/Login/Login';
// import useLocalStorage from './components/hooks/useLocalStorage';
// import Dashboard from './components/Dashboard/Dashboard';
// import { RequestsProvider } from './components/Contexts/RequestProvider';
// import { ConversationsProvider } from './components/Contexts/ConversationsProvider';
// import { SocketProvider } from './components/Contexts/SocketProvider';
import HeroMain from './components/HeroMain/HeroMain';
import LowerContent from './components/LowerContent/LowerContent';
import Footer from './components/Footer/Footer';
import ArtPage from './components/Pages/ArtPage';


// function App() {
//     const [id, setId] = useLocalStorage('id')

//     const dashboard = (
//       <SocketProvider id={id}>
//       <RequestsProvider>
//         <ConversationsProvider id={id}>
//         <Dashboard id={id}/>
//         </ConversationsProvider>
//       </RequestsProvider>
//       </SocketProvider>
//     )

//   return (

//       id ? dashboard : <Login onIdSubmit={setId}/> 
 


//   );
// }

// export default App;



import './App.scss';
import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./components/Pages/pages/Profile/Profile";
import Login from "./components/Pages/pages/Login/Login";
import Signup from "./components/Pages/pages/Signup/Signup";
import MessagingMain from "./components/MessagingMain/MessagingMain";

class App extends Component {

  state = {
    jwtToken: false
  }


  checkToken = () => {
    if (sessionStorage.getItem('jwtToken')){
        this.setState( {jwtToken : true})
    } else{
      this.setState( {jwtToken : false})
    }
}

componentDidMount(){
  this.checkToken()

}

    render() {
        return (
            <div className="app">
                <BrowserRouter>
                <Header  token={this.state.jwtToken} />
                    <Switch>
                    <Route path='/' exact>
                    <HeroMain />
                    <LowerContent/>
                    </Route>
                    <Route path='/art' exact>
                    <ArtPage />
                    </Route>
                        <Route path="/profile" exact>
                            <Profile />
                        </Route>
                        <Route exact path='/messages'>
                          <MessagingMain/>
                          </Route>
                        <Route exact path="/login">
                            <Login token= {this.checkToken}/>
                        </Route>
                        <Route exact path="/signup">
                            <Signup />
                        </Route>
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
