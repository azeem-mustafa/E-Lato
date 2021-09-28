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
import ProfileEdit from './components/ProfileEdit/ProfileEdit';
import Login from "./components/Pages/pages/Login/Login";
import Signup from "./components/Pages/pages/Signup/Signup";
import MessagingMain from "./components/MessagingMain/MessagingMain";
import HeaderTwo from './components/HeaderTwo/HeaderTwo';

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
                    <Switch>

                        <Route path='/' exact>
                            <Header token={this.state.jwtToken} />
                            <HeroMain />
                            <LowerContent />
                        </Route>

                        <Route path='/art' exact>
                            <HeaderTwo token={this.state.jwtToken} />
                            <ArtPage />
                        </Route>

                        <Route path='/music' exact>
                            <HeaderTwo token={this.state.jwtToken} />
                            <MusicPage />
                        </Route>

                        <Route path='/english' exact>
                            <HeaderTwo token={this.state.jwtToken} />
                            <EnglishPage />
                        </Route>

                        <Route path='/misc' exact>
                            <HeaderTwo token={this.state.jwtToken} />
                            <MiscPage />
                        </Route>

                        <Route path='/math' exact>
                            <HeaderTwo token={this.state.jwtToken} />
                            <MathPage />
                        </Route>

                        <Route path='/science' exact>
                            <HeaderTwo token={this.state.jwtToken} />
                            <SciencePage />
                        </Route>

                        <Route exact path='/profile'>
                            <HeaderTwo token={this.state.jwtToken} />
                            <Route exact path="/profile" render={(props) => (<Profile checkToken={this.checkToken} {...props} />)} />
                        </Route>

                        <Route exact path='/profile/edit'>
                            <HeaderTwo token={this.state.jwtToken} />
                            <Route exact path="/profile/edit" render={(props) => (<ProfileEdit checkToken={this.checkToken} {...props} />)} />
                        </Route>

                        <Route exact path='/messages'>
                            <HeaderTwo token={this.state.jwtToken} />
                            <MessagingMain />
                        </Route>

                        <Route exact path='/login'>
                            <HeaderTwo token={this.state.jwtToken} />
                            <Route exact path="/login" render={(props) => (<Login checkToken={this.checkToken} {...props} />)} />
                        </Route>

                        <Route exact path="/signup">
                            <HeaderTwo token={this.state.jwtToken} />
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
