import Header from './components/Header/Header';
import HeroMain from './components/HeroMain/HeroMain';
import LowerContent from './components/LowerContent/LowerContent';
import Footer from './components/Footer/Footer';
import ArtPage from './components/Pages/ArtPage/ArtPage';
import MusicPage from './components/Pages/MusicPage/MusicPage';
import EnglishPage from './components/Pages/EnglishPage/EnglishPage';
import MathPage from './components/Pages/MathPage/MathPage';
import MiscPage from './components/Pages/MiscPage/MiscPage';
import SciencePage from './components/Pages/SciencePage/SciencePage';
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
        if (sessionStorage.getItem('jwtToken')) {
            this.setState({ jwtToken: !this.state.jwtToken })
        }
    }

    componentDidMount() {
        this.checkToken()
    }

    render() {
        return (
            <div className="app">
                <BrowserRouter>

                    <Header token={this.state.jwtToken} />

                    <Switch>

                        <Route path='/' exact>
                            <HeroMain />
                            <LowerContent />
                        </Route>

                        <Route path='/art' exact>
                            <ArtPage />
                        </Route>
                        <Route path='/music' exact>
                            <MusicPage />
                        </Route>
                        <Route path='/english' exact>
                            <EnglishPage />
                        </Route>
                        <Route path='/misc' exact>
                            <MiscPage />
                        </Route>
                        <Route path='/math' exact>
                            <MathPage />
                        </Route>
                        <Route path='/science' exact>
                            <SciencePage />
                        </Route>
                        <Route exact path="/profile" render={(props) => (<Profile checkToken={this.checkToken} {...props} />)} />

                        <Route exact path='/messages'>
                            <MessagingMain />
                        </Route>
                        <Route exact path="/login" render={(props) => (<Login checkToken={this.checkToken} {...props} />)} />

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
