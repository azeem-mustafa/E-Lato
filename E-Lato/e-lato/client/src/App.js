import Header from './components/Header/Header';
import HeroMain from './components/HeroMain/HeroMain';
import LowerContent from './components/LowerContent/LowerContent';
import Footer from './components/Footer/Footer';
import ArtPage from './components/Pages/ArtPage';
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
        this.setState( {jwtToken : !this.state.jwtToken})
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
                        
                            
                            <Route exact path="/profile" render={(props) => (<Profile checkToken={this.checkToken} {...props}  />)}/>
                    
                        <Route exact path='/messages'>
                          <MessagingMain/>
                          </Route>
                          <Route exact path="/login" render={(props) => (<Login checkToken={this.checkToken} {...props}  />)}/>
                        
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
