import "./Profile.scss";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../../../Input/Input";

class Profile extends Component {
    state = {
        user: null,
        failedAuth: true
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // Sign up the user with these fields:
        // { first_name, last_name, phone, address, email, password }
        // axios
        //     .post('http://localhost:8080/api/users/current', {
        //         aboutMe: e.target.aboutMe.value,
                
        //     })
        //     .then(( response ) => {
        //         this.setState({
        //             success: true,
        //             error: ''
        //         });
        //         e.target.reset();
        //     })
        //     .catch((error) => {
        //         this.setState({
        //             success: false,
        //             error: error.response.data
        //         });
        //     })
    }


    componentDidMount() {
        const token = sessionStorage.getItem('jwtToken');

        if (!token) {
            return;
        }

        // Make a request to profile endpoint
        axios
            .get("http://localhost:8080/api/users/current", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                console.log('You got in!', response.data);

                this.setState({
                    failedAuth: false,
                    user: response.data
                });
            })
            .catch(error => {
                this.setState({
                    failedAuth: true
                });
            })
    }

    handleLogout = () => {
        sessionStorage.removeItem('jwtToken');
        this.setState({
            user: null,
            failedAuth: true
        }) 
    }

    render() {

        console.log("history", this.props)
        if (this.state.failedAuth) {
            return (
                <main className="dashboard">
                    <p>
                        You must be logged in to see this page. <Link to="/login">Log in</Link>
                    </p>
                </main>
            );
        }

        if (!this.state.user) {
            return (
                <main className="dashboard">
                    <p>Loading...</p>
                </main>
            );
        }

        const { first_name, last_name, email, phone, address } = this.state.user;

        return (
            <main className="dashboard">
                <h1 className="dashboard__title">Profile: {first_name} {last_name} </h1>
                <p>
                    Welcome back, {first_name} {last_name}! 👋
                </p>
                <h2>My Profile</h2>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>


                 {/* <form className="signup" onSubmit={this.handleSubmit}>
                    <h1 className="signup__title">Sign up</h1>

                    <Input type="textarea" name="aboutMe" label="About Me" />
                    
                    <button className="signup__button">Sign up</button>

                </form> */}

                <button className="dashboard__logout" onClick={this.handleLogout}>
                    Log out
                </button>
            </main>
        );
    }
}

export default Profile;


